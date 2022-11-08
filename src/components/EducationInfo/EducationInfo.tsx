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
          <b>LEVEL OF EDUCATION</b>
          <p>{educationDetails.level}</p>
        </div>
        <div>
          <b>EMPLOYMENT STATUS</b>
          <p>{educationDetails.employmentStatus}</p>
        </div>
        <div>
          <b>SECTOR OF EMPLOYMENT</b>
          <p>{educationDetails.sector}</p>
        </div>
        <div>
          <b>DURATION OF EMPLOYMENT</b>
          <p>{educationDetails.duration}</p>
        </div>
        <div>
          <b>OFFICE EMAIL</b>
          <p>{educationDetails.officeEmail}</p>
        </div>
        <div>
          <b>MONTHLY INCOME</b>
          <p>
            ₦{educationDetails.monthlyIncome?.at(0)} - ₦
            {educationDetails.monthlyIncome?.at(1)}
          </p>
        </div>
        <div>
          <b>LOAN REPAYMENT</b>
          <p>{educationDetails.loanRepayment}</p>
        </div>
      </div>
    </section>
  );
}

export { EducationInfo };
