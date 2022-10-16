import './styles/global.css'
import reactLogo from "./react-orange.svg"


import { Button } from './components/Button'
import { Heading } from './components/Heading'
import { Text } from './components/Text'
import { TextInput } from './components/Input'

import { Envelope } from 'phosphor-react'

export function App() {
  return (
    <section className='w-screen h-screen  bg-gray-900 flex items-center justify-center' >
      <header className='flex flex-col items-center'>
        <img src={reactLogo} className="w-20 animate-spin-slow"/>
          <Heading  asChild={false}  size={"md"}>
            Ignite Lab
          </Heading>
          <Text asChild={false}  size={"md"}>
            Faça o login e começe a usar
          </Text>
      </header>

      <form className='flex flex-col items-stretch'>
        <Text asChild={false}>
          Endereço de e-mail
        </Text>
        <TextInput.Root>
          <TextInput.Icon > 
            <Envelope/>
          </TextInput.Icon>

          <TextInput.Input placeholder='Digite seu e-mail'>
          
          </TextInput.Input>
        </TextInput.Root>

      </form>
      


      
    </section>
  )
}

 