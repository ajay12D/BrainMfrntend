import { useState, useRef } from "react";
import { CrossIcon } from "../assets/icons/CrossIcon";
import { Input_Box } from "./Input";
import { Button } from "./Button";
import axios from "axios";
import { BACKEND_URL } from "../config";

export function ContentModel({open, close}){

  const textRef = useRef<any>('');
  const linkRef = useRef<any>('');
  const typeRef = useRef<any>('');

    async function AddContent(){
      console.log('::token is ', localStorage.getItem('token'));
      const title = textRef.current.value;
      const link =  linkRef.current.value;
      const type =  typeRef.current.value;
      const token = localStorage.getItem('token');

        const res = await axios.post(BACKEND_URL+"/api/v1/brain/content_creation", {
          title,
          link,
          type,

        }, {
          headers:{
            "Authorization": `Bearer ${token}`
          }
        });

        close();

     };

       return <div>
        {open && <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center">
            <div className="flex flex-col justify-center">
              <span className="bg-white rounded-md p-4">
                <div className="flex justify-end">
                 <div onClick={close} className="cursor-pointer">
                    <CrossIcon />
                 </div>
                </div>
              <div>
                 <Input_Box ref = {textRef} placeholder={"Title"} />
                 <Input_Box ref = {linkRef} placeholder={"Link"} /> 
                 <Input_Box ref = {typeRef} placeholder={'Type'} />
              </div>
                   <div className="flex justify-center">
                     <Button onClick={AddContent} varient="primary" text = {'Submit'} size={"sm"}/>
                   </div>
              </span>
            </div>
            </div>}
       </div>
}