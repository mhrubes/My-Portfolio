import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import TypeWritter from 'typewriter-effect';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBriefcase, faMobileAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Navigation from '../navigation';

function Contact() {
    const { t, i18n } = useTranslation();

    const [email, setEmail] = useState('');
    const [message, setMessageArea] = useState('');

    const [emailErrorMessage, setEmailErrorMessage] = useState('');

    const onSubmit = () => {
        if (email === '' || email.length === 0) {
            setEmailErrorMessage('Email cannot be empty.')
        }
        else if (!email.includes('@')) {
            setEmailErrorMessage('Email doesn\'\t contain @.')
        }
        else {
            setEmailErrorMessage('');
        }
    }

    return (
        <div className='main'>
            <Navigation />

            <div className='container' style={{ paddingTop: '300px' }}>
                <div className='row m-0 p-0'>
                    <div className='col-md-5 col-12 text-white'>
                        <h3>
                            <strong>
                                <TypeWritter
                                    options={{
                                        strings: 'Spojte se semnou',
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
                                <FontAwesomeIcon icon={faUser} className='m-0' />
                            </span>
                            <span className='h6 m-2 p-2'>
                                Martin H.
                            </span>
                        </div>

                        <div className='mt-3'>
                            <span>
                                <FontAwesomeIcon icon={faBriefcase} className='m-0' />
                            </span>
                            <span className='m-2 p-2'>
                                IČO:
                            </span>
                        </div>

                        <div className='mt-3'>
                            <span>
                                <FontAwesomeIcon icon={faBriefcase} className='m-0' />
                            </span>
                            <span className='m-2 p-2'>
                                DIČ:
                            </span>
                        </div>

                        <div className='mt-3'>
                            <span>
                                <FontAwesomeIcon icon={faMobileAlt} className='m-0' />
                            </span>
                            <span className='m-2 p-2'>
                                Telefon:
                            </span>
                        </div>

                        <div className='mt-3'>
                            <span>
                                <FontAwesomeIcon icon={faEnvelope} className='m-0' />
                            </span>
                            <span className='m-2 p-2'>
                                Email:
                            </span>
                        </div>

                        <div className='mt-3'>
                            <span>
                                <FontAwesomeIcon icon={faMapMarkerAlt} className='m-0' />
                            </span>
                            <span className='m-2 p-2'>
                                Telefon:
                            </span>
                        </div>

                    </div>
                    <div className='col-md-7 col-12 text-white'>
                        <form>
                            <div className='form-group'>
                                <label for='emailLabel'>Email address <strong>*</strong></label>
                                <input type='email' className='form-control' id='emailFormInput' placeholder='email@example.com'
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <span style={{ color: 'red' }}>
                                    {emailErrorMessage}
                                </span>
                            </div>

                            <div className='row mt-2'>
                                <div className='col-md-6 col-12'>
                                    <label for='firstnameLabel'>Firstname</label>
                                    <input type='text' className='form-control' placeholder='First name' />
                                </div>
                                <div className='col-md-6 col-12'>
                                    <label for='lastnameLabel'>Lastname</label>
                                    <input type='text' className='form-control' placeholder='Last name' />
                                </div>
                            </div>

                            <div className='form-group mt-3'>
                                <label for='messageAreaLabel'>Your message..</label>
                                <textarea className='form-control' id='messageAreaLabel' rows='3'
                                    onChange={(e) => setMessageArea(e.target.value)}
                                ></textarea>
                            </div>
                            <div className='text-center'>
                                <button className='btn aboutButton mt-3' type='button' onClick={() => onSubmit()}>Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
