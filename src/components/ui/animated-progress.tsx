"use client";

import * as React from "react";
import { Progress } from "./progress";

export function AnimatedProgress() {
  const [progress, setProgress] = React.useState(65);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 150);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Progress value={progress} />
      <p className="text-xs text-bm-gray">{progress}% — animating</p>
    </>
  );
}
