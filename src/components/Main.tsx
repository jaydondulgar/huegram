import React from 'react';
import Hue, { HueObject } from './Hue';
import PostHue from './PostHue';


interface Props {
  hues: HueObject[]; // Change this line to specify that hues is an array of HueObject
  addHue: (color: string) => void;
  toggleLike: (id: number | string) => void;
  searchTerm: string;
}


const Main: React.FC<Props> = ({ hues, addHue, toggleLike, searchTerm }) => {
  const filteredHues = hues.filter((hue) =>
    hue.color.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="flex flex-wrap w-full justify-center gap-8 overflow-y-auto pb-2 pt-4">
      <PostHue addHue={addHue} />
      {filteredHues.map((hue) => (
        <Hue key={hue.id} hue={hue} toggleLike={() => toggleLike(hue.id)} />
      ))}
    </div>
  );
};


export default Main;