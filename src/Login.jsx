import React from 'react'
import './login.css'
import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"
import 'animate.css';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
function Login() {
  return (
    <section id='login'>
       <div className="card"> 
       <Card className="w-[375px]">
      <CardHeader >
        <CardTitle>Login</CardTitle>
        <CardDescription>Welcome to the social world</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
             
              <Input id="name" placeholder="Enter Your Email" />
            </div>
            <div className="flex flex-col space-y-1.5">
            <Input id="name" placeholder="Enter Your Password" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Sign UP</Button>
        <Button>Login</Button>
      </CardFooter>
    </Card>
    </div>
    </section>
  )
}

export default Login