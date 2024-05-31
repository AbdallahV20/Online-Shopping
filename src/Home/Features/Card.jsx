/* eslint-disable react/prop-types */
export default function Card ({title,img}) {
    return (
        <div className="features-card  text-center text-lg-start">
            <img src={img} alt={"features"} className="img-fluid"></img>
            <div className="px-4 mt-4">
                <h3 style={{fontSize:"24px",fontWeight:"bold"}}>{title}</h3>
                <span style={{fontSize:"18px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
            </div>
        </div>
    )
}