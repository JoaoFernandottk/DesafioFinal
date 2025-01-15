import { Route,Router,Routes,BrowserRouter } from 'react-router-dom';
import bg from '../../assets/bg.png';
import ss from '../inicio/inicio.module.scss';
import balança from '../../assets/balanca.png';
import reuniao from '../../assets/Reuniao.png';
import LendoLivro from '../../assets/LendoLivro.png';
import Conexao from '../../assets/Conexao.png';


export default function Inicio() {
    return(
    
        <body>
        <section className= {ss.Section1}>
          <img src={bg}/>
          <article className={ss.Articles1}>
            
            <h1>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h1>
            
            </article>
        </section>

        <section className={ss.Section2}>

            
                <h1>POR QUÊ DEVO DOAR?</h1>
        

            <article className={ss.Article}>
                <img src={reuniao} alt="" />
                <p>
                Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.
                </p>
                </article>

            <article className={ss.Article}>
                <img src={LendoLivro} alt="" />
                <p>
                Estimula o hábito da leitura e o aprendizado contínuo.
                </p>
                </article>

            <article className={ss.Article}>
                <img src={Conexao} alt="" />
                <p>
                Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.
                </p>
                </article>
            
            <article className={ss.Article}>
                <img src={balança} alt="" />
                <p>
                Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.
                </p>
                </article>

        </section>
      </body>
    
    )
}