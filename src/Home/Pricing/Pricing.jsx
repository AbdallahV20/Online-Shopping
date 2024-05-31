import './Pricing.css'
import circle from '../../assets/images/circle.png'
export default function Pricing() {
    return (
        <section className="pricing">
            <img src={circle} className='img-circle img-fluid' alt="circle"></img>
            <div className="container mt-5">
                <div className='section-div'>
                    <h2>Simple pricing foreveryone</h2>
                    <p>Choose a plan and get started</p>
                </div>
                <div className=" row align-items-center pb-5">
                    
                    <div className="col-12 col-lg-4 ">
                        <div className='price rounded p-4'>
                            <div className='d-flex flex-column gap-3 py-4 text-center'>
                                <span className='fw-bold' style={{fontSize:"20px"}}>Personal</span>
                                <span className='fw-bold' style={{fontSize:"48px"}}>$12.99
                                    <span className='target'>/user</span>
                                </span>
                            </div>
                            <div className='offers py-4'>
                                <p>Free licensed icons</p>
                                <p>Fast and free shipping</p>
                                <p>No credit card required</p>
                                <p>Friendly supports</p>
                            </div>
                            <button className='btn btn-light py-2 fw-bold'>Get Started</button>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 mt-4 mt-lg-0">
                        <div className='price  rounded p-4'>
                            <button className='btn btn-dark mx-auto' style={{width:"fit-content",float:"right"}}>Popular</button>
                            <div className='d-flex flex-column gap-3 py-4 text-center' style={{clear:"both"}}>
                                <span className='fw-bold' style={{fontSize:"20px"}}>Professional</span>
                                <span className='fw-bold' style={{fontSize:"48px"}}>$59.99
                                    <span className='target'>/team</span>
                                </span>
                            </div>
                            <div className='offers py-4'>
                                <p>Full access to all features</p>
                                <p>Fast and free standard shipping</p>
                                <p>No credit card required</p>
                                <p>Use on unlimited projects</p>
                                <p>Team collaboration feature.</p>
                                <p>Friendly supports</p>
                            </div>
                            <button className='btn btn-dark py-2 fw-bold middle-button'>Get Started</button>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 mt-4 mt-lg-0">
                        <div className='price p-4 rounded'> 
                            <div className='d-flex flex-column gap-3 py-4 text-center'>
                                <span className='fw-bold' style={{fontSize:"20px"}}>Enterprise</span>
                                <span className='fw-bold' style={{fontSize:"48px"}}>$99.99
                                    <span className='target'>/team</span>
                                </span>
                            </div>
                            <div className='offers py-4'>
                                <p>All features in Pro Plan.</p>
                                <p>Use on unlimited projects</p>
                                <p>Team collaboration feature.</p>
                                <p>Friendly supports</p>
                            </div>
                            <button className='btn btn-light py-2 fw-bold'>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}