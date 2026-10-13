import './Styles.css'

export function UserInfo({name,job,bio}) {
    return (

        <div class="profile-content">
            <h2 class="profile-name">{name}</h2>
            <h3 class="profile-title">{job}</h3>
            <p class="profile-bio">{bio}</p>
        </div>
    );
}