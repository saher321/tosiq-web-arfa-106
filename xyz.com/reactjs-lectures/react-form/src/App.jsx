import React from 'react'

import { useForm } from 'react-hook-form'

const App = () => {

  const { register, handleSubmit } = useForm();

  const handleUserSubmit = (data) => {
    console.log(data)
  }

  return (
    <div>
      <h1>React hook form</h1>
      <form onSubmit={handleSubmit(handleUserSubmit)}>
        <div>
          <input {...register("username")} type='text' placeholder='Enter your name' />
        </div>

        <div>
          <input {...register("email")} type='email' placeholder='Enter your email' />
        </div>

        <div>
          <input {...register("phone")} type='tel' placeholder='Enter your phone' />
        </div>

        <div>
          <input {...register("password")} type='password' placeholder='Enter your password' autoComplete='off' />
        </div>

        <div>
          <button type='submit'>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default App