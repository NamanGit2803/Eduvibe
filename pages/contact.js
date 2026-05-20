import React from 'react'
import axios from 'axios'
import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button"
import { CircleCheck } from 'lucide-react';
import { useRef, useEffect } from "react";

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
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"




const contact = () => {

  const router = useRouter()


  return (
    <div className="w-full h-screen flex items-center justify-center" >
      {/* text content */}
      <div className="flex flex-col justify-center items-center w-3/5 h-full">
        <Card className="w-3/5 min-h-[80%] bg-gray-50">
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
            <CardDescription>Deploy your new project in one-click.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className='flex flex-col gap-5'>
              {/* contact details  */}
              <div className='w-full flex justify-between'>
                <div className='flex flex-col'>
                  <Label>Email</Label>
                  <span className='text-gray-600'>naman123@gmail.com</span>
                </div>
                {/* phone number  */}
                <div className='flex flex-col'>
                  <Label>Phone</Label>
                  <span className='text-gray-600'>+91-4571515877</span>
                </div>
              </div>
              {/* input */}
              <div className="grid w-full items-center gap-4">
                {/* name  */}
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                {/* email  */}
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Enter your email" />
                </div>
                {/* query  */}
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="message">Your message</Label>
                  <Textarea placeholder="Type your message here." id="message" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button onClick={()=>{toast('Success',{description:'Your message has been sent.',icon:<CircleCheck/>})}}>Submit</Button>
          </CardFooter>
        </Card>
      </div>
      {/* image  */}
      <div className="w-2/5 flex items-center justify-start">
        <Image src="/pic4.png" alt="img" width={500} height={500} />
      </div>
    </div>
  )
}

export default contact