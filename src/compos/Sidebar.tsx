import { Brain } from "../assets/icons/Brain";
import { Document } from "../assets/icons/Document";
import { Link } from "../assets/icons/Link";
import { Tag } from "../assets/icons/Tags";
import { Tweet } from "../assets/icons/Tweet";
import { YouTube } from "../assets/icons/Youtube";
import { SideBarItem } from "./SideBarItem";


  export function SideBar(){
    return <div className="h-screen bg-white border-r-2 w-72 fixed left-0 top-0 p-4">
            <div className="flex items-center p-2">
             <div className="pr-2 text-purple-400"><Brain /></div> 
             <div className="font-bold text-lg">Second Brain</div>
            </div>
             <SideBarItem text = {'Tweeets'} icon={<Tweet />} />
             <SideBarItem text = {'documents'} icon={<Document />} />
             <SideBarItem text = {'Videos'} icon={<YouTube />} />
             <SideBarItem text = {'Links'} icon={<Link />} />
             <SideBarItem text = {'Tags'} icon={<Tag />} />

            </div>

  }