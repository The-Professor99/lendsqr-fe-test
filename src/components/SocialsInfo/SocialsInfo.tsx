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
          <h2>TWITTER</h2>
          <p>{socialsDetails.twitter}</p>
        </div>
        <div>
          <h2>FACEBOOK</h2>
          <p>{socialsDetails.facebook}</p>
        </div>
        <div>
          <h2>INSTAGRAM</h2>
          <p>{socialsDetails.instagram}</p>
        </div>
      </div>
    </section>
  );
}

export { SocialsInfo };
