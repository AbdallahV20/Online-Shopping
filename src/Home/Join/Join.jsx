import './Join.css'
import Logo0 from '../../assets/images/logo (0).png'
import Logo1 from '../../assets/images/logo (1).png'
import Logo2 from '../../assets/images/logo (2).png'
import Logo3 from '../../assets/images/logo (3).png'
import Logo4 from '../../assets/images/logo (4).png'
import Logo5 from '../../assets/images/logo (5).png'
import Logo6 from '../../assets/images/logo (6).png'
export default function Join() {
    return (
        <search className='join mt-5'>
            <div className="container">
                <div className='col box'>
                    
                    <img src={Logo0} alt='logo' className='img-fluid'></img>
                    <img src={Logo1} alt='logo' className='img-fluid'></img>
                    <img src={Logo2} alt='logo' className='img-fluid'></img>
                    <img src={Logo3} alt='logo' className='img-fluid'></img>
                    <img src={Logo4} alt='logo' className='img-fluid'></img>
                    <img src={Logo5} alt='logo' className='img-fluid'></img>
                    <img src={Logo6} alt='logo' className='img-fluid'></img>

                    <div style={{maxWidth:"400px",textAlign:"center",margin:"auto"}}>
                        <h2 style={{fontSize:"40px",fontWeight:"700"}}>Join the 7,000+ companies trusting us</h2>
                        <p style={{fontSize:"20px"}} className='mt-2 bold'>You’ve got the ideas, we’ve got the tools</p>
                        <button className='btn btn-lg btn-main mt-3'>Get Started</button>
                    </div>
                </div>
            </div>
        </search>
    )
}