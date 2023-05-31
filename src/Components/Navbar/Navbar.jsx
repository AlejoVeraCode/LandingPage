import { Link } from "react-router-dom";
import '../../App.css'

const Navbar = () => {
    return (
        <header className="NavbarHeader">
            <div className="NavbarContainer">
                <Link to='/' className="NavbarName">Alejo Vera</Link>
                <nav className="Navbar">
                    <Link to='/projects' className="NavbarLink">Proyectos</Link>
                    <Link to='/skills' className="NavbarLink">Habilidades</Link>
                </nav>
                <Link to='/contact' className="NavbarContact">Contratame!</Link>
            </div>
        </header>
    )
}

export default Navbar