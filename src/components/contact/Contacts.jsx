<<<<<<< HEAD
import React from 'react'
import "./Contacts.css";
=======
import React from 'react';
import "./Contacts.css"; 
import ContactsHook from './ContactsHook';
import unnamed from "../../assets/unnamed.jpg";
import esteban from "../../assets/esteban.jpg";
import sandra from "../../assets/sandra.jpg";
import paul from "../../assets/paul.png";
import lucille from "../../assets/lucille.jpeg";


>>>>>>> 263c8a96f87651eacff8cd8a97fbe884ae7965ae


function Contacts() {
    return (
<<<<<<< HEAD
        <main className="wrapper">
            <body>
            <img src="/assets/unnamed.jpg" alt="profile"/>
                <div id="left-door" className="door"></div>
                <div id="right-door" class="door"></div>
            </body>  
=======
        
        <main className="allPageContact">
            <p className="whoWeAre">Qui sommes nous?</p>
            <div className="doorContainer">
                <div className="wrapper">
                    <img className="imgContact" src={unnamed} alt="profile"/>
                    <div id="left-door" className="door"></div>
                    <div id="right-door" class="door"></div> 
                </div>
                <div className="wrapper">
                    <img className="imgContact" src={paul} alt="profile"/>
                    <div id="left-door" className="door"></div>
                    <div id="right-door" class="door"></div> 
                </div>        
                <div className="wrapper">
                    <img className="imgContact" src={sandra} alt="profile"/>
                    <div id="left-door" className="door"></div>
                    <div id="right-door" class="door"></div> 
                </div>        
                <div className="wrapper">
                    <img className="imgContact" src={esteban} alt="profile"/>
                    <div id="left-door" className="door"></div>
                    <div id="right-door" class="door"></div> 
                </div>        
                <div className="wrapper">
                    <img className="imgContact" src={lucille} alt="profile"/>
                    <div id="left-door" className="door"></div>
                    <div id="right-door" class="door"></div> 
                </div>
           </div>
            <div>
                <p className="healthier">Consommez sainement</p>
            </div>
           <div className="contactsHooksStyle">
                <ContactsHook/>
            </div>
            
>>>>>>> 263c8a96f87651eacff8cd8a97fbe884ae7965ae
        </main>
    )
}

export default Contacts
