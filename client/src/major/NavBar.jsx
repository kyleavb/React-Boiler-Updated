import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import NavItem from '../minor/NavItem';
import menuData from '../data/main';
import '../style/nav.css'

 class NavBar extends React.Component {
    render() {
        let navMax = menuData.nav.length - 1;
        let navBar = menuData.nav.map( (navInfo , i) => {
            let add = null;
            
            if(i !== navMax ){
                add = <div key={`vert${i}`} className="vert"></div>
            }
            return(
                <div key={`butt${i}`} className="fullButton">
                    <NavItem key={i} nav={navInfo} spec={i} max={navMax} />
                    {add}
                </div>
            )
        })
        
        return(
            <div className="navContainer">
                <div className="logoContainer">
                    <hr />    
                    <Link to='/'>
                        <div className="navLogo">
                            <h1>BoilerPlate</h1>
                        </div>  
                    </Link>
                    <hr />
                </div>
                <div className="navBar">
                    {navBar}
                </div>
            </div>
        )
    }
}
export default NavBar;