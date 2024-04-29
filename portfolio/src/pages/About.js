import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import TypeWritter from 'typewriter-effect';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

import Navigation from '../navigation';
import Icon from '../components/Icon.js';
import Language from '../components/LanguageChange';

import { Link } from 'react-router-dom';

import facebookImage from '../icons/facebook.png';
import instagramImage from '../icons/instagram.png';
import githubImage from '../icons/github.png';

function About() {
    const { t } = useTranslation();
    const [backToTop, setBackToTop] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const technologyObj = [
        { className: 'devicon-html5-plain', title: 'HTML5' },
        { className: 'devicon-css3-plain', title: 'CSS3' },
        { className: 'devicon-bootstrap-plain', title: 'Bootstrap' },
        { className: 'devicon-javascript-plain', title: 'Javascript' },
        { className: 'devicon-nodejs-plain', title: 'Node.js' },
        { className: 'devicon-react-original', title: 'React.js' },
        { className: 'devicon-nextjs-plain', title: 'Next.js' },
        { className: 'devicon-csharp-plain', title: 'C#' },
        { className: 'devicon-dotnetcore-plain', title: '.NET Core' },
        { className: 'devicon-blazor-original', title: 'C# Blazor' },
        { className: 'devicon-php-plain', title: 'PHP' },
        { className: 'devicon-symfony-original', title: 'PHP Symfony' },
        { className: 'devicon-mysql-original', title: 'MySQL' },
        { className: 'devicon-sqldeveloper-plain', title: 'SQL Developer' },
        { className: 'devicon-mongodb-plain', title: 'MongoDB' },
        { className: 'devicon-postman-plain', title: 'Postman' },
        { className: 'devicon-insomnia-plain', title: 'Insomnia' },
        { className: 'devicon-git-plain', title: 'Git' },
        { className: 'devicon-github-original', title: 'Github' },
        { className: 'devicon-jira-plain', title: 'Jira' },
        { className: 'devicon-docker-plain', title: 'Docker' },
        { className: 'devicon-jenkins-line', title: 'Jenkins' },
    ];

    useEffect(() => {
        window.addEventListener(('scroll'), () => {
            if (window.scrollY > 80) {
                setBackToTop(true);
            }
            else {
                setBackToTop(false);
            }
        });

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className='main'>
            <Navigation />

            <div className='centeredAbout text-white text-center'>
                <h1 >
                    <span className='setShadow' dangerouslySetInnerHTML={{ __html: t('aboutPage.header') }}></span>
                </h1>
            </div>

            <div className='text-white text-center'>
                <h3 className='setShadow'>
                    Martin H.
                </h3>
            </div>

            <div className='container text-white mt-5'>
                <p dangerouslySetInnerHTML={{ __html: t('aboutPage.describe') }}></p>
            </div>

            <div className='container text-center mt-3'>
                <img className='aboutLinksImage m-1' src={facebookImage} alt='facebook' title='Facebook' />
                <img className='aboutLinksImage m-1' src={instagramImage} alt='Instagram' title='Instagram' />
                <Link to='https://github.com/mhrubes?tab=repositories' target='_blank'>
                    <img className='aboutLinksImage m-1 rounded-circle' src={githubImage} alt='Github' title='GitHub' />
                </Link>
            </div>

            <hr className='text-white m-5' />

            <div className='container text-white'>
                <div className='row m-0'>
                    <div className='col-md-6'>
                        <p className='text-center h4 pb-3 setShadow'>{t('aboutPage.technicalKnowledge')}</p>
                        <ul>
                            <li>
                                <TypeWritter
                                    options={{
                                        strings: 'HTML, CSS - Bootstrap',
                                        autoStart: true,
                                        loop: false,
                                        delay: 20,
                                        cursor: ''
                                    }}
                                />
                            </li>
                            <br />
                            <li>
                                <TypeWritter
                                    options={{
                                        strings: 'Javascript - Node.js, React.js, Express.js',
                                        autoStart: true,
                                        loop: false,
                                        delay: 30,
                                        cursor: ''
                                    }}
                                />
                            </li>
                            <br />
                            <li>
                                <TypeWritter
                                    options={{
                                        strings: 'C# - .NET Core, WPF, Windows Forms',
                                        autoStart: true,
                                        loop: false,
                                        delay: 30,
                                        cursor: ''
                                    }}
                                />
                            </li>
                            <br />
                            <li>
                                <TypeWritter
                                    options={{
                                        strings: 'SQL, MySQL, MongoDB',
                                        autoStart: true,
                                        loop: false,
                                        delay: 30,
                                        cursor: ''
                                    }}
                                />
                            </li>
                            <br />
                            <li>
                                <TypeWritter
                                    options={{
                                        strings: 'Postman, Insomnia',
                                        autoStart: true,
                                        loop: false,
                                        delay: 30,
                                        cursor: ''
                                    }}
                                />
                            </li>
                            <br />
                            <li>
                                <TypeWritter
                                    options={{
                                        strings: 'Git, GitHub, Jira',
                                        autoStart: true,
                                        loop: false,
                                        delay: 30,
                                        cursor: ''
                                    }}
                                />
                            </li>
                            <br />
                            <li>
                                <TypeWritter
                                    options={{
                                        strings: 'Docker, Jenkins',
                                        autoStart: true,
                                        loop: false,
                                        delay: 30,
                                        cursor: ''
                                    }}
                                />
                            </li>
                            <br />
                            <br />
                            <li>
                                <TypeWritter
                                    options={{
                                        strings: 'Dahua, Hikvision, Jablotron',
                                        autoStart: true,
                                        loop: false,
                                        delay: 30,
                                        cursor: ''
                                    }}
                                />
                            </li>
                        </ul>

                        {window.innerWidth <= 750 && <hr className='text-white' />}
                    </div>
                    <div className='col-md-6'>
                        <p className='text-center h4 pb-3 setShadow'>{t('aboutPage.motivation')}</p>
                        <p dangerouslySetInnerHTML={{ __html: t('aboutPage.motivationText') }}></p>
                    </div>
                </div>
            </div>

            <hr className='text-white m-5' />

            <div className='text-white text-center pb-3'>
                <h2 className='setShadow'>
                    {t('aboutPage.reference')}
                </h2>
            </div>

            <div className='container text-white'>
                <div className='row m-0'>
                    <div className='col-md-4 p-1'>
                        <div className='card m-0' style={{ minHeight: '200px' }}>
                            <div className='card-body d-flex flex-column'>
                                <h5 className='card-title'>Wifi Name</h5>
                                <h6 className='card-subtitle mb-2 text-muted'>C#</h6>
                                <p className='card-text'>{t('aboutPage.wifiNameApp')}</p>
                                <div className='mt-auto'>
                                    <Link className='text-decoration-none' to='https://github.com/mhrubes/WifiName' target='_blank'>
                                        <button className='btn projectDetailButton'>
                                            <span className=''>Klikni zde</span>
                                        </button>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4 p-1'>
                        <div className='card m-0' style={{ minHeight: '200px' }}>
                            <div className='card-body d-flex flex-column'>
                                <h5 className='card-title'>Overlay</h5>
                                <h6 className='card-subtitle mb-2 text-muted'>C#</h6>
                                <p className='card-text'>{t('aboutPage.overlayApp')}</p>
                                <div className='mt-auto'>
                                    <Link className='text-decoration-none' to='https://github.com/mhrubes/Overlay' target='_blank'>
                                        <button className='btn projectDetailButton'>
                                            <span className=''>Klikni zde</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4 p-1'>
                        <div className='card m-0' style={{ minHeight: '200px' }}>
                            <div className='card-body d-flex flex-column'>
                                <h5 className='card-title'>Symfony App</h5>
                                <h6 className='card-subtitle mb-2 text-muted'>PHP</h6>
                                <p className='card-text'>{t('aboutPage.symfonyApp')}</p>
                                <div className='mt-auto'>
                                    <Link className='text-decoration-none' to='https://github.com/mhrubes/SymfonyApp' target='_blank'>
                                        <button className='btn projectDetailButton'>
                                            <span className=''>Klikni zde</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {windowWidth > 750 && <div className='col-md-2  p-1'></div>}

                    <div className='col-md-4 p-1'>
                        <div className='card m-0' style={{ minHeight: '200px' }}>
                            <div className='card-body d-flex flex-column'>
                                <h5 className='card-title'>TwilioLibrary</h5>
                                <h6 className='card-subtitle mb-2 text-muted'>C#</h6>
                                <p className='card-text'>{t('aboutPage.twilioLibraryApp')}</p>
                                <div className='mt-auto'>
                                    <Link className='text-decoration-none' to='https://github.com/mhrubes/TwilioLibrary' target='_blank'>
                                        <button className='btn projectDetailButton'>
                                            <span className=''>Klikni zde</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4 p-1'>
                        <div className='card m-0' style={{ minHeight: '200px' }}>
                            <div className='card-body d-flex flex-column'>
                                <h5 className='card-title'>Shop App</h5>
                                <h6 className='card-subtitle mb-2 text-muted'>React.js, MongoDB, Express.js</h6>
                                <p className='card-text'>{t('aboutPage.shopApp')}</p>
                                <div className='mt-auto'>
                                    <Link className='text-decoration-none' to='https://github.com/mhrubes/shop_testing' target='_blank'>
                                        <button className='btn projectDetailButton'>
                                            <span className=''>Klikni zde</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr className='text-white m-5' />

            <div className='text-white text-center pb-3'>
                <h2 className='setShadow'>
                    {t('aboutPage.technology')}
                </h2>
            </div>

            <div className='container'>
                <div className='row m-0'>
                    {windowWidth >= 1100 && <div className='col-xl-1'></div>}
                    {technologyObj.map((item, index) => (
                        <>
                            <div key={index} className='col-xl-2 col-lg-3 col-md-3 col-6 p-1'>
                                <div className='toolsBox d-flex justify-content-center align-items-center' title={item.title}>
                                    <Icon iconName={item.className} title={item.title} />
                                </div>
                            </div>
                            {(index === 4 || index === 10 || index === 15 || index === 21) && windowWidth >= 1100 && <div className='col-xl-1'></div>}
                        </>
                    ))}
                </div>
            </div>

            <hr className='text-white m-5' />

            <div className='text-center' style={{ marginTop: '-50px' }}>
                <span className='display-2 text-white'>
                    ↓
                </span>
            </div>

            <div className='text-center mt-2 pb-5'>
                <div>
                    <Link className='text-decoration-none' to='/contact'>
                        <span className='text-white h5'>{t('aboutPage.contactMe')}</span>
                    </Link>
                </div>
                <div className='mt-2'>
                    <Language color='text-white' />
                </div>
            </div>

            {backToTop && (
                <button className='btn text-white' style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    fontSize: '40px'
                }}
                    onClick={scrollUp}
                >
                    👆
                </button>
            )}

        </div >
    );
}

export default About;
