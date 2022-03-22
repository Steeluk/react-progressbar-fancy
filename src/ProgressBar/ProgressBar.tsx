import * as React from "react";
import "./progressBar.scss";
import { useEffect } from "react";
import { IProgressBarProps } from "./ProgressBar.types";

const ProgressBar: React.FC<IProgressBarProps> = (props) => {
  const [progressAnimation, setProgressAnimation] =
    React.useState<boolean>(false);

  const {
    score,
    progressWidth,
    className,
    primaryColor,
    secondaryColor,
    progressColor = primaryColor || secondaryColor ? "" : "red",
    label,
    hideText,
    darkTheme,
    disableGlow,
  } = props;

  useEffect(() => {
    setProgressAnimation(true);
  });

  const renderProgressFiller = (glow: boolean) => (
    <>
      <div
        className={`progressFill ${
          !(primaryColor || secondaryColor) && progressColor
        } ${glow && "glowingEffect"}`}
        style={{
          width: progressAnimation ? `${score}%` : '100%',
          background: `linear-gradient( to right, ${primaryColor}, ${secondaryColor})`,
        }}
      />
      {/* <div className="or-spacer-vertical left">
        <div className="mask"></div>
      </div> */}
      <div className="vl1"></div>
      <div className="vl2"></div>
      <div className="vl3"></div>
      <div className={`${!(primaryColor || secondaryColor) && progressColor}`}>
        <div
          className={`particlesContainer`}
          style={{
            left: progressAnimation ? `${score > 1 ? score : 1}%` : '100%',
            visibility: score > 4 ? 'visible' : 'hidden'
          }}
        >
          <div className={`particles`} />
          <div
            className={`smallParticles smallParticles4`}
            style={{ background: secondaryColor }}
          />
          <div
            className={`smallParticles smallParticles3`}
            style={{ background: secondaryColor }}
          />
          <div
            className={`smallParticles smallParticles2`}
            style={{ background: secondaryColor }}
          />
          <div
            className={`bigParticles`}
            style={{ background: secondaryColor }}
          />
          <div
            className={`smallParticles`}
            style={{ background: secondaryColor }}
          />
          <div
            className={`particles particles2`}
            style={{ background: secondaryColor }}
          />
          <div
            className={`smallParticles smallParticles5`}
            style={{ background: secondaryColor }}
          />
          <div
            className={`smallParticles smallParticles6`}
            style={{ background: secondaryColor }}
          />
        </div>
      </div>
    </>
  );

  return (
    <div
      className={`progressBarFancyContainer ${className}`}
      style={{ width: progressWidth }}
    >
      {!hideText && (
        <div className={`labelScoreContainer ${darkTheme && `labelDarkTheme`}`}>
          <div className={`label`}>{label}</div>
          <div className={`number`}>{score}%</div>
        </div>
      )}
      <div className={`barGaugeContainer`} style={{ flexWrap: "wrap" }}>
        <div
          className={`progressbarWidth`}
          style={{
            width: progressWidth
          }}
        >
          <div className={`progressBar`}>
            <div className={`progressTrack`} />
            {renderProgressFiller(false)}
            {!disableGlow && renderProgressFiller(true)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
