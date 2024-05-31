import './Footer.css'
import logo from '../../assets/images/logo.png'
import footerImg from '../../assets/images/footer.png'
export default function Footer() {
    return (
        <footer className='pt-5 pb-2'>
            <div className="container">
                <div className="row text-center text-sm-start">

                    <div className="col-12 col-sm-6 col-md-3 pe-4 mt-4 mt-md-0">
                        <img src={logo} alt="logo" height={30}></img>
                        <address style={{fontSize:"16px",margin:0}}>
                            <a href="mailto:hello@minaspace.io">hello@minaspace.io</a>
                            <a href="tel:+020360383996">+02 036 038 3996</a>
                            <a href="#">3665 Paseo Place, Suite 0960 San Diego</a>
                        </address>
                    </div>

                    <div className="col-12 col-sm-6 col-md-3 pe-4 mt-4 mt-md-0">
                        <p className='fw-bold text-black'>Information</p>
                        <a href="#">About us</a>
                        <a href="#">Our Blog</a>
                        <a href="#">Start a Return</a>
                        <a href="#">Contact Us</a>
                    </div>

                    <div className="col-12 col-sm-6 col-md-3 pe-4 mt-4 mt-md-0">
                        <p className='fw-bold text-black'>Useful links</p>
                        <a href="#">My Account</a>
                        <a href="#">Print Provider</a>
                        <a href="#">Become a Partner</a>
                        <a href="#">Custom Products</a>
                    </div>  

                    <div className="col-12 col-sm-6 col-md-3 pe-4 mt-4 mt-md-0">
                        <p className='fw-bold text-black'>Newsletter</p>
                        <a href="#" >Get the latest news, events & more delivered to your inbox.</a>
                        <input type="text" className='form-control mt-4' placeholder='Your Email Address'></input>
                    </div> 

                    <img src={footerImg} className="mt-5" style={{width:"400px",margin:"auto",cursor:"pointer"}} alt="links"></img>
                    <p className='text-center mt-3' style={{color:"#7E7E7E"}}>©2024 Abdallah. All rights reserved.</p>  
                </div>
            </div>
        </footer>
    )
}