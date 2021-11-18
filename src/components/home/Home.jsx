import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
import scan from '../../assets/scan.jpeg';


const Home = (props) => {

return (
<<<<<<< HEAD
    <div className="home">
    <section className="body" >
        <div className="containerbutton">
            <div className="buttonconnect">
                <button className="button2">Je me connecte</button>
            </div>
        </div>
    </section>
    </div>

=======
  
    <main className="home">
        <section className="body">
            <h1 className="intro">"Chez M. Cheesecake, nous sommes engagés pour vous aider à mieux comprendre vos choix de consommation. Faites le test, en scannant ou recherchant votre produit."</h1>
       <div className="img-container">
                <a href='/ProductScan'><img className="scan-img" src={scan}></img></a>
                </div>
        </section>
    </main>
>>>>>>> 263c8a96f87651eacff8cd8a97fbe884ae7965ae
)
}
export default Home;