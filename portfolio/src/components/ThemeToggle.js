import { useTranslation } from 'react-i18next'

function SunIcon({ filled = false }) {
    const color = filled ? '#ffffff' : 'currentColor'
    const fill = filled ? '#ffffff' : 'none'

    return (
        <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
            <circle cx="12" cy="12" r="4" fill={fill} stroke={color} strokeWidth="1.5" />
            <line x1="12" y1="3" x2="12" y2="6" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="12" y1="18" x2="12" y2="21" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="3" y1="12" x2="6" y2="12" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="18" y1="12" x2="21" y2="12" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="5.6" y1="5.6" x2="7.8" y2="7.8" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="16.2" y1="16.2" x2="18.4" y2="18.4" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="5.6" y1="18.4" x2="7.8" y2="16.2" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="16.2" y1="7.8" x2="18.4" y2="5.6" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    )
}

function MoonIcon({ filled = false }) {
    const color = filled ? '#ffffff' : 'currentColor'

    return (
        <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
            <path
                d="M18 14.5A6.5 6.5 0 0 1 9.5 6 7 7 0 1 0 18 14.5Z"
                fill={filled ? '#ffffff' : 'none'}
                stroke={color}
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function ThemeToggle({ isLightMode, onToggle }) {
    const { t } = useTranslation()
    const label = isLightMode ? t('theme.switchToDark') : t('theme.switchToLight')

    return (
        <button
            type="button"
            className={`theme-toggle ${isLightMode ? 'theme-toggle--light' : 'theme-toggle--dark'}`}
            onClick={onToggle}
            title={label}
            aria-label={label}
            aria-pressed={isLightMode}
        >
            <span className="theme-toggle__track">
                <span className="theme-toggle__icon theme-toggle__icon--sun">
                    <SunIcon />
                </span>
                <span className="theme-toggle__icon theme-toggle__icon--moon">
                    <MoonIcon />
                </span>
                <span className="theme-toggle__knob">{isLightMode ? <SunIcon filled /> : <MoonIcon filled />}</span>
            </span>
        </button>
    )
}

export default ThemeToggle
