import { useState } from "react";
import { CrossIcon } from "../assets/icons/CrossIcon";
import { Input_Box } from "./Input";
import { Button } from "./Button";

export function ContentModel({open, close}){

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
                <Input_Box placeholder={"Text"} onChange={() => {}}/>
                 <Input_Box placeholder={"Link"} onChange={() => {}}/>  
              </div>
                   <div className="flex justify-center">
                     <Button varient="primary" text = {'Submit'} size={"sm"}/>
                   </div>
              </span>
            </div>
            </div>}
       </div>
}