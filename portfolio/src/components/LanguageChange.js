import React from 'react'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarth, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

function LanguageChange(props) {
    const { i18n } = useTranslation()

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
        localStorage.setItem('language', lng)
    }

    return (
        <div className="d-flex align-items-center gap-2">
            {i18n.language === 'en' ? (
                <button className={props.color ? 'btn ' + props.color : 'btn'} onClick={() => changeLanguage('cz')}>
                    <FontAwesomeIcon icon={faEarth} className="m-0" style={{ paddingRight: '5px' }} />
                    CZ
                </button>
            ) : (
                <button className={props.color ? 'btn ' + props.color : 'btn'} onClick={() => changeLanguage('en')}>
                    <FontAwesomeIcon icon={faEarth} className="m-0" style={{ paddingRight: '5px' }} />
                    EN
                </button>
            )}

            {props.showThemeToggle && (
                <button
                    className={props.color ? 'btn ' + props.color : 'btn'}
                    onClick={props.onToggleTheme}
                    title={props.isLightMode ? 'Přepnout na tmavý režim' : 'Přepnout na světlý režim'}
                    aria-label={props.isLightMode ? 'Přepnout na tmavý režim' : 'Přepnout na světlý režim'}
                >
                    <FontAwesomeIcon icon={props.isLightMode ? faMoon : faSun} className="m-0" />
                </button>
            )}
        </div>
    )
}

export default LanguageChange
