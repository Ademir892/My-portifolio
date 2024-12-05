import { Link } from "react-router-dom";
import "./styles.css";


export default function Header() {
    return (
        <header>
            <nav>
                <div className="title">
                    <Link to="/">
                        <h1>Ademir Marmitt Traesel</h1>
                    </Link>
                    <div className="mp-container">
                        <Link to="/about">About</Link>
                    </div>
                    <div className="mp-container">
                        <Link to="/contact">Contact</Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}