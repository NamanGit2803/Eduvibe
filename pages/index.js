import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button"
import { MoveRight, ArrowRight } from 'lucide-react';
import { useRef, useEffect } from "react";


export default function Home({scroll}) {

  const router = useRouter()
  const mainSection = useRef()
  

  globalThis.onscroll = () => {
    console.log('hi')
    if (mainSection.current != null) {
      console.log(mainSection.current.getBoundingClientRect().y )
      if (mainSection.current.getBoundingClientRect().y < 62) {
        scroll(true)
      } else {
        scroll(false)
      }
    }
  }

  return (
    <div ref={mainSection} className="w-full h-screen flex items-center justify-center" >
      {/* text content */}
      <div className="flex flex-col justify-center items-center w-3/5">
        <div className="w-4/6 flex flex-col gap-3">
          <h1 className="text-purple-500 text-5xl font-mono flex"><span className="bg-purple-900 mr-3 pl-1.5 rounded text-white">Learn.</span> Achieve.Thrive.</h1>
          <span className="text-white w-4/5 text-l font-Roboto tracking-wider">Find various courses to empowering your engineering and learn modern engineering easily with us.</span>
          {/* button  */}
          <Button onClick={() => { router.push('/courses') }} className='bg-purple-900 text-white hover:bg-purple-950 w-36 mt-2'>Explore Courses  <ArrowRight /></Button>
        </div>
      </div>
      {/* image  */}
      <div className="w-2/5 flex items-center justify-start">
        <Image src="/pic3.png" alt="img" width={500} height={500} />
      </div>
    </div>
  );
}
