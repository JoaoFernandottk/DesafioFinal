import livrologo from '../../assets/Vector.png'
import sQD from '../../Pages/QueroDoar/QueroDoar.module.scss'

export default function QueroDoar () {
    return (

        <body>
            <section className={sQD.Section}>
                <img src={livrologo} alt="" />
                <h1>informações sobre o livro</h1>
                <input type="text" placeholder='Titulo' />
                <input type="text" placeholder='Categoria' />
                <input type="text" placeholder='Autor'/>
                <input type="text" placeholder='Link da Imagem'/>
                <button>Doar</button>
            </section>
        </body>
    )
}