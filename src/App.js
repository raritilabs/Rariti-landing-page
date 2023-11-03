import styles from "./styles/app.module.scss";
import raritiLogo from "../src/assets/raritiLogo.svg";
import { APP_ENUM } from "./enums/appEnum";
import arrowIcon from "../src/assets/arrowIcon.svg";
import radeIcon from "../src/assets/radeIcon.svg";
import payezyIcon from "../src/assets/payezyIcon.svg";
import tetherxIcon from "../src/assets/tetherxIcon.svg";
import backgroundImage from "../src/assets/backgroundImage3.svg";
function App() {
  return (
    <div className={styles.appMainContainer}>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <img src={raritiLogo} alt="rariti-logo" />
          <div className={styles.raritiTitle}>{APP_ENUM.raritiTitle}</div>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.getInTouchButton}>
            {APP_ENUM.getInTouchButton}
            <img
              src={arrowIcon}
              alt="arrow-icon"
              className={styles.arrowIcon}
            />
          </button>
        </div>
      </div>
      <div className={styles.bodyContainer}>
        <span className={styles.slashSymbol}>/</span>
        <span className={styles.firstContent}>
          Building products and services
        </span>
        <span className={styles.secondContent}>
          that augments access to blockchain
        </span>
        <span className={styles.thirdContent}> technologies</span>
      </div>
      <div className={styles.projectContainer}>
        <span className={styles.slashSymbol}>/</span>
        <span className={styles.ourProjects}>Our Projects</span>
      </div>
      <div className={styles.projectbuttonsContainer}>
        <a
          href="https://www.rade.io/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.hyperlink}
        >
          <div className={styles.radeButton}>
            <img src={radeIcon} alt="rade-icon" className={styles.radeIcon} />
            <span className={styles.radeTitle}>RADE</span>
          </div>
        </a>
        <a
          href="https://www.payezy.io/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.hyperlink}
        >
          <div className={styles.payezyButton}>
            <img
              src={payezyIcon}
              alt="payezy-icon"
              className={styles.payezyIcon}
            />
          </div>
        </a>
        <a
          href="https://www.tetherx.co.in/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.hyperlink}
        >
          <div className={styles.tetherxButton}>
            <span className={styles.tethexTitle}>tether</span>
            <img
              src={tetherxIcon}
              alt="tetherX-icon"
              className={styles.tetherxIcon}
            />
          </div>
        </a>
      </div>

      <div className={styles.footerContainer}>
        <span className={styles.footerSlash}>/</span>
        <span className={styles.footerContent}>
          © Copyright 2023 Rariti, Inc.
        </span>
      </div>
    </div>
  );
}

export default App;
