import { useEffect, useState } from 'react'
import InputText from './components/InputText'
import ListCheckbox from './components/ListChcekbox'
import PasswordValidation from './components/PasswordValidation'
import data from './data.json'
import React from 'react'

function App() {
  
  // Defininisi State untuk form 
  const [form, setForm] = useState({
    identityNumber : '',
    email : '',
    username : '',
    phoneNumber : '',
    password : '',
    package : {
      dataAnalyst : false,
      frontEnd : false,
      backEnd : false,
      errorPackage : ''
    },
    reasonRegist : '',
  })

  // Definisi State untuk menampilkan Error
  const [error, setError] = useState({
    identityNumber : '',
    email : '',
    username : '',
    phoneNumber : '',
    password : '',
    package : {
      dataAnalyst : false,
      frontEnd : false,
      backEnd : false,
      errorPackage : ''
    },
    reasonRegist : '',
  })

  const handleSubmit = (e) => {
    // Agar react tidak auto reload saat submit click
    e.preventDefault()
    
    const newError = {
      identityNumber : '',
      email : '',
      username : '',
      phoneNumber : '',
      password : '',
      package : {
        dataAnalyst : false,
        frontEnd : false,
        backEnd : false,
        errorPackage : ''
      },
      reasonRegist : '',
    }

    if (form.identityNumber.length < 9){
      newError.identityNumber = 'Identity number not valid'
    } else if (data.some(user => user.identityNumber === parseInt(form.identityNumber, 10))){
      newError.identityNumber = 'Identity number already used'
    }
    
    if (!form.email.includes ('@')) {
      newError.email = 'Email not valid'  
    }else if (data.some(user => user.email === form.email)){
      newError.email = 'Email already used'
    }

    if (!form.username && form.username.length <= 3){
      newError.username = 'Username must more than 3'
    }else if (data.some(user => user.username === form.username)){
      newError.username = 'Username already used'
    }
    
    if (form.phoneNumber.length <= 5){
      newError.phoneNumber = 'Phone Number must more than 5'
    } else if(data.some(user => user.phoneNumber === parseInt(form.phoneNumber, 10))){
      newError.phoneNumber = 'Phone Number already Used'
    }

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/.test(form.password)){
      newError.password = 'Password not valid'
    }

    if (form.reasonRegist.length <= 10){
      newError.reasonRegist = 'Reason must more than 10'
    }
    setError(newError)

    if (form.package.dataAnalyst === false && form.package.frontEnd === false && form.package.backEnd === false){
      newError.package.errorPackage = 'Package cannot empty'
    }
    setError(newError)

    if(!newError.identityNumber && !newError.email && !newError.username && !newError.phoneNumber && !newError.password && !newError.reasonRegist && !newError.package.errorPackage){
      console.log(form)
    } else {
      alert('I apologize, but there seems to be an error in your data')
    }

  }

  const handleChange = (field, e) => {

      // if (e.target.value.length < 3) {
      //   setError({...error, [field]: `isi ${field} harus lebih dari 3`})
      // } else {
      //   setError({...error, [field]: ''})
      // }

    // Agar state selalu Update
    // setForm({ ...form, [field] : e.target.value }); 
    
    // setForm((prevForm) => ({
    //   ...prevForm,
    //   package: {
    //     ...prevForm.package,
    //     [field]: !prevForm.package[field],
    //   },
    // }));

    // Tentukan nilai berdasarkan tipe input (checkbox atau teks)
  const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

  setForm((prevForm) => {
    // Cek apakah field terkait dengan 'package'
    if (field.startsWith("package.")) {
      const subField = field.split(".")[1];  // Ambil nama subfield, seperti 'dataAnalyst'
      
      return {
        ...prevForm,
        package: {
          ...prevForm.package,
          [subField]: value,
        },
      };
    } else {
      return {
        ...prevForm,
        [field]: value,
      };
    }
  });

  }

  return (
    <>
      <div className=' px-8 py-16 md:w-3/5 mx-auto'>
        <h1 className='text-mainColor font-normal tracking-wide text-3xl leading-10'> ReactJS Form Validation</h1>
        
        <form action="" className='mt-16 text-sm' onSubmit={handleSubmit}>
          
          <ul className='flex flex-col gap-10'>

            <InputText label='Identity Number' type='number' value={form.identityNumber} error={error.identityNumber} onChange={(e) => {handleChange('identityNumber', e)}}/>
            
            <InputText label='Email' type='text' value={form.email} onChange={(e) => {handleChange('email', e)}} error={error.email}/>

            <InputText label='Username' type='text' value={form.username} onChange={(e) => {handleChange('username', e)}} error={error.username}/>

            <InputText label='Phone Number' type='number' value={form.phoneNumber} onChange={(e) => {handleChange('phoneNumber', e)}} error={error.phoneNumber}/>

            <InputText label='Password' type='password' value={form.password} onChange={(e) => {handleChange('password', e)}} error={error.password}/>
          
          <ul className='flex flex-col gap-1 -mt-7 text-xs'>
          <li>
            <span>Password must contain at least:</span>
          </li>
            <PasswordValidation validation={form.password.length >= 8 ? 'before:bg-green-800 text-green-800': 'before:bg-[#D19675] text-[#D19675]'} title='More than 8 characters'/>
            
            <PasswordValidation validation={/[0-9]/.test(form.password) ? 'before:bg-green-800 text-green-800': 'before:bg-[#D19675] text-[#D19675]'} title='1 number (0-9)'/>

            <PasswordValidation validation={/[A-Z]/.test(form.password) ? 'before:bg-green-800 text-green-800': 'before:bg-[#D19675] text-[#D19675]'} title='1 uppercase letter (A-Z) dan 1 lowercase letter (a-z)'/>

            <PasswordValidation validation={/[!@#$%^&*(),.?":{}|<>]/.test(form.password) ? 'before:bg-green-800 text-green-800': 'before:bg-[#D19675] text-[#D19675]'} title='1 special character (e.g.,*,#,&,dsb)'/>
          </ul>

          <li className='flex flex-col'>
              
            <label htmlFor="" className='text-sm font-medium md:text-base after:content-["*"] after:ml-0.5 after:text-[#D19675]'> Package </label>
            <span className='mt-4 text-xs font-light tracking-wide italic leading-5 xl:w-3/4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quidem aspernatur placeat, <span className='text-[#D19675]'>porro a esse ut</span> neque beatae iste. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. </span>
            
            <div className='flex flex-col gap-4 mt-4 relative font-extralight italic'>
            
              <ListCheckbox titleCourse={'Data Analyst Course'} dateCourse={'2024. 10 - 15 May'} costCourse={'$300'} name={form.package.dataAnalyst} onChange={(e) => {handleChange('package.dataAnalyst', e)}}/>

              <ListCheckbox titleCourse={'Front End Course'} dateCourse={'2024. 8 - 25 June'} costCourse={"$400"} onChange={(e) => {handleChange('package.frontEnd', e)}} name={form.package.frontEnd}/>

              <ListCheckbox titleCourse={'Back End Course'} dateCourse={'2024. 20 - 25 July'} costCourse={'$500'} onChange={(e) => {handleChange('package.backEnd', e)}} name={form.package.backEnd}/>

            </div>
          </li>
          <small className='flex-none -mt-8 text-[#D19675]'>{error.package.errorPackage}</small>

          <li className='flex flex-col'>
            <label htmlFor="" className='block text-sm font-medium md:text-base after:content-["*"] after:ml-0.5 after:text-[#D19675]'> Reason for Regist</label>
            <textarea name="Reason for Regist" value={form.reasonRegist} onChange={e => {handleChange('reasonRegist', e)}} className={`block mt-4 outline-none bg-transparent border-b border-[#BDBDBD] w-full text-sm font-light text-[#BDBDBD] tracking-wider h-32 placeholder:font-extralight ${error.reasonRegist ? 'border-[#D19675]' : ''}`} placeholder='Reason For Registration'/>
          </li>  
          <small className='flex-none -mt-8 text-[#D19675]'>{error.reasonRegist}</small>

          <input type="submit" className='bg-stone-200 h-32 cursor-pointer font-light tracking-widest'/>

          </ul>
        </form>
      </div>        
    </>
  )
}
export default App



