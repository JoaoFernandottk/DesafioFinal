import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import livro from '../../assets/Livro.png';
import lupa from '../../assets/lupa.png';
import s from './Header.module.scss';
import Inicio from '../../Pages/inicio/Inicio';
import LivrosDoados from '../../Pages/LivrosDoados/LivrosDoados';
import QueroDoar from '../../Pages/QueroDoar/QueroDoar'

export default function Header() {
  return (
    <BrowserRouter>
      <header className={s.Header}>
        <section className={s.LogoHeader}>
          <img src={livro} />
          <h1>Livros Vai na Web</h1>
        </section>
        <nav className={s.NavHeader}>
          <ul>
            <li>
              <Link className={s.link} to="/">
                Inicio
              </Link>
            </li>
            <li>
              <Link className={s.link} to="/livrosdoados">
                livros doados
              </Link>
            </li>
            <li>
              <Link className={s.link} to="/querodoar">
                quero doar
              </Link>
            </li>
          </ul>
        </nav>
        <section className={s.barraDeBusca}>

          <input
            type="search"
            name=""
            id=""
            placeholder="o que você procura?"
          />
          <button>
            <img src={lupa} alt="" />
          </button>
        </section>
      </header>
      
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='livrosdoados' element={<LivrosDoados />} />
        <Route path='querodoar' element={<QueroDoar />} />
      
      </Routes>
    </BrowserRouter>
  );
}
