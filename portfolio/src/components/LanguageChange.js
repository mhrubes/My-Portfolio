import { useTranslation } from 'react-i18next';

function LanguageChange(props) {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('language', lng);
    };

    return (
        <>
            {i18n.language === "en" ? (
                <button className={props.color ? 'btn ' + props.color : 'btn'} onClick={() => changeLanguage('cz')}>CZ</button>
            ) : (
                <button className={props.color ? 'btn ' + props.color : 'btn'} onClick={() => changeLanguage('en')}>EN</button>
            )}
        </>
    );
}

export default LanguageChange;
