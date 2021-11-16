import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Home = (props) => {

return (
  
    <main className="home">
        <section className="body">
            <div className="logomain">
                <img className="imgmain" src={logo} alt=""></img>
            </div>

            <div className="buttonhome">
            <div className="wrapbutton">   
                <Link to="/ProductScan"><button className="buttonscan">Je scanne</button></Link>
            </div>
            </div>
        </section>
    </main>
)
}
export default Home;