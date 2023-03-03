import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import UpcomingAppointments from "./UpcomingAppointments";

const TabC = () => {
  return (
    <>
      <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example"
        className="mb-3 mt-2"
        justify
      >
        <Tab eventKey="home" title="Upcoming Appointments">
          <UpcomingAppointments />
        </Tab>
        <Tab eventKey="profile" title="Past Appointments"></Tab>
        <Tab eventKey="longer-tab" title="Medical Records"></Tab>
      </Tabs>
    </>
  );
};

export default TabC;
