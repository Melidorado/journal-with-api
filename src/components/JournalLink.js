import './JournalLink.css';

const JournalLink = ({value, handleClickSource, id}) => {

    return(
        <li className={value.replace(' ','-').toLowerCase()} id={id} onClick={handleClickSource}>
            {value}
        </li>
    )
}

export default JournalLink;