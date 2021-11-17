import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Home = (props) => {

return (
  
    <main className="home">
        <section className="body">
            {<div className="logomain">
                <img className="imgmain" src={logo} alt=""></img>
            </div>}


            <div className="wrapbutton">   
                <Link to="/ProductScan"><button className="buttonscan">Je scanne</button></Link>
            </div>

            <article className="hometext">
                <h1>Faites les bons choix pour votre santé</h1>
                <p><strong>Cheesecake évalue la qualité</strong> de vos produits alimentaires en un clin d'oeil. 
                    Utilisez <strong>le scan </strong>ou l'outil de <strong>recherche </strong>ainsi vous pourrez <strong>visualiser les 
                    produits qui sont bons </strong>et ceux qu'il faut mieux éviter.<br/>
                    Obtenez des<strong> recommandations</strong> de meilleurs produits si celui ci n'est pas bien classés.
                </p>
            </article>
        </section>
    </main>
)
}
export default Home;