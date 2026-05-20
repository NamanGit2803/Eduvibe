import React from 'react'
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
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
import { useState, useEffect } from "react"
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
import { Search, } from 'lucide-react';
import { toast } from "sonner"
import axios from 'axios'
import { CldUploadButton } from 'next-cloudinary';



const AddCourse = () => {

    const [name, setName] = useState('')
    const [videoLink, setVideoLink] = useState('')
    const [branch, setBranch] = useState('')
    const [sem, setSem] = useState('')
    const [imgUrl, setImgUrl] = useState('')
    const [notesLink, setNotesLink] = useState('')

    const addCourse = async(e)=>{
        e.preventDefault()

        if(name!=''&&videoLink!=''&&branch!=''&&sem!=''&&imgUrl!=''&&notesLink!=''){
            await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/addCourse`, {
                data: {name,videoLink,branch,sem,imgUrl,notesLink}
            }).then((response) => {
                if(response.data.success){
                    toast("Course added successfully")
                }
            }).catch((error) => {
                console.log(error);
            });
        }else{toast("Please fill all details")}
    }






    return (
        <div className='h-full flex flex-col'>
            {/* heading  */}
            <div className='flex justify-between items-center sticky top-0 bg-gray-900 p-3 pt-5'>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink className='text-purple-500 text-xl' href='/admin'>Admin</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage className='text-l text-purple-700'>Add Course</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            {/* add  */}
            <div className='flex justify-center items-center h-full'>
                <Card className="w-[70%]">
                    <CardHeader>
                        <CardTitle>Add Course</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="grid w-full items-center gap-4">
                                {/* name  */}
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="name">Course name</Label>
                                    <Input id="name" placeholder="Enter course name" value={name} onChange={(e) => { setName(e.target.value) }} />
                                </div>
                                {/* image url  */}
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="img">Course image url</Label>
                                    <Input id="img" placeholder="Enter image url" value={imgUrl} onChange={(e) => { setImgUrl(e.target.value) }} />
                                </div>
                                {/* video link  */}
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="img">Upload course video</Label>
                                    <CldUploadButton onClick={(e)=>{console.log(e)}} className='bg-purple-900 text-sm text-white w-36 rounded-lg p-2' uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET_NAME} />
                                </div>
                                {/* related branch  */}
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="branch">Related branch</Label>
                                    <Select onValueChange={(value) => { setBranch(value) }}>
                                        <SelectTrigger id="branch">
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent position="popper">
                                            <SelectItem value="All branch">All branch</SelectItem>
                                            <SelectItem value="Computer Science">Computer Science</SelectItem>
                                            <SelectItem value="Electrical">Electrical</SelectItem>
                                            <SelectItem value="Ai & Ds">Ai & Ds</SelectItem>
                                            <SelectItem value="Civil">Civil</SelectItem>
                                            <SelectItem value="Mechanical">Mechanical</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                {/* related semester  */}
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="semester">Related semester</Label>
                                    <Select onValueChange={(val) => { setSem(val) }}>
                                        <SelectTrigger id="semester">
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent position="popper">
                                            <SelectItem value="1st">1st sem</SelectItem>
                                            <SelectItem value="2nd">2nd sem</SelectItem>
                                            <SelectItem value="3rd">3rd sem</SelectItem>
                                            <SelectItem value="4th">4th sem</SelectItem>
                                            <SelectItem value="5th">5th sem</SelectItem>
                                            <SelectItem value="6th">6th sem</SelectItem>
                                            <SelectItem value="7th">7th sem</SelectItem>
                                            <SelectItem value="8th">8th sem</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                {/* pdf file  */}
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="notes">Course notes link</Label>
                                    <Input id="notes" placeholder="Enter course notes link" value={notesLink} onChange={(e) => { setNotesLink(e.target.value) }} />
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button className='bg-purple-900' onClick={addCourse}>Add</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default AddCourse