import { useState } from "react"
import Button from "./Button"

const Card = ({logo, name, description, isActive}) => {
  const [isOn, setIsOn] = useState(false)

  function handleClick(){
    setIsOn(!isOn)
  }
  function removeBlock(){
    
  }
  return (
    <div id={isActive} className="bg-gray-800 h-44 bg-opacity-10 rounded-2xl p-4 border-[1px] border-gray-50 border-opacity-40 relative">
      <div className="flex gap-3 mb-7">
        <img src={logo} className="w-12 h-12" alt="logo" />
        <div>
            <h4 className="text-white font-bold">{name}</h4>
            <p className="text-gray-400 text-[12px]">{description}</p>
        </div>
      </div>
      <div className="absolute bottom-4 flex justify-between items-center w-[87%]">
        <Button onClick={removeBlock} label={'Remove'} border='border-[1px] border-gray-50' />
        <div onClick={handleClick} className={`relative rounded-full w-9 h-4 cursor-pointer  ${isOn ? 'bg-red-400' : 'bg-gray-400'}`}>
          <div className={`absolute w-4 h-4 bg-white rounded-full  ${isOn ? ' left-5' : ' left-0'}`}>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
