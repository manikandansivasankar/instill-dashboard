import Right from "../../assets/svg/svgr/ArrowRight";
import { Link } from "react-router-dom";

const SemiCircleProgress = ({
  stroke = "#02B732",
  strokeWidth = 10,
  background = "#D0D0CE",
  diameter = 200,
  orientation = "up",
  direction = "right",
  showPercentValue = false,
  percentage = 0,
}) => {
  const coordinateForCircle = diameter / 2;
  const radius = (diameter - 2 * strokeWidth) / 2;
  const circumference = Math.PI * radius;

  let percentageValue;
  if (percentage > 100) {
    percentageValue = 100;
  } else if (percentage < 0) {
    percentageValue = 0;
  } else {
    percentageValue = percentage;
  }
  const semiCirclePercentage = percentageValue * (circumference / 100);

  let rotation;
  if (orientation === "down") {
    if (direction === "left") {
      rotation = "rotate(180deg) rotateY(180deg)";
    } else {
      rotation = "rotate(180deg)";
    }
  } else {
    if (direction === "right") {
      rotation = "rotateY(180deg)";
    }
  }

  return (
    <div className="semicircle-container" style={{ position: "relative" }}>
      <svg
        width={diameter}
        height={diameter / 2}
        style={{ transform: rotation, overflow: "hidden" }}
      >
        <circle
          cx={coordinateForCircle}
          cy={coordinateForCircle}
          r={radius}
          fill="none"
          stroke={background}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          style={{
            strokeDashoffset: circumference,
          }}
        />
        <circle
          cx={coordinateForCircle}
          cy={coordinateForCircle}
          r={radius}
          fill="none"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          style={{
            strokeDashoffset: semiCirclePercentage,
            transition:
              "stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s",
          }}
        />
      </svg>
      {showPercentValue && (
        <span
          className="semicircle-percent-value"
          style={{
            width: "100%",
            left: "0",
            textAlign: "center",
            bottom: orientation === "down" ? "auto" : "0",
            position: "absolute",
          }}
        >
          {percentage}%
        </span>
      )}
    </div>
  );
};

export default () => {
  return (
    <div className="flex h-full w-full flex-col justify-between gap-2 rounded-xl border border-[#E6E7E9] bg-white">
      <div className="flex flex-col gap-2 px-5 pt-5">
        <div className="text-lg font-medium text-[#181819E5]">
          Satisfaction Rate
        </div>
        <div className="text-base font-normal text-[#1818196B]">
          From all projects
        </div>
      </div>
      <div className="relative m-12 self-center">
        <SemiCircleProgress
          percentage={60}
          showPercentValue={false}
          stroke="#4A4DE6"
          background="#EAEAFD"
        />
        <div className="absolute -bottom-8 left-1 text-sm text-[#1818196B]">
          0%
        </div>
        <div className="absolute -bottom-8 -right-2 text-sm text-[#1818196B]">
          100%
        </div>
        <div className="absolute bottom-1 left-[50%] translate-x-[-50%] text-center text-sm text-[#1818196B]">
          <div className="mb-2 text-[28px] font-medium text-primary">60%</div>
          <div className="text-sm text-[#1818196B]">Based on likes</div>
        </div>
      </div>
      <Link
        to="/satisfaction"
        className="border-tb-[#E6E7E9] flex w-full items-center justify-end gap-2 self-end border-t p-5 text-primary"
      >
        <div className="font-medium">View all</div>
        <Right />
      </Link>
    </div>
  );
};
