import React from "react";
import "./TemplateName.scss";

interface TemplateNameProps {}

function TemplateName({}: TemplateNameProps): JSX.Element {
  return (
    <div className="TemplateName" data-testid="TemplateName">
      TemplateName Component
    </div>
  );
}

export { TemplateName };
