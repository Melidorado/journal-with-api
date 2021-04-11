import './Card.css';

const Card = ({news}) => {

    const date = new Date(news.publishedAt).toLocaleString();

    return (
        <article>
            <div className="img-container">
                <img src={news.urlToImage} alt=""/>
            </div>
            <div className="src-date_container">
                <p className="source">{news.source.name}</p>
                <p>{date}</p>
            </div>
            <a href={news.url} target="_blank">{news.title}</a>
            <p className="description">{news.description}</p>
        </article>
    )
}

export default Card;