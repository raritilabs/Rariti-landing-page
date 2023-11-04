import React, { useContext } from "react";
import styles from "./index.module.scss";
import cx from "classnames";
import { AppContext } from "../../context";
import crossIcon from "../../assets/crossIcon.svg";
const SupportModal = ({ setModalIsOpen }) => {
  const { isMobile } = useContext(AppContext);
  const handleOnClickCross = () => {
    setModalIsOpen(false);
  };
  return (
    <div className={styles.modalContainer}>
      <div className={styles.crossIconContainer} onClick={handleOnClickCross}>
        <img src={crossIcon} alt="cross-icon" className={styles.crossIcon} />
      </div>
      <div className={styles.mailContainer}>
        <span
          className={cx(styles.slashSymbol, {
            [styles.slashSymbolMob]: isMobile,
          })}
        >
          /
        </span>
        <span
          className={cx(styles.firstContent, {
            [styles.firstContentMob]: isMobile,
          })}
        >
          mail us
        </span>
      </div>
      <div
        className={cx(styles.email, {
          [styles.emailMob]: isMobile,
        })}
      >
        support@rariti.io
      </div>
    </div>
  );
};

export default SupportModal;
