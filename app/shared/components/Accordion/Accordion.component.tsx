import React, { useState } from "react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { AccordionProps } from "./Accordion.props";
const Accordion: React.FC<AccordionProps> = ({
  open = false,
  header,
  content,
}) => {
  const [isOpen, setIsOpen] = useState(open);
  return (
    <div
      className="flex flex-col"
      role="button"
      tabIndex={0}
      onKeyDown={() => setIsOpen(!isOpen)}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex gap-2">
        {isOpen ? (
          <ChevronDownIcon width={16} color="blue" />
        ) : (
          <ChevronRightIcon width={16} color="blue" />
        )}

        <p className="font-bold">{header}</p>
      </div>
      {isOpen ? <div className="px-6">{content}</div> : null}
    </div>
  );
};

export default Accordion;
