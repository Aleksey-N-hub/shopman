import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Returns from "./returns";
import SizeChart from "./sizeChart";
import Materials from "./materials";
import Delivery from "./delivery";

const ControlledTabs = (props) => {
  const [key, setKey] = useState("Productinfo");
  //   const { description, materials, returns, sizeChart } = props;
  return (
    <div className="description">
      <Tabs
        className="tabs"
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="Productinfo" tabClassName="tab" title="Product info">
          <Materials
            materials={props.materials}
            description={props.description}
          />
        </Tab>
        <Tab eventKey="Returns" title="Returns" tabClassName="tab">
          <Returns />
        </Tab>
        <Tab eventKey="Sizechart" title="Size chart" tabClassName="tab">
          <SizeChart />
        </Tab>
        <Tab eventKey="Delivery" title="Delivery" tabClassName="tab">
          <Delivery />
        </Tab>
      </Tabs>
    </div>
  );
};
export default ControlledTabs;
