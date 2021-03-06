import './Nav.css';
import JournalLink from './JournalLink';
import { useState } from 'react';

const Nav = ({handleInputSearch, handleClickSource, handleClick}) => {
    const journals = [ 
        {
            name: "Google News",
            id: "google-news-ar"
        }, 
        {
            name:"La Gaceta",
            id: "la-gaceta"
        }, 
        {
            name: "Infobae",
            id: "infobae"
        }, 
        {
            name: "La Nacion",
            id: "la-nacion"
        } 
    ]
    const [inputValue, setInputValue ] = useState('')
 
    const handleChange = e => {
        setInputValue(e.target.value)
        handleInputSearch(inputValue)
    }

    return (
        <nav>
            <div className="titles-container">
            <h2 onClick={handleClick}>JOURNAL NEWS</h2>
            <ul>
                {journals.map((journal, i) => 
                  <JournalLink 
                  value={journal.name} 
                  key={`${journal.name}-${i}`} 
                  handleClickSource={handleClickSource}
                  id={journal.id}/> )}
            </ul>
            </div>
            <input type="text" onChange={handleChange} value={inputValue}/>
        </nav>
    )
}

export default Nav;