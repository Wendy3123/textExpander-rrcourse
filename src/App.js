import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div>
      <TextExpander buttonColor="plum" className="box">
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="hotpink"
        className="box"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander
        expanded={true}
        className="box"
        buttonColor="mediumvioletred"
      >
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

function TextExpander({
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "#1f79cd",
  expanded = false,
  className,
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "... "; //.split will split the string based on the space and count the whole sentence as a array
  //then .slice will print only the words in array[0]-array[9](its 9 bc our collapsednumwords is 10 so it take the last index before the 10)
  //then.join will creates and returns a new string by concatenating all of the elements in this array with the "  " space we told it, so it reverts back to the original paragraph format
  //finally we add the ... to the very end to show users there is more to be continued

  const buttonStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "6px",
    color: buttonColor,
  };
  return (
    <div className={className}>
      <span>{displayText}</span>
      <button onClick={() => setIsExpanded(!isExpanded)} style={buttonStyle}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
