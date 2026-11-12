import { useTranslation } from 'react-i18next'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRoute, faRotate, faLayerGroup, faShieldHalved } from '@fortawesome/free-solid-svg-icons'

import Navigation from '../navigation'
import '../components/backend/backend.css'
import RequestFlow from '../components/backend/RequestFlow'
import EventLoop from '../components/backend/EventLoop'
import ConnectionPool from '../components/backend/ConnectionPool'
import SqlInjection from '../components/backend/SqlInjection'
import { UI, pick } from '../components/backend/backendData'

const techBadges = ['Node.js', 'Express.js', 'PostgreSQL', 'pg Pool', 'JWT', 'Docker']

const sections = [
    { id: 'bf-request', icon: faRoute, title: UI.reqTitle, lead: UI.reqLead, Component: RequestFlow },
    { id: 'bf-eventloop', icon: faRotate, title: UI.elTitle, lead: UI.elLead, Component: EventLoop },
    { id: 'bf-pool', icon: faLayerGroup, title: UI.poolTitle, lead: UI.poolLead, Component: ConnectionPool },
    { id: 'bf-sql', icon: faShieldHalved, title: UI.sqlTitle, lead: UI.sqlLead, Component: SqlInjection }
]

function Backend() {
    const { i18n } = useTranslation()
    const lang = i18n.language === 'en' ? 'en' : 'cz'
    const L = (value) => pick(value, lang)

    const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

    return (
        <div className="main bf">
            <Navigation />

            <div className="centeredAbout text-white text-center">
                <h1>
                    <span className="setShadow">{L(UI.header)}</span>
                </h1>
            </div>

            <div className="container text-white text-center mt-3">
                <p className="bf-hero-text">{L(UI.subtitle)}</p>
                <div className="skill-pill-row justify-content-center mb-3">
                    {techBadges.map((tech) => (
                        <span key={tech} className="skill-pill">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="bf-row justify-content-center">
                    {sections.map((s, i) => (
                        <button key={s.id} type="button" className="btn aboutButton btn-sm" onClick={() => scrollTo(s.id)}>
                            {i + 1} · {L(UI.sectionNames[i])}
                        </button>
                    ))}
                </div>
            </div>

            {sections.map(({ id, icon, title, lead, Component }) => (
                <div key={id}>
                    <hr className="text-white section-divider" />
                    <div className="container text-white pb-2" id={id}>
                        <div className="text-center pb-3">
                            <h2 className="setShadow">
                                <FontAwesomeIcon icon={icon} className="section-heading-icon" />
                                {L(title)}
                            </h2>
                            <p className="bf-lead">{L(lead)}</p>
                        </div>
                        <Component />
                    </div>
                </div>
            ))}

            <div className="pb-5" />
        </div>
    )
}

export default Backend
