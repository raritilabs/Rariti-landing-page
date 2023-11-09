import React, { useState } from "react";
import styles from "./styles/app.module.scss";
import raritiLogo from "../src/assets/raritiLogo.svg";
import { APP_ENUM } from "./enums/appEnum";
import arrowIcon from "../src/assets/arrowIcon.svg";
import radeIcon from "../src/assets/radeIcon.svg";
import payezyIcon from "../src/assets/payezyIcon.svg";
import tetherxIcon from "../src/assets/tetherxIcon.svg";
import { useMediaQuery } from "react-responsive";
import Modal from "react-modal";
import cx from "classnames";
import { AppContext } from "./context";
import SupportModal from "./pages/SupportModal/SupportModal";
import { Helmet } from "react-helmet";
import linkPreviewImage from "./assets/raritiFavicon.png";
function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 992px)" });

  // State to set the Modal open or close
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleOnClickButton = () => {
    setModalIsOpen(true);
  };
  return (
    <>
      <Helmet>
        <meta property="og:image" content={linkPreviewImage} />
        <meta property="og:image:width" content="800" />{" "}
        <meta property="og:image:height" content="600" />{" "}
      </Helmet>
      <AppContext.Provider value={{ isMobile }}>
        <div className={styles.appMainContainer}>
          <div
            className={cx(styles.headerContainer, {
              [styles.headerContainerMob]: isMobile,
            })}
          >
            <div className={styles.logoContainer}>
              <img
                src={raritiLogo}
                alt="rariti-logo"
                className={cx(styles.raritiLogo, {
                  [styles.raritiLogoMob]: isMobile,
                })}
              />
              <div
                className={cx(styles.raritiTitle, {
                  [styles.raritiTitleMob]: isMobile,
                })}
              >
                {APP_ENUM.raritiTitle}
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <button
                className={cx(styles.getInTouchButton, {
                  [styles.getInTouchButtonMob]: isMobile,
                })}
                onClick={handleOnClickButton}
              >
                {APP_ENUM.getInTouchButton}
                <img
                  src={arrowIcon}
                  alt="arrow-icon"
                  className={cx(styles.arrowIcon, {
                    [styles.arrowIconMob]: isMobile,
                  })}
                />
              </button>
            </div>
          </div>
          {!isMobile && (
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
          )}
          {isMobile && (
            <div className={styles.bodyContainerMob}>
              <span className={styles.slashSymbolMob}>/</span>
              <span className={styles.firstContentMob}>
                Building products and services that augments access to
                blockchain technologies
              </span>
            </div>
          )}
          <div
            className={cx(styles.projectContainer, {
              [styles.projectContainerMob]: isMobile,
            })}
          >
            <span
              className={cx(styles.slashSymbol, {
                [styles.slashSymbolMob]: isMobile,
              })}
            >
              /
            </span>
            <span
              className={cx(styles.ourProjects, {
                [styles.ourProjectsMob]: isMobile,
              })}
            >
              Our Projects
            </span>
          </div>
          <div
            className={cx(styles.projectbuttonsContainer, {
              [styles.projectbuttonsContainerMob]: isMobile,
            })}
          >
            <a
              href="https://rade.rariti.io/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.hyperlink}
            >
              <div
                className={cx(styles.radeButton, {
                  [styles.radeButtonMob]: isMobile,
                })}
              >
                <img
                  src={radeIcon}
                  alt="rade-icon"
                  className={cx(styles.radeIcon, {
                    [styles.radeIconMob]: isMobile,
                  })}
                />
                <span
                  className={cx(styles.radeTitle, {
                    [styles.radeTitleMob]: isMobile,
                  })}
                >
                  RADE
                </span>
              </div>
            </a>
            <a
              href="https://www.payezy.io/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.hyperlink}
            >
              <div
                className={cx(styles.payezyButton, {
                  [styles.payezyButtonMob]: isMobile,
                })}
              >
                <img
                  src={payezyIcon}
                  alt="payezy-icon"
                  className={cx(styles.payezyIcon, {
                    [styles.payezyIconMob]: isMobile,
                  })}
                />
              </div>
            </a>
            <a
              href="https://www.tetherx.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.hyperlink}
            >
              <div
                className={cx(styles.tetherxButton, {
                  [styles.tetherxButtonMob]: isMobile,
                })}
              >
                <span
                  className={cx(styles.tethexTitle, {
                    [styles.tethexTitleMob]: isMobile,
                  })}
                >
                  tether
                </span>
                <img
                  src={tetherxIcon}
                  alt="tetherX-icon"
                  className={cx(styles.tetherxIcon, {
                    [styles.tetherxIconMob]: isMobile,
                  })}
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

        <Modal
          isOpen={modalIsOpen}
          overlayClassName={styles.popupOverlay}
          className={styles.popupContent}
          shouldCloseOnOverlayClick={false}
          ariaHideApp={false}
        >
          <SupportModal setModalIsOpen={setModalIsOpen} />
        </Modal>
      </AppContext.Provider>
    </>
  );
}

export default App;
