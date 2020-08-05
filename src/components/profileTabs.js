import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const ProfileTabs = (props) => {
  const [key, setKey] = useState("ORDERS");

  return (
    <div className="description">
      <Tabs
        className="tabs"
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="ADDRESS" title="ADDRESS" tabClassName="tab">
          <p>ADDRESS</p>
        </Tab>
        <Tab eventKey="DETAILS" title="PROFILE DETAILS" tabClassName="tab">
          <p>PROFILE DETAILS</p>
        </Tab>
        <Tab eventKey="ORDERS" title="ORDERS" tabClassName="tab">
          <p>ORDERS</p>
        </Tab>
      </Tabs>
    </div>
  );
};
export default ProfileTabs;
