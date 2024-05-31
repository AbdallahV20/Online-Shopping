import './Main.css'
import Banner from './Banner'
import Banner1 from '../../assets/images/banner1.jpg'
import Banner2 from '../../assets/images/banner2.jpg'
export default function Main() {
    const data = [
        {
            id:0,
            img: Banner1,
            title:"T-shirt printing made easy.",
            subTitle:"Create your design for your online business",
            btnTitle:"Create a T-shirt"
        },
        {
            id:1,
            img: Banner2,
            title:"Bring your ideas to life in minute",
            subTitle:"Print shirts for yourself or your creative works",
            btnTitle:"Shop Now"
        }
    ] 
    return (
        <section className="main">
            <div className="container-fluid">
                <div className="row ">
                    {data.map(item=>
                        <div className='banner-container col-12 col-md-6' key={item.id}>  
                                <Banner {...item}/>
                        </div>)}
                </div>
            </div>
        </section>
    )
}