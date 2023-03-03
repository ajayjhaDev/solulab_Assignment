import React from "react";

const ProfileDetails = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <p style={{ color: "#6B6B6B" }}>Gender</p>
          <p>Female</p>
          <hr style={{ width: "30%", textAlign: "left", marginLeft: "0" }} />
        </div>
        <div className="col">
          <p style={{ color: "#6B6B6B" }}>Birthday</p>
          <p>03/04/2000</p>
          <hr style={{ width: "30%", textAlign: "left", marginLeft: "0" }} />
        </div>
        <div className="col">
          <p style={{ color: "#6B6B6B" }}> Phone Number</p>
          <p>9608299899</p>
          <hr style={{ width: "30%", textAlign: "left", marginLeft: "0" }} />
        </div>
        <div className="col">
          <p style={{ color: "#6B6B6B" }}> Registered date</p>
          <p>07/05/2014</p>
          <hr style={{ width: "30%", textAlign: "left", marginLeft: "0" }} />
        </div>
        <div className="col">
          <p style={{ color: "#6B6B6B" }}>Street Address</p>
          <p>San Antino Texsa, USA</p>
          <hr style={{ width: "30%", textAlign: "left", marginLeft: "0" }} />
        </div>
        <div className="col">
          <p style={{ color: "#6B6B6B" }}>City</p>
          <p>Mumbai</p>
          <hr style={{ width: "30%", textAlign: "left", marginLeft: "0" }} />
        </div>
        <div className="col">
          <p style={{ color: "#6B6B6B" }}>Zip Code</p>
          <p>847306</p>
          <hr style={{ width: "30%", textAlign: "left", marginLeft: "0" }} />
        </div>
        <div className="col">
          <p style={{ color: "#6B6B6B" }}>Member Status</p>
          <p>Active Member</p>
          <hr style={{ width: "30%", textAlign: "left", marginLeft: "0" }} />
        </div>
      </div>
    </>
  );
};

export default ProfileDetails;
