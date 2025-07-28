import type { ReactElement } from "react";

    
        interface ItemPeobs{
                text: string,
                icon: ReactElement
        }
  export function SideBarItem({text, icon}: ItemPeobs){
     return <div className="flex items-center cursor-pointer hover:bg-gray-200 max-w-48
     rounded transition-all duration-200">
        <div className="p-2 text-slate-500">{icon}</div>
        <div className="p-2">{text}</div>
     </div>
  }

    