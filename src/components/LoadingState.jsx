import styles from "../styles/verification.module.css";

const LoadingState = () => {
  return (
    <div className="h-screen grid place-items-center">
      <div>
        <div className={styles.scene}>
          <div className={styles.objects}>
            <div className={styles.square}></div>
            <div className={styles.circle}></div>
            <div className={styles.triangle}></div>
          </div>
          <div className={styles.wizard}>
            <div className={styles.body}></div>
            <div className={styles.rightArm}>
              <div className={styles.rightHand}></div>
            </div>
            <div className={styles.leftArm}>
              <div className={styles.leftHand}></div>
            </div>
            <div className={styles.head}>
              <div className={styles.beard}></div>
              <div className={styles.face}>
                <div className={styles.adds}></div>
              </div>
              <div className={styles.hat}>
                <div className={styles.hatOfTheHat}></div>
                <div
                  className={`${styles.fourPointStar} ${styles.first}`}
                ></div>
                <div
                  className={`${styles.fourPointStar} ${styles.second}`}
                ></div>
                <div
                  className={`${styles.fourPointStar} ${styles.third}`}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.progress}></div>
        {/* <div className={styles.noise}></div> */}
        <div className="text-lg text-center mt-2">
          Please wait for 2 mins! Sherlock searching for results.
        </div>
      </div>
    </div>
  );
};

export default LoadingState;
