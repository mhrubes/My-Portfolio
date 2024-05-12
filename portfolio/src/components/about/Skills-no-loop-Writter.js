import TypeWritter from 'typewriter-effect';

function SkillNoLoopWritter(props) {

    let { lang } = props;

    return (
        <TypeWritter
            options={{
                strings: `${lang}`,
                autoStart: true,
                loop: false,
                delay: 30,
                cursor: ''
            }}
        />
    );
}

export default SkillNoLoopWritter;
