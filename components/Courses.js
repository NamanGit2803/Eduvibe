import Link from 'next/link';
import React from 'react';
import { Separator } from "@/components/ui/separator"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

import ComputerIcon from '@mui/icons-material/Computer';
import BusinessIcon from '@mui/icons-material/Business';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import { Brain, Cable, Search, LayoutDashboard, BookOpenText, FilePlus2, Users } from 'lucide-react';

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
    SidebarInput,
} from "@/components/ui/sidebar"

const Courses = () => {

    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [search, setSearch] = useState('')

    const router = useRouter()


    const handleClick = (index) => {
        index == 0 && setOpen1(!open1)
        index == 1 && setOpen2(!open2)
        index == 2 && setOpen3(!open3)
        index == 3 && setOpen4(!open4)
        index == 4 && setOpen5(!open5)
    };


    return (
        <div className=' h-full flex flex-col gap-8'>
            {/* heading  */}
            <div className='flex justify-between items-center sticky top-0 bg-gray-900 p-3 pt-5'>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink className='text-purple-500 text-xl' href='/'>Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage className='text-l text-purple-700'>Breadcrumb</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                {/* search bar  */}
                <div className='w-1/3 relative'>
                    <SidebarInput
                        id="search"
                        placeholder="Search the courses..."
                        className="pl-8 bg-gray-100 h-9"
                        onClick={(e) => { setSearch(e.target.value) }}
                    />
                    <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
                </div>
            </div>
            <div className='grid gap-5 grid-cols-3 h-full'>
                {/* card  */}
                <Card className='h-[315px] bg-purple-100 rounded-lg shadow-shadow'>
                    <CardContent className='p-0 flex flex-col gap-3'>
                        <img className='h-2/5 w-full rounded-lg' src={'https://www.cud.ac.ae/sites/default/files/programs/2020/program-bachelor-of-science-in-computer-science-1920x1080.jpg'} />
                        {/* content  */}
                        <div className='p-3 pt-1'>
                            <h2 className='font-bold text-l font-Roboto'>course name</h2>
                        </div>
                        {/* button  */}
                        <Button onClick={() => { router.push('/') }} className='bg-purple-900 w-24 ml-3 hover:bg-purple-950'>Explore</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Courses