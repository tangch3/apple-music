import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/saved">Saved</Link>
        </div>
    )
}