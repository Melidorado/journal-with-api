import './Nav.css';
import Li from './Li';

const Nav = () => {
    const journals = ["Google News", "La Gaceta", "Infobae", "La Nacion" ]

    return (
        <nav>
            <h2>JOURNAL NEWS</h2>
            <ul>
                {journals.map((journal, i) => 
                  <Li value={journal} key={`${journal}-${i}`}/> )}
                
            </ul>
            <form>
                <input type="text" />
            </form>
        </nav>
    )
}

export default Nav;