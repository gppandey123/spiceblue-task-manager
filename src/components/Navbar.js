import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../pages/store/user/actions';

function Navbar() {
    const dispatch = useDispatch();
    const { profile } = useSelector(state => state.user);
    return (
        <nav className="navbar sticky-top navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                </ul>
            </div>
            {profile ? <>
                    <Link className="navbar-item" to="/">Home</Link>
                    <button type="button" className="btn btn-default ml-auto mr-2" onClick={()=>dispatch(deleteUser())}>Logout</button>
                </>
                : <Link to="/login" className="ml-auto mr-2">
                 <button type="button" className="btn btn-default">Login</button>
                 </Link>
            }
        </nav>
    )
}

export default Navbar
