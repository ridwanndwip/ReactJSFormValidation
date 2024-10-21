// import React, { useState } from 'react'

// function ValidationMultiField() {
//   const [form, setForm] = useState({
//     name : '',
//     numberPhone : '',
//     email : '',
//   })

//   const [error, setError] = useState({
//     name : 'isi name harus lebih dari 3',
//     numberPhone : 'isi numberPhone harus lebih dari 3',
//     email : 'isi email harus lebih dari 3',
//   })

//   const handleSubmit = (e) => {
//     e.preventDefault()

//     if(error.name.length > 0){
//       alert(error.name)
//     }else if(error.numberPhone.length > 0){
//       alert(error.numberPhone)
//     }else if(error.email.length > 0){
//       alert(error.email)
//     }else{
//       alert('Validasi sukses')
//     }
//   }

//   const handleChange = (field, e) => {
//     // validasi disini
//     setError('')
//     const value = e.target.value
//     if (value.length < 3) {
//     setError({...error, [field]: `isi ${field} harus lebih dari 3`})
//     } else {
//     setError({...error, [field]: ''})
//     }
//     setForm({...form, [field]: value})
//     }
  
//   return (
//     <div>
//       <form action="" onSubmit={handleSubmit}>
        
//         {error.name}
//         <br/>
//         <label htmlFor="">Name : </label>
//         <input type="text" name='name' value={form.name} onChange={(e) => (handleChange('name', e))}/>
//         <br/><br/>
        
//         {error.numberPhone}
//         <br/>
//         <label htmlFor="">Number phone : </label>
//         <input type="text" name='Number Phone' value={form.numberPhone} onChange={(e) => {handleChange('numberPhone', e)}}/>
//         <br/><br/>

//         {error.email}
//         <br/>
//         <label htmlFor="">Email : </label>
//         <input type="text" name='Email' value={form.email} onChange={(e) => {handleChange('email', e)}}/>
//         <br/><br/>
//         <input type="submit" name='submit' className='bg-green-300 p-2'/>
//         <br/>
//       </form>
//     </div>
//   )
// }

// export default ValidationMultiField


import React, { useState } from 'react'

function ValidationMultiField() {
  const [form, setForm] = useState({
    name : '',
    numberPhone : '',
    email : '',
  })

  const [error, setError] = useState({
    name : '',
    numberPhone : '',
    email : '',
  })

  const [submitCount, setSubmitCount] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()

    // if(error.name.length > 0){
    //   alert(error.name)
    // }else if(error.numberPhone.length > 0){
    //   alert(error.numberPhone)
    // }else if(error.email.length > 0){
    //   alert(error.email)
    // }else{
    //   alert('Validasi sukses')
    // }

    // Reset error messages
    const newError = {
      name: '',
      numberPhone: '',
      email: '',
    }

    // Validasi untuk setiap field
    if (form.name.length <= 3) {
      newError.name = 'isi name harus lebih dari 3'
      setForm({...form, name : ''});
    }

    if (form.numberPhone.length < 3) {
      newError.numberPhone = 'isi numberPhone harus lebih dari 3'
      setForm({...form, numberPhone : ''});
    }
    if (form.email.length < 3) {
      newError.email = 'isi email harus lebih dari 3'
      setForm({...form, email : ''});
    }

    setError(newError)

     // Jika tidak ada error, lakukan tindakan berikut
    if (!newError.name && !newError.numberPhone && !newError.email) {
      alert('Validasi sukses')

      // Reset form fields ke string kosong
      setForm({
        name: '',
        numberPhone: '',
        email: '',
      })
      // Proses lebih lanjut, misalnya mengirim data ke server
    } else {
      alert ('ada kesalahan dalam form')
      // setForm({
      //   name: '',
      //   numberPhone: '',
      //   email: '',
      // })
    }

    setSubmitCount(submitCount + 1)
  }

  const handleChange = (field, e) => {
    // validasi disini
    // setError('')
    const value = e.target.value
    
    if(submitCount >= 1){
      if (value.length < 3) {
        setError({...error, [field]: `isi ${field} harus lebih dari 3`})
        } else {
        setError({...error, [field]: ''})
      }
    }
      
    setForm({
      ...form,  //buat salinan dari form yang ada
      [field]: value}) // update field yang relevan
  }
  
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        
        {/* {error.name} */}
        <br/>
        <label htmlFor="">Name : </label>
        <input type="text" name='name' value={form.name} onChange={(e) => (handleChange('name', e))}/>
        <br/><br/>
        
        {/* {error.numberPhone} */}
        <br/>
        <label htmlFor="">Number phone : </label>
        <input type="text" name='Number Phone' value={form.numberPhone} onChange={(e) => {handleChange('numberPhone', e)}} className={`${form.numberPhone && form.numberPhone.length < 3 ? 'bg-red-300' : 'bg-none'}`}/>
        <br/><br/>

        {/* {error.email} */}
        <br/>
        <label htmlFor="">Email : </label>
        <input type="text" name='Email' value={form.email} onChange={(e) => {handleChange('email', e)}}/>
        <br/><br/>
        <input type="submit" name='submit' className='bg-green-300 p-2'/>
        <br/>

        <ul>
          {/* Tampilkan pesan error jika ada */}
          {error.name && <li>{error.name}</li>}
          {error.numberPhone && <li>{error.numberPhone}</li>}
          {error.email && <li>{error.email}</li>}
        </ul>
        
      </form>
    </div>
  )
}

export default ValidationMultiField

