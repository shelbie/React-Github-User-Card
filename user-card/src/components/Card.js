import React from 'react';
import UserFollowers from './UserFollowers';

 const Card = props => {
  return (
    <>
      <div className="card">

        <img src={props.img} alt="avatar"/>
        <div className="info">
            <p>Username: {props.name}</p>
            <p>Bio: {props.bio}</p>
          <p>Location: {props.location}</p>
          <p>Following: {props.following}</p>
          <p>Followers: {props.followers}</p>
          <div>
              <p className="followersp">List of Followers:</p>
              <UserFollowers />
          </div>
        </div>
      </div>
    </>
  )
}

 export default Card; 