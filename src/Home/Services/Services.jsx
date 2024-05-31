import './Services.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShirt,faBox } from '@fortawesome/free-solid-svg-icons';
import { faFaceGrinStars } from '@fortawesome/free-regular-svg-icons';
import Card from './Card';
export default function Services() {
    let data = [
        {
            id:1,
            icon:<FontAwesomeIcon icon={faFaceGrinStars} />,
            title:'Top quality'
        },
        {
            id:2,
            icon:<FontAwesomeIcon icon={faShirt} />,
            title:'Mix and match'            
        },
        {
            id:3,
            icon:<FontAwesomeIcon icon={faBox} />,
            title:'Shipping worldwide'            
        }        
    ]
    return (
        <section className='services mt-5'>
            <div className="container">
                <div className="row">
                    {data.map(item=>
                        <div className='col-12 col-md-4' key={item.id}>
                            <Card {...item} />
                        </div>)}
                </div>
            </div>
        </section>
    )
}