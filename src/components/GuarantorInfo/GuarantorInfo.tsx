import React from "react";
import { Guarantor } from "_models";
import "./GuarantorInfo.scss";

interface GuarantorInfoProps {
  guarantorDetails: Guarantor;
}

function GuarantorInfo({ guarantorDetails }: GuarantorInfoProps): JSX.Element {
  return (
    <div className="GuarantorInfo" data-testid="GuarantorInfo">
      Guarantor
      <div>
        <h2>Full Name</h2>
        <p>{guarantorDetails.firstName + " " + guarantorDetails.lastName}</p>
      </div>
    </div>
  );
}

export { GuarantorInfo };
