import Link from 'next/link';
import React from 'react';
import { Separator } from "@/components/ui/separator"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Courses from '@/components/Courses';
import AddCourse from '@/components/AddCourse';
import AllUsers from '@/components/AllUsers'
import { CldUploadButton } from 'next-cloudinary';

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



export default function index() {

    const [selectedIndex, setSelectedIndex] = useState(0)
    const [search, setSearch] = useState('')

    const router = useRouter()

    useEffect(() => {
      if(localStorage.getItem('index')){
        let index = localStorage.getItem('index')
        setSelectedIndex(index)
      }
    }, [router.query])
    


    // on search function 
    const searchCourses = () => { }


    return (
        <div className='grid grid-cols-[1fr,0fr,4fr] h-screen'>
            {/* sidebar  */}
            <div className='flex h-full overflow-y-scroll no-scrollbar z-50'>
                {/* sidebar  */}
                <List
                    sx={{ width: '100%', color: '#f3f4f6' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader className='bg-gray-900 text-gray-100' component="div" id="nested-list-subheader">
                            Manage
                        </ListSubheader>
                    }
                >
                    {/* all courses  */}
                    <ListItemButton selected={selectedIndex==0} onClick={() => { setSelectedIndex(0),localStorage.setItem('index','0') }}>
                        <ListItemIcon>
                            <BookOpenText className='text-white' />
                        </ListItemIcon>
                        <ListItemText primary="All Courses" />
                    </ListItemButton>
                    {/* add courses  */}
                    <ListItemButton selected={selectedIndex==1} onClick={() => { setSelectedIndex(1), localStorage.setItem('index','1') }}>
                        <ListItemIcon>
                            <FilePlus2 className='text-white' />
                        </ListItemIcon>
                        <ListItemText primary="Add Courses" />
                    </ListItemButton>
                    {/* all users  */}
                    <ListItemButton selected={selectedIndex==2} onClick={() => { setSelectedIndex(2), localStorage.setItem('index','2') }}>
                        <ListItemIcon>
                            <Users className='text-white' />
                        </ListItemIcon>
                        <ListItemText primary="All Users" />
                    </ListItemButton>
                </List>
            </div>
            <Separator className='bg-gray-800' orientation="vertical" />
            {/* main content  */}
            <div className='p-4 pt-0 h-full overflow-y-scroll no-scrollbar flex flex-col gap-8'>
                {/* course page  */}
                {selectedIndex==0 && <Courses />}

                {/* add course page  */}
                {selectedIndex==1 && <AddCourse/>}

                {/* all users  */}
                {selectedIndex==2 && <AllUsers/>}
            </div>
        </div>
    );
}