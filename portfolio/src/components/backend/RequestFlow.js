import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { NODES, ORDER, SCENARIOS, UI, Y_BACK, Y_FWD, pick } from './backendData'

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
const reduceMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
const MOVE_MS = 650
const HOLD_MS = 3200

function RequestFlow() {
    const { i18n } = useTranslation()
    const lang = i18n.language === 'en' ? 'en' : 'cz'
    const L = (value) => pick(value, lang)

    const [scId, setScId] = useState(SCENARIOS[0].id)
    const [idx, setIdx] = useState(-1) // krok, ke kterému kulička míří
    const [shown, setShown] = useState(-1) // krok, který kulička dosáhla (panel s popisem)
    const [info, setInfo] = useState(null) // klik na komponentu
    const [playing, setPlaying] = useState(false)
    const [speed, setSpeed] = useState(1)
    const [packet, setPacket] = useState({ x: NODES.client.x, y: Y_FWD, kind: 'fwd' })

    const sc = SCENARIOS.find((s) => s.id === scId)
    const scRef = useRef(sc)
    const runRef = useRef(0)
    const playingRef = useRef(false)
    const speedRef = useRef(1)
    const listRef = useRef(null)
    scRef.current = sc
    speedRef.current = speed

    const setPlay = (value) => {
        playingRef.current = value
        setPlaying(value)
    }

    useEffect(
        () => () => {
            runRef.current++
            playingRef.current = false
        },
        []
    )

    // posun seznamu kroků jen uvnitř seznamu (ne celé stránky)
    useEffect(() => {
        const list = listRef.current
        const item = list && list.children[idx]
        if (item) list.scrollTop = item.offsetTop - list.clientHeight / 2 + item.clientHeight / 2
    }, [idx])

    const go = async (target) => {
        const my = ++runRef.current
        const steps = scRef.current.steps
        const i = Math.max(0, Math.min(steps.length - 1, target))
        const st = steps[i]
        setIdx(i)
        setInfo(null)
        setPacket({ x: NODES[st.n].x, y: st.dir === 'b' ? Y_BACK : Y_FWD, kind: st.err ? 'err' : st.dir === 'b' ? 'ok' : 'fwd' })
        await sleep(reduceMotion ? 0 : MOVE_MS / speedRef.current)
        if (my !== runRef.current) return
        setShown(i)
        if (i >= steps.length - 1) {
            setPlay(false)
            return
        }
        if (playingRef.current) {
            await sleep(HOLD_MS / speedRef.current)
            if (my === runRef.current && playingRef.current) go(i + 1)
        }
    }

    const reset = () => {
        runRef.current++
        setPlay(false)
        setIdx(-1)
        setShown(-1)
        setInfo(null)
        setPacket({ x: NODES.client.x, y: Y_FWD, kind: 'fwd' })
    }

    const selectScenario = (id) => {
        scRef.current = SCENARIOS.find((s) => s.id === id)
        setScId(id)
        reset()
    }

    const last = sc.steps.length - 1
    const onPlay = () => {
        if (playing) {
            setPlay(false)
            return
        }
        setPlay(true)
        go(idx >= last ? 0 : idx + 1)
    }
    const onNext = () => {
        setPlay(false)
        go(idx >= last ? last : idx + 1)
    }
    const onJump = (i) => {
        setPlay(false)
        go(i)
    }
    const onNode = (id) => {
        setPlay(false)
        setInfo(id)
    }

    const playLabel = playing ? UI.pause : idx < 0 ? UI.play : idx >= last ? UI.replay : UI.resume

    const cur = shown >= 0 ? sc.steps[shown] : null
    const visited = new Set(sc.steps.slice(0, Math.max(shown, 0)).map((s) => s.n))
    const nodeClass = (id) => {
        if (info === id) return 'bf-node bf-node--active'
        if (!info && cur && cur.n === id) return cur.err ? 'bf-node bf-node--active bf-node--err' : 'bf-node bf-node--active'
        return visited.has(id) && cur ? 'bf-node bf-node--done' : 'bf-node'
    }

    let panel
    if (info) {
        panel = { title: 'ℹ️ ' + L(NODES[info].title), text: L(NODES[info].text), code: null, badge: { cls: 'info', txt: L(UI.aboutComponent) } }
    } else if (cur) {
        panel = { title: `${shown + 1}. ${L(cur.title)}`, text: L(cur.text), code: cur.code, badge: cur.status ? { cls: cur.ok ? 'ok' : 'err', txt: cur.status } : null }
    } else {
        panel = { title: L(sc.label).replace(/^\S+\s/, ''), text: L(UI.introText), code: null, badge: null }
    }

    return (
        <div>
            <div className="bf-row" role="group">
                {SCENARIOS.map((s) => (
                    <button key={s.id} type="button" className={`btn aboutButton btn-sm ${s.id === scId ? 'bf-active' : ''}`} onClick={() => selectScenario(s.id)}>
                        {L(s.label)}
                    </button>
                ))}
            </div>

            <div className="bf-row">
                <button type="button" className="btn aboutButton aboutButton--pulse btn-sm" onClick={onPlay}>
                    {L(playLabel)}
                </button>
                <button type="button" className="btn aboutButton btn-sm" onClick={onNext}>
                    {L(UI.next)}
                </button>
                <button type="button" className="btn aboutButton btn-sm" onClick={reset}>
                    {L(UI.again)}
                </button>
                <span className="bf-grow" />
                <label className="bf-label">
                    {L(UI.speed)}
                    <input type="range" min="0.5" max="3" step="0.25" value={speed} onChange={(e) => setSpeed(+e.target.value)} />
                    <span>{speed}×</span>
                </label>
            </div>

            <div className="bf-svg-wrap">
                <svg className="bf-svg" viewBox="0 0 985 230" role="img" aria-label="Request flow diagram">
                    <line className="bf-lane" x1={NODES.client.x} y1={Y_FWD} x2={NODES.pg.x} y2={Y_FWD} />
                    <line className="bf-lane" x1={NODES.client.x} y1={Y_BACK} x2={NODES.pg.x} y2={Y_BACK} />
                    <text className="bf-lanelb" x={NODES.client.x} y="20">
                        {L(UI.laneReq)}
                    </text>
                    <text className="bf-lanelb" x={NODES.client.x} y="218">
                        {L(UI.laneRes)}
                    </text>
                    {ORDER.map((id) => {
                        const n = NODES[id]
                        return (
                            <g
                                key={id}
                                className={nodeClass(id)}
                                transform={`translate(${n.x - 60},60)`}
                                tabIndex={0}
                                role="button"
                                aria-label={L(n.title)}
                                onClick={() => onNode(id)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault()
                                        onNode(id)
                                    }
                                }}
                            >
                                <rect width="120" height="110" rx="14" />
                                <text className="bf-ic" x="60" y="44">
                                    {n.icon}
                                </text>
                                <text className="bf-lb" x="60" y="72">
                                    {L(n.label)}
                                </text>
                                <text className="bf-sb" x="60" y="92">
                                    {L(n.sub)}
                                </text>
                            </g>
                        )
                    })}
                    <g className={`bf-packet bf-packet--${packet.kind}`} style={{ transform: `translate(${packet.x}px, ${packet.y}px)`, transition: reduceMotion ? 'none' : `transform ${MOVE_MS / speed}ms ease-in-out` }}>
                        <circle r="10" />
                    </g>
                </svg>
            </div>

            <div className="bf-split">
                <div className="bf-card" aria-live="polite">
                    <h3 className="bf-step-title">
                        {panel.title}
                        {panel.badge && <span className={`bf-badge bf-badge--${panel.badge.cls}`}>{panel.badge.txt}</span>}
                    </h3>
                    <p dangerouslySetInnerHTML={{ __html: panel.text }}></p>
                    {panel.code && <pre className="bf-code">{panel.code}</pre>}
                </div>
                <div className="bf-card">
                    <b className="d-block mb-2">{L(UI.stepsTitle)}</b>
                    <ol className="bf-timeline" ref={listRef}>
                        {sc.steps.map((s, i) => (
                            <li
                                key={i}
                                className={`${i === idx ? 'bf-cur' : ''} ${i < idx ? 'bf-seen' : ''} ${s.err ? 'bf-err' : ''}`}
                                tabIndex={0}
                                onClick={() => onJump(i)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') onJump(i)
                                }}
                            >
                                {L(s.title)}
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default RequestFlow
