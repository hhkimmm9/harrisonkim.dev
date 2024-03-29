import React from 'react'
import { signOut } from 'next-auth/react'

const SignOutButton = () => {
  return (
    <button onClick={() => signOut()}>
      <p className='
        cursor-pointer text-stone-100 hover:text-stone-50 hover:underline
      '>Sign out</p>
    </button>
  )
}

export default SignOutButton