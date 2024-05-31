/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown} from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'
import { NavLink } from 'react-bootstrap';
export default function DropdownLink ({label}) {
    return (
        <li className="nav-item dropdown" >
            <NavLink className={`nav-link dropdown-toggle`}  href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {label}<FontAwesomeIcon className="arrows" icon={faChevronDown} />
            </NavLink>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </li>
    )
}