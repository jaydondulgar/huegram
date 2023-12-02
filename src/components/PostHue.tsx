import React, { useState } from 'react'
import Hue from './Hue'

interface Props{
    addHue: (color:string)=> void
}

const PostHue = (props:Props) => {

    const[color, setColor] = useState('#');

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value;
      setColor (inputValue.startsWith('#') ? inputValue : `#${inputValue}`);
    };

    const handlePostClick = () => {
      props.addHue(color);
      setColor('#');
    };

  return (
    <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-col p-11 gap-4 text-center'>
          <input 
          type="text"
          name="hue"
          id="hue"
          value={color}
          onChange={handleColorChange}
          placeholder="Enter color code"
          className="p-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-cyan-500"
          />
          <button
            onClick={handlePostClick}
            className={`btn bg-cyan-500 text-white hover:bg-cyan-600 py-2 rounded-md w-full`}
          >
            Post
          </button>
        </div>

        <Hue hue={ {color, username:"kaylee", likes:3}} />

    </div>
  )
}

export default PostHue