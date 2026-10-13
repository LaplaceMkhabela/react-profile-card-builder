import { Avatar } from './Avatar';
import './Styles.css'
import { UserInfo } from './UserInfo';

export function Userprofile({image,profile}) {
    return (
        <article class="profile-card">
            <Avatar image = {image}/>
            <UserInfo profile={profile}/>
        </article>
    );
}