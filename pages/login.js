import React from 'react'
import Box from '@mui/material/Box';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CircleAlert,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import axios from 'axios';
import { toast } from "sonner"




const login = () => {

    const [isFlipped, setIsFlipped] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [password, setPassword] = useState('')
    const [showPassword2, setShowPassword2] = useState(false)
    const [password2, setPassword2] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState(false)
    const [error2, setError2] = useState(false)
    const [msg, setMsg] = useState('')
    const disabled = false

    const router = useRouter()

    const flipped = (e) => {
        e.preventDefault()
        setIsFlipped(!isFlipped)
        setPassword('')
        setError(false)
        setError2(false)
        setPassword2('')
    }

    // login function
    const login = async () => {
        if (email != '' && password != '') {
            await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
                data: { email, password, msg: 'login' }
            }).then((response) => {
                if (response.data.success && response.data.userType == 'user') {
                    toast("login successfully")
                    localStorage.setItem('token', response.data.token)
                    setTimeout(() => {
                        router.push('/')
                        setEmail('')
                        setPassword('')
                    }, 1500);
                } else if (response.data.success && response.data.userType == 'admin') {
                    toast("login successfully as admin")
                    localStorage.setItem('token', response.data.token)
                    setTimeout(() => {
                        router.push('/admin')
                        setEmail('')
                        setPassword('')
                    }, 1500);
                } else if (response.data.msg == 'User not exist') {
                    setError(true)
                    setMsg('User does not exist ! Please sign up.')
                } else if (response.data.msg == 'Invalid credintial') {
                    setError2(true)
                    setMsg('Invalid Password!')
                }
            }).catch((error) => {
                console.log(error);
            });
        } else {
            toast("Error.", { description: 'Please enter email and password' })

        }
    }

    const signUp = async () => {
        if (email != '' && password != '' && password2 != '' && name != '') {
            if (password == password2) {
                await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
                    data: { email, password, msg: 'signup', name }
                }).then((response) => {
                    console.log(response)
                    if (response.data.success && response.data.userType == 'user') {
                        toast("Welcome. Signup successfully")
                        localStorage.setItem('token', response.data.token)
                        setTimeout(() => {
                            router.push('/')
                            setEmail('')
                            setPassword('')
                        }, 1500);
                    } else if (response.data.msg == 'User already exist') {
                        setError(true)
                        setMsg('User already exist ! Please login.')
                    }
                }).catch((error) => {
                    console.log(error);
                });
            } else {
                setMsg('Both password does not match!')
                setError2(true)
            }
        } else {
            toast("Error.", { description: 'Please enter email and both password' })
        }
    }




    return (
        <div className='flex w-full h-screen justify-center items-center'>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                {/* login card  */}
                <Card className="mx-auto max-w-sm">
                    <CardHeader>
                        <CardTitle className="text-2xl">Login</CardTitle>
                        <CardDescription>
                            Enter your email below to login to your account
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    onChange={(e) => { setEmail(e.target.value), setError(false), setError2(false) }}
                                />
                            </div>
                            {/* error msg  */}
                            {error && <div className='text-red-600 text-[14px]'>{msg}</div>}
                            {/* password  */}
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                </div>
                                <div className="relative">
                                    <Input
                                        type={showPassword ? 'text' : 'password'}
                                        className={cn('hide-password-toggle pr-10')}
                                        onChange={(e) => { setPassword(e.target.value), setError2(false), setError(false) }}
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                        onClick={() => setShowPassword((prev) => !prev)}
                                        disabled={disabled}
                                    >
                                        {showPassword && !disabled ? (
                                            <EyeIcon className="h-4 w-4" aria-hidden="true" />
                                        ) : (
                                            <EyeOffIcon className="h-4 w-4" aria-hidden="true" />
                                        )}
                                        <span className="sr-only">{showPassword ? 'Hide password' : 'Show password'}</span>
                                    </Button>

                                    {/* hides browsers password toggles */}
                                    <style>{`.hide-password-toggle::-ms-reveal, .hide-password-toggle::-ms-clear {
                                    visibility: hidden;
						            pointer-events: none;
						            display: none;
					                }`}
                                    </style>
                                </div>
                            </div>
                            {/* error msg  */}
                            {error2 && <div className='text-red-600 text-[14px]'>{msg}</div>}
                            {/* button  */}
                            <Button onClick={login} type="submit" className="w-full">
                                Login
                            </Button>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Don&apos;t have an account?{" "}
                            <span onClick={flipped} className="underline cursor-pointer">
                                Sign up
                            </span>
                        </div>
                    </CardContent>
                </Card>

                {/* signup card  */}
                <Card className="mx-auto max-w-sm">
                    <CardHeader>
                        <CardTitle className="text-2xl">Sign up</CardTitle>
                        <CardDescription>
                            Enter your email below to sign up to your account
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4">
                            {/* name  */}
                            <div className="grid gap-2">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    type="name"
                                    placeholder="Enter name"
                                    required
                                    onChange={(e) => { setName(e.target.value)}}
                                />
                            </div>
                            {/* email  */}
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                    onChange={(e) => { setEmail(e.target.value), setError(false), setError2(false) }}
                                />
                            </div>
                            {/* error msg  */}
                            {error && <div className='text-red-600 text-[14px]'>{msg}</div>}
                            {/* password  */}
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                </div>
                                <div className="relative">
                                    <Input
                                        type={showPassword ? 'text' : 'password'}
                                        className={cn('hide-password-toggle pr-10')}
                                        onChange={(e) => { setPassword(e.target.value), setError2(false), setError(false) }}
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                        onClick={() => setShowPassword((prev) => !prev)}
                                        disabled={disabled}
                                    >
                                        {showPassword && !disabled ? (
                                            <EyeIcon className="h-4 w-4" aria-hidden="true" />
                                        ) : (
                                            <EyeOffIcon className="h-4 w-4" aria-hidden="true" />
                                        )}
                                        <span className="sr-only">{showPassword ? 'Hide password' : 'Show password'}</span>
                                    </Button>

                                    {/* hides browsers password toggles */}
                                    <style>{`.hide-password-toggle::-ms-reveal, .hide-password-toggle::-ms-clear {
                                    visibility: hidden;
						            pointer-events: none;
						            display: none;
					                }`}
                                    </style>
                                </div>
                            </div>
                            {/* reEnter password  */}
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Re-Enter Password</Label>
                                </div>
                                <div className="relative">
                                    <Input
                                        type={showPassword2 ? 'text' : 'password'}
                                        className={cn('hide-password-toggle pr-10')}
                                        onChange={(e) => { setPassword2(e.target.value), setError2(false), setError(false) }}
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                        onClick={() => setShowPassword2((prev) => !prev)}
                                        disabled={disabled}
                                    >
                                        {showPassword2 && !disabled ? (
                                            <EyeIcon className="h-4 w-4" aria-hidden="true" />
                                        ) : (
                                            <EyeOffIcon className="h-4 w-4" aria-hidden="true" />
                                        )}
                                        <span className="sr-only">{showPassword ? 'Hide password' : 'Show password'}</span>
                                    </Button>

                                    {/* hides browsers password toggles */}
                                    <style>{`.hide-password-toggle::-ms-reveal,
					                         .hide-password-toggle::-ms-clear {
					          	            visibility: hidden;
					          	            pointer-events: none;
					          	            display: none;
					                        }`}
                                    </style>
                                </div>
                            </div>
                            {/* error msg  */}
                            {error2 && <div className='text-red-600 text-[14px]'>{msg}</div>}
                            {/* button  */}
                            <Button onClick={signUp} type="submit" className="w-full">
                                Sign up
                            </Button>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Already have an account?{" "}
                            <span onClick={flipped} className="underline cursor-pointer">
                                login
                            </span>
                        </div>
                    </CardContent>
                </Card>
            </ReactCardFlip>
        </div>
    )
}

export default login