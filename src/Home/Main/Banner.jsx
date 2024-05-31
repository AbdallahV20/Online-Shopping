import './Main.css'
// eslint-disable-next-line react/prop-types
export default function Banner({title,subTitle,btnTitle,img}) {
    const bannerStyle = {
        backgroundImage:`url(${img})`,
        backgroundSize:"cover",
        backgroundPosition:"center"
    }
    return (
        <article className='banner' style={bannerStyle}>

            <div className='banner-info'>
                <h2 className='title'>{title}</h2>
                <p className='sub-title'>{subTitle}</p>
                <button className="btn btn-main">{btnTitle}</button>
            </div>
            
        </article>
    )
}