import Styles from "./MuscleGroupSelection.module.css";
import { useEffect, useRef, useState } from "react";
import { ALL_MUSCLE, Muscle } from "../../data/body";

interface Props {
  label: string,
  selection: Muscle[],
  setSelection: React.Dispatch<React.SetStateAction<Muscle[]>>,
};

function MuscleGroupSelection({ label, selection, setSelection }: Props) {
  const [open, setOpen] = useState(false);

  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div ref={selectRef} id={Styles.container} onClick={() => setOpen(true)}>
      {open ? (
        <div id={Styles.selection}>
          {ALL_MUSCLE.map((m) => {
            return (
              <MuscleGroup key={m.toString()} muscleGroup={m} selection={selection} setSelection={setSelection}>
                {m.toString().toUpperCase().substring(0, 2)}
              </MuscleGroup>
            )
          })}
        </div>
      )
        : <>{label}</>
      }
    </div >
  );
}

interface Props2 {
  muscleGroup: Muscle,
  selection: Muscle[],
  setSelection: React.Dispatch<React.SetStateAction<Muscle[]>>,
  children: React.ReactNode
};

function MuscleGroup({ muscleGroup, selection, setSelection, children }: Props2) {
  const [selected, setSelected] = useState<boolean>(selection.includes(muscleGroup));

  const handleClick = () => {
    let newSelected = !selected;
    if (newSelected) {
      setSelection(p => [...p, muscleGroup]);
    } else {
      setSelection(p => [...p.filter(g => g !== muscleGroup)]);
    }
    setSelected(newSelected);
  };

  return (
    <div id={selected ? Styles.muscleSelected : Styles.muscleNotSelected} onClick={handleClick} >
      {children}
    </div>
  );
};

export default MuscleGroupSelection;
