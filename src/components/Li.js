import './Li.css';

const Li = ({value, handleClickSource, id}) => {

    return(
        <li className={value.replace(' ','-').toLowerCase()} id={id} onClick={handleClickSource}>
            {value}
        </li>
    )
}

export default Li;