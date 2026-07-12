import { useEffect, useState } from 'react'

function Icon(props) {
    const [activeToolsHover, setActiveToolsHover] = useState('')
    const [isLightMode, setIsLightMode] = useState(() => document.body.classList.contains('light-mode'))

    let { iconName, title, iconSize, imageUrl } = props

    useEffect(() => {
        const syncTheme = () => {
            setIsLightMode(document.body.classList.contains('light-mode'))
        }

        window.addEventListener('theme-changed', syncTheme)
        return () => {
            window.removeEventListener('theme-changed', syncTheme)
        }
    }, [])

    const shouldUseColoredIcon = isLightMode || activeToolsHover === iconName

    if (imageUrl) {
        const imageFilter = shouldUseColoredIcon && isLightMode ? 'none' : 'brightness(0) invert(1)'

        return (
            <img
                src={imageUrl}
                alt={title}
                title={title}
                className={shouldUseColoredIcon ? 'toolsIconStyleActive theme-icon' : 'toolsIconStyle theme-icon'}
                style={{
                    height: iconSize,
                    width: iconSize,
                    objectFit: 'contain',
                    filter: imageFilter
                }}
                onMouseEnter={() => setActiveToolsHover(iconName)}
                onMouseLeave={() => setActiveToolsHover('')}
            />
        )
    }

    return (
        <i
            className={shouldUseColoredIcon ? iconName + ' colored toolsIconStyleActive' : iconName + ' toolsIconStyle'}
            title={title}
            style={{ fontSize: iconSize }}
            onMouseEnter={(event) => setActiveToolsHover(event.target.classList.value.split(' ')[0])}
            onMouseLeave={() => setActiveToolsHover('')}></i>
    )
}

export default Icon
