import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);
  console.log(user);
  const recentItems = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1542318421-1d7619edc046?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
          alt=""
        />
        <Avatar src={user.photoURL} className="sidebar__avatar">
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,548</p>
        </div>
        <div className="sidebar__stat">
          <p>view Posts</p>
          <p className="sidebar__statNumber">2,554</p>
        </div>
      </div>
      <div className="sidebar__buttom">
        <p>Recent</p>
        {recentItems("Reactjs")}
        {recentItems("Redux")}
        {recentItems("firebase")}
        {recentItems("ant-design")}
        {recentItems("javascript")}
      </div>
    </div>
  );
}

export default Sidebar;
