import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import TypeWritter from 'typewriter-effect';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

import Navigation from '../navigation';

import { Link } from 'react-router-dom';

import facebookImage from '../icons/facebook.png';
import instagramImage from '../icons/instagram.png';
import githubImage from '../icons/github.png';

function About() {
    const { t, i18n } = useTranslation();
    const [backToTop, setBackToTop] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [activeToolsHover, setActiveToolsHover] = useState('');

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
        }

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
                <img className='aboutLinksImage m-1' src={facebookImage} alt='facebook' title="Facebook" />
                <img className='aboutLinksImage m-1' src={instagramImage} alt='facebook' title="Instagram" />
                <Link to='https://github.com/mhrubes?tab=repositories' target="_blank">
                    <img className='aboutLinksImage m-1 rounded-circle' src={githubImage} alt='facebook' title="GitHub" />
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
                        <div className='card m-0' style={{ minHeight: "200px" }}>
                            <div className='card-body d-flex flex-column'>
                                <h5 className='card-title'>Wifi Name</h5>
                                <h6 className='card-subtitle mb-2 text-muted'>C#</h6>
                                <p className='card-text'>{t('aboutPage.wifiNameApp')}</p>
                                <div className="mt-auto">
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
                        <div className='card m-0' style={{ minHeight: "200px" }}>
                            <div className='card-body d-flex flex-column'>
                                <h5 className='card-title'>Overlay</h5>
                                <h6 className='card-subtitle mb-2 text-muted'>C#</h6>
                                <p className='card-text'>{t('aboutPage.overlayApp')}</p>
                                <div className="mt-auto">
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
                        <div className='card m-0' style={{ minHeight: "200px" }}>
                            <div className='card-body d-flex flex-column'>
                                <h5 className='card-title'>Symfony App</h5>
                                <h6 className='card-subtitle mb-2 text-muted'>PHP</h6>
                                <p className='card-text'>{t('aboutPage.symfonyApp')}</p>
                                <div className="mt-auto">
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
                        <div className='card m-0' style={{ minHeight: "200px" }}>
                            <div className='card-body d-flex flex-column'>
                                <h5 className='card-title'>TwilioLibrary</h5>
                                <h6 className='card-subtitle mb-2 text-muted'>C#</h6>
                                <p className='card-text'>{t('aboutPage.twilioLibraryApp')}</p>
                                <div className="mt-auto">
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
                        <div className='card m-0' style={{ minHeight: "200px" }}>
                            <div className='card-body d-flex flex-column'>
                                <h5 className='card-title'>Shop App</h5>
                                <h6 className='card-subtitle mb-2 text-muted'>React.js, MongoDB, Express.js</h6>
                                <p className='card-text'>{t('aboutPage.shopApp')}</p>
                                <div className="mt-auto">
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
                    {t('aboutPage.tools')}
                </h2>
            </div>

            <div className='container'>
                <div className='row m-0'>

                    {windowWidth >= 1100 && <div className='col-xl-1'></div>}

                    <div className='col-xl-2 col-lg-3 col-md-3 col-6 p-1'>
                        <div className='toolsBox d-flex justify-content-center align-items-center'>
                            <i
                                className={activeToolsHover === 'devicon-html5-plain' ? activeToolsHover + " colored toolsIconStyleActive" : "devicon-html5-plain toolsIconStyle"}
                                title="HTML"
                                onMouseEnter={(event) => setActiveToolsHover(event.target.classList.value.split(' ')[0])}
                                onMouseLeave={() => setActiveToolsHover('')}
                            ></i>
                        </div>
                    </div>

                    <div className='col-xl-2 col-lg-3 col-md-3 col-6 p-1'>
                        <div className='toolsBox d-flex justify-content-center align-items-center'>
                            <i
                                className={activeToolsHover === 'devicon-css3-plain' ? activeToolsHover + " colored toolsIconStyleActive" : "devicon-css3-plain toolsIconStyle"}
                                title="CSS3"
                                onMouseEnter={(event) => setActiveToolsHover(event.target.classList.value.split(' ')[0])}
                                onMouseLeave={() => setActiveToolsHover('')}
                            ></i>
                        </div>
                    </div>

                    <div className='col-xl-2 col-lg-3 col-md-3 col-6 p-1'>
                        <div className='toolsBox d-flex justify-content-center align-items-center'>
                            <i
                                className={activeToolsHover === 'devicon-bootstrap-plain' ? activeToolsHover + " colored toolsIconStyleActive" : "devicon-bootstrap-plain toolsIconStyle"}
                                title="Bootstrap"
                                onMouseEnter={(event) => setActiveToolsHover(event.target.classList.value.split(' ')[0])}
                                onMouseLeave={() => setActiveToolsHover('')}
                            ></i>
                        </div>
                    </div>

                    <div className='col-xl-2 col-lg-3 col-md-3 col-6 p-1'>
                        <div className='toolsBox d-flex justify-content-center align-items-center'>
                            <i
                                className={activeToolsHover === 'devicon-nodejs-plain' ? activeToolsHover + " colored toolsIconStyleActive" : "devicon-nodejs-plain toolsIconStyle"}
                                title="Node.js"
                                onMouseEnter={(event) => setActiveToolsHover(event.target.classList.value.split(' ')[0])}
                                onMouseLeave={() => setActiveToolsHover('')}
                            ></i>
                        </div>
                    </div>

                    <div className='col-xl-2 col-lg-3 col-md-3 col-6 p-1'>
                        <div className='toolsBox d-flex justify-content-center align-items-center'>
                            <i
                                className={activeToolsHover === 'devicon-react-original' ? activeToolsHover + " colored toolsIconStyleActive" : "devicon-react-original toolsIconStyle"}
                                title="React.js"
                                onMouseEnter={(event) => setActiveToolsHover(event.target.classList.value.split(' ')[0])}
                                onMouseLeave={() => setActiveToolsHover('')}
                            ></i>
                        </div>
                    </div>

                    {windowWidth >= 1100 && <div className='col-xl-1'></div>}
                    {windowWidth >= 1100 && <div className='col-xl-1'></div>}

                    <div className='col-xl-2 col-lg-3 col-md-3 col-6 p-1'>
                        <div className='toolsBox d-flex justify-content-center align-items-center'>
                            <i
                                className={activeToolsHover === 'devicon-express-original' ? activeToolsHover + " colored toolsIconStyleActive" : "devicon-express-original toolsIconStyle"}
                                title="Express.js"
                                onMouseEnter={(event) => setActiveToolsHover(event.target.classList.value.split(' ')[0])}
                                onMouseLeave={() => setActiveToolsHover('')}
                            ></i>
                        </div>
                    </div>

                    <div className='col-xl-2 col-lg-3 col-md-3 col-6 p-1'>
                        <div className='toolsBox d-flex justify-content-center align-items-center'>
                            <i
                                className={activeToolsHover === 'devicon-csharp-plain' ? activeToolsHover + " colored toolsIconStyleActive" : "devicon-csharp-plain toolsIconStyle"}
                                title="C#"
                                onMouseEnter={(event) => setActiveToolsHover(event.target.classList.value.split(' ')[0])}
                                onMouseLeave={() => setActiveToolsHover('')}
                            ></i>
                        </div>
                    </div>

                    <div className='col-xl-2 col-lg-3 col-md-3 col-6 p-1'>
                        <div className='toolsBox d-flex justify-content-center align-items-center'>
                            <i
                                className={activeToolsHover === 'devicon-dotnetcore-plain' ? activeToolsHover + " colored toolsIconStyleActive" : "devicon-dotnetcore-plain toolsIconStyle"}
                                title=".NET Core"
                                onMouseEnter={(event) => setActiveToolsHover(event.target.classList.value.split(' ')[0])}
                                onMouseLeave={() => setActiveToolsHover('')}
                            ></i>
                        </div>
                    </div>

                    <div className='col-xl-2 col-lg-3 col-md-3 col-6 p-1'>
                        <div className='toolsBox d-flex justify-content-center align-items-center'>
                            <i
                                className={activeToolsHover === 'devicon-mysql-original' ? activeToolsHover + " colored toolsIconStyleActive" : "devicon-mysql-original toolsIconStyle"}
                                title="MySQL"
                                onMouseEnter={(event) => setActiveToolsHover(event.target.classList.value.split(' ')[0])}
                                onMouseLeave={() => setActiveToolsHover('')}
                            ></i>
                        </div>
                    </div>

                    <div className='col-xl-2 col-lg-3 col-md-3 col-6 p-1'>
                        <div className='toolsBox d-flex justify-content-center align-items-center'>
                            <i
                                className={activeToolsHover === 'devicon-sqldeveloper-plain' ? activeToolsHover + " colored toolsIconStyleActive" : "devicon-sqldeveloper-plain toolsIconStyle"}
                                title="SQL Developer"
                                onMouseEnter={(event) => setActiveToolsHover(event.target.classList.value.split(' ')[0])}
                                onMouseLeave={() => setActiveToolsHover('')}

                            ></i>
                        </div>
                    </div>

                    {windowWidth >= 1100 && <div className='col-xl-1'></div>}
                    {windowWidth >= 1100 && <div className='col-xl-1'></div>}

                    <div className='col-xl-2 col-lg-3 col-md-3 col-6 p-1'>
                        <div className='toolsBox d-flex justify-content-center align-items-center'>
                            <i
                                className={activeToolsHover === 'devicon-postman-plain' ? activeToolsHover + " colored toolsIconStyleActive" : "devicon-postman-plain toolsIconStyle"}
                                title="Postman"
                                onMouseEnter={(event) => setActiveToolsHover(event.target.classList.value.split(' ')[0])}
                                onMouseLeave={() => setActiveToolsHover('')}
                            ></i>
                        </div>
                    </div>

                    <div className='col-xl-2 col-lg-3 col-md-3 col-6 p-1'>
                        <div className='toolsBox d-flex justify-content-center align-items-center'>
                            <i
                                className={activeToolsHover === 'devicon-insomnia-plain' ? activeToolsHover + " colored toolsIconStyleActive" : "devicon-insomnia-plain toolsIconStyle"}
                                title="Insomnia"
                                onMouseEnter={(event) => setActiveToolsHover(event.target.classList.value.split(' ')[0])}
                                onMouseLeave={() => setActiveToolsHover('')}

                            ></i>
                        </div>
                    </div>

                    <div className='col-xl-2 col-lg-3 col-md-3 col-6 p-1'>
                        <div className='toolsBox d-flex justify-content-center align-items-center'>
                            <i
                                className={activeToolsHover === 'devicon-git-plain' ? activeToolsHover + " colored toolsIconStyleActive" : "devicon-git-plain toolsIconStyle"}
                                title="Git"
                                onMouseEnter={(event) => setActiveToolsHover(event.target.classList.value.split(' ')[0])}
                                onMouseLeave={() => setActiveToolsHover('')}
                            ></i>
                        </div>
                    </div>

                    <div className='col-xl-2 col-lg-3 col-md-3 col-6 p-1'>
                        <div className='toolsBox d-flex justify-content-center align-items-center'>
                            <i
                                className={activeToolsHover === 'devicon-github-original' ? activeToolsHover + " colored toolsIconStyleActive" : "devicon-github-original toolsIconStyle"}
                                title="GitHub"
                                onMouseEnter={(event) => setActiveToolsHover(event.target.classList.value.split(' ')[0])}
                                onMouseLeave={() => setActiveToolsHover('')}
                            ></i>
                        </div>
                    </div>

                    <div className='col-xl-2 col-lg-3 col-md-3 col-6 p-1'>
                        <div className='toolsBox d-flex justify-content-center align-items-center'>
                            <i
                                className={activeToolsHover === 'devicon-jira-plain' ? activeToolsHover + " colored toolsIconStyleActive" : "devicon-jira-plain toolsIconStyle"}
                                title="Jira"
                                onMouseEnter={(event) => setActiveToolsHover(event.target.classList.value.split(' ')[0])}
                                onMouseLeave={() => setActiveToolsHover('')}
                            ></i>
                        </div>
                    </div>

                    {windowWidth >= 1100 && <div className='col-xl-1'></div>}
                    {windowWidth >= 1100 && <div className='col-xl-1'></div>}

                    <div className='col-xl-2 col-lg-3 col-md-3 col-6 p-1'>
                        <div className='toolsBox d-flex justify-content-center align-items-center'>
                            <i
                                className={activeToolsHover === 'devicon-docker-plain' ? activeToolsHover + " colored toolsIconStyleActive" : "devicon-docker-plain toolsIconStyle"}
                                title="Docker"
                                onMouseEnter={(event) => setActiveToolsHover(event.target.classList.value.split(' ')[0])}
                                onMouseLeave={() => setActiveToolsHover('')}
                            ></i>
                        </div>
                    </div>

                    <div className='col-xl-2 col-lg-3 col-md-3 col-6 p-1'>
                        <div className='toolsBox d-flex justify-content-center align-items-center'>
                            <i
                                className={activeToolsHover === 'devicon-jenkins-line' ? activeToolsHover + " colored toolsIconStyleActive" : "devicon-jenkins-line toolsIconStyle"}
                                title="Jenkins"
                                onMouseEnter={(event) => setActiveToolsHover(event.target.classList.value.split(' ')[0])}
                                onMouseLeave={() => setActiveToolsHover('')}
                            ></i>
                        </div>
                    </div>

                </div>
            </div>

            {
                backToTop && (
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
                )
            }

        </div >
    );
}

export default About;
