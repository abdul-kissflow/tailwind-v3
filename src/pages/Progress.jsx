import React from "react";
import { Progress } from "@/components/ui/progress";

export function ProgressComponent() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center gap-20 p-20">
      <div className="w-[300px]">
        <p className="small">Default</p>
        <Progress value={progress} />
      </div>
      <div className="w-[300px]">
        <p className="small">Custom</p>
        <Progress
          value={progress}
          className="bg-secondary-seven-200"
          indicatorClassName="bg-secondary-three-500"
        />
      </div>
    </div>
  );
}
