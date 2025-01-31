import React, { Children } from "react";

interface Props {
  children: string;
  maxChars: number;
}

const ExpandableText = ({ children, maxChars }: Props) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  let output = "";

  if (!isExpanded) {
    output = children.substring(0, maxChars) + "...";
  } else {
    output = children;
  }

  return (
    <>
      <div>
        {output}{" "}
        <button style={{ color: "green", border: "2px solid black" }}
          onClick={() => {
            isExpanded ? setIsExpanded(false) : setIsExpanded(true);
          }}
        >
          {isExpanded ? "Show more" : "Show less"}
        </button>
      </div>
    </>
  );
};

export default ExpandableText;
