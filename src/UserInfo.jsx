import './Styles.css'

export function UserInfo(props) {
    return (

        <div class="profile-content">
            <h2 class="profile-name">{props.name}</h2>
            <h3 class="profile-title">{props.job}</h3>
            <p class="profile-bio">{props.bio}</p>
        </div>
    );
}