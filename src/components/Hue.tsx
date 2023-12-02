import React from "react";

interface HueObject {
  color: string;
  username: string;
  likes: number;
}

interface Props {
  hue: HueObject;
}

function getTextColor(backgroundColor: string): string {
  const r_num = Number("0x" + backgroundColor.slice(1, 3));
  const g_num = Number("0x" + backgroundColor.slice(3, 5));
  const b_num = Number("0x" + backgroundColor.slice(5, 7));

  const hue_intensity = r_num * 0.299 + g_num * 0.587 + b_num * 0.114;

  return hue_intensity > 186 ? "text-black" : "text-white";
}

const Hue: React.FC<Props> = (props: Props) => {
  const textColorClass = getTextColor(props.hue.color);
  return (
    <div
      className={`flex flex-col h-64 aspect-square rounded-3xl text-center justify-between items-center border-2 border-black relative ${textColorClass}`}
      style={{ backgroundColor: props.hue.color }}
    >
      <p className="text-2xl opacity-80">{props.hue.color}</p>

      <div className="bg-black text-white flex w-full text-center justify-center p-4 rounded-b-2xl">
        <p className="text-xl">{props.hue.username}</p>
      </div>
    </div>
  );
};

export default Hue;