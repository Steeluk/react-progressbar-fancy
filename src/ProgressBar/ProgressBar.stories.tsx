import * as React from "react";
import { useEffect } from "react";
import ProgressBar from "./ProgressBar";

export default {
  title: "ProgressBar",
};

export const Green = () => {
  const [progress, setProgress] = React.useState(20);
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
  return <ProgressBar score={(progress * 100) / 20} status="green" barShape ="middle"/>;
};
