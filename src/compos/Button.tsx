import type { ReactElement } from "react";

interface ButtonProps{
  varient: "primary" | "secondary",
  text: String,
  startIcon: ReactElement,
  size: "sm" | "md" | "lg",
  onClick?: () => void;
  fullWidth?: boolean,
  loading?: boolean
}

const varientStyle = {
    'primary': 'bg-purple-400 text-white flex font-light rounded-md',
    'secondary':'bg-purple-200 text-purple-400 flex rounded-md'
}
interface struct {
    "sm": string,
     "md": string,
     'lg': string
}

const defaultStyle:struct = {
    "sm": 'px-4 py-2 rounded-md',
    "md": 'px-4 py-6 rounded-md',
    "lg": 'px-6 py-8rounded-md'
}

export function Button(props:ButtonProps ){

    return <button onClick={props.onClick}
    className={`${varientStyle[props.varient]} ${defaultStyle[props.size]}
 ${props.fullWidth ? "w-full flex justify-center": ""} ${props.loading? 'opacity-45': ''} disabled:${props.loading} `}>{props.startIcon? <div className="pr-2">{props.startIcon}</div>: null} {props.text}</button>
}