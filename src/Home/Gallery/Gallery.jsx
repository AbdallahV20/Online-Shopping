import './Gallery.css'
import gallery1 from '../../assets/images/gallery1.jpg'
import gallery2 from '../../assets/images/gallery2.jpg'
import gallery3 from '../../assets/images/gallery3.jpg'
import gallery4 from '../../assets/images/gallery4.jpg'
import gallery5 from '../../assets/images/gallery5.jpg'
export default function Gallery() {
    return (
        <section className='gallery mt-5'>
            <div className='container'>
                <div className="row gap-4 gap-md-0">


                    <div className="col-md-6 col-lg-3">

                        <div className='img-container'>
                            <img src={gallery1} width="100%" alt="Shop Hoodies"></img>
                            <button className='btn btn-light'>Shop Hoodies</button>
                        </div>

                        <div  className='img-container mt-4'>
                            <img src={gallery2} width="100%" alt="Shop Tanktop"></img>
                            <button className='btn btn-light'>Shop Tanktop</button>
                        </div>

                    </div>


                    <div className="col-md-12 order-3 order-lg-0 col-lg-6 mt-0 mt-md-4 mt-lg-0">
                        
                        <div  className='img-container'>
                            <img src={gallery3} width="100%" alt="Shop T-Shirt"></img>
                            <button className='btn btn-light'>Shop T-Shirt</button>
                        </div>

                    </div>


                    <div className="col-md-6 col-lg-3">

                        <div  className='img-container'>
                            <img src={gallery4} width="100%" alt="Shop Sweater"></img>
                            <button className='btn btn-light'>Shop Sweater</button>
                        </div>

                        <div  className='img-container mt-4'>
                            <img src={gallery5} width="100%" alt="Shop Designer"></img>
                            <button className='btn btn-light'>Shop Designer</button>
                        </div>

                    </div>

                    
                </div>
            </div>
        </section>
    )
}