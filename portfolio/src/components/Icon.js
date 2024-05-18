import { useState } from 'react';

function Icon(props) {
    const [activeToolsHover, setActiveToolsHover] = useState('');

    let {iconName, title, iconSize} = props
    return (
        <i
            className={activeToolsHover === iconName ? activeToolsHover + " colored toolsIconStyleActive" : iconName + " toolsIconStyle"}
            title={title}
            style={{fontSize: iconSize}}
            onMouseEnter={(event) => setActiveToolsHover(event.target.classList.value.split(' ')[0])}
            onMouseLeave={() => setActiveToolsHover('')}
        ></i>
    );
}

export default Icon;
