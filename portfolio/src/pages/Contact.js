import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import TypeWritter from 'typewriter-effect'

import githubImage from '../icons/github.png'
import linkedin from '../icons/linkedIn.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import Navigation from '../navigation'

function Contact() {
    const { t } = useTranslation()
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const [email, setEmail] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [message, setMessageArea] = useState('')
    const [acceptProccess, setAcceptProccess] = useState(false)

    const [emailIsSent, setEmailIsSent] = useState(false)

    const [emailErrorMessageSubmit, setEmailErrorMessageSubmit] = useState(false)
    const [acceptProccessErrorSubmit, setAcceptProccessErrorSubmit] = useState(false)

    const [isDisabled] = useState(true)

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const onSubmit = () => {
        if (email === '' || email.length === 0) {
            setEmailErrorMessageSubmit(true)
        } else if (!email.includes('@')) {
            setEmailErrorMessageSubmit(true)
        } else {
            setEmailErrorMessageSubmit(false)
        }

        if (!acceptProccess) {
            setAcceptProccessErrorSubmit(true)
        } else {
            setAcceptProccessErrorSubmit(false)
        }

        if (email !== '' && email.length !== 0 && email.includes('@') && acceptProccess) {
            console.log('text')
            setEmailIsSent(true)
            setAcceptProccessErrorSubmit(false)
            setEmailErrorMessageSubmit(false)
        }
    }

    return (
        <div className="main">
            <Navigation />
            <div className="container" style={windowWidth < 768 ? { paddingTop: '150px' } : { paddingTop: '220px' }}>
                <div className="row m-0 p-0">
                    <div className="col-md-5 col-12 text-white">
                        <h3 style={{ textDecoration: 'underline' }}>
                            <strong>
                                <TypeWritter
                                    options={{
                                        strings: t('contactPage.connectWithMe'),
                                        autoStart: true,
                                        loop: false,
                                        delay: 50,
                                        cursor: ''
                                    }}
                                />
                            </strong>
                        </h3>
                        <br />
                        <div>
                            <span>
                                <FontAwesomeIcon icon={faUser} className="m-0" />
                            </span>
                            <span className="h6 m-2 p-2">Martin H.</span>
                        </div>
                        {/* <div className='mt-3'>
                            <span>
                                <FontAwesomeIcon icon={faMobileAlt} className='m-0' />
                            </span>
                            <span className='m-2 p-2'>
                                +420 000 000 000
                            </span>
                        </div> */}
                        <div className="mt-3">
                            <span>
                                <FontAwesomeIcon icon={faEnvelope} className="m-0" />
                            </span>
                            <span className="m-2 p-2">
                                <Link to="mailto:m_hrubes@centrum.cz" className="email-link-style">
                                    m_hrubes@centrum.cz
                                </Link>
                            </span>
                        </div>
                        <div className="mt-3">
                            <span>
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="m-0" />
                            </span>
                            <span className="m-2 p-2">Rakovník 269 01 | {t('contactPage.czechRepublic')}</span>
                        </div>
                        <div className="m-0 pt-3">
                            {/* <img className='aboutLinksImage m-1' src={facebookImage} alt='facebook' title='Facebook' />
                            <img className='aboutLinksImage m-1' src={instagramImage} alt='Instagram' title='Instagram' /> */}
                            <Link to="https://www.linkedin.com/in/martin-h-8b06751b5/" target="_blank">
                                <img className="aboutLinksImage m-1 rounded-circle" src={linkedin} alt="linkedIn" title="linkedIn" style={{ height: '35px' }} />
                            </Link>
                            <Link className="text-decoration-none" to="https://github.com/mhrubes?tab=repositories" target="_blank">
                                <img className="aboutLinksImage m-1 rounded-circle" src={githubImage} alt="Github" title="GitHub" />
                            </Link>
                        </div>
                    </div>

                    {windowWidth < 768 && <hr className="text-white mt-4" />}

                    <div className="col-md-7 col-12 text-white pb-5">
                        <h3>
                            <strong>
                                <TypeWritter
                                    options={{
                                        strings: t('contactPage.contactForm'),
                                        autoStart: true,
                                        loop: false,
                                        delay: 50,
                                        cursor: ''
                                    }}
                                />
                            </strong>
                        </h3>
                        <p>{t('inDevelopment')}</p>
                        <br />
                        <form>
                            <div className="form-group">
                                <label htmlFor="emailLabel">
                                    {t('contactPage.emailAddress')} <strong className="text-danger">*</strong>
                                </label>
                                <input type="email" className="form-control" id="emailFormInput" placeholder="email@example.com" onChange={(e) => setEmail(e.target.value)} disabled={isDisabled} />
                                {emailErrorMessageSubmit && email.length === 0 && <span style={{ color: 'red' }}>{t('contactPage.emailErrorMessageEmpty')}</span>}
                                {emailErrorMessageSubmit && email.length !== 0 && !email.includes('@') && <span style={{ color: 'red' }}>{t('contactPage.emailErrorMessageNotInclude')}</span>}
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-6 col-12 pt-2">
                                    <label htmlFor="firstnameLabel">{t('contactPage.firstname')}</label>
                                    <input type="text" className="form-control" placeholder={t('contactPage.firstname')} value={firstname} onChange={(e) => setFirstname(e.target.value)} disabled={isDisabled} />
                                </div>
                                <div className="col-md-6 col-12 pt-2">
                                    <label htmlFor="lastnameLabel">{t('contactPage.lastname')}</label>
                                    <input type="text" className="form-control" placeholder={t('contactPage.lastname')} value={lastname} onChange={(e) => setLastname(e.target.value)} disabled={isDisabled} />
                                </div>
                            </div>
                            <div className="form-group pt-3">
                                <label htmlFor="messageAreaLabel">{t('contactPage.yourMessage')}..</label>
                                <textarea className="form-control" id="messageAreaLabel" rows="3" value={message} onChange={(e) => setMessageArea(e.target.value)} disabled={isDisabled}></textarea>
                            </div>
                            <div className="form-group pt-2">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="acceptProccess" checked={acceptProccess} onChange={() => setAcceptProccess(acceptProccess ? false : true)} disabled={isDisabled} />
                                    <label className="form-check-label" htmlFor="gridCheck">
                                        {t('contactPage.gdpr')} <strong className="text-danger">*</strong>
                                    </label>
                                    <br />
                                    {!acceptProccess && acceptProccessErrorSubmit && <span style={{ color: 'red' }}>{t('contactPage.acceptProcessGDPR')}</span>}
                                </div>
                            </div>
                            <div className="text-center">
                                <button className="btn aboutButton mt-3 w-50" type="button" onClick={() => onSubmit()} disabled={isDisabled}>
                                    {t('contactPage.submitButton')}
                                </button>
                                {emailIsSent && (
                                    <div className="pt-2">
                                        <span style={{ color: 'lightgreen' }}>{t('contactPage.formSent')}</span>
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
