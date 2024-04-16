import {Link} from "react-router-dom";

function Header() {
    return (
        <ul className="w-full p-2 border-b-2 flex justify-evenly">
            <li>
                <Link to={"/calculator"}>Calculator</Link>
            </li>
            <li>
                <Link to={"/"}>Albion RMT Empire Tool</Link>
            </li>
            <li>
                <Link to={"/black-market"}>BM Flips</Link>
            </li>
        </ul>
    )
}

export default Header;