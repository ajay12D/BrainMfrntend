import React, { useRef } from 'react'
import { Input_Box } from '../compos/Input'
import { Button } from '../compos/Button'
import axios from 'axios';
import { BACKEND_URL } from '../config';
import { useNavigate } from 'react-router-dom';
export function SignIn() {
  const naviagte = useNavigate();

  const userenameRef = useRef<any>('');
  const passwordRef = useRef<any>('');


  async function SignIn(){
    const username = userenameRef.current?.value;
    const password = passwordRef.current?.value;

    const res = await axios.post(BACKEND_URL+'/api/v1/brain/signIn', {
          username,
          password
         });

         const jwt = res.data.token;
         localStorage.setItem('token',jwt);

        naviagte('/dashboard');
  }

  return (
    <div className='w-screen h-screen bg-gray-400 flex justify-center items-center'>
      <div className='bg-white p-8 rounded-xl min-w-48'>
        <Input_Box ref={userenameRef} placeholder="username" />
        <Input_Box ref={passwordRef} placeholder="password" />
        <div className='flex justify-center pt-8'>
          <Button onClick={SignIn} varient="primary" text={'sign up'} size="sm" fullWidth={true} loading={false} />
        </div>
      </div>
    </div>
  )
}