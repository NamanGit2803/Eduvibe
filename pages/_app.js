import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner"
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
const jwt = require('jsonwebtoken');
import axios from "axios";



// font 
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function App({ Component, pageProps }) {

  const [changebg, setChangebg] = useState(false)
  const router = useRouter()

  const scroll = (val) => {
    setChangebg(val)
  }

  useEffect(() => {
    if (router.asPath.includes('/admin')) {
      if (localStorage.getItem('token')) {

        const verify = async () => {
          await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/adminVerify`, {
            data: {token: localStorage.getItem('token')}
          }).then((response) => {
            if(response.data.error){
              router.push('/')
            }else{
              return
            }
          }).catch((error) => {
            console.log(error);
          });
        }
        verify()
      } else { router.push('/') }
    }

    if(!router.asPath.includes('/admin')){
      localStorage.removeItem('index')
    }
  }, [router.query])



  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar changebg={changebg} />
      <Component scroll={scroll} {...pageProps} />
      <Footer />
      <Toaster className="bg-white" />
    </div>
  )
}
