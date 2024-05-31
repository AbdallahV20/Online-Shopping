import './Services.css'
// eslint-disable-next-line react/prop-types
export default function Card({icon,title}) {
    return (
        <article className="services-card d-flex mt-2 mt-md-0 gap-md-3 flex-column flex-md-row text-center text-md-start">
            <span>{icon}</span>
            <div>
                <h3 className='title'>{title}</h3>
                <p className='sub-title'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </article>
    )
}