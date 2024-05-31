import './Testimonials.css'
import Opinion1 from '../../assets/images/opinions (1).png'
import Opinion2 from '../../assets/images/opinions (2).png'
import Opinion3 from '../../assets/images/opinions (3).png'
import background from '../../assets/images/testimonials.png'
export default function Testimonials() {
    return (
        <section className="testimonials mt-5">
            <img src={background} className='background d-none d-lg-block img-fluid' alt="background"></img>
            <div className="container">
                <div className='section-div'>
                    <h2>What People Are Saying</h2>
                    <p>We provide support for more than 15K+ Businesses.</p>
                </div>

                <div id="carouselExampleIndicators" className="carousel slide">
                    <div className="carousel-indicators ">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active bg-black" style={{width:"13px",height:"13px",borderRadius:"50%"}} aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className = "bg-black" style={{width:"13px",height:"13px",borderRadius:"50%"}} aria-label="Slide 2"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row p-4 px-3 pb-5">
                                    <div className='col-12 col-md-6 col-lg-4 mt-5 mt-lg-0'>
                                        <div className="box">
                                            <div className='d-flex gap-2 align-items-center'>
                                                <img src={Opinion1} style={{width:"20%"}} alt="opnition"></img>
                                                <span className='fw-bold' style={{fontSize:"16px",textWrap:"nowrap"}}>Dean D.<span style={{fontSize:"14px",color:"#7E7E7E"}}>Director</span></span>
                                            </div>
                                            <q className='mt-4 d-block fw-bold' style={{fontSize:"16px"}}>Great quality products - Flags,
                                                programs for exceptional capacities,
                                                birthday, and occasion welcome are
                                                largely still mainstream on paper.
                                            </q>
                                        </div>
                                    </div>
                                    <div className='col-12 col-md-6 col-lg-4 mt-5 mt-lg-0'>
                                        <div className="box">
                                            <div className='d-flex gap-2 align-items-center'>
                                                <img src={Opinion2} style={{width:"20%"}} alt="opnition"></img>
                                                <span className='fw-bold' style={{fontSize:"16px",textWrap:"nowrap"}}>Cristian L.<span style={{fontSize:"14px",color:"#7E7E7E"}}>Manager</span></span>
                                            </div>
                                            <q className='mt-4 d-block fw-bold' style={{fontSize:"16px"}}>Best services ever - Flags, programs
                                                for exceptional capacities, birthday,
                                                and are largely still mainstream on
                                                paper occasion welcome.
                                            </q>
                                        </div>
                                    </div>
                                    <div className='col-12 col-md-6 col-lg-4 mt-5 mt-lg-0'>
                                        <div className="box">
                                            <div className='d-flex gap-2 align-items-center'>
                                                <img src={Opinion3} style={{width:"20%"}} alt="opnition"></img>
                                                <span className='fw-bold' style={{fontSize:"16px",textWrap:"nowrap"}}>Leonel R.<span style={{fontSize:"14px",color:"#7E7E7E"}}>Director</span></span>
                                            </div>
                                            <q className='mt-4 d-block fw-bold' style={{fontSize:"16px"}}>Top noth support - Flags, programs
                                                for, birthday, and occasion welcome
                                                are largely still mainstream on paper
                                                exceptional capacities.
                                            </q>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row p-4 px-3 pb-5">
                                    <div className='col-12 col-md-6 col-lg-4 mt-5 mt-lg-0'>
                                        <div className="box">
                                            <div className='d-flex gap-2 align-items-center'>
                                                <img src={Opinion1} style={{width:"20%"}} alt="opnition"></img>
                                                <span className='fw-bold' style={{fontSize:"16px",textWrap:"nowrap"}}>مدام عبير<span style={{fontSize:"14px",color:"#7E7E7E"}}></span></span>
                                            </div>
                                            <q className='mt-4 d-block fw-bold' style={{fontSize:"16px"}}>
                                                ما شاء الله بجد , بشتري هدوم ولادي علطول من هنا
                                            </q>
                                        </div>
                                    </div>
                                    <div className='col-12 col-md-6 col-lg-4 mt-5 mt-lg-0'>
                                        <div className="box">
                                            <div className='d-flex gap-2 align-items-center'>
                                                <img src={Opinion2} style={{width:"20%"}} alt="opnition"></img>
                                                <span className='fw-bold' style={{fontSize:"16px",textWrap:"nowrap"}}>استاذ رفعت<span style={{fontSize:"14px",color:"#7E7E7E"}}></span></span>
                                            </div>
                                            <q className='mt-4 d-block fw-bold' style={{fontSize:"16px"}}>
                                                الاسعار غليت اوي , ارحمونا بقى 
                                            </q>
                                        </div>
                                    </div>
                                    <div className='col-12 col-md-6 col-lg-4 mt-5 mt-lg-0'>
                                        <div className="box">
                                            <div className='d-flex gap-2 align-items-center'>
                                                <img src={Opinion3} style={{width:"20%"}} alt="opnition"></img>
                                                <span className='fw-bold' style={{fontSize:"16px",textWrap:"nowrap"}}>الدكتور عصام<span style={{fontSize:"14px",color:"#7E7E7E"}}></span></span>
                                            </div>
                                            <q className='mt-4 d-block fw-bold' style={{fontSize:"16px"}}>
                                                محتاج شغل
                                            </q>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>

                                

                </div>
        </section>
    )
}