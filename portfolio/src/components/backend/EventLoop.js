import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { EL_BOXES, EL_CODE, EL_SNAP, UI, pick } from './backendData'

function EventLoop() {
    const { i18n } = useTranslation()
    const lang = i18n.language === 'en' ? 'en' : 'cz'
    const L = (value) => pick(value, lang)

    const [i, setI] = useState(0)
    const [msg, setMsg] = useState('idle')
    const spinnerRef = useRef(null)
    const timers = useRef([])

    // kolečko řízené JavaScriptem na hlavním vlákně: blokující smyčka ho zastaví
    useEffect(() => {
        const pending = timers.current
        let angle = 0
        let raf
        const spin = () => {
            angle = (angle + 4) % 360
            if (spinnerRef.current) spinnerRef.current.style.transform = `rotate(${angle}deg)`
            raf = requestAnimationFrame(spin)
        }
        raf = requestAnimationFrame(spin)
        return () => {
            cancelAnimationFrame(raf)
            pending.forEach(clearTimeout)
        }
    }, [])

    const runBlocking = () => {
        setMsg('blocking')
        timers.current.push(
            setTimeout(() => {
                const end = Date.now() + 1500
                while (Date.now() < end) {
                    // záměrně blokující smyčka
                }
                setMsg('blockedDone')
            }, 60)
        )
    }
    const runAsync = () => {
        setMsg('async')
        timers.current.push(setTimeout(() => setMsg('asyncDone'), 1500))
    }
    const msgText = { idle: UI.freezeIdle, blocking: UI.freezeBlocking, blockedDone: UI.freezeBlockedDone, async: UI.freezeAsync, asyncDone: UI.freezeAsyncDone }[msg]

    const s = EL_SNAP[i]

    return (
        <div>
            <div className="bf-row">
                <button type="button" className="btn aboutButton aboutButton--pulse btn-sm" onClick={() => setI((v) => Math.min(EL_SNAP.length - 1, v + 1))} disabled={i === EL_SNAP.length - 1}>
                    {L(UI.next)}
                </button>
                <button type="button" className="btn aboutButton btn-sm" onClick={() => setI((v) => Math.max(0, v - 1))} disabled={i === 0}>
                    {L(UI.prev)}
                </button>
                <button type="button" className="btn aboutButton btn-sm" onClick={() => setI(0)}>
                    {L(UI.again)}
                </button>
                <span className="bf-stats">
                    {L(UI.step)} <b>{i + 1}</b> / <b>{EL_SNAP.length}</b>
                </span>
            </div>

            <div className="bf-el">
                <pre className="bf-code bf-code--lines">
                    {EL_CODE.map((c, n) => (
                        <div key={n} className={s.line === n + 1 ? 'bf-hl' : ''}>
                            {c}
                        </div>
                    ))}
                </pre>
                <div className="bf-boxes">
                    {EL_BOXES.map((b) => (
                        <div key={b.k} className={`bf-box ${b.wide ? 'bf-box--wide' : ''} ${s.focus === b.k ? 'bf-box--focus' : ''}`}>
                            <h4>{L(UI.boxes[b.k])}</h4>
                            {(s[b.k] || []).map((x, n) => (
                                <span key={`${b.k}-${n}-${x}`} className={`bf-item ${b.k === 'out' ? 'bf-item--out' : ''}`}>
                                    {x}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <p className="bf-card mt-3" aria-live="polite" dangerouslySetInnerHTML={{ __html: L(s.t) }}></p>

            <div className="bf-card mt-3">
                <b>{L(UI.liveTitle)}</b>
                <p className="bf-muted mb-0 mt-1">{L(UI.liveText)}</p>
                <div className="bf-freeze">
                    <div className="bf-spinner" ref={spinnerRef} aria-hidden="true" />
                    <button type="button" className="btn aboutButton btn-sm" onClick={runBlocking}>
                        {L(UI.block)}
                    </button>
                    <button type="button" className="btn aboutButton btn-sm" onClick={runAsync}>
                        {L(UI.async)}
                    </button>
                    <span className="bf-muted">{L(msgText)}</span>
                </div>
            </div>
        </div>
    )
}

export default EventLoop
