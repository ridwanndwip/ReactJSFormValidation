import React, { useState } from 'react'

function ValidationPart2() {
  const [name,setName] = useState ('')
  const [error, setError] = useState ('karakter minimal 3 huruf')

const handleSubmit = e =>{
e.preventDefault()
// error ? alert(error) : alert('working')
if (error) {
  alert(error)
  } else {
  // sent to server
  alert(name)
  }
}

const handleChange = e => {
  // Mengosongkan nilai error terlebih dahulu
  setError('')

  // const value = e.target.value
  // agar name terus berjalan saat ada perubahan state
  setName(e.target.value)
  
  // mengharapkan ada perubahan saat change
    if (e.target.value.length < 3) {
      setError(`karakter minimal 3 karakter`)
    }
  }

  return (
    <>
      <div>Validasi Pada Form</div>
      <h1>Jika nama kurang dari 3 huruf maka keluarkan nilai state error</h1>
      <br/><br/>
      <form action="" onSubmit={handleSubmit}>
        <span>{error}</span>
        <br/><br/>
        <label htmlFor="">
          Nama :
          <input type="text" onChange={handleChange} value={name}/>
        </label>
        <br/><br/>
        <input type="submit" name='submit' />
      </form>
    </>
  )
}

export default ValidationPart2