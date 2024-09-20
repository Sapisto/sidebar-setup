import styles from "@/components/layout/loader.module.css";
import { defaultOptions } from "@/utils/authUtils";
import Lottie from "react-lottie";

const LoadingScreen = () => {
  return (
    <div className={styles.backdrop}>
      <div className="flex flex-row items-center justify-center w-1/5 h-1/3">
        <Lottie options={defaultOptions} height={200} width={600} />
      </div>
    </div>
  );
};

export default LoadingScreen;
