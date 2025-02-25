import Styles from "./Hint.module.css";
interface Props extends React.PropsWithChildren {
  hint: string;
}
function Hint({ hint, children }: Props) {
  return (
    <div className={Styles.container}>
      {children}
      <span className={Styles.hint}>{hint}</span>
    </div>
  );
}

export default Hint;
