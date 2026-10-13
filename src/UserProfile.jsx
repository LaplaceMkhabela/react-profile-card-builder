import { Avatar } from './Avatar';
import './Styles.css'
import { UserInfo } from './UserInfo';

export function Userprofile(props) {
    return (
        <article class="profile-card">
            <Avatar image = {props.image}/>
            <UserInfo profile={props.profile}/>
        </article>
    );
}