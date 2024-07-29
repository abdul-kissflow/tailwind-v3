import { Slider } from "@/components/ui/slider";

export function SliderComponent() {
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center bg-primary-foreground p-20">
      <div className="w-[300px]">
        <Slider className="w-[300px]" defaultValue={[33]} max={100} step={1} />
      </div>
    </div>
  );
}
