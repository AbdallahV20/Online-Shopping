import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './Home/Home.jsx';
import Dashboard from './Dashboard/Dashboard.jsx'
import { Fragment, useEffect, useState } from "react"
import { useDispatch } from 'react-redux'
import fetchData from './Store/Actions.js';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  const dispatch = useDispatch()
  const [showButton,setShowButton] = useState(false)

  useEffect(()=>{
    /* fetch data */
    dispatch(fetchData())


    /* Display the back to top button or not */
    function handleScroll() {
      if(window.scrollY > 800)
        setShowButton(true)
      else
        setShowButton(false)
    }
    window.addEventListener("scroll",handleScroll)

    return () => {
      window.removeEventListener("scroll",handleScroll)
    }
  },[dispatch])


  function onClickHandler() {
      window.scrollTo({top:0,behavior:"smooth"})
  }
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <button onClick={onClickHandler} className=' btn btn-dark' style={{display:showButton?"block":"none",position:"fixed",bottom:"20px",right:"20px"}}>
        <FontAwesomeIcon icon={faChevronUp} />
      </button>
    </Fragment>
  )
}

export default App
