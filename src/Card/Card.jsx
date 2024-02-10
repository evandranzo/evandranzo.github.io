import profilePic from '../assets/me.jpg'
import styles from './Card.module.css'
import PropTypes from 'prop-types'

function Card(props){

    return(
        <div className={styles.card}>
            <img className={styles.cardImage} src={profilePic} alt="Profile Picture"></img>
            <h2 className={styles.cardTitle}>{props.name}</h2>
            <p className={styles.cardText}>Student at Pennwest Edinboro</p>
        </div>
    );
}
Card.proptypes = {
    name: PropTypes.string,
}
Card.defaultProps = {
    name: "Evan",
}
export default Card