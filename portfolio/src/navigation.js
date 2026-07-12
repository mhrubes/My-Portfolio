import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'

import Language from './components/LanguageChange.js'

function Navigation() {
    const { t } = useTranslation()
    const location = useLocation()
    const [isLightMode, setIsLightMode] = useState(() => localStorage.getItem('theme') === 'light')

    useEffect(() => {
        document.body.classList.toggle('light-mode', isLightMode)
        localStorage.setItem('theme', isLightMode ? 'light' : 'dark')
        window.dispatchEvent(new Event('theme-changed'))
    }, [isLightMode])

    const toggleTheme = () => {
        setIsLightMode((prevState) => !prevState)
    }

    const getNavButtonClass = (path) => (location.pathname === path ? 'btn navbarAboutButtonActive' : 'btn navbarAboutButton')

    return (
        <div className={`fixed-top navbar-theme-bar ${isLightMode ? 'bg-light' : 'bg-white'}`}>
            <div className="navbar-inner">
                <Link to="/" className="navbar-brand" aria-label={t('pages.home')}>
                    MH
                </Link>

                <ul className="navbar-links nav m-0">
                    <li className="nav-item">
                        <Link to="/">
                            <button className={getNavButtonClass('/')}>{t('pages.home')}</button>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about">
                            <button className={getNavButtonClass('/about')}>{t('pages.about')}</button>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact">
                            <button className={getNavButtonClass('/contact')}>{t('pages.contact')}</button>
                        </Link>
                    </li>
                </ul>

                <div className="navbar-utils">
                    <Language showThemeToggle={true} isLightMode={isLightMode} onToggleTheme={toggleTheme} />
                </div>
            </div>
        </div>
    )
}

export default Navigation
