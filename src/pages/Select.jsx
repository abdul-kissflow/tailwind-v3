import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

export function SelectComponent() {
  const [select, setSelect] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setSelect(66), 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center gap-20 p-20">
      <div className="w-[300px]">
        <Select>
          <SelectTrigger className="w-[300px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
