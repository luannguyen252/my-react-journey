import React from "react";

const profileData = {
  company: "Progress",
  companyImage: "https://svgshare.com/i/9ir.svg",
  url: "https://www.telerik.com/kendo-react-ui/",
  userImage: "https://i.imgur.com/Y1XRKLf.png",
  userName: "Kendoka",
  fullName: "Kendō No Arikata",
  team: "KendoReact",
};

const Profile = (props) => (
  <div className="profile">
    <img src={props.data.companyImage} alt={props.data.fullName} />
    <User data={props.data} />
  </div>
);

const User = (props) => {
  return (
    <div className="user">
      <a href={props.data.url}>
        <img
          src={props.data.userImage}
          width="138px"
          alt={props.data.fullName}
        />
      </a>
      <h1 className="profile-userName">{props.data.userName}</h1>
      <p className="profile-fullName">({props.data.fullName})</p>
      <Team data={props.data} />
    </div>
  );
};

const Team = (props) => {
  return (
    <div className="team">
      <p className="profile-team">{props.data.team}</p>
    </div>
  );
};

const UseContext = () => <Profile data={profileData} />;

export default UseContext;
