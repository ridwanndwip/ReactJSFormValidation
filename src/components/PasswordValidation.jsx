import React from 'react'

function PasswordValidation({title, validation}) {
  return (
    <li className={`
      ${validation}
      before:content-[''] before:w-1 before:h-1 before:rounded-full before:inline-block before:mb-[2px] before:mr-1`}> {title}
      </li>
  )
}

export default PasswordValidation