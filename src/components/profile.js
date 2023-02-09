import styled from 'styled-components'
import Button from './button'
import Icon from './icon'

const ProfileStyled = styled.div`
    grid-area: profile;
    .avatar {
        border-radius: 50%;
        border: 1px solid var(--grey);
        overflow: hidden;
        box-sizing: border-box;
        margin-block-end: 1.5rem;
    }

    .name {
        font: var(--headline1);
        color: var(--white);
        margin: 0;
        margin-block-end: .5rem;
    }

    .username{
        margin-block-start: .5rem;
        margin-block-end: 1.5rem;
        font: var(--headline2-ligth);
    }

    .buttons {
        display: flex;
        gap: .5rem;
        margin-block-end: 1.5rem;
    }

    .info {
        color: var(--grey);
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: .5rem;
        margin-block: 1rem;
        font: var(--body2-semi-bold);
    }

    a:hover {
        text-decoration: underline;
    }

`

function Profile(props) {

    const {name, login, avatar_url, bio, followers, following, location, twitter_username, blog} = props

    return (
        <ProfileStyled>
            <img src={avatar_url} className='avatar' width='278' height="278" alt="Avatar" />
            <p className="name">{name}</p>
            <p className="username">{login}</p>
            <div className="buttons">
                <Button 
                    text="Follow"
                    link="#"
                    className='custom'
                />
                <Button 
                    text="Sponsors"
                    icon={<Icon 
                        name="check"
                        size={16}
                        color="white"
                    />}
                />
            </div>
            <p className="bio info">‧ {bio}</p>
            <p className="followers info">
                <span>‧ {followers} followers</span><span>‧</span>{following} following
            </p>
          {/*   <p className="stars info">
                . 81
            </p> */}
            <p className="location info">
            ‧ {location}
            </p>
            <a className='info' href={blog} target="_blank" rel='noreferrer'>‧ {blog}</a>
            <a className='info' href={`https://twitter.com/${twitter_username}`}  target="_blank" rel='noreferrer'>‧ @{twitter_username}</a>
        </ProfileStyled>
    )
}

export default Profile
