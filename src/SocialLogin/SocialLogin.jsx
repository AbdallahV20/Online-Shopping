import './SocialLogin.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,faFacebookF,faInstagram,faYoutube } from '@fortawesome/free-brands-svg-icons';
export default function SocialLogin() {
    return (
        <section className="social-login py-2">
            <div className="container">
                <div className='d-flex flex-column gap-1 gap-sm-0 flex-sm-row align-items-center justify-content-between flex-wrap'>
                    <div className=' order-2 order-lg-1'>
                        <ul className='social-links d-flex gap-4'>
                            <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faYoutube} /></a></li>
                        </ul>
                    </div>
                        
                    <div className="free-shipping-div text-center order-3 order-lg-2 m-0 mt-sm-2 mt-lg-0">
                        <span className="free-shipping ms-1 ">Free shipping on all U.S. orders $50+</span>
                    </div>

                    <div className='d-flex gap-3 order-1 order-lg-3  '>
                        <button className="btn btn-login">Login</button>
                        <button className="btn btn-signup">Sign Up</button>
                    </div>
                </div>
            </div>
        </section>
    )
}