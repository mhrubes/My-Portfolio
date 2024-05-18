import Icon from '../Icon';

function TechFlipCard(props) {

    let { item, index, flipStates, handleFlip, height, iconSize } = props

    return (
        <div className={`flip-card ${flipStates[index] ? "flipped" : ""}`} style={{ height: height }}>
            <div className="flip-card-inner" onClick={() => handleFlip(index, !flipStates[index])}>
                <div className="flip-card-front" style={{ height: height }}>
                    <div className="card-content d-flex justify-content-center align-items-center rounded border border-1" style={{ height: height }}>
                        <Icon iconName={item.className} title={item.title} iconSize={iconSize} />
                    </div>
                </div>
                <div className="flip-card-back d-flex justify-content-center align-items-center rounded" style={{ height: height }}>
                    <div className="card-content">
                        {item.title}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TechFlipCard;
