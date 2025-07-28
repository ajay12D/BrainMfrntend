import { Button } from "../compos/Button";
import { Input_Box } from "../compos/Input";
import { useRef } from 'react';
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";


export function SignUp() {  
    const navigate = useNavigate();

    const usernameRef = useRef<any>('');
    const passwordRef = useRef<any>('');

    async function signUp() {
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        const res = await axios.post(BACKEND_URL+'/api/v1/brain/signUp', {
            username,
            password
        })
        if (res) {
          //  alert('user sign up');
            navigate('/signin');

        }
        else {
            alert('user did not signup');
        }
    }

    return <div className="flex bg-gray-200 w-screen h-screen justify-center items-center">
        <div className="bg-white rounded-xl min-w-48 p-8">
            <Input_Box ref={usernameRef} placeholder="username" />
            <Input_Box ref={passwordRef} placeholder="password" />

            <div className="flex justify-center pt-8" >
                <Button onClick={signUp} varient="primary" text={'sign up'} size="sm" fullWidth={true} loading={false} />
            </div>
        </div>
    </div>
}