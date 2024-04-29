import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

function Navigation() {
    const { t, i18n } = useTranslation();
    const location = useLocation();

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
        }
    }, []);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('language', lng);
    };

    return (
        <div className='bg-white fixed-top' style={{ boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.5)' }}>
            <ul className="nav justify-content-center m-1">
                <li className="nav-item m-1">
                    <Link to="/">
                        <button className={location.pathname === '/' ? "btn navbarAboutButtonActive" : "btn navbarAboutButton"}>
                            {t('pages.home')}
                        </button>
                    </Link>
                </li>
                <li className="nav-item m-1">
                    <Link to="/about">
                        <button className={location.pathname === '/about' ? "btn navbarAboutButtonActive" : "btn navbarAboutButton"}>
                            {t('pages.about')}
                        </button>
                    </Link>
                </li>
                <li className="nav-item m-1">
                    <Link to="/contact">
                        <button className={location.pathname === '/contact' ? "btn navbarAboutButtonActive" : "btn navbarAboutButton"}>
                            {t('pages.contact')}
                        </button>
                    </Link>
                </li>

                <li className="nav-item m-1">
                    {i18n.language === "en" ? (
                        <button className='btn' onClick={() => changeLanguage('cz')}>CZ</button>
                    ) : (
                        <button className='btn' onClick={() => changeLanguage('en')}>EN</button>
                    )}
                </li>

            </ul>
        </div>
    );
}

export default Navigation;
