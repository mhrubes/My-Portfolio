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

    return (
        <div
            className={`fixed-top ${isLightMode ? 'bg-light' : 'bg-white'}`}
            style={{
                boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.5)',
                transition: 'background-color 0.2s ease-in-out'
            }}
        >
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
                    <Language showThemeToggle={true} isLightMode={isLightMode} onToggleTheme={toggleTheme} />
                </li>
            </ul>
        </div>
    )
}

export default Navigation
