import Styles from "./Week.module.css";
import Day from "../Day/Day";
import { useState } from "react";
import EditableText from "../EditableText/EditableText";

function Week() {
  const [title, setTitle] = useState("Workout");

  return (
    <>
      <div id={Styles.container}>
        <EditableText text={title} setText={setTitle} />
        <input
          id={Styles.title}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div id={Styles.week}>
          <Day day="1" />
          <Day day="2" />
          <Day day="3" />
          <Day day="4" />
          <Day day="5" />
          <Day day="6" />
          <Day day="7" />
        </div>
      </div>
      <span id={Styles.viewDetails}>View Details</span>
    </>
  );
}

export default Week;
