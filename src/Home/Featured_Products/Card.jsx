/* eslint-disable react/prop-types */
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
export default function Card({image,title,price,rate,count}) {
    rate = rate > 5 ? (((rate - 1) / (10 - 1)) * (5 - 1) + 1).toFixed() : rate
    const maxRating = 5; // Assuming maximum rating is 5
    const fullStars = Math.floor(rate); // Number of full stars
    const emptyStars = maxRating - fullStars // Number of empty stars
    return (
        <div className='featured-products-card position-relative'>
            <div className='position-absolute top-0 end-0'>
                {rate >= 4 && <span className='text-white p-1 rounded bg-warning d-block my-2 me-2' style={{fontSize:"14px"}}>Hot</span>}
                {count < 100 && <span className='text-white p-1 rounded bg-primary d-block my-2 me-2' style={{fontSize:"14px"}}>New</span>}
            </div>
            
            <img className="rounded img-fluid" src={image} alt="img"></img>
            <div className='mt-3 text-center'>
                <h3 className="fw-bold product-title">{title}</h3>
                <div className='d-flex justify-content-between align-items-between'>
                    <div>
                        {[...Array(fullStars)].map((_, index) => (
                            <span key={index}><FontAwesomeIcon className='text-warning' icon={faStar} /></span>
                        ))}
                        
                        {[...Array(emptyStars)].map((_, index) => (
                            <span key={index}><FontAwesomeIcon icon={faStar} /></span>
                        ))}

                    </div>
                    <span className="fw-bold">${price}</span>
                </div>
                
            </div>
        </div>
    )
}