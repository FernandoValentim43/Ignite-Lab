import './styles/global.css'

import { Button } from './components/Button'
import { Heading } from './components/Heading'
import { Text } from './components/Text'

import reactLogo from "./react-orange.svg"

export function App() {
  return (
    <section className='flex w-80 flex-col justify-center items-center' >
      <img src={reactLogo} className="w-20 animate-spin-slow"/>
      <Heading children={"Ignite Lab"} asChild={false}  size={"md"}/>
      <Text children={"Faça o login e começe a usar"} asChild={false}  size={"md"}/>

      <Button children={"Entrar na plataforma"} asChild={false} />
    </section>
  )
}

 