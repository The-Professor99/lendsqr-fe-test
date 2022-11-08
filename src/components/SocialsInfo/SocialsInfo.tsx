import React from "react";
import { Socials } from "_models";
import "./SocialsInfo.scss";

interface SocialsInfoProps {
  socialsDetails: Socials;
}

function SocialsInfo({ socialsDetails }: SocialsInfoProps): JSX.Element {
  return (
    <section className="SocialsInfo" data-testid="SocialsInfo">
      <h3>Socials</h3>
      <div className="grid-container">
        <div>
          <b>TWITTER</b>
          <p>{socialsDetails.twitter}</p>
        </div>
        <div>
          <b>FACEBOOK</b>
          <p>{socialsDetails.facebook}</p>
        </div>
        <div>
          <b>INSTAGRAM</b>
          <p>{socialsDetails.instagram}</p>
        </div>
      </div>
    </section>
  );
}

export { SocialsInfo };
