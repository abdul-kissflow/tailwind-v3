import { Input, INPUT_SIZES } from "@/components/ui/input";

export function InputComponent() {
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center gap-20 p-20">
      <Input
        type="input"
        id="input1"
        placeholder="Small"
        className="max-w-300"
        size={INPUT_SIZES.SMALL}
      />
      <Input
        type="input"
        id="input2"
        placeholder="Medium"
        className="max-w-300"
        size={INPUT_SIZES.MEDIUM}
      />
      <Input
        type="input"
        id="input3"
        placeholder="Large"
        className="max-w-300"
        size={INPUT_SIZES.LARGE}
      />
    </div>
  );
}
