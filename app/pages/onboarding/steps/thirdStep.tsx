import React from "react";
import { Accordion } from "~/shared/components";

const ThirdStep: React.FC = () => {
  return (
    <div className="grid gap-4">
      <p>
        Here is a step that has lots information on it, so we put in collapsable
        sections to make it easier to flip through.
      </p>
      <Accordion
        open
        header="Accordion 1"
        content={
          <>
            <p>This is some accordion content. It even</p>
            <ul className="pl-4">
              <li>has</li>
              <li>bullets</li>
              <li>to say</li>
              <li>stuff</li>
            </ul>
          </>
        }
      />
      <Accordion header="Accordion 2" content="Content" />
      <Accordion header="Accordion 3" content="Content" />
    </div>
  );
};

export default ThirdStep;
