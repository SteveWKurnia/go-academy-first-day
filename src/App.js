import React, { useState } from "react";
import "./styles.css";

//Components
const Profile = (props) => {
  const { username } = props;
  const postCount = 10;
  const posts = [...Array(postCount)];

  //State and event handling
  const [isFollowed, setIsFollowed] = useState(false);
  const [inputAccount, setInputAccount] = useState("");

  return (
    <React.Fragment>
      <div className="App">
        <input
          onChange={({ target: { value } }) => {
            setInputAccount(value);
          }}
          placeholder="search profile"
        />
        <div>Search result for account: {inputAccount}</div>

        <img src="https://via.placeholder.com/150" alt="profile" />
        <div>@{username}</div>
        <button onClick={() => setIsFollowed(!isFollowed)}>
          {isFollowed ? "Unfollow" : "Follow"}
        </button>
        <div>{postCount} Posts</div>
        <div>Follower</div>
        <div>Following</div>
        <div>Bio</div>
        {postCount === 0 ? (
          <div>No Posts</div>
        ) : (
          <div className="posts">
            {posts.map((_, idx) => (
              <Post
                src="https://via.placeholder.com/300"
                key={idx}
                className="post"
              />
            ))}
          </div>
        )}
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
