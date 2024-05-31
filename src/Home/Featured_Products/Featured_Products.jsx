/* eslint-disable react/jsx-key */
import Card from './Card'
import { useSelector } from 'react-redux'

export default function Featured_Products() {
    const state = useSelector(state=>state.main_products.products)
    const loading = useSelector(state=>state.main_products.loading)
    const error = useSelector(state=>state.main_products.error)
    return (
        <section className="featured-products mt-5">
            <div className='container'>
                <div className='section-div'>
                    <h2>Featured products</h2>
                    <p>What’s more, we do it right!</p>
                </div>
                
                <div className='row'>
                {error && <div className='text-center display-6'>{error}</div>}
                {loading && !error && <div className='text-center'><span className="loader"></span></div> } 
                {
                    state
                    .map((item)=>
                        <div key={item.id} className='col-12 col-sm-6 col-md-4 col-lg-3  p-4 text-center' >
                            <Card {...item}/>
                        </div> 
                    )
                }
                </div>
            </div>
        </section>
    )
}