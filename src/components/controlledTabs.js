import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const ControlledTabs = () => {
  const [key, setKey] = useState("Description");
  //   const { description, materials, returns, sizeChart } = props;
  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab
        eventKey="Description"
        title="Description"
        className="controlledTabs"
      >
        description
      </Tab>
      <Tab eventKey="Productinfo" title="Product info">
        Product info
      </Tab>
      <Tab eventKey="Returns" title="Returns" className="controlledTabs">
        Returns
      </Tab>
      <Tab eventKey="Sizechart" title="Size chart" className="controlledTabs">
        Size chart
      </Tab>
    </Tabs>
  );
};
export default ControlledTabs;
