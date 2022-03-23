import * as React from "react";
import { useEffect } from "react";
import ProgressBar from "./ProgressBar";

export default {
  title: "ProgressBar",
};

export const Blue = () => <ProgressBar score={25} progressColor={"blue"} />;
export const Green = () => {
  const [progress, setProgress] = React.useState(100);
  useEffect(() => {
    // exit early when we reach 0
    if (!progress) return;

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setProgress(progress - 1);
    //   if(progress === 50) setProgress(75);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [progress]);
  return <ProgressBar score={progress} progressColor={"green"} />;
};
export const Purple = () => <ProgressBar score={75} progressColor={"purple"} />;
export const Red = () => <ProgressBar score={100} progressColor={"red"} />;
export const Custom = () => (
  <ProgressBar
    score={100}
    progressWidth={100}
    primaryColor={`#0F2027`}
    secondaryColor={`#2C5364`}
    disableGlow={true}
    progressColor={"blue"}
  />
);
export const Basic = () => <ProgressBar score={100} />;
