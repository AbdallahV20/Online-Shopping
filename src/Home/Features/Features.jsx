import './Features.css'
import Image1 from '../../assets/images/feature1.png'
import Image2 from '../../assets/images/feature2.png'
import Image3 from '../../assets/images/feature3.png'
import Card from './Card'
export default function Features() {
    const data = [
        {
            id:1,
            img:Image1,
            title:"Premium quality shirts",
        },
        {
            id:3,
            img:Image2,
            title:"Access on any device",
        },
        {
            id:2,
            img:Image3,
            title:"Access on any device",
        }
    ]
    return (
        <section className="features mt-5">
            <div className='container'>
                <div className='section-div'>
                    <h2>T-shirt printing made easy.</h2>
                    <p>Let us show you how your product come to life.</p>
                </div>

                <div className='row justify-content-center align-items-center'>
                        {data.map(item=>
                            <div className='col-md-4 mt-4' key={item.id}>
                                <Card  {...item} />
                            </div>
                        )}
                </div>
            </div>
        </section>
    )
}