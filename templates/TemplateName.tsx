import React from "react";
import "./TemplateName.scss";

interface TemplateNameProps {}

function TemplateName({}: TemplateNameProps): React.ReactNode {
  return (
    <div className="TemplateName" data-testid="TemplateName">
      TemplateName Component
    </div>
  );
}

export { TemplateName };
