import './styles/global.css'
import reactLogo from "./react-orange.svg"

import maskPhone from "./utils/maskPhone.js"


import { Button } from './components/Button'
import { Heading } from './components/Heading'
import { Text } from './components/Text'
import { TextInput } from './components/Input'

import { Envelope } from 'phosphor-react'
import { User } from 'phosphor-react'
import { LockSimple } from 'phosphor-react'
import { CheckboxComp } from './components/Checkbox'



export function App() {
  return (
    <section className='w-screen h-screen flex-col bg-gray-900 flex items-center justify-center' >
      <header className='flex flex-col items-center  mb-7'>
        <img src={reactLogo} className="w-20 animate-spin-slow"/>
          <Heading  asChild={false}  size={"md"}>
            Ignite Lab
          </Heading>
          <Text asChild={false}  size={"md"}>
            Registration form
          </Text>
      </header>

      <form className='flex flex-col gap-2.5 items-stretch w-full max-w-sm'>
        <label htmlFor="name" className="flex flex-col gap-2">
          <Heading size={'xs'} asChild={false} >
            Enter your name
          </Heading>
          <TextInput.Root>
            <TextInput.Icon > 
              <User/>
            </TextInput.Icon>
              <TextInput.Input  type="text" id="name" placeholder='Your name'>
            </TextInput.Input>
          </TextInput.Root>
        </label>
        <label htmlFor="email" className="flex flex-col gap-2">
          <Heading size={'xs'} asChild={false} >
            Enter your e-mail address
          </Heading>
          <TextInput.Root>
            <TextInput.Icon > 
              <Envelope/>
            </TextInput.Icon>
              <TextInput.Input  type="email" id="email" placeholder='Your e-mail address'>
            </TextInput.Input>
          </TextInput.Root>
        </label>
        <label htmlFor="password" className="flex flex-col gap-2">
          <Heading size={'xs'} asChild={false} >
            Enter your password
          </Heading>
          <TextInput.Root>
            <TextInput.Icon > 
              <LockSimple/>
            </TextInput.Icon>
              <TextInput.Input  type="password" id="password" placeholder='Password must have +8 numbers'>
            </TextInput.Input>
          </TextInput.Root>
        </label>
        <label htmlFor="phone" className="flex flex-col gap-2">
          <Heading size={'xs'} asChild={false} >
            Enter your phone
          </Heading>
          <TextInput.Root>
            <TextInput.Icon > 
              <LockSimple/>
            </TextInput.Icon>
              <TextInput.Input  type="tel" id="phone" placeholder='(88) 8888-8888' onChange={e => maskPhone(e)}>
            </TextInput.Input>
          </TextInput.Root>
        </label>

        <label htmlFor='agree' className='flex items-center gap-2 mt-2'>
          <CheckboxComp/>
          <Text size='sm' className="text-gray-200" asChild={false}>I agree to the terms and conditions</Text>
        </label>

       <Button type='submit' text='Sign in'/>
      </form>   

      <footer className='flex flex-col items-center gap-4 mt-8 '>
        <a href="" className='text-gray-400 underline hover:text-gray-200'>Forgot your password?</a>      
      </footer>   
    </section>
  )
}

 