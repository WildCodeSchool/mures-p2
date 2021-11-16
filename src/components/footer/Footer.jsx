
import React from 'react'
import Cheesecake from "../../assets/Cheesecake.jpg";
import "./Footer.css";

function Footer() {
    return (
        <footer class="footer">
            <article className="logofooter">
                <img className="imgfooter"src={Cheesecake}></img>
            </article>
            <article class="lien">
            <a class="lienstyle" href="/Contact">Contact -</a>
            <a class="lienstyle" href=""> Mentions légales -</a>
            <a class="lienstyle" href=""> CGU -</a>
            <a class="lienstyle" href=""> Cookies </a>
          </article>
            <article class="reseaux">
                <a href="http://www.facebook.com"><img class="icon" src="https://img.icons8.com/color/48/000000/facebook.png" alt="facebook"/></a>
               <a href="http://www.instagram.com"><img class="icon" src="https://img.icons8.com/color/48/000000/instagram-new.png" alt="instagram"/></a> 
               <a href="http://youtube.com"><img class="icon" src="https://img.icons8.com/fluency/48/000000/youtube-play.png" alt="youtube"/> </a> 
            </article>
        </footer>
    )
}

export default Footer

