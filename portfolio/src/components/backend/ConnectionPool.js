import { useEffect, useReducer, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { UI, pick } from './backendData'

const newConn = (sim) => ({ id: ++sim.cid, busy: false, req: null, start: 0, dur: 0 })

function ConnectionPool() {
    const { i18n } = useTranslation()
    const lang = i18n.language === 'en' ? 'en' : 'cz'
    const L = (value) => pick(value, lang)

    const [poolMax, setPoolMax] = useState(3)
    const [, rerender] = useReducer((x) => x + 1, 0)
    const sim = useRef(null)
    const maxRef = useRef(3)
    maxRef.current = poolMax

    if (!sim.current) {
        sim.current = { conns: [], queue: [], reqId: 0, done: 0, waitSum: 0, cid: 0 }
        for (let n = 0; n < 3; n++) sim.current.conns.push(newConn(sim.current))
    }

    const assign = (c, r) => {
        const s = sim.current
        c.busy = true
        c.req = r.id
        c.start = performance.now()
        c.dur = r.dur
        s.waitSum += c.start - r.t0
    }

    const tick = () => {
        const s = sim.current
        const max = maxRef.current
        const now = performance.now()
        for (const c of s.conns) {
            if (c.busy && now - c.start >= c.dur) {
                c.busy = false
                c.req = null
                s.done++
            }
        }
        // zmenšení poolu: volná spojení navíc se zavřou
        while (s.conns.length > max) {
            const freeIdx = s.conns.findIndex((c) => !c.busy)
            if (freeIdx === -1) break
            s.conns.splice(freeIdx, 1)
        }
        while (s.conns.length < max) s.conns.push(newConn(s))
        if (s.conns.length <= max) {
            for (const c of s.conns) if (!c.busy && s.queue.length) assign(c, s.queue.shift())
        }
        rerender()
    }

    useEffect(() => {
        const timer = setInterval(tick, 100)
        return () => clearInterval(timer)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const sendQuery = () => {
        const s = sim.current
        const r = { id: ++s.reqId, t0: performance.now(), dur: 1500 + Math.random() * 2000 }
        const free = s.conns.length <= maxRef.current ? s.conns.find((c) => !c.busy) : null
        if (free) assign(free, r)
        else s.queue.push(r)
        rerender()
    }
    const sendMany = () => {
        for (let n = 0; n < 10; n++) sendQuery()
    }
    const clearAll = () => {
        const s = sim.current
        s.queue = []
        s.conns = []
        s.done = 0
        s.waitSum = 0
        for (let n = 0; n < maxRef.current; n++) s.conns.push(newConn(s))
        rerender()
    }
    const onSize = (e) => {
        maxRef.current = +e.target.value
        setPoolMax(+e.target.value)
        tick()
    }

    const s = sim.current
    const now = performance.now()
    const busy = s.conns.filter((c) => c.busy).length
    const started = s.done + busy

    return (
        <div>
            <div className="bf-row">
                <button type="button" className="btn aboutButton aboutButton--pulse btn-sm" onClick={sendQuery}>
                    {L(UI.sendOne)}
                </button>
                <button type="button" className="btn aboutButton btn-sm" onClick={sendMany}>
                    {L(UI.sendTen)}
                </button>
                <button type="button" className="btn aboutButton btn-sm" onClick={clearAll}>
                    {L(UI.clear)}
                </button>
                <span className="bf-grow" />
                <label className="bf-label">
                    {L(UI.poolSize)} (<code>max</code>)
                    <input type="range" min="1" max="8" value={poolMax} onChange={onSize} />
                    <b>{poolMax}</b>
                </label>
            </div>

            <div className="bf-conns">
                {s.conns.map((c) => {
                    const pct = c.busy ? Math.min(100, ((now - c.start) / c.dur) * 100) : 0
                    return (
                        <div key={c.id} className={`bf-conn ${c.busy ? 'bf-conn--busy' : ''}`}>
                            <b>
                                🐘 {L(UI.connection)} #{c.id}
                            </b>
                            <small>{c.busy ? `${L(UI.busyWith)} #${c.req}` : L(UI.idle)}</small>
                            <div className="bf-bar">
                                <i style={{ width: `${pct}%` }} />
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="bf-muted bf-small mb-1">{L(UI.queueTitle)}</div>
            <div className="bf-queue">
                {s.queue.length ? (
                    s.queue.map((r) => (
                        <span key={r.id} className="bf-item bf-item--queue">
                            {L(UI.query)} #{r.id}
                        </span>
                    ))
                ) : (
                    <span className="bf-muted bf-small">{L(UI.queueEmpty)}</span>
                )}
            </div>

            <div className="bf-stats">
                <span>
                    totalCount: <b>{s.conns.length}</b>
                </span>
                <span>
                    idleCount: <b>{s.conns.length - busy}</b>
                </span>
                <span>
                    waitingCount: <b>{s.queue.length}</b>
                </span>
                <span>
                    {L(UI.done)}: <b>{s.done}</b>
                </span>
                <span>
                    {L(UI.avgWait)}: <b>{started ? (s.waitSum / started / 1000).toFixed(1) : '0.0'} s</b>
                </span>
            </div>
            <p className="bf-muted bf-small mt-2">{L(UI.poolTip)}</p>
        </div>
    )
}

export default ConnectionPool
