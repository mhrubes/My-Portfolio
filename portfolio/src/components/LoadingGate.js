import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

const TICK_MS = 100
const STEPS = ['connect', 'profile', 'projects', 'skills', 'backend']

// Načítání se ukáže při každém (plném) načtení úvodní stránky, i po obnovení zavřené záložky.
// Přímý vstup nebo refresh na jiné stránce (např. /contact) ho přeskočí.
// Přechod zpět na úvodní stránku přes menu ho neukáže (komponenta se znovu nenamontuje).
const shouldShowGate = () => window.location.pathname === '/' || new URLSearchParams(window.location.search).get('loading') === '1'

// Simulované načítání obsahu při prvním načtení v rámci session (čistě klientské, bez backendu)
function LoadingGate({ children }) {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const [open, setOpen] = useState(shouldShowGate)
    const [elapsed, setElapsed] = useState(0)

    const simulation = useRef(null)
    if (simulation.current === null) {
        simulation.current = { duration: 2800 + Math.random() * 1800, lastProgress: 0, startedAt: Date.now() }
    }
    const sim = simulation.current

    const finish = () => {
        navigate('/', { replace: true })
        setOpen(false)
    }

    useEffect(() => {
        if (!open) return undefined
        const timer = setInterval(() => setElapsed(Date.now() - sim.startedAt), TICK_MS)
        return () => clearInterval(timer)
    }, [open, sim])

    const done = elapsed >= sim.duration
    useEffect(() => {
        if (!open || !done) return undefined
        const timer = setTimeout(finish, 450)
        return () => clearTimeout(timer)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open, done])

    if (!open) return children

    // zpomalení uprostřed a na konci, ať to působí jako skutečné načítání; hodnota nikdy neklesá
    const raw = Math.min(1, elapsed / sim.duration)
    const eased = raw < 1 ? raw + Math.sin(raw * Math.PI * 4) * 0.025 : 1
    const progress = raw >= 1 ? 1 : Math.max(sim.lastProgress, Math.min(0.99, Math.max(0, eased)))
    sim.lastProgress = progress
    const percent = Math.round(progress * 100)
    const doneSteps = Math.min(STEPS.length, Math.floor(progress * (STEPS.length + 0.5)))

    return (
        <div className="loading-gate" role="dialog" aria-modal="true" aria-live="polite" aria-label={t('loading.title')}>
            <div className="dev-panel loading-panel">
                <div className="dev-panel-header">
                    <span className="dev-panel-dot"></span>
                    <span className="dev-panel-dot"></span>
                    <span className="dev-panel-dot"></span>
                    <span className="dev-panel-title">loading.sh</span>
                </div>
                <div className="dev-panel-body">
                    <div className="dev-prompt">$ load --content</div>
                    <h1 className="loading-title">{t('loading.title')}</h1>
                    <p className="loading-subtitle">{t('loading.subtitle')}</p>

                    <div className="loading-percent">{percent} %</div>
                    <div className="loading-bar" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={percent}>
                        <div className="loading-bar__fill" style={{ width: `${Math.max(3, percent)}%` }} />
                    </div>

                    <ul className="loading-steps">
                        {STEPS.map((step, index) => {
                            const state = index < doneSteps ? 'done' : index === doneSteps ? 'current' : 'pending'
                            return (
                                <li key={step} className={`loading-step loading-step--${state}`}>
                                    <span className="loading-step__mark">{state === 'done' ? '✓' : state === 'current' ? '›' : '·'}</span>
                                    {t(`loading.steps.${step}`)}
                                    {state === 'current' && <span className="loading-step__dots">…</span>}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default LoadingGate
