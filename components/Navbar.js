import React from 'react'
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import { User, CircleUserRound } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Navbar = ({ changebg }) => {


    const navbar = useRef()
    const router = useRouter()
    const [login, setLogin] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setLogin(true)
        }else{setLogin(false)}
    }, [router.query])

    useEffect(() => {
        if (changebg == true) {
            navbar.current.style.background = '#ffffff03'
            navbar.current.style.backdropFilter = 'blur(5px)';
        } else {
            navbar.current.style.background = 'transparent'
        }
    }, [changebg])






    return (
        <div ref={navbar} className='flex w-full justify-between py-3 px-5 text-white items-center sticky z-[100000] top-0'>
            {/* logo */}
            <div onClick={() => { router.push('/') }} className='font-bold font-Roboto tracking-wide text-2xl cursor-pointer'>EduVibe</div>
            {/* items  */}
            <div className='flex font-Roboto h-full gap-1.5 items-center'>
                <Button  className='hover:text-purple-500' onClick={() => { router.push('/') }} sx={{ color: '#fff', fontSize: '15px' }} variant="text">Home</Button>
                <Button className='hover:text-purple-500' onClick={() => { router.push('/contact') }} sx={{ color: '#fff', fontSize: '15px' }} variant="text">Contact</Button>
                <Button className='hover:text-purple-500' onClick={() => { router.push('/courses') }} sx={{ color: '#fff', fontSize: '15px' }} variant="text">Courses</Button>
                {/* login button  */}
                {login == false ? <button onClick={() => { router.push('/login') }} className='bg-purple-900 text-white py-2 px-4 rounded-md active:bg-purple-950 ml-4'>Login</button> : <div className='bg-purple-900 text-white p-2 rounded-full active:bg-purple-950 ml-4 cursor-pointer'><DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <User/>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='bg-gray-400 border-0 mr-4 '>
                        <DropdownMenuItem onClick={()=>{router.push('/myAccount')}} className='focus:bg-gray-300 cursor-pointer'>Profile</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className='focus:bg-gray-300 cursor-pointer' onClick={()=>(localStorage.removeItem('token'),setLogin(false), router.push('/'))}>Log out</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu></div>}
            </div>
        </div>
    )
}

export default Navbar