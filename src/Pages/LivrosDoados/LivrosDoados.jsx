import redbook from '../../assets/livrored.png'
import spage2 from '../LivrosDoados/LivrosDoados.module.scss'


export default function LivrosDoados () {
    return (

        <body>
            <section className={spage2.Section}>
            <h1>
            Livros Doados
            </h1>

            <article>
                <img src={redbook} alt=""/>
                
                <p>O Protagonista</p>
                <p>Susanne Andrade</p>
                <p>Ficção</p>
                
            </article>
            </section>
            

        </body>
    )
}