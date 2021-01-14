import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Nav() {

    return(
        <div className="flex px-20">
            <div>
               <h1 className="text-green-700 uppercase p-2 font-bold"><Link to='/'>Shoppies</Link></h1>
            </div> 

            <ul className="flex ">
                <li className=" p-4 font-bold"><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/">Contact</NavLink></li>
                <li><NavLink to="/">About</NavLink></li>
                <li><NavLink to="/nominate"><span>Nominate</span></NavLink></li>
             </ul>
        </div>
    )
}

export default Nav