import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import TypeWritter from 'typewriter-effect'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'

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

    const [emailErrorMessageSubmit, setEmailErrorMessageSubmit] = useState(false)
    const [messageErrorMessageSubmit, setMessageErrorMessageSubmit] = useState(false)
    const [acceptProccessErrorSubmit, setAcceptProccessErrorSubmit] = useState(false)
    const [captchaError, setCaptchaError] = useState(false)

    const [isLoading, setIsLoading] = useState(false)
    const [isDisabled] = useState(false)

    // CAPTCHA state
    const [captchaNum1, setCaptchaNum1] = useState(0)
    const [captchaNum2, setCaptchaNum2] = useState(0)
    const [captchaNum3, setCaptchaNum3] = useState(0)
    const [captchaAnswer, setCaptchaAnswer] = useState('')
    const [captchaCorrectAnswer, setCaptchaCorrectAnswer] = useState(0)

    // Generování nové CAPTCHA
    const generateCaptcha = () => {
        const num1 = Math.floor(Math.random() * 100) + 1
        const num2 = Math.floor(Math.random() * 100) + 1
        const num3 = Math.floor(Math.random() * 100) + 1
        setCaptchaNum1(num1)
        setCaptchaNum2(num2)
        setCaptchaNum3(num3)
        setCaptchaCorrectAnswer(num1 + num2 + num3)
        setCaptchaAnswer('')
        setCaptchaError(false)
    }

    // Inicializace CAPTCHA při načtení komponenty
    useEffect(() => {
        generateCaptcha()
    }, [])

    // Funkce pro validaci emailu pomocí regulárního výrazu
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    // Funkce pro kontrolu, zda jsou všechna povinná pole vyplněná
    const isFormValid = () => {
        return email.trim() !== '' && isValidEmail(email) && message.trim() !== '' && acceptProccess && captchaAnswer.trim() !== '' && parseInt(captchaAnswer) === captchaCorrectAnswer
    }

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const onSubmit = async (e) => {
        e?.preventDefault()

        // Validace emailu
        if (email === '' || email.length === 0) {
            setEmailErrorMessageSubmit(true)
            return
        } else if (!isValidEmail(email)) {
            setEmailErrorMessageSubmit(true)
            return
        } else {
            setEmailErrorMessageSubmit(false)
        }

        if (message.trim() === '' || message.length === 0) {
            setMessageErrorMessageSubmit(true)
            return
        } else {
            setMessageErrorMessageSubmit(false)
        }

        if (!acceptProccess) {
            setAcceptProccessErrorSubmit(true)
            return
        } else {
            setAcceptProccessErrorSubmit(false)
        }

        // Validace CAPTCHA
        if (captchaAnswer.trim() === '' || parseInt(captchaAnswer) !== captchaCorrectAnswer) {
            setCaptchaError(true)
            return
        } else {
            setCaptchaError(false)
        }

        if (email !== '' && email.length !== 0 && isValidEmail(email) && message.trim() !== '' && acceptProccess && parseInt(captchaAnswer) === captchaCorrectAnswer) {
            setIsLoading(true)

            // EmailJS konfigurace - tyto hodnoty musíte získat z EmailJS dashboardu
            const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || ''
            const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || ''
            const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || ''

            // Kontrola, zda jsou nastaveny environment variables
            if (!serviceId || !templateId || !publicKey) {
                console.error('EmailJS není správně nakonfigurován. Prosím nastavte environment variables podle EMAILJS_SETUP.md')
                toast.error(t('contactPage.formNotConfigured'), {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                })
                setIsLoading(false)
                return
            }

            const templateParams = {
                from_name: `${firstname} ${lastname}`.trim() || 'Neznámý',
                from_email: email,
                message: message,
                to_email: 'm_hrubes@centrum.cz',
                reply_to: email
            }

            try {
                await emailjs.send(serviceId, templateId, templateParams, publicKey)
                setAcceptProccessErrorSubmit(false)
                setEmailErrorMessageSubmit(false)
                setMessageErrorMessageSubmit(false)

                // Reset formuláře
                setEmail('')
                setFirstname('')
                setLastname('')
                setMessageArea('')
                setAcceptProccess(false)
                generateCaptcha() // Generování nové CAPTCHA

                // Toast notifikace pro úspěch
                toast.success(t('contactPage.formSent'), {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                })
            } catch (error) {
                console.error('Chyba při odesílání emailu:', error)
                toast.error(t('contactPage.formError'), {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                })
            } finally {
                setIsLoading(false)
            }
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
                        <br />
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <label htmlFor="emailLabel">
                                    {t('contactPage.emailAddress')} <strong className="text-danger">*</strong>
                                </label>
                                <input type="email" className="form-control" id="emailFormInput" placeholder="email@example.com" value={email} onChange={(e) => setEmail(e.target.value)} disabled={isDisabled} />
                                {emailErrorMessageSubmit && email.length === 0 && <span style={{ color: 'red' }}>{t('contactPage.emailErrorMessageEmpty')}</span>}
                                {emailErrorMessageSubmit && email.length !== 0 && !isValidEmail(email) && <span style={{ color: 'red' }}>{t('contactPage.emailErrorMessageNotInclude')}</span>}
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
                                <label htmlFor="messageAreaLabel">
                                    {t('contactPage.yourMessage')} <strong className="text-danger">*</strong>
                                </label>
                                <textarea className="form-control" id="messageAreaLabel" rows="3" value={message} onChange={(e) => setMessageArea(e.target.value)} disabled={isDisabled}></textarea>
                                {messageErrorMessageSubmit && message.trim().length === 0 && <span style={{ color: 'red' }}>{t('contactPage.messageErrorMessageEmpty')}</span>}
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
                            <div className="form-group pt-3">
                                <label htmlFor="captchaLabel">
                                    {t('contactPage.captchaLabel')} <strong className="text-danger">*</strong>
                                </label>
                                <div className="d-flex align-items-center gap-2">
                                    <div
                                        className="border rounded p-2 bg-light text-dark"
                                        style={{
                                            minWidth: '150px',
                                            textAlign: 'center',
                                            fontSize: '18px',
                                            fontWeight: 'bold',
                                            userSelect: 'none',
                                            WebkitUserSelect: 'none',
                                            MozUserSelect: 'none',
                                            msUserSelect: 'none'
                                        }}
                                        onCopy={(e) => e.preventDefault()}
                                        onCut={(e) => e.preventDefault()}
                                        onPaste={(e) => e.preventDefault()}
                                    >
                                        {captchaNum1} + {captchaNum2} + {captchaNum3} = ?
                                    </div>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="captchaInput"
                                        placeholder={t('contactPage.captchaPlaceholder')}
                                        value={captchaAnswer}
                                        onChange={(e) => {
                                            setCaptchaAnswer(e.target.value)
                                            setCaptchaError(false)
                                        }}
                                        onCopy={(e) => e.preventDefault()}
                                        onPaste={(e) => e.preventDefault()}
                                        onCut={(e) => e.preventDefault()}
                                        disabled={isDisabled}
                                        style={{ maxWidth: '150px' }}
                                    />
                                    <button type="button" className="btn btn-sm btn-outline-light" onClick={generateCaptcha} disabled={isDisabled} title={t('contactPage.captchaRefresh')}>
                                        🔄
                                    </button>
                                </div>
                                {captchaError && <span style={{ color: 'red' }}>{t('contactPage.captchaError')}</span>}
                            </div>
                            <div className="text-center">
                                <button className="btn aboutButton mt-3 w-50" type="submit" disabled={isDisabled || isLoading || !isFormValid()}>
                                    {isLoading ? 'Odesílám...' : t('contactPage.submitButton')}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
