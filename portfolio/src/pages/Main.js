import { useTranslation } from 'react-i18next'

import { Link } from 'react-router-dom'
import Navigation from '../navigation'

const techBadges = ['Node.js', 'PostgreSQL', 'Express.js', 'Docker', 'Claude', 'Git']

function Main() {
    const { t } = useTranslation()

    return (
        <div className="main">
            <Navigation />
            <div className="container">
                <div className="centered text-white heroCentered">
                    <div className="dev-panel">
                        <div className="dev-panel-header">
                            <span className="dev-panel-dot"></span>
                            <span className="dev-panel-dot"></span>
                            <span className="dev-panel-dot"></span>
                            <span className="dev-panel-title">profile.json</span>
                        </div>
                        <div className="dev-panel-body">
                            <div className="dev-prompt">$ whoami</div>
                            <h1 className="setShadow heroTitle">{t('mainPage.greeting')}</h1>
                            <p className="heroDescription" dangerouslySetInnerHTML={{ __html: t('mainPage.introDescription') }}></p>

                            <div className="mt-3">
                                {techBadges.map((tech) => (
                                    <span key={tech} className="tech-badge">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-4">
                                <Link className="setShadow" to="/about">
                                    <button className="btn aboutButton aboutButton--pulse">{t('pages.about')}</button>
                                </Link>
                                <Link className="m-1 setShadow" to="/contact">
                                    <button className="btn aboutButton">{t('pages.contact')}</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
