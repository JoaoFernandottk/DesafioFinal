import { Route,BrowserRouter,Routes,Link } from 'react-router-dom';
import instagram from '../../assets/instagram.png';
import facebook from '../../assets/facebook.png';
import x from '../../assets/x.png';
import ytb from '../../assets/ytb.png';
import linkedn from '../../assets/linkedn.png/';
import sfooter from '../Footer/Footer.module.scss'

export default function Footer() {
    return(
        <BrowserRouter>

        <footer>

        <article>
        <h1>4002-8922</h1>
        </article>


        <figure>
            <img src={facebook} alt="" />
        </figure>

        <figure>
            <img src={x} alt="" />
        </figure>        

        <figure>
            <img src={ytb} alt="" />
        </figure>

        <figure>
            <img src={linkedn} alt="" />
        </figure>

        <figure>
            <img src={instagram} alt="" />
        </figure>


        

        </footer>
        </BrowserRouter>
    )
}

