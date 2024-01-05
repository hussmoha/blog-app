"use client"

import Link from "next/link" 
import { usePathname } from "next/navigation"

const mainRoutes = [ 
  {path: "/", name: "Home"}, 
  {path: "/dashboard", name: "Dashboard"}
]

function SideBar() { 
const pathname = usePathname();

  return (
    <aside className="min-h-screen min-w-[300px] bg-zinc-900 text-white/50"> 
    <ul className="h-full text-center flex flex-col py-5 gap-2"> 
    {mainRoutes.map(({ path, name}) =>{ 
      return ( 
        <li key={path}>  
        <Link  
        className={`py-3 px-5 text-center ${  
          pathname === path ? 
          "bg-zinc-800" : "" }
        hover:bg-zinc-800 rounded-md w-min-[90%] transition inline-block`} 
        href={path}
        > 
        {name} 
        </Link>
        </li>
      )
    })}
    </ul>
    </aside>
  )
}

export default SideBar
