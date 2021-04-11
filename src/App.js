import { useEffect, useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import CardsContainer from './components/CardsContainer';
import Footer from './components/Footer';

const api_Key = 'b6a58b0e12a740a29e2ddd6c6900604b'

const App = () => {
  const [ news, setNews ] = useState([])
  const [inputSearch, setInputSearch] = useState('')
  const [ source, setSource] = useState('')

  useEffect(() => {
    const baseUrl = 'https://newsapi.org/v2/top-headlines?'
    const countrySearch = !source ?'country=ar&' : ''
    const apiKey = `apiKey=${api_Key}`
    const searchInput = inputSearch ?`q=${inputSearch}&` : ''
    const searchSource = source ? `sources=${source}&` : ''


    fetch(baseUrl + countrySearch + searchSource + searchInput + apiKey)
    .then (res => res.json())
    .then (data => setNews(data.articles))
  }, [inputSearch, source])

  const handleInputSearch = search => {
    setInputSearch(search)
  }

  const handleClickSource = e => {
    setSource(e.target.id)
  }

  const handleClick = () => {
    setSource('')
    setInputSearch('')
  }

  return (
    <>
      <Nav 
      handleInputSearch={handleInputSearch}
      handleClickSource={handleClickSource}
      handleClick={handleClick}
      inputSearch={inputSearch}/>
      <CardsContainer news={news}/>
      <Footer />
    </>
  );
}

export default App;
