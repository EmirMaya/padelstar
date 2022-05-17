import './Footer.css'

import { FaFacebook, FaFacebookSquare, FaInstagram, FaInstagramSquare, FaWhatsapp, FaWhatsappSquare } from 'react-icons/fa'

const Footer = () => {
    return (

        <footer className='footer'>
            <div>
                <ul className='footer-ul'>
                    <li>
                        <a href='https://www.instagram.com/' target="_blank">
                            <FaInstagram className='icons' />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.facebook.com/' target="_blank">
                            <FaFacebook className='icons' />
                        </a>
                    </li>
                    <li>
                        <a href='https://web.whatsapp.com/' target="_blank">
                            <FaWhatsapp className='icons' />
                        </a>
                    </li>

                </ul>
            </div>

            <p className='p-footer'>Derechos reservados. Padelstar 2022.</p>

        </footer>

    )
}

export default Footer
