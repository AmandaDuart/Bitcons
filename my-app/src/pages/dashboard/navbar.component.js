import React from 'react';
import '../../App.css';
import { MdGridView } from "react-icons/md";

import 'bootstrap/dist/css/bootstrap.min.css';

class Navbar extends React.Component{
    render(){
        return(
            <>
                <nav className="navbar navbar-expand-lg navbar-light marginNav">
                    <a className="navbar-brand" href="/" className='dashboard'> 
                        <div className='MdGridView'>
                            <MdGridView /> 
                        </div>
                        Dashboard
                    </a>                    
                </nav>
            </>
        )
    }
}
export default Navbar;
