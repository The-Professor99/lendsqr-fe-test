import React from "react";
import { Education } from "_models";
import "./EducationInfo.scss";

interface EducationInfoProps {
  educationDetails: Education;
}

function EducationInfo({ educationDetails }: EducationInfoProps): JSX.Element {
  return (
    <section className="EducationInfo" data-testid="EducationInfo">
      <h3>Education and Employment</h3>
      <div className="grid-container">
        <div>
          <h2>LEVEL OF EDUCATION</h2>
          <p>{educationDetails.level}</p>
        </div>
        <div>
          <h2>EMPLOYMENT STATUS</h2>
          <p>{educationDetails.employmentStatus}</p>
        </div>
        <div>
          <h2>SECTOR OF EMPLOYMENT</h2>
          <p>{educationDetails.sector}</p>
        </div>
        <div>
          <h2>DURATION OF EMPLOYMENT</h2>
          <p>{educationDetails.duration}</p>
        </div>
        <div>
          <h2>OFFICE EMAIL</h2>
          <p>{educationDetails.officeEmail}</p>
        </div>
        <div>
          <h2>MONTHLY INCOME</h2>
          <p>
            ₦{educationDetails.monthlyIncome?.at(0)} - ₦
            {educationDetails.monthlyIncome?.at(1)}
          </p>
        </div>
        <div>
          <h2>LOAN REPAYMENT</h2>
          <p>{educationDetails.loanRepayment}</p>
        </div>
      </div>
    </section>
  );
}

export { EducationInfo };
