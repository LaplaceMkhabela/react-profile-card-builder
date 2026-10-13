import './Styles.css'

export function Avatar(props) {
    return (
        <img src={props.image} alt={props.alt} class="profile-avatar"/>
    );
}