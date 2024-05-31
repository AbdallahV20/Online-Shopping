import Circle1 from '../../assets/images/circle-left.svg'
import Circle2 from '../../assets/images/circle-right.svg'
import Mock from '../../assets/images/mock.png'
import './Designs.css'
export default function GetStarted() {
    return (
        <section className="get-started mt-5 mx-3" >
            <div className="container ">
                    <img className='circle c1 img-fluid' src={Circle1} alt="circle"></img>
                    <img className='circle c2 img-fluid' src={Circle2} alt="circle"></img>

                    <div className="row align-items-center pt-5">

                        <div className="col-md-6 d-none  d-lg-block">
                            <img src={Mock} alt="Mock Image" className='mock-img img-fluid'></img>
                        </div>

                        <div className="col-md-6 pb-5 ps-3 info">
                            <h3 style={{fontWeight:"700",fontSize:"30px"}}>10,000+ of free images, icons, and graphics</h3>
                            <p style={{fontSize:"20px"}} className='mt-3'>You’ve got the ideas, we’ve got the tools</p>
                            <button className='btn btn-main mt-4'>Get Started</button>
                        </div>
                    </div>
            </div>
        </section>
    )
}