import React from 'react'
import './Home.css';


const Home = (props) => {

return (
    <main className="home">
        <section className="body">
            <div className="logomain">
                <img className="imgmain" src={logo}></img>
            </div>
            <div className="buttonhome">
            <div className="wrapbutton">   
                <Link to="/DisplayScan"><button className="buttonScan">Je scanne</button></Link>
            </div>
            <div className="wrapbutton2">
                <Link to="/DisplayCode"><button className="buttonmenu">Fiche Produit</button></Link>
            </div>
            <div className="wrapbutton3">
                <Link to="/Contact"><button className="buttonmenu">Contact</button></Link>
            </div>
            </div>
        </section>
    </main>
)
}
export default Home;