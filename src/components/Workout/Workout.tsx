import Styles from "./Workout.module.css";
import { RxValueNone } from "react-icons/rx";

function Workout({ name }: { name: string }) {
  const handleButton = () => {};

  return (
    <>
      <span id={Styles.name}>{name}</span>
      <button id={Styles.chooseButton}>
        <RxValueNone size="1.5rem" />
      </button>
    </>
  );
}

export default Workout;
