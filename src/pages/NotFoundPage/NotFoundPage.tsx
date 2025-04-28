import { Link } from "react-router";
import Styles from "./NotFoundPage.module.css";

function NotFoundPage() {
  return (
    <div id={Styles.content}>
      <div id={Styles.phrase}>Page was not found</div>
      <Link id={Styles.goBack} to="/">GO BACK HOME</Link>
    </div>
  );
}

export default NotFoundPage;
