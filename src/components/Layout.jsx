import React from "react";
import profile from "../assets/profile.svg";
import ProfileDetails from "./ProfileDetails";
import TabC from "./TabC";

const Layout = () => {
  return (
    <>
      <div className="pro row">
        <div className="col-4">
          <div>
            <img src={profile} alt="profile" />
          </div>
          <h1>Diane Cooper</h1>
          <p>diane.cooper@gmail.com</p>

          <div className="d-flex">
            <div className="ms-1 me-3">
              <p>15</p>
              <p>Past</p>
            </div>
            <div className="vl"></div>
            <div className="ms-3">
              <p>02</p>
              <p>Upcoming</p>
            </div>
          </div>

          <div>
            <button type="button" className="btn btn-outline-success px-5">
              Send Message
            </button>
          </div>

          <h6 className="mt-4">Files/Documents</h6>
          <div className="pdf mt-2">
            <i className="bi bi-file-earmark-minus "> Check Up Results.pdf</i>
          </div>
          <div className="pdf">
            <i className="bi bi-file-earmark-minus "> Check Up Results.pdf</i>
          </div>
          <div className="pdf">
            <i className="bi bi-file-earmark-minus "> Medical Results.pdf</i>
          </div>
          <div className="pdf">
            <i className="bi bi-file-earmark-minus "> Dental Results.pdf</i>
          </div>
        </div>

        <div className="col-8">
          <ProfileDetails />
          <TabC />
        </div>
      </div>
    </>
  );
};

export default Layout;
