import React from 'react'

function Navbar() {
    return (
        <>
            <div className="container">
                <div className="right">RAJWANT <span>SINGH</span> </div>
                <div className="left">
                    <ul>
                        <li><a href="#Home" >Home</a></li>
                        <li><a href="#experince" >Experince</a></li>
                        <li><a href="#skills" >Skills</a></li>
                        <li><a href="#project" >Project</a></li>
                        <li><a href="#contect us" >Contec us</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
