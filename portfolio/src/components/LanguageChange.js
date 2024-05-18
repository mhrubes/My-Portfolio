import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarth } from '@fortawesome/free-solid-svg-icons';

function LanguageChange(props) {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('language', lng);
    };

    return (
        <React.Fragment>
            {i18n.language === "en" ? (
                <button className={props.color ? 'btn ' + props.color : 'btn'} onClick={() => changeLanguage('cz')}>
                    <FontAwesomeIcon icon={faEarth} className='m-0' style={{ paddingRight: '5px' }} />
                    CZ
                </button>
            ) : (
                <button className={props.color ? 'btn ' + props.color : 'btn'} onClick={() => changeLanguage('en')}>
                    <FontAwesomeIcon icon={faEarth} className='m-0' style={{ paddingRight: '5px' }} />
                    EN
                </button>
            )}
        </React.Fragment>
    );
}

export default LanguageChange;
