import { useEffect, useState } from 'react'
import InputText from './components/InputText'
import React from 'react'

const data = [
  {identityNumber : 221425234, email : 'windah123@gmail.com', username :'windah', numberPhone : +6285162742502, password : 'password1' },
  {identityNumber : 221425534, email : 'ronaldo123@gmail.com', username :'ronaldo123', numberPhone : +6285161743502, password : 'password2' },
  {identityNumber : 221425236, email : 'ricardo123@gmail.com', username :'ricardokaka', numberPhone : +6285161342502, password : 'password3' },
  {identityNumber : 221425230, email : 'ridwandwip@gmail.com', username :'ridwan', numberPhone : +6285153452532, password : 'password4' },
]

// Component PasswordList
const PasswordList = ({title, validation }) => {
  return(
    <li className={`
      ${validation}
      before:content-[''] before:w-1 before:h-1 before:rounded-full before:inline-block before:mb-[2px] before:mr-1`}> {title}
      </li>
  )
}

function App() {
  
  // Defininisi State untuk form 
  const [form, setForm] = useState({
    identityNumber : '',
    email : '',
    username : '',
    phoneNumber : '',
    password : '',
    reasonRegist : '',
  })
  // Definisi State untuk menampilkan Error
  const [error, setError] = useState({
    identityNumber : '',
    email : '',
    username : '',
    phoneNumber : '',
    password : '',
    reasonRegist : '',
  })
  // Definisi State untuk menampilkan lebih dari 1 kali
  const [countSubmit, setCountSubmit] = useState(0)

  useEffect(() =>{

  const validateData = ()=>{

    const newError = {
      identityNumber : '',
      email : '',
      username : '',
      phoneNumber : '',
      password : '',
      reasonRegist : '',
    }

    if (form.username.isRequired && form.identityNumber.length <= 5){
      newError.identityNumber = 'Identity Number must more than 5'
    }else if (data.some(user => user.username === form.email)){
      newError.identityNumber = 'Identity Number already used'
    }

    if (!form.email.includes ('@')) {
      newError.email = 'Email not valid'  
    }else if (data.some(user => user.email === form.email)){
      newError.email = 'Email already used'
    }
    
    if (data.some(user => user.username === form.username)){
      newError.username = 'Username already used'
    }
    
    if (form.phoneNumber.length < 3){
      newError.phoneNumber = 'Kurang dari 3'
    }
    if (form.password.length < 3){
      newError.password = 'Kurang dari 3'
    }
    if (form.reasonRegist.length < 3){
      newError.reasonRegist = 'Kurang dari 3'
    }
    setError(newError)
  }
  
    validateData();
    console.log('render')
  },[form])
  
  const handleSubmit = (e) => {
    // Agar react tidak auto reload saat submit click
    e.preventDefault()
    

    // if(!newError.identityNumber && !newError.email && !newError.username && !newError.phoneNumber && !newError.password && !newError.confirmPassword && !newError.reasonRegist){
    //   alert('tes')
    // } else {
    //   alert('error')
    // }

    setCountSubmit(countSubmit + 1)
    // error ? alert(error) : alert(form.identityNumber);
    // console.log(form);
  }

  const handleChange = (field, e) => {
    // const { value } = e.target;

    if(countSubmit >= 1){
      if (e.target.value.length < 3) {
        setError({...error, [field]: `isi ${field} harus lebih dari 3`})
        } else {
        setError({...error, [field]: ''})
      }
    }

    setForm({ ...form, [field]: e.target.value }); // Selalu update state
  }

  return (
    <>
      <div className=' px-8 py-16 md:w-3/5 mx-auto'>
        <h1 className='text-mainColor font-normal tracking-wide text-5xl'> Registration Form </h1>
        
        <form action="" className='mt-16 text-sm' onSubmit={handleSubmit}>
          
          <ul className='flex flex-col gap-10'>

          <InputText label='Identity Number' type='number' value={form.identityNumber} onChange={(e) => {handleChange('identityNumber', e)}}/>

          <InputText label='Email' type='text' value={form.email} onChange={(e) => {handleChange('email', e)}}/>

          <InputText label='Username' type='text' value={form.username} onChange={(e) => {handleChange('username', e)}}/>

          <InputText label='Phone Number' type='number' value={form.phoneNumber} onChange={(e) => {handleChange('phoneNumber', e)}}/>

          <InputText label='Password' type='password' value={form.password} onChange={(e) => {handleChange('password', e)}}/>
          
          <ul className='flex flex-col gap-1 -mt-7 text-xs'>
          <li>
            <span>Password must contain at least:</span>
          </li>
            <PasswordList validation={form.password.length >= 8 ? 'before:bg-green-800 text-green-800': 'before:bg-[#D19675] text-[#D19675]'} title='More thank 8 characters'/>
            
            <PasswordList validation={/[0-9]/.test(form.password) ? 'before:bg-green-800 text-green-800': 'before:bg-[#D19675] text-[#D19675]'} title='1 number (0-9)'/>

            <PasswordList validation={/[A-Z]/.test(form.password) ? 'before:bg-green-800 text-green-800': 'before:bg-[#D19675] text-[#D19675]'} title='1 uppercase letter (A-Z) dan 1 lowercase letter (a-z)'/>

            <PasswordList validation={/[!@#$%^&*(),.?":{}|<>]/.test(form.password) ? 'before:bg-green-800 text-green-800': 'before:bg-[#D19675] text-[#D19675]'} title='1 special character (e.g.,*,#,&,dsb)'/>
          </ul>

          <label htmlFor="" className='text-sm font-medium'> Package
            <input type="checkbox" className='block bg-blue-400 w-4 h-10'/>
            <input type="checkbox" className='block bg-blue-400 w-4 h-10'/>
            <input type="checkbox" className='block bg-blue-400 w-4 h-10'/>
          </label>

          <label htmlFor="" className='text-sm font-medium'> Reason for Registration <span className='text-[#D19675] font-bold'>*</span>
            <textarea type='text' name='textArea' className='block mt-4 outline-none bg-transparent border-b border-[#BDBDBD] w-full text-sm font-light text-[#BDBDBD] tracking-wider h-32 placeholder:font-extralight' placeholder='Reason For Registration' value={form.reasonRegist} onChange={(e) => {handleChange('reasonRegist', e)}}/>
          </label>

          <input type="submit" className='bg-stone-200 h-32 cursor-pointer font-light tracking-widest'/>

          </ul>

          <ul>
          {error.identityNumber && <li>{error.identityNumber}</li>}
          {error.email && <li>{error.email}</li>}
          {error.username && <li>{error.username}</li>}
          {error.phoneNumber && <li>{error.phoneNumber}</li>}
          {error.password && <li>{error.password}</li>}
          {error.confirmPassword && <li>{error.confirmPassword}</li>}
          {error.reasonRegist && <li>{error.reasonRegist}</li>}
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



