import React from "react";
import { Divider } from "@mui/material";

import { Guarantor } from "_models";
import "./GuarantorInfo.scss";

interface GuarantorInfoProps {
  guarantorDetails: Guarantor;
}

function GuarantorInfo({ guarantorDetails }: GuarantorInfoProps): JSX.Element {
  return (
    <section className="GuarantorInfo" data-testid="GuarantorInfo">
      <h3>Guarantor</h3>
      {[1, 2].map((value) => {
        return (
          <div key={value}>
            <div className="grid-container">
              <div>
                <b>FULL NAME</b>
                <p>
                  {guarantorDetails.firstName + " " + guarantorDetails.lastName}
                </p>
              </div>
              <div>
                <b>PHONE NUMBER</b>
                <p>{guarantorDetails.phoneNumber}</p>
              </div>
              <div>
                <b>EMAIL ADDRESS</b>
                <p>{`${guarantorDetails.firstName}@gmail.com`}</p>
              </div>
              <div>
                <b>RELATIONSHIP</b>
                <p>Sister</p>
              </div>
            </div>
            <Divider />
          </div>
        );
      })}
    </section>
  );
}

export { GuarantorInfo };
