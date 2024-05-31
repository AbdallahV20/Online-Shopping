import './PrintingShirt.css'
import T_Shirt from '../../assets/images/printing-shirt.png'
export default function PrintingShirt() {
    return (
        <section className="printing-shirt mt-5">
            <div className='container'>

                <div className='section-div'>
                    <h2>T-shirt printing made easy.</h2>
                    <p>Let us show you how your product come to life.</p>
                </div>

                <div className='row pb-4 align-items-center'>
                    
                    <div className="col-lg-6 p-4">
                        <ul className='steps flex-column'>
                            <li>
                                <h3 className='ps-5 pb-5'>Choose from 412 custom products in our catalog</h3>
                            </li>
                            <li>
                                <h3 className='ps-5 pb-5'>Customize your design with graphics, text or your own uploaded images.</h3>
                            </li>
                            <li>
                                <h3 className='ps-5 pb-5'>Order prints by selecting your preferred T-shirt size, style, and quantity.</h3>
                            </li>
                            <li>
                                <h3 className='ps-5 pb-5'>Get your order sent to your door with free standard shipping.</h3>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-6 t-shirt-img">
                        <img src={T_Shirt} alt="how your product come to life" className='img-fluid d-none d-lg-block'></img>
                    </div>

                </div>
            </div>
    </section>
    )
}