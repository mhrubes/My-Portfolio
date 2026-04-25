import { useEffect, useState } from 'react'

function Icon(props) {
    const [activeToolsHover, setActiveToolsHover] = useState('')
    const [isLightMode, setIsLightMode] = useState(() => document.body.classList.contains('light-mode'))

    let { iconName, title, iconSize } = props

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
