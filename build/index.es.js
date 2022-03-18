import * as React from 'react';
import { useEffect } from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".green {\n  --primary-color: #f12711;\n  --secondary-color: #00f260; }\n\n.red {\n  --primary-color: #f12711;\n  --secondary-color: #f5af19; }\n\n.blue {\n  --primary-color: #0ED2F7;\n  --secondary-color: #B2FEFA; }\n\n.purple {\n  --primary-color: #7303c0;\n  --secondary-color: #ec38bc; }\n\n.progressBarFancyContainer {\n  width: 100%; }\n  .progressBarFancyContainer .labelScoreContainer {\n    display: flex;\n    justify-content: space-between;\n    margin: 0px 10px;\n    color: black;\n    font-family: \"Poppins\", sans-serif; }\n  .progressBarFancyContainer .label {\n    margin-left: 10px; }\n  .progressBarFancyContainer .labelDarkTheme {\n    color: white; }\n  .progressBarFancyContainer .progressBar {\n    float: left;\n    width: 100%;\n    display: flex;\n    position: relative; }\n    .progressBarFancyContainer .progressBar > .progressTrack {\n      position: relative;\n      width: 100%;\n      background: linear-gradient(90deg, #f5f5f5, #c4c4c4);\n      border-radius: 10px 0px 10px 0px;\n      margin-top: 3px;\n      height: 8px; }\n  .progressBarFancyContainer .caretUp {\n    transition: all 1s ease-in-out;\n    position: absolute;\n    top: 7px;\n    z-index: 10; }\n    .progressBarFancyContainer .caretUp.caretCompare {\n      transition: all 1s ease-in-out;\n      color: #baf4c0;\n      z-index: 2;\n      transition-delay: 0ms; }\n  .progressBarFancyContainer .topTitlePlacement {\n    flex: 0 1 100%;\n    padding-left: 10px;\n    font-weight: 500; }\n  .progressBarFancyContainer .barGaugeContainer {\n    display: flex;\n    align-items: center; }\n    .progressBarFancyContainer .barGaugeContainer .progressbarWidth {\n      width: 100%; }\n  .progressBarFancyContainer .progressFill {\n    position: absolute;\n    overflow: hidden;\n    height: 15px;\n    line-height: 20px;\n    border-radius: 10px 0px 10px 0px;\n    background: linear-gradient(to right, var(--primary-color), #F0CB35, var(--secondary-color));\n    z-index: 10; }\n    .progressBarFancyContainer .progressFill::before {\n      content: \"\";\n      position: absolute;\n      width: 100%;\n      background: linear-gradient(120deg, transparent, var(--secondary-color), transparent);\n      animation: shine 3s ease-in-out infinite;\n      height: 15px;\n      z-index: 1000; }\n  .progressBarFancyContainer .glowingEffect {\n    filter: blur(3px); }\n  .progressBarFancyContainer .particlesContainer {\n    position: absolute;\n    bottom: 50%; }\n    .progressBarFancyContainer .particlesContainer .bigParticles {\n      height: 5px;\n      width: 5px;\n      border-radius: 50%;\n      background: var(--secondary-color);\n      animation: animation3 4s ease-in-out infinite;\n      opacity: 0; }\n    .progressBarFancyContainer .particlesContainer .particles {\n      height: 4px;\n      width: 4px;\n      border-radius: 50%;\n      background: var(--secondary-color);\n      animation: animation1 2.5s ease-in-out infinite;\n      opacity: 0; }\n      .progressBarFancyContainer .particlesContainer .particles.particles2 {\n        animation: animation6 5s ease-in-out infinite; }\n    .progressBarFancyContainer .particlesContainer .smallParticles {\n      height: 2px;\n      width: 2px;\n      border-radius: 50%;\n      background: var(--secondary-color);\n      animation: animation2 3s ease-in-out infinite;\n      opacity: 0; }\n      .progressBarFancyContainer .particlesContainer .smallParticles.smallParticles2 {\n        animation: animation3 5s ease-in-out infinite; }\n      .progressBarFancyContainer .particlesContainer .smallParticles.smallParticles3 {\n        animation: animation4 2.5s ease-in-out infinite; }\n      .progressBarFancyContainer .particlesContainer .smallParticles.smallParticles4 {\n        animation: animation4 3.5s ease-in-out infinite; }\n      .progressBarFancyContainer .particlesContainer .smallParticles.smallParticles5 {\n        animation: animation5 2s ease-in-out infinite; }\n      .progressBarFancyContainer .particlesContainer .smallParticles.smallParticles6 {\n        animation: animation5 2.5s ease-in-out infinite; }\n  .progressBarFancyContainer .position {\n    position: relative;\n    z-index: 100; }\n  .progressBarFancyContainer .score {\n    padding-left: 5px;\n    text-align: right;\n    font-weight: bolder; }\n  .progressBarFancyContainer .yellow {\n    color: #d89400; }\n  .progressBarFancyContainer .red {\n    color: #fe4e5c; }\n  .progressBarFancyContainer .primary {\n    color: #4466b0; }\n  .progressBarFancyContainer .transitionDelay {\n    transition-delay: 0s; }\n\n@keyframes animation1 {\n  0% {\n    transform: translateX(-10px) translateY(15px);\n    opacity: 0; }\n  10% {\n    opacity: 1; }\n  75% {\n    opacity: 1; }\n  100% {\n    transform: translateX(-5px) translateY(5px);\n    opacity: 0; } }\n\n@keyframes animation2 {\n  0% {\n    transform: translateX(-10px) translateY(5px);\n    opacity: 0; }\n  10% {\n    opacity: 1; }\n  75% {\n    opacity: 1; }\n  100% {\n    transform: translateX(5px) translateY(20px);\n    opacity: 0; } }\n\n@keyframes animation3 {\n  0% {\n    transform: translateX(-5px) translateY(15px);\n    opacity: 0; }\n  10% {\n    opacity: 1; }\n  75% {\n    opacity: 1; }\n  100% {\n    transform: translateX(10px) translateY(0px);\n    opacity: 0; } }\n\n@keyframes animation4 {\n  0% {\n    transform: translateX(-20px) translateY(15px);\n    opacity: 0; }\n  10% {\n    opacity: 1; }\n  75% {\n    opacity: 1; }\n  100% {\n    transform: translateX(-10px) translateY(0px);\n    opacity: 0; } }\n\n@keyframes animation5 {\n  0% {\n    transform: translateX(-25px) translateY(5px);\n    opacity: 0; }\n  10% {\n    opacity: 1; }\n  75% {\n    opacity: 1; }\n  100% {\n    transform: translateX(-15px) translateY(13px);\n    opacity: 0; } }\n\n@keyframes animation6 {\n  0% {\n    transform: translateX(-20px) translateY(5px);\n    opacity: 0; }\n  10% {\n    opacity: 1; }\n  75% {\n    opacity: 1; }\n  100% {\n    transform: translateX(0px) translateY(17px);\n    opacity: 0; } }\n\n@keyframes progressbarAnimation {\n  0% {\n    background-position: 0% 50%; }\n  50% {\n    background-position: 100% 50%; }\n  100% {\n    background-position: 0% 50%; } }\n\n@keyframes shine {\n  0% {\n    left: -100%;\n    transition-property: left; }\n  62.5%,\n  100% {\n    left: 100%;\n    transition-property: left; } }\n";
styleInject(css_248z);

