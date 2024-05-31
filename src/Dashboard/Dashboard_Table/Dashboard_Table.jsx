/* eslint-disable no-unused-vars */
import { useState } from 'react'
import axios from 'axios';
import './Dashboard_Table.css'
import { addProduct,deleteProduct,updateProduct } from '../../Store/Actions'
import { useDispatch, useSelector } from 'react-redux'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import toast, { Toaster } from 'react-hot-toast';
const notify = (result) => toast.success(`Product ${result} Successfully`);
export default function Dashboard_Table() {
    const acceptedCategories = ["men's clothing","women's clothing","new clothes"]
    const products = useSelector(state=>state.main_products.products)
    const loading = useSelector(state=>state.main_products.loading)
    const error = useSelector(state=>state.main_products.error)
    const dispatch = useDispatch()
    const [itemId, setItemId] = useState(null);

    /*unique key for each product */
    const [product,setProduct] = useState({
        price: '',
        title: '',
        image:'',
        rate:'',
        count:'',
    })

    async function onClickAddHandler(e) {
        e.preventDefault();
        try {
            const response = await axios.post('https://661c69bce7b95ad7fa6a4ed9.mockapi.io/v1/products', product);
            dispatch(addProduct(response.data));
            clearingResults();
            notify("Added");
        } catch (error) {
            console.error('Error adding product:', error);
        }
    }
    
    async function onClickUpdateHandler(e, id) {
        
        e.preventDefault();
        try {
            const response = await axios.put(`https://661c69bce7b95ad7fa6a4ed9.mockapi.io/v1/products/${id}`, product);
            dispatch(updateProduct(response.data));
            clearingResults();
            notify("Updated");
        } catch (error) {
            console.error('Error updating product:', error);

        }
    }
    function onClickDeleteHandler(id) {
        try {
            const reponse = axios.delete(`https://661c69bce7b95ad7fa6a4ed9.mockapi.io/v1/products/${id}`)
            dispatch(deleteProduct(id))
            notify("Deleted")            
        }
        catch(error) {
            console.log("Error deleteing product",error)
        }
    }

    function clearingResults() {
        setProduct({
            price: '',
            title: '',
            image:'',
            rate:'',
            count:'',
        })
        document.getElementById('image').value = '';
    }

    function onChangeImage(e) {
        const file = e.target.files[0]
        if(file) {
            const reader = new FileReader()
            reader.onloadend = () =>{
                setProduct({ ...product, image: reader.result });
            }
            reader.readAsDataURL(file);
        }
    }

    return (
        <section className='container-lg'>
            <Toaster position='top-right'/>
            <div className='pt-3 d-flex justify-content-between align-items-center mt-2 '>
                <h1 className='fw-bold' >Dashboard</h1>

                <button type="button" className="btn btn-main" data-bs-toggle="modal" data-bs-target="#staticBackdrop-add">
                Add +
                </button>
                {/* Modal for Adding */}
                <div className="modal fade " id="staticBackdrop-add" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add New Product</h1>
                            <button type="button" onClick={clearingResults} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={onClickAddHandler}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" value={product.title} maxLength={20} onChange={(e)=>setProduct({...product,title:e.target.value})} className="form-control" id="name" placeholder="Product Name"></input>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="image" className="form-label">Image</label>
                                    <input type="file" onChange={onChangeImage}  className="form-control" id="image" placeholder="Product Image Link"></input>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="rate" className="form-label">Rate</label>
                                    <input type="text" value={product.rate} maxLength={6} onChange={(e)=>setProduct({...product,rate:e.target.value})} className="form-control" id="rate" placeholder="Product Rate"></input>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="count" className="form-label">Count</label>
                                    <input type="text" value={product.count} maxLength={6} onChange={(e)=>setProduct({...product,count:e.target.value})} className="form-control" id="count" placeholder="Product Count"></input>
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="price" className="form-label">Price</label>
                                    <input type="text" value={product.price} maxLength={6} onChange={(e)=>setProduct({...product,price:e.target.value})} className="form-control" id="price" placeholder="Product Price"></input>
                                </div>
                                <div className='mb-3'>
                                    <button type="submit" className="btn btn-main"  data-bs-dismiss="modal">Save changes</button>
                                </div>
                            </form>

                        </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* If there's an error , display it */}
            {error && <div className='text-center display-6'>{error}</div>}

            {/* show loading spinner untill the products are fetched */}   
            {loading && !error && <div className='text-center'><span className="loader"></span></div> }

            {/* if there're no loading or error , display the data in the table */}
            {!loading && !error && <div style={{overflow:"auto"}} className='py-5 '>
                <table style={{width:"100%"}}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Rate</th>
                            <th>Count</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody> {
                        products
                        .map(
                        item=>(
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td><img src={item.image} className='rounded' width={70}></img></td>
                            <td>{ item.rate}</td>
                            <td>{item.count}</td>
                            <td>${item.price}</td>
                            <td>
                                <FontAwesomeIcon onClick={()=>{setProduct(item);setItemId(item.id)}} className='update-icon' data-bs-toggle="modal" data-bs-target="#staticBackdrop-update" icon={faPenToSquare} />
                                {/* Modal for updating */}
                                <div className="modal fade" id="staticBackdrop-update" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Update a Product</h1>
                                            <button type="button" onClick={clearingResults} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <form className='update-form' onSubmit={(e)=>onClickUpdateHandler(e,itemId)}>
                                                <div className="mb-3">
                                                    <label htmlFor="name" className="form-label">Name</label>
                                                    <input type="text" maxLength={20} value={product.title} onChange={(e)=>setProduct({...product,title:e.target.value})}  className="form-control" id="name" placeholder="Product Name"></input>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="image" className="form-label">Image</label>
                                                    <input type="file" onChange={onChangeImage}  className="form-control" id="image" placeholder="Product Image Link"></input>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="rate" className="form-label">Rate</label>
                                                    <input type="text" value={product.rate} maxLength={6} onChange={(e)=>setProduct({...product,rate:e.target.value})} className="form-control" id="rate" placeholder="Product Rate"></input>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="count" className="form-label">Count</label>
                                                    <input type="text" value={product.count} maxLength={6} onChange={(e)=>setProduct({...product,count:e.target.value})} className="form-control" id="count" placeholder="Product Count"></input>
                                                </div>
                                                <div className="mb-5">
                                                    <label htmlFor="price" className="form-label">Price</label>
                                                    <input type="text" maxLength={6} value={product.price} onChange={(e)=>setProduct({...product,price:e.target.value})} className="form-control" id="price" placeholder="Product Price"></input>
                                                </div>        
                                                <div className="mb-3">
                                                    <button type="submit" className="btn btn-main"  data-bs-dismiss="modal">Save changes</button>
                                                </div>
                                            </form>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <FontAwesomeIcon className='trash-icon' onClick={() => setItemId(item.id)} icon={faTrashCan} data-bs-toggle="modal" data-bs-target="#exampleModal-delete"/>
                                {/* Modal for deleting */}
                                <div className="modal fade" id="exampleModal-delete" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-sm">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">Are you sure ?</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Keep it</button>
                                                <button type="button" className="btn btn-primary" id="liveToastBtn" data-bs-dismiss="modal" onClick={()=>onClickDeleteHandler(itemId)} >Delete it</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            }
        </section>
    )
}