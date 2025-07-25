

export function Input_Box({onChange, placeholder}: {onChange: () => void; placeholder: string}){
      return <div>
        <input placeholder={placeholder} type = {'text'} className="px-4 py-2 border rounded-sm m-2" onChange = {onChange}></input>
      </div>
}