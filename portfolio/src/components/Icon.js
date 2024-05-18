import { useState } from 'react';

function Icon(props) {
    const [activeToolsHover, setActiveToolsHover] = useState('');

    let {iconName, title, height} = props
    return (
        <i
            className={activeToolsHover === iconName ? activeToolsHover + " colored toolsIconStyleActive" : iconName + " toolsIconStyle"}
            title={title}
            style={{fontSize: height}}
            onMouseEnter={(event) => setActiveToolsHover(event.target.classList.value.split(' ')[0])}
            onMouseLeave={() => setActiveToolsHover('')}
        ></i>
    );
}

export default Icon;
