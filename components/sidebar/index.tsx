"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { doLogout } from "@/@core/actions/logout";

export function Sidebar() {
  const router = useRouter();
  const [alert, setAlert] = useState('')
  
  const MASTER_MENU = [
    {
      parent: '',
      data: [
        {
          id: 'dashboard',
          label: 'Dashboard',
          active: true,
          link: '/'
        },
        {
          id: 'todo-list',
          label: 'Todo List',
          active: false,
          link: '/dashboard/todo'
        }
      ]
    },
    {
      parent: 'Master Data',
      data: [
        {
          id: 'category',
          label: 'Category',
          active: false,
          link: '/master-data/category'
        },
        {
          id: 'sub-category',
          label: 'Sub Category',
          active: false,
          link: '/master-data/sub-category'
        }
      ]
    }
  ]
  const [activeMenu, setActiveMenu] = useState<string>('dashboard');
  const handleMenu = (item:any) => {
    setActiveMenu(item.id)
    router.push(item.link);
  }

  const handleLogout  = () => {
    doLogout()
  }

 

  return (
    <div className="flex flex-col h-[100%] p-7 rounded-sm relative" 
      style={{
        background: 'linear-gradient(0deg, rgba(23,22,59,1) 0%, rgba(27,25,66,1) 57%, rgba(38,34,80,1) 100%)'
      }}
    >
      <h3 className="mb-[147px]">TodoList {alert}</h3>
      {MASTER_MENU.map((item, index) => (
        <div key={index}>
          <p className="my-[20px] text-[#a5a2d6] px-3 font-semibold">{item.parent}</p>
          {item.data.map((subItem) => (
            <div key={subItem.id} className={`${activeMenu === subItem.id ? 'bg-[#2a2754] text-white' : 'text-[#6F6C99]'} rounded-sm py-2 px-3 mb-[10px] cursor-pointer text-sm`} onClick={() => handleMenu(subItem)}>
              <p  className="">{subItem.label}</p>
            </div>
          ))}
        </div>
      ))}
      <Button onClick={() => {handleLogout()}} className="absolute bottom-3 w-[80%]"
        style={{background: 'linear-gradient(313deg, rgba(196,56,239,1) 30%, rgba(255,64,154,1) 100%)'}}
      >Logout</Button>
    </div>
  )
}

export default Sidebar;