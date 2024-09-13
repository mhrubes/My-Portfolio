import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'

import Language from './components/LanguageChange.js'

function Navigation() {
    const { t } = useTranslation()
    const location = useLocation()

    return (
        <div className="bg-white fixed-top" style={{ boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.5)' }}>
            <ul className="nav justify-content-center m-1">
                <li className="nav-item m-1">
                    <Link to="/">
                        <button className={location.pathname === '/' ? 'btn navbarAboutButtonActive' : 'btn navbarAboutButton'}>{t('pages.home')}</button>
                    </Link>
                </li>
                <li className="nav-item m-1">
                    <Link to="/about">
                        <button className={location.pathname === '/about' ? 'btn navbarAboutButtonActive' : 'btn navbarAboutButton'}>{t('pages.about')}</button>
                    </Link>
                </li>
                <li className="nav-item m-1">
                    <Link to="/contact">
                        <button className={location.pathname === '/contact' ? 'btn navbarAboutButtonActive' : 'btn navbarAboutButton'}>{t('pages.contact')}</button>
                    </Link>
                </li>
                <li className="nav-item m-1">
                    <Language />
                </li>
            </ul>
        </div>
    )
}

export default Navigation
