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
    status,
    label,
    hideText,
    darkTheme,
    disableGlow,
    barShape = "middle"
  } = props;

  useEffect(() => {
    setProgressAnimation(true);
  });

  const renderProgressFiller = (glow: boolean) => (
    <>
      <div
        className={`progressFill 
        } ${glow && "glowingEffect"} ${status}`}
        style={{
          width: progressAnimation ? `${score}%` : '100%',        }}
      />
      {/* <div className="lock"  style={{left: '12.5%'}}>🔒</div> */}
      {/* <div className="lock"  style={{left: '37.5%'}}>🔒</div>
      <div className="lock"  style={{left: '62.5%'}}>🔒</div>
      <div className="lock"  style={{left: '87.5%'}}>🔒</div> */}
     {/*  Vertical Dividers
      <div className="vl"  style={{left: '25%'}}></div>
      <div className="vl"  style={{left: '50%'}}></div>
      <div className="vl"  style={{left: '75%'}}></div> */}
      <div>
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
      className={`progressBarFancyContainer ${className} ${barShape}`}
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
