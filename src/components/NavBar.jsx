import "./NavBar.css";
import searchIcon from "./../assets/search-icon.svg";
import cineliblogo from "/cine-lib.svg";

const NavBar = () => {
    return (
        <header>
            <nav id="navbar">
                <div id="brand">
                    <a href="./index.html">
                        <img src={cineliblogo} alt="Logo cineLib" />
                        <h2>cineLib</h2>
                    </a>
                </div>
                <form action="" id="search-form">
                    <input type="text" placeholder="Busque um filme..." />
                    <button type="submit">
                        <img src={searchIcon} alt="Icone de pesquisa" />
                    </button>
                </form>
            </nav>
        </header>
    );
};

export default NavBar;