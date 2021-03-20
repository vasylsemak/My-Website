import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'
import './footer.scss';

const Footer = () => (
	<footer className='footer-links' id='footer'>
		<a href='mailto: vasylsmk1401@gmail.com' target='_blank' rel="noreferrer">
			<FontAwesomeIcon icon={faEnvelope} />
		</a>
		<a href='https://www.linkedin.com/in/vasylsemak/' target='_blank' rel='noreferrer'>
			<FontAwesomeIcon icon={faLinkedin} />
		</a>
		<a href='https://github.com/vasylsemak' target='_blank' rel='noreferrer'>
			<FontAwesomeIcon icon={faGithub} />
		</a>
		<a href='https://www.facebook.com/vasyl.semak' target='_blank' rel='noreferrer'>
			<FontAwesomeIcon icon={faFacebook} />
		</a>
	</footer>
)

export default Footer;
