import React, { Component } from "react";
import ProfileTabs from "../components/profileTabs";

export default class profile extends Component {
  render() {
    return (
      <div>
        <h1 className="title">My Account</h1>
        <ProfileTabs />
      </div>
    );
  }
}
