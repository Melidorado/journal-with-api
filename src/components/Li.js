import './Li.css';

const Li = ({value}) => {
    return(
        <li className={value.replace(' ','-').toLowerCase()}>
            {value}
        </li>
    )
}

export default Li;