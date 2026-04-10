import { Link, Links} from 'react-router-dom';
import './style.css';

function Home () {
    return (
    <>
    <h2>Bem vindo(a) ao sistema do BL</h2>
            <Link to="/about">
        <button>About
            </button></Link>
   </>
)
}
export default Home
  