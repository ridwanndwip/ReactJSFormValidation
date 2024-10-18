import { useState } from 'react'
import React from 'react'

const InputText = ({label, value, type, onChange}) => {

  return (
    <li className='flex flex-col md:flex-row md:items-center md:border-b md:border-[#BDBDBD] md:gap-8 md:pb-3'>
      <label htmlFor="" className='block text-sm font-medium md:w-4/5 lg:w-1/2 xl:w-1/3 md:text-base after:content-["*"] after:ml-0.5 after:text-[#D19675]'>{label}</label>
      <div className='w-full relative'>
        <input type={type} className='mt-2 outline-none bg-transparent border-b border-[#BDBDBD] w-full py-4 text-sm font-light text-slate-500 tracking-widest placeholder:font-extralight md:border-none md:m-0' value={value} onChange={onChange} placeholder={label}/>
      </div>
    </li>
    )
}


// const IDProfile = [
  
//   {
//     "ID" : "2378934023",
//     "name" : "Aldo Kurniawan"
//   },
//   {
//     "ID" : "2378936724",
//     "name" : "Hakim Al Nasr"
//   },
//   {
//     "ID" : "2348544003",
//     "name" : "Ridwan Dwi P"
//   },
//   {
//     "ID" : "2378564083",
//     "name" : "Fitrah Algifari"
//   },
//   {
//     "ID" : "2378834012",
//     "name" : "Riski Sadar"
//   },
// ]

function App() {
  
  const [form, setForm] = useState({
    identityNumber : '',
    email : '',
    username : '',
    phoneNumber : '',
    password : '',
    confirmPassword : '',
    reasonRegist : '',
  })
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    error ? alert(error) : alert(form.identityNumber);
    console.log(form);
  }

  const handleChange = (e) => {
    const { value } = e.target;
    setForm({ ...form, identityNumber: value }); // Selalu update state
    value.length < 3 ? setError('Field Minimal 3 Karakter') : setError('');
  }

  return (
    <>
      <div className=' px-8 py-16 md:w-3/5 mx-auto'>
        <h1 className='text-mainColor font-normal tracking-wide text-5xl'> Registration Form </h1>
        
        <form action="" className='mt-16 text-sm' onSubmit={handleSubmit}>
          
          <ul className='flex flex-col gap-10'>
          <InputText label='Identity Number' type='number' value={form.identityNumber} onChange={handleChange} />

          <InputText label='Email' type='text' value={form.email} onChange={(e) => setForm({...form, email : e.target.value})}/>

          <InputText label='Username' type='text' value={form.username} onChange={(e) => setForm({...form, username : e.target.value})}/>

          <InputText label='Phone Number' type='number' value={form.phoneNumber} onChange={(e) => setForm({...form, phoneNumber : e.target.value})}/>

          <InputText label='Password' type='password' value={form.password} onChange={(e) => setForm({...form, password : e.target.value})}/>

          <InputText label='Confirm Password' type='password' value={form.confirmPassword} onChange={(e) => setForm({...form, confirmPassword : e.target.value})} />

          <label htmlFor="" className='text-sm font-medium'> Reason for Registration <span className='text-[#D19675] font-bold'>*</span>
            <textarea type='text' name='textArea' className='block mt-4 outline-none bg-transparent border-b border-[#BDBDBD] w-full text-sm font-light text-[#BDBDBD] tracking-wider h-32 placeholder:font-extralight' placeholder='Reason For Registration' value={form.reasonRegist} onChange={(e) => setForm({...form, reasonRegist : e.target.value})}/>
          </label>

          <input type="submit" className='bg-stone-200 h-32 cursor-pointer font-light tracking-widest'/>

          </ul>

          {/* <label htmlFor="" className='text-sm font-medium'>Country
          <input type="dropdown" className='block mt-2 outline-none bg-transparent border-b border-[#BDBDBD] w-full'/>
          </label> */}
          
          {/* <label htmlFor="" className='text-sm font-medium'>
            Package
            <span className='text-[#D19675] font-bold'>*</span>
            <span className='flex flex-col justify-'>
              <input type='checkbox' className=''/>
              <input type='checkbox' className=''/>
              <input type='checkbox' className=''/>
              <input type='checkbox' className=''/>
            </span>
          </label> */}

          

        </form>
      </div>        
    </>
  )
}
export default App



