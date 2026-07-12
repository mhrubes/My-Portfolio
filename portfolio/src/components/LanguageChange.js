import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarth } from '@fortawesome/free-solid-svg-icons'

import ThemeToggle from './ThemeToggle'

function LanguageChange(props) {
    const { i18n } = useTranslation()
    const [themeIsLight, setThemeIsLight] = useState(() => document.body.classList.contains('light-mode'))

    useEffect(() => {
        const syncTheme = () => setThemeIsLight(document.body.classList.contains('light-mode'))
        window.addEventListener('theme-changed', syncTheme)
        return () => window.removeEventListener('theme-changed', syncTheme)
    }, [])

    const isLightMode = props.isLightMode ?? themeIsLight

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
        localStorage.setItem('language', lng)
    }

    const nextLanguage = i18n.language === 'en' ? 'cz' : 'en'
    const languageLabel = i18n.language === 'en' ? 'CZ' : 'EN'

    return (
        <div className={`nav-controls ${isLightMode ? 'nav-controls--light' : 'nav-controls--dark'}`}>
            <button type="button" className="language-toggle" onClick={() => changeLanguage(nextLanguage)} aria-label={`Switch language to ${nextLanguage.toUpperCase()}`}>
                <FontAwesomeIcon icon={faEarth} className="language-toggle__icon" />
                <span>{languageLabel}</span>
            </button>

            {props.showThemeToggle && <ThemeToggle isLightMode={isLightMode} onToggle={props.onToggleTheme} />}
        </div>
    )
}

export default LanguageChange
