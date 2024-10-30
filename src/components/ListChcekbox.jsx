import React from 'react'

function ListChcekbox({titleCourse, dateCourse, costCourse, name, onChange}) {
  return (
    
        <div className={`flex flex-row items-center gap-5 border-[#BDBDBD] border-b py-5 after:text-[#BDBDBD] after:font-thin after:absolute after:right-0 after:md:right-0 after:italic after:text-xl after:content-["${costCourse}"] `}>
          <input type="checkbox" className='appearance-none bg-[#eeeeee] m-0 w-6 h-6 border-mainColor border-dashed border rounded-full checked:bg-[#D19675] checked:border-solid cursor-pointer' checked={name} onChange={onChange}/>
          <span className='block font-medium'> {titleCourse} <br/> <span className='font-thin mt-1 block'> {dateCourse} </span> </span>
        </div>
  )
}

export default ListChcekbox