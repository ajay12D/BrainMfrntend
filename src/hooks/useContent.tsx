
import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export function UseContent(){
    const [contents, setContent] = useState([]);

        const token = localStorage.getItem('token');

        function refresh(){
             axios.get(BACKEND_URL+"/api/v1/brain/getContentById", 
                {
                    headers:{
                        "Authorization": `Bearer ${token}`
                    }
                }).then(res=> setContent(res.data.content))
                .catch(e=> console.log(e))
        }

        useEffect(() => {
            refresh();
           let Interval =    setInterval(()=>{
                refresh();
             },10*1000);

             return () => {
                      clearInterval(Interval);
             }
        }, []);

        return {contents, refresh}
    
}