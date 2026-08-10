import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faXmark } from '@fortawesome/free-solid-svg-icons'

import Language from './components/LanguageChange.js'

function Navigation() {
    const { t } = useTranslation()
    const location = useLocation()
    const [isLightMode, setIsLightMode] = useState(() => localStorage.getItem('theme') === 'light')
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        document.body.classList.toggle('light-mode', isLightMode)
        localStorage.setItem('theme', isLightMode ? 'light' : 'dark')
        window.dispatchEvent(new Event('theme-changed'))
    }, [isLightMode])

    useEffect(() => {
        setIsMenuOpen(false)
    }, [location.pathname])

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

                <button type="button" className="navbar-hamburger" aria-label="Menu" aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen((prevState) => !prevState)}>
                    <FontAwesomeIcon icon={isMenuOpen ? faXmark : faCode} />
                </button>

                <div className={`navbar-collapse ${isMenuOpen ? 'navbar-collapse--open' : ''}`}>
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
        </div>
    )
}

export default Navigation
