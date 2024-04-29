import { useTranslation } from 'react-i18next';
import TypeWritter from 'typewriter-effect';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

import { Link } from 'react-router-dom';
import Navigation from '../navigation';

function Main() {
    const { t, i18n } = useTranslation();

    return (
        <div className='main'>
            <Navigation />
            <div className='container'>
                <div className='centered text-white'>
                    <h1 className='setShadow'>{t('hi')}</h1>
                    <p className='h3 setShadow'>{t('mainPage.im')} <span className='h2'><strong>Martin</strong></span></p>

                    <hr/>

                    <p className='h2 setShadow'>
                        <TypeWritter
                            options={{
                                strings: [t('jobTitle.webFrontendDeveloper'), t('jobTitle.webBackendDeveloper'), t('jobTitle.tester'), t('jobTitle.webFullStackDeveloper')],
                                autoStart: true,
                                loop: true,
                                delay: 70,
                                deleteSpeed: 20
                            }}
                        />
                    </p>

                    <div className='mt-3'>
                        <Link className='setShadow' to='/about'>
                            <button className='btn aboutButton'>
                                {t('pages.about')}
                            </button>
                        </Link>
                        <Link className='m-1 setShadow' to='/contact'>
                            <button className='btn aboutButton'>
                                {t('pages.contact')}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
