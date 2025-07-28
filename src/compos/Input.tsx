

export function Input_Box({ref, placeholder}: {ref?:any, placeholder: string}){
      return <div>
        <input ref = {ref} placeholder={placeholder} type = {'text'} className="px-4 py-2 border-2 hover:border-purple-400 rounded-md m-2"  ></input>
      </div>
} 