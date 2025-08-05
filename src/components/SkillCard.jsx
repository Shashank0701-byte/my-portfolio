import React from 'react'

const SkillCard = ({icon, skillName, description, progress}) => {
  return (
    // Main container for the card
    <div className='bg-white rounded-2xl border border-[#fce8d4] p-4'>
      
      {/* Top section containing skill name and progress percentage */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>

          {/* This div is now ONLY for the icon's background */}
          <div className='w-10 h-10 flex items-center justify-center bg-gradient-to-b from-[#fdeddd] to-[#ffffff] rounded-[7px]'>
            {icon}
          </div>

          {/* FIX: The skillName is now a sibling to the icon's container */}
          <p className='text-base text-black font-medium'>{skillName}</p>

        </div>
        <p className='text-sm text-secondary font-medium'>{progress}%</p>
      </div>

      {/* Progress bar */}
      <div className='w-full bg-slate-200 rounded-md h-[5px] mt-3'>
        <div 
          className='bg-primary h-[5px] rounded-md'
          style={{width: `${progress}%`}}
        ></div>
      </div>

      {/* Description text */}
      <p className='text-xs text-slate-500 text-justify leading-5 mt-3'>
        {description}
      </p>
    </div>
  )
}

export default SkillCard