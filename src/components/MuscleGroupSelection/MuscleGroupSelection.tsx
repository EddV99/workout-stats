import Styles from "./MuscleGroupSelection.module.css";
import Hint from "../Hint/Hint";
import icons from "../../data/icons";
import { Muscle } from "../../data/body";

interface Props {
  handleChange: (group: Muscle) => void;
}

function MuscleGroupSelection({ handleChange }: Props) {
  return (
    <div className={Styles.dropdown}>
      <Hint hint={Muscle.UPPER_FRONT}>
        <img
          src={icons.upperFrontDefaultIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(Muscle.UPPER_FRONT)}
        />
      </Hint>
      <Hint hint={Muscle.UPPER_BACK}>
        <img
          src={icons.upperBackDefaultIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(Muscle.UPPER_BACK)}
        />
      </Hint>
      <Hint hint={Muscle.LOWER_FRONT}>
        <img
          src={icons.lowerFrontDefaultIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(Muscle.LOWER_FRONT)}
        />
      </Hint>
      <Hint hint={Muscle.LOWER_BACK}>
        <img
          src={icons.lowerBackDefaultIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(Muscle.LOWER_BACK)}
        />
      </Hint>
      <Hint hint={Muscle.CHEST}>
        <img
          src={icons.upperFrontChestIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(Muscle.CHEST)}
        />
      </Hint>
      <Hint hint={Muscle.ABS}>
        <img
          src={icons.upperFrontCoreIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(Muscle.ABS)}
        />
      </Hint>
      <Hint hint={Muscle.CALVE}>
        <img
          src={icons.lowerBackCalveIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(Muscle.CALVE)}
        />
      </Hint>
      <Hint hint={Muscle.GLUTE}>
        <img
          src={icons.lowerBackGlutesIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(Muscle.GLUTE)}
        />
      </Hint>
      <Hint hint={Muscle.BICEP}>
        <img
          src={icons.upperFrontBicepIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(Muscle.BICEP)}
        />
      </Hint>
      <Hint hint={Muscle.TRICEP}>
        <img
          src={icons.upperBackTricepsIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(Muscle.TRICEP)}
        />
      </Hint>
      <Hint hint={Muscle.SHOULDER}>
        <img
          src={icons.upperFrontShoulderIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(Muscle.SHOULDER)}
        />
      </Hint>
      <Hint hint={Muscle.TRAP}>
        <img
          src={icons.upperBackTrapsIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(Muscle.TRAP)}
        />
      </Hint>
      <Hint hint={Muscle.LATS}>
        <img
          src={icons.upperBackLatsIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(Muscle.LATS)}
        />
      </Hint>
      <Hint hint={Muscle.FOREARM}>
        <img
          src={icons.upperFrontForearmsIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(Muscle.FOREARM)}
        />
      </Hint>
      <Hint hint={Muscle.NECK}>
        <img
          src={icons.upperFrontNeckIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(Muscle.NECK)}
        />
      </Hint>
      <Hint hint={Muscle.ADDUCTOR}>
        <img
          src={icons.lowerFrontAdductorsIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(Muscle.ADDUCTOR)}
        />
      </Hint>
      <Hint hint={Muscle.THIGH}>
        <img
          src={icons.lowerFrontThighsIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(Muscle.THIGH)}
        />
      </Hint>
      <Hint hint={Muscle.HAMSTRING}>
        <img
          src={icons.lowerBackHamstringsIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(Muscle.HAMSTRING)}
        />
      </Hint>
    </div>
  );
}
export default MuscleGroupSelection;