var ProgressBar = function (props) {
    var _a = React.useState(false), progressAnimation = _a[0], setProgressAnimation = _a[1];
    var score = props.score, progressWidth = props.progressWidth, className = props.className, primaryColor = props.primaryColor, secondaryColor = props.secondaryColor, _b = props.progressColor, progressColor = _b === void 0 ? primaryColor || secondaryColor ? '' : 'red' : _b, label = props.label, hideText = props.hideText, darkTheme = props.darkTheme, disableGlow = props.disableGlow;
    useEffect(function () {
        setProgressAnimation(true);
    });
    var renderProgressFiller = function (glow) { return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "progressFill ".concat(!(primaryColor || secondaryColor) && progressColor, " ").concat(glow && 'glowingEffect'), style: {
                width: progressAnimation ? "".concat(score, "%") : 0,
                background: "linear-gradient( to right, ".concat(primaryColor, ", ").concat(secondaryColor, ")"),
            } }),
        React.createElement("div", { className: "".concat(!(primaryColor || secondaryColor) && progressColor) },
            React.createElement("div", { className: "particlesContainer", style: {
                    left: progressAnimation ? "".concat(score > 1 ? score : 1, "%") : 1,
                } },
                React.createElement("div", { className: "particles" }),
                React.createElement("div", { className: "smallParticles smallParticles4", style: { background: secondaryColor } }),
                React.createElement("div", { className: "smallParticles smallParticles3", style: { background: secondaryColor } }),
                React.createElement("div", { className: "smallParticles smallParticles2", style: { background: secondaryColor } }),
                React.createElement("div", { className: "bigParticles", style: { background: secondaryColor } }),
                React.createElement("div", { className: "smallParticles", style: { background: secondaryColor } }),
                React.createElement("div", { className: "particles particles2", style: { background: secondaryColor } }),
                React.createElement("div", { className: "smallParticles smallParticles5", style: { background: secondaryColor } }),
                React.createElement("div", { className: "smallParticles smallParticles6", style: { background: secondaryColor } }))))); };
    return (React.createElement("div", { className: "progressBarFancyContainer ".concat(className), style: { width: progressWidth } },
        !hideText && React.createElement("div", { className: "labelScoreContainer ".concat(darkTheme && "labelDarkTheme") },
            React.createElement("div", { className: "label" }, label),
            React.createElement("div", { className: "number" },
                score,
                "%")),
        React.createElement("div", { className: "barGaugeContainer", style: { flexWrap: "wrap" } },
            React.createElement("div", { className: "progressbarWidth", style: {
                    width: progressWidth,
                    margin: "0px 10px",
                } },
                React.createElement("div", { className: "progressBar" },
                    React.createElement("div", { className: "progressTrack" }),
                    renderProgressFiller(false),
                    !disableGlow && renderProgressFiller(true))))));
};

export { ProgressBar };
//# sourceMappingURL=index.es.js.map
