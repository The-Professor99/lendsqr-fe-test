import React from "react";
import { Socials } from "_models";
import "./SocialsInfo.scss";

interface SocialsInfoProps {
  socialsDetails: Socials;
}

function SocialsInfo({ socialsDetails }: SocialsInfoProps): JSX.Element {
  return (
    <div className="SocialsInfo" data-testid="SocialsInfo">
      Socials
      <div>
        <h2>Twitter</h2>
        <p>{socialsDetails.twitter}</p>
      </div>
    </div>
  );
}

export { SocialsInfo };
