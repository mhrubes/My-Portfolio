import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { UI, pick } from './backendData'

const DANGER = /'\s*or\s+'?1'?\s*=\s*'?1|;\s*drop\s|--/i
const DROP = /;\s*drop\s/i

function SqlInjection() {
    const { i18n } = useTranslation()
    const lang = i18n.language === 'en' ? 'en' : 'cz'
    const L = (value) => pick(value, lang)

    const [value, setValue] = useState('Novák')
    const danger = DANGER.test(value)
    const verdictBad = !danger ? UI.sqlBadOk : DROP.test(value) ? UI.sqlBadDrop : UI.sqlBadAll

    return (
        <div>
            <div className="bf-row">
                <input className="bf-input" type="text" value={value} onChange={(e) => setValue(e.target.value)} aria-label={L(UI.sqlInputLabel)} spellCheck={false} autoComplete="off" />
                <button type="button" className="btn aboutButton btn-sm" onClick={() => setValue('Novák')}>
                    {L(UI.sqlNormal)}
                </button>
                <button type="button" className="btn aboutButton btn-sm" onClick={() => setValue("' OR '1'='1")}>
                    {L(UI.sqlAttack1)}
                </button>
                <button type="button" className="btn aboutButton btn-sm" onClick={() => setValue("x'; DROP TABLE users; --")}>
                    {L(UI.sqlAttack2)}
                </button>
            </div>

            <div className="bf-sqlgrid">
                <div className="bf-card bf-card--bad">
                    <h4>{L(UI.sqlBadTitle)}</h4>
                    <pre className="bf-code">
                        {`SELECT * FROM users\nWHERE name = '`}
                        <span className="bf-hl-bad">{value}</span>
                        {`'`}
                    </pre>
                    <p className={`bf-verdict ${danger ? 'bf-hl-bad' : ''}`}>{L(verdictBad)}</p>
                </div>
                <div className="bf-card bf-card--good">
                    <h4>{L(UI.sqlGoodTitle)}</h4>
                    <pre className="bf-code">
                        <span className="bf-comment">{L(UI.sqlTextLabel)}</span>
                        {`\nSELECT * FROM users\nWHERE name = $1\n`}
                        <span className="bf-comment">{L(UI.sqlValuesLabel)}</span>
                        {`\n[ `}
                        <span className="bf-hl-ok">{JSON.stringify(value)}</span>
                        {` ]`}
                    </pre>
                    <p className={`bf-verdict ${danger ? 'bf-hl-ok' : ''}`}>{L(danger ? UI.sqlGoodAttack : UI.sqlGoodOk)}</p>
                </div>
            </div>
        </div>
    )
}

export default SqlInjection
