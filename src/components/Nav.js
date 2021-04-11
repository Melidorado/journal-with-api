import './Nav.css';
import Li from './Li';
import { useState } from 'react';

const Nav = ({handleInputSearch, handleClickSource}) => {
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
    

    const handleSubmit = e => {
        e.preventDefault();
        handleInputSearch(inputValue)
    }

    const handleChange = e => {
        setInputValue(e.target.value)
    }

    return (
        <nav>
            <h2>JOURNAL NEWS</h2>
            <ul>
                {journals.map((journal, i) => 
                  <Li 
                  value={journal.name} 
                  key={`${journal.name}-${i}`} 
                  handleClickSource={handleClickSource}
                  id={journal.id}/> )}
            </ul>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={inputValue}/>
            </form>
        </nav>
    )
}

export default Nav;