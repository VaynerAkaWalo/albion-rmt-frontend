import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="w-full p-2 border-b-2 flex justify-evenly">
            <Link to={"/calculator"}>Calculator</Link>
            <Link to={"/"}>Albion RMT Empire Tool</Link>
            <Link to={"/flips"}>BM Flips</Link>
        </div>
    )
}

export default Header;