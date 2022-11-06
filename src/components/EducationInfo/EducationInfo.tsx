import React from "react";
import { Education } from "_models";
import "./EducationInfo.scss";

interface EducationInfoProps {
  educationDetails: Education;
}

function EducationInfo({ educationDetails }: EducationInfoProps): JSX.Element {
  return (
    <div className="EducationInfo" data-testid="EducationInfo">
      Education and Employment
      <div>
        <h2>Level of Education</h2>
        <p>{educationDetails.level}</p>
      </div>
    </div>
  );
}

export { EducationInfo };
