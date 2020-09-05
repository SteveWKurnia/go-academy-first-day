import React, { useState } from "react";
import "./styles.css";

const Profile = (props) => {
  //State and event handling
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <React.Fragment>
      <div className="App">
        <img src="https://via.placeholder.com/150" alt="profile picture" />
        <div>@{props.username}</div>
        <button onClick={() => setIsFollowed(!isFollowed)}>
          {isFollowed ? "Unfollow" : "Follow"}
        </button>
        <div>Posts</div>
        <div>Follower</div>
        <div>Following</div>
        <div>Bio</div>
        <Post src="https://via.placeholder.com/300" />
      </div>
    </React.Fragment>
  );
};

const Post = (props) => (
  <React.Fragment>
    <img src={props.src} alt="posts" />
  </React.Fragment>
);

export default function App() {
  const username = "instagram";
  return <Profile username={username} />;
}
