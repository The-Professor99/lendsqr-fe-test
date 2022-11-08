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
                <h2>FULL NAME</h2>
                <p>
                  {guarantorDetails.firstName + " " + guarantorDetails.lastName}
                </p>
              </div>
              <div>
                <h2>PHONE NUMBER</h2>
                <p>{guarantorDetails.phoneNumber}</p>
              </div>
              <div>
                <h2>EMAIL ADDRESS</h2>
                <p>{`${guarantorDetails.firstName}@gmail.com`}</p>
              </div>
              <div>
                <h2>RELATIONSHIP</h2>
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
