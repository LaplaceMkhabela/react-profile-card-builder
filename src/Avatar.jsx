import './Styles.css'

export function Avatar({image}) {
    return (
        <img src={image.image} alt={image.alt} class="profile-avatar"/>
    );
}