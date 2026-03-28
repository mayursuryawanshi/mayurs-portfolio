import { useMemo } from "react";
import { useScrollAnimation } from "@/features/portfolio/hooks/use-scroll-animation";

interface ScrollShapeProps {
  /** Vertical zone: "top" = 5-30%, "mid" = 30-65%, "bottom" = 65-90% */
  zone: "top" | "mid" | "bottom";
  /** Horizontal side */
  side: "left" | "right";
  size: string;
  shape: string;
  animation: string;
  postAnimation?: string;
  delay?: string;
  rounded?: boolean;
  rotate?: string;
  hideBelow?: "lg" | "xl";
}

const zoneRanges = {
  top: [5, 30],
  mid: [30, 65],
  bottom: [65, 90],
} as const;

const sideRanges = {
  left: [1, 10],
  right: [1, 10],
} as const;

const randBetween = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const ScrollShape = ({
  zone,
  side,
  size,
  shape,
  animation,
  postAnimation = "",
  delay = "0s",
  rounded = false,
  rotate = "",
  hideBelow = "xl",
}: ScrollShapeProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: false });

  const pos = useMemo(() => {
    const [yMin, yMax] = zoneRanges[zone];
    const [xMin, xMax] = sideRanges[side];
    return {
      top: `${randBetween(yMin, yMax)}%`,
      [side]: `${randBetween(xMin, xMax)}%`,
    };
  }, [zone, side]);

  return (
    <div
      ref={ref}
      className={`absolute hidden ${hideBelow}:block pointer-events-none z-0`}
      style={{ ...pos, transitionDelay: delay }}
    >
      <div
        className={`${size} neo-border-thick ${shape} neo-shadow ${rounded ? "rounded-full" : ""} ${rotate} ${animation} ${postAnimation} ${isVisible ? "visible" : ""}`}
        style={{ transitionDelay: delay }}
      />
    </div>
  );
};

export default ScrollShape;
