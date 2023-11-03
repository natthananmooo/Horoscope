import React from 'react';
import styles from "./footer.module.css";

const Footer = () => {
    return (
        <footer className="navbar-expand-lg navbar-dark bg-dark">
            <ul>
                <h5>Address</h5>
                <p>มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตศรีราชา<br></br>
เลขที่199 หมู่6 ถ.สุขุมวิท ต.ทุ่งสุขลา อ.ศรีราชา <br></br>จ.ชลบุรี 20230</p> 
            </ul>                          
            <ul>        
                <h5>About Us</h5>
                    <p>Email : Natthanan.moo@ku.th</p>
                    <p>Facebook : Natthanan Moonsub</p>        
                    <p>Phone : 09-8371-1099</p>        
                </ul>                                     
        </footer>

   
    )
}

export default Footer;