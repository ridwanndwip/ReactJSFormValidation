import React from 'react'

function Validation() {

  const [name, setName] = React.useState('')
  const [error, setError] = React.useState('')

  const handleSubmit = event => {
    event.preventDefault()
    if(name.length<5){
      setError('Tes')
      // setName('')
    } else console.log(name)
    
    // if (error) {
    // alert(error)
    // } else {
    // sent to server
    // alert(name)
    }
    

    // validasi disini
    // const handleChange = (e) => {
    //   setError('')
    //   const value = e.target.value
    //   if (value.length < 3) {
    //   setError(`field minimal 3 karakter`)
    //   }
    //   setName(value)
    //   }
    const handleChange = (e) => {
      setName(e.target.value)
    }

  return (
    <form onSubmit={handleSubmit}>
    {/* {error} */}
    {/* <Input type='text' label='Name' value={name}
    onChange={handleChange} /> */}
    <label>{error}</label>
    <input type="text" value={name} onChange={handleChange}/>
    {/* <input type="text" value={name} onChange={(e) => setName(e.target.value)}/> */}
    <input type='submit' value='Submit' />
    </form>
  )
}

export default Validation