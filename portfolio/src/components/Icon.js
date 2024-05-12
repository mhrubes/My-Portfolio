import { useState } from 'react';

function Icon(props) {
    const [activeToolsHover, setActiveToolsHover] = useState('');

    let {iconName, title} = props
    return (
        <i
            className={activeToolsHover === iconName ? activeToolsHover + " colored toolsIconStyleActive" : iconName + " toolsIconStyle"}
            title={title}
            onMouseEnter={(event) => setActiveToolsHover(event.target.classList.value.split(' ')[0])}
            onMouseLeave={() => setActiveToolsHover('')}
        ></i>
    );
}

export default Icon;
