import React from 'react';
import "./Contacts.css"; 
import ContactsHook from './ContactsHook';
import unnamed from "../../assets/unnamed.jpg";
import esteban from "../../assets/esteban.jpg";
import sandra from "../../assets/sandra.jpg";
import paul from "../../assets/paul.png";
import lucille from "../../assets/lucille.jpeg";




function Contacts() {
    return (
        
        <main>
            <p className="who">Qui sommes nous?</p>
            <div className="doorContainer">
                <div className="wrapper">
                    <img src={unnamed} alt="profile"/>
                    <div id="left-door" className="door"></div>
                    <div id="right-door" class="door"></div> 
                </div>
                <div className="wrapper">
                    <img src={paul} alt="profile"/>
                    <div id="left-door" className="door"></div>
                    <div id="right-door" class="door"></div> 
                </div>        
                <div className="wrapper">
                    <img src={sandra} alt="profile"/>
                    <div id="left-door" className="door"></div>
                    <div id="right-door" class="door"></div> 
                </div>        
                <div className="wrapper">
                    <img src={esteban} alt="profile"/>
                    <div id="left-door" className="door"></div>
                    <div id="right-door" class="door"></div> 
                </div>        
                <div className="wrapper">
                    <img src={lucille} alt="profile"/>
                    <div id="left-door" className="door"></div>
                    <div id="right-door" class="door"></div> 
                </div>
           </div>
            <div>
                <p className="sainement">Consommez sainement</p>
            </div>
           <div className="contactsHooksStyle">
                <ContactsHook/>
            </div>
            
        </main>
    )
}

export default Contacts
