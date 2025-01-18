import { useTranslation } from 'react-i18next'
import React, { useEffect, useState } from 'react'

import Navigation from '../navigation'
import ProjectDetail from '../components/about/Project-detail'
import SkillNoLoopWritter from '../components/about/Skills-no-loop-Writter'
import Language from '../components/LanguageChange'

import { Link } from 'react-router-dom'

import facebookImage from '../icons/facebook.png'
import instagramImage from '../icons/instagram.png'
import githubImage from '../icons/github.png'
import linkedin from '../icons/linkedIn.png'
import TechFlipCard from '../components/about/Tech-flip-card'

function About() {
    const { t } = useTranslation()
    const [backToTop, setBackToTop] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const technologyObj = [
        { className: 'devicon-html5-plain', title: 'HTML5' },
        { className: 'devicon-css3-plain', title: 'CSS3' },
        { className: 'devicon-bootstrap-plain', title: 'Bootstrap' },
        { className: 'devicon-javascript-plain', title: 'Javascript' },
        { className: 'devicon-nodejs-plain', title: 'Node.js' },
        { className: 'devicon-react-original', title: 'React.js' },
        { className: 'devicon-nextjs-plain', title: 'Next.js' },
        { className: 'devicon-typescript-plain', title: 'Typescript' },
        { className: 'devicon-csharp-plain', title: 'C#' },
        { className: 'devicon-dotnetcore-plain', title: '.NET Core' },
        // { className: 'devicon-blazor-original', title: 'C# Blazor' },
        // { className: 'devicon-php-plain', title: 'PHP' },
        // { className: 'devicon-symfony-original', title: 'PHP Symfony' },
        { className: 'devicon-postgresql-plain', title: 'PostgreSQL' },
        { className: 'devicon-mysql-original', title: 'MySQL' },
        { className: 'devicon-sqldeveloper-plain', title: 'SQL Developer' },
        { className: 'devicon-mongodb-plain', title: 'MongoDB' },
        { className: 'devicon-postman-plain', title: 'Postman' },
        { className: 'devicon-insomnia-plain', title: 'Insomnia' },
        { className: 'devicon-git-plain', title: 'Git' },
        { className: 'devicon-github-original', title: 'Github' },
        { className: 'devicon-jira-plain', title: 'Jira' },
        { className: 'devicon-slack-plain', title: 'Slack' },
        { className: 'devicon-docker-plain', title: 'Docker' }
        // { className: 'devicon-jenkins-line', title: 'Jenkins' }
    ]

    const projects = [
        { name: 'Metro simulation', progLang: 'React', desc: 'metroSimulation', link: 'https://metro-simulation.vercel.app/', special: true, year: '2024' },
        { name: 'Poe Stash Prices', progLang: 'React', desc: 'poeStashPrices', link: 'https://poe-stash-prices.vercel.app/', special: true, year: '2024' },
        { name: 'Wifi Name', progLang: 'C#', desc: 'wifiNameApp', link: 'https://github.com/mhrubes/WifiName', year: '2024' },
        { name: 'Overlay', progLang: 'C#', desc: 'overlayApp', link: 'https://github.com/mhrubes/Overlay', year: '2024' },
        { name: 'Symfony App', progLang: 'PHP', desc: 'symfonyApp', link: 'https://github.com/mhrubes/SymfonyApp', year: '2024' },
        { name: 'TwilioLibrary', progLang: 'C#', desc: 'twilioLibraryApp', link: 'https://github.com/mhrubes/TwilioLibrary', year: '2023' },
        { name: 'FE-Seat-Case-Study', progLang: 'React, Typescript', desc: 'feSeatCaseStudy', link: 'https://github.com/mhrubes/frontend-seating-case-study', year: '2023' },
        { name: 'Shop App', progLang: 'React, Express.js, MongoDB', desc: 'shopApp', link: 'https://github.com/mhrubes/shop_testing', year: '2022' }
    ]

    const getColumnClass = (index, total) => {
        if (total % 3 === 0) {
            return 'col-md-4'
        } else if (total % 3 === 1 && index === total - 1) {
            return 'col-md-4 offset-md-4'
        } else if (total % 3 === 2 && (index === total - 1 || index === total - 2)) {
            return 'col-md-4 offset-md-1'
        }
        return 'col-md-4'
    }

    const [flipStates, setFlipStates] = useState(Array(technologyObj.length).fill(false))
    const handleFlip = (index, isFlipped) => {
        const newFlipStates = [...flipStates]
        newFlipStates[index] = isFlipped
        setFlipStates(newFlipStates)
    }

    const skillsObj = [
        'HTML5, CSS3 - Bootstrap',
        'Javascript - Node.js, React.js, Express.js, Typescript',
        'C# - .NET Core, WPF, Windows Forms',
        'SQL, PostgreSQL, MySQL, MongoDB',
        'Postman, Insomnia',
        'Git, GitHub, Jira, Slack',
        // 'Docker, Jenkins',
        'Docker',
        '',
        'Dahua, Hikvision, Jablotron'
    ]

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 80) {
                setBackToTop(true)
            } else {
                setBackToTop(false)
            }
        })

        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className="main">
            <Navigation />

            <div className="centeredAbout text-white text-center">
                <h1>
                    <span className="setShadow" dangerouslySetInnerHTML={{ __html: t('aboutPage.header') }}></span>
                </h1>
            </div>

            <div className="text-white text-center">
                <h3 className="setShadow">Martin H.</h3>
            </div>

            <div className="container text-white mt-5">
                <p dangerouslySetInnerHTML={{ __html: t('aboutPage.describe') }}></p>
            </div>

            <div className="container text-center mt-3">
                {/* <img className='aboutLinksImage m-1' src={facebookImage} alt='facebook' title='Facebook' />
                <img className='aboutLinksImage m-1' src={instagramImage} alt='Instagram' title='Instagram' /> */}
                <Link to="https://www.linkedin.com/in/martin-h-8b06751b5/" target="_blank">
                    <img className="aboutLinksImage m-1 rounded-circle" src={linkedin} alt="linkedIn" title="linkedIn" style={{ height: '35px' }} />
                </Link>
                <Link to="https://github.com/mhrubes?tab=repositories" target="_blank">
                    <img className="aboutLinksImage m-1 rounded-circle" src={githubImage} alt="Github" title="GitHub" />
                </Link>
            </div>

            <hr className="text-white m-5" />

            <div className="container text-white">
                <div className="row m-0">
                    <div className="col-md-6">
                        <p className="text-center h4 pb-3 setShadow">{t('aboutPage.technicalKnowledge')}</p>
                        <ul>
                            {skillsObj.map((item, index) => (
                                <span key={index}>
                                    {item !== '' && (
                                        <li>
                                            <SkillNoLoopWritter lang={item} />
                                        </li>
                                    )}
                                    <br />
                                </span>
                            ))}
                        </ul>

                        {window.innerWidth <= 767 && <hr className="text-white m-5" />}
                    </div>
                    <div className="col-md-6">
                        <p className="text-center h4 pb-3 setShadow">{t('aboutPage.motivation')}</p>
                        <p dangerouslySetInnerHTML={{ __html: t('aboutPage.motivationText') }}></p>
                    </div>
                </div>
            </div>

            <hr className="text-white m-5" />

            <div className="text-white text-center pb-3">
                <h2 className="setShadow">{t('aboutPage.reference')}</h2>
            </div>

            <div className="container text-white">
                <div className="row m-0">
                    {projects.map((project, index) => {
                        const columnClass = getColumnClass(index, projects.length)
                        return (
                            <div key={index} className={`p-1 ${columnClass}`}>
                                <ProjectDetail name={project.name} progLang={project.progLang} desc={project.desc} link={project.link} special={project.special} year={project.year} />
                            </div>
                        )
                    })}
                </div>
            </div>

            <hr className="text-white m-5" />

            <div className="text-white text-center pb-3">
                <h2 className="setShadow">{t('aboutPage.technology')}</h2>
            </div>

            <div className="container">
                <div className="row m-0">
                    {windowWidth >= 1100 && <div className="col-xl-1"></div>}
                    {technologyObj.map((item, index) => (
                        <React.Fragment key={index}>
                            <div className="col-xl-2 col-lg-3 col-md-2 col-4 p-1">
                                {windowWidth > 990 && (
                                    <TechFlipCard key={index} item={item} index={index} flipStates={flipStates} handleFlip={handleFlip} height="150px" iconSize="75px" textFontSize="20px" />
                                )}
                                {windowWidth <= 990 && windowWidth > 767 && (
                                    <TechFlipCard key={index} item={item} index={index} flipStates={flipStates} handleFlip={handleFlip} height="90px" iconSize="45px" textFontSize="14px" />
                                )}
                                {windowWidth <= 767 && (
                                    <TechFlipCard key={index} item={item} index={index} flipStates={flipStates} handleFlip={handleFlip} height="60px" iconSize="30px" textFontSize="10px" />
                                )}
                            </div>
                            {(index === 4 || index === 10 || index === 15 || index === 21) && windowWidth >= 1200 && <div className="col-xl-1"></div>}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <hr className="text-white m-5" />

            <div className="text-center" style={{ marginTop: '-50px' }}>
                <span className="display-2 text-white">↓</span>
            </div>

            <div className="text-center mt-2 pb-5">
                <div>
                    <Link className="text-decoration-none" to="/contact">
                        <span className="text-white h5">{t('aboutPage.contactMe')}</span>
                    </Link>
                </div>
                <div className="mt-2">
                    <Language color="text-white" />
                </div>
            </div>

            {backToTop && (
                <button
                    className="btn text-white"
                    style={{
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px',
                        fontSize: '40px'
                    }}
                    onClick={scrollUp}>
                    👆
                </button>
            )}
        </div>
    )
}

export default About
