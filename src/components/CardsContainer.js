import './CardsContainer.css';
import Card from './Card';

const CardsContainer = ({news}) => {
    return (
        <section>
            {news.map((news, i) => 
            <Card key={i} news={news}/>)}
        </section>
    )
}

export default CardsContainer;
