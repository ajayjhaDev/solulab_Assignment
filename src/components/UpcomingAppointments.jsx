import React from "react";

const UpcomingAppointments = () => {
  return (
    <>
      <div>
        <div className="d-flex justify-content-between">
          <p>Root Canal Treatment</p>
          <p>Show Previous Treatments</p>
        </div>
        <hr style={{ width: "100%", textAlign: "left", marginLeft: "0" }} />

        <div className="d-flex justify-content-between">
          <div>
            <strong>26 Nov '19</strong>
            <p>9.00-10.00</p>
          </div>
          <div className="vl"></div>
          <div>
            <p>Treatment</p>
            <p>Open Access</p>
          </div>
          <div className="vl"></div>
          <div>
            <p>Dentist</p>
            <p>Drg. Adam H.</p>
          </div>
          <div>
            <p>Nurse</p>
            <p>jessicamila</p>
          </div>
          <div>
            <i className="bi bi-file-earmark-minus"> Note</i>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-4">
          <div>
            <strong>12 Nov '19</strong>
            <p>9.00-10.00</p>
          </div>
          <div className="vl"></div>
          <div>
            <p>Treatment</p>
            <p>Root Canal</p>
          </div>
          <div className="vl"></div>
          <div>
            <p>Dentist</p>
            <p>Drg. Adam H.</p>
          </div>
          <div>
            <p>Nurse</p>
            <p>jessicamila</p>
          </div>
          <div>
            <i className="bi bi-file-earmark-minus"> Note</i>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingAppointments;
