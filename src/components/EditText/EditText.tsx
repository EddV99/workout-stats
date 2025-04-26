import { useRef, useState } from "react";

interface Props {
  text: string
  setText: (text: string) => void
}

function EditText({ text, setText }: Props) {
  const [edit, setEdit] = useState(false)
  const [editText, setEditText] = useState(text);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickEdit = () => {
    setEdit(true);
    setEditText(text);
    inputRef.current?.focus();
  };
  const handleClickCancel = () => {
    setEdit(false);
  };
  const handleClickConfirm = () => {
    setEdit(false);
    setText(editText.trim());
  };


  return (edit ?
    (
      <div>
        <input onChange={(e) => { setEditText(e.target.value) }} value={editText} ref={inputRef} />
        <button onClick={handleClickConfirm}>Y</button>
        <button onClick={handleClickCancel}>N</button>
      </div>
    ) :
    (
      <div>
        {text}
        <button onClick={handleClickEdit}>E</button>
      </div>
    )
  );
}
export default EditText;
