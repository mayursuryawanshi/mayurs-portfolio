import { useEffect, useState } from "react";

interface Shape {
  id: number;
  type: "circle" | "square" | "triangle" | "donut" | "spiral";
  color: string;
  size: number;
  x: number;
  y: number;
  delay: number;
  pattern?: "dots" | "stripes" | "solid";
  rotation: number;
}

const FloatingShapes = () => {
  const [shapes, setShapes] = useState<Shape[]>([]);

  useEffect(() => {
    const colors = [
      "bg-neo-pink",
      "bg-neo-cyan",
      "bg-neo-orange",
      "bg-neo-mint",
      "bg-neo-purple",
    ];

    const types: Shape["type"][] = ["circle", "square", "triangle", "donut", "spiral"];
    const patterns: Shape["pattern"][] = ["dots", "stripes", "solid"];

    const newShapes: Shape[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      type: types[Math.floor(Math.random() * types.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 80 + 40,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 4,
      pattern: patterns[Math.floor(Math.random() * patterns.length)],
      rotation: Math.random() * 360,
    }));

    setShapes(newShapes);
  }, []);

  const renderShape = (shape: Shape) => {
    const baseStyles = `absolute neo-border transition-transform duration-300`;
    const animationStyle = {
      left: `${shape.x}%`,
      top: `${shape.y}%`,
      animationDelay: `${shape.delay}s`,
      transform: `rotate(${shape.rotation}deg)`,
    };

    const patternClass = shape.pattern === "dots" 
      ? "dotted-pattern" 
      : shape.pattern === "stripes" 
        ? "diagonal-lines" 
        : "";

    switch (shape.type) {
      case "circle":
        return (
          <div
            key={shape.id}
            className={`${baseStyles} ${shape.color} ${patternClass} rounded-full animate-float`}
            style={{
              ...animationStyle,
              width: shape.size,
              height: shape.size,
            }}
          />
        );
      case "square":
        return (
          <div
            key={shape.id}
            className={`${baseStyles} ${shape.color} ${patternClass} rounded-lg animate-wiggle`}
            style={{
              ...animationStyle,
              width: shape.size,
              height: shape.size,
            }}
          />
        );
      case "triangle":
        const triangleColor = shape.color.includes("pink") ? "hsl(340 82% 65%)" 
          : shape.color.includes("cyan") ? "hsl(174 72% 56%)"
          : shape.color.includes("orange") ? "hsl(25 95% 63%)"
          : shape.color.includes("mint") ? "hsl(150 60% 90%)"
          : "hsl(270 70% 70%)";
        return (
          <div
            key={shape.id}
            className={`${baseStyles} animate-float-reverse`}
            style={{
              ...animationStyle,
              width: 0,
              height: 0,
              borderLeft: `${shape.size / 2}px solid transparent`,
              borderRight: `${shape.size / 2}px solid transparent`,
              borderBottom: `${shape.size}px solid ${triangleColor}`,
              background: "transparent",
            }}
          />
        );
      case "donut":
        return (
          <div
            key={shape.id}
            className={`${baseStyles} ${shape.color} rounded-full animate-spin-slow`}
            style={{
              ...animationStyle,
              width: shape.size,
              height: shape.size,
            }}
          >
            <div 
              className="absolute bg-background rounded-full neo-border"
              style={{
                width: shape.size * 0.5,
                height: shape.size * 0.5,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>
        );
      case "spiral":
        return (
          <div
            key={shape.id}
            className={`${baseStyles} rounded-full animate-spin-slow`}
            style={{
              ...animationStyle,
              width: shape.size,
              height: shape.size,
              background: `conic-gradient(from 0deg, hsl(48 100% 67%), hsl(0 0% 0%), hsl(48 100% 67%))`,
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {shapes.map(renderShape)}
    </div>
  );
};

export default FloatingShapes;
