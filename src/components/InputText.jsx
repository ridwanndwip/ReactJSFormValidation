import React from 'react'

function InputText({label, value, type, onChange, className}) {
  return (
    <li className='flex flex-col md:flex-row md:items-center md:border-b md:border-[#BDBDBD] md:gap-8 md:pb-3'>
    <label htmlFor="" className='block text-sm font-medium md:w-4/5 lg:w-1/2 xl:w-1/3 md:text-base after:content-["*"] after:ml-0.5 after:text-[#D19675]'>{label}</label>
    <div className='w-full relative'>
      <input type={type} className={`${className} mt-2 outline-none bg-transparent border-b border-[#BDBDBD] w-full py-4 text-sm font-light text-slate-500 tracking-widest placeholder:font-extralight md:border-none md:m-0`} value={value} onChange={onChange} placeholder={label}/>
    </div>
  </li>
  )
}

export default InputText