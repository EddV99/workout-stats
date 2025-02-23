import Styles from "./Hint.module.css";
interface Props extends React.PropsWithChildren {
  hint: string;
}
function Hint({ hint, children }: Props) {
  return (
    <div className={Styles.container}>
      {children}
      <div className={Styles.hint}>{hint}</div>
    </div>
  );
}

export default Hint;
