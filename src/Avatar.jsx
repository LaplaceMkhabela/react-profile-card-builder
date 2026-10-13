import './Styles.css'

export function Avatar({image,alt}) {
    return (
        <img src={image} alt={alt} class="profile-avatar"/>
    );
}