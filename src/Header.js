import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ChatIcon from "@material-ui/icons/Chat";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";
import { logout, selectUser } from "./features/userSlice";

function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logouthandler = () => {
    dispatch(logout(auth.signOut()));
  };

  console.log(user, "2121");
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title={"Home"} />
        <HeaderOption Icon={SupervisorAccountIcon} title={"My-network"} />
        <HeaderOption Icon={BusinessCenterIcon} title={"jobs"} />
        <HeaderOption Icon={ChatIcon} title={"messaging"} />
        <HeaderOption Icon={NotificationsIcon} title={"notifications"} />
        <HeaderOption
          avatar={
            "https://cdn.pixabay.com/photo/2019/09/04/11/48/business-4451372_1280.png"
          }
          title={user ? user.displayName : "Click for Login"}
          onClick={logouthandler}
        />
      </div>
    </div>
  );
}

export default Header;
