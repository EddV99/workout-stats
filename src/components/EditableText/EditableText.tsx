import { useEffect, useRef, useState } from "react";
import { MdEdit } from "react-icons/md";
import Styles from "./EditableText.module.css";
interface Props {
  text: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
function EditableText({ text, onChange }: Props) {
  const [editing, setEditing] = useState(false);
  const editRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    editRef.current?.focus();
  });

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && text) setEditing(false);
  };

  return (
    <div className={Styles.container}>
      {editing ? (
        <>
          <input
            ref={editRef}
            value={text}
            onChange={onChange}
            onKeyDown={handleEnter}
            onBlur={() => {
              if (text) setEditing(false);
            }}
          ></input>
        </>
      ) : (
        <>
          <button id={Styles.editButton} onClick={() => setEditing(true)}>
            <MdEdit size={15} />
          </button>
          {text}
        </>
      )}
    </div>
  );
}

export default EditableText;
