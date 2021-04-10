import { useEffect, useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import CardsContainer from './components/CardsContainer';
import Footer from './components/Footer';

const api_Key = 'b6a58b0e12a740a29e2ddd6c6900604b'

const App = () => {
  const [ news, setNews ] = useState([])

  useEffect(() => {
    const baseUrl = 'https://newsapi.org/v2/top-headlines?'
    const countrySearch = 'country=ar&'
    const apiKey = `apiKey=${api_Key}`


      fetch(baseUrl + countrySearch + apiKey)
      .then (res => res.json())
      .then (data => setNews(data.articles))
  }, [])

  console.log(news)

  return (
    <>
      <Nav />
      <CardsContainer news={news}/>
      <Footer />
    </>
  );
}

export default App;
