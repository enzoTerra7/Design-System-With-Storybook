import './styles/global.css'

import reactSvg from './assets/images/react-2.svg'

import { Heading } from './Components/Heading/heading'
import { Text } from './Components/Text/text'
import { InputComponent } from './Components/Input/input'
import { Checkbox } from './Components/Checkbox/checkbox'
import { Button } from './Components/Button/button'

import { Envelope, Lock } from 'phosphor-react'


export function App() {
  return (
    <div className="App flex items-center bg-gray-900 p-4">
      <div className="flex items-center flex-col gap-4 w-full">
        <img src={reactSvg} className="w-[100px]" alt="Logo da plataforma" />
        <span className="flex flex-col items-center gap-2 mt-2 mb-2">
          <Heading size='2xl' asChild>
            <h1 className="text-gray-100">
              Ignite Lab
            </h1>
          </Heading>
          <Text size="md" asChild>
            <span className="text-gray-400">
              Faça login e começe a usar
            </span>
          </Text>
        </span>
        <label className="flex flex-col gap-3 w-[300px]">
          <Text size='sm' asChild>
            <span className='text-gray-100'>
              Endereço de email
            </span>
          </Text>
          <InputComponent.Root>
            <InputComponent.Icon>
              <Envelope />
            </InputComponent.Icon>
            <InputComponent.Input placeholder="example@example.com" type="email" />
          </InputComponent.Root>
        </label>
        <label className="flex flex-col gap-3 w-[300px]">
          <Text size='sm' asChild>
            <span className='text-gray-100'>
              Sua senha
            </span>
          </Text>
          <InputComponent.Root>
            <InputComponent.Icon>
              <Lock />
            </InputComponent.Icon>
            <InputComponent.Input placeholder="******" type="password"/>
          </InputComponent.Root>
        </label>
        <label className='flex gap-2 items-center mb-3'>
          <Checkbox />
          <Text size="xs" asChild>
            <span className="text-gray-200">
              Faça login e começe a usar
            </span>
          </Text>
        </label>
        <span className="w-[300px]">
          <Button>
            Entrar na plataforma
          </Button>
        </span>
        <footer className="flex flex-col gap-3 items-center">
          <Text size="md" asChild>
            <a href="#" className="text-gray-400 underline">
              Esqueceu sua senha?
            </a>
          </Text>
          <Text size="md" asChild>
            <a href="#" className="text-gray-400 underline">
              Não possui uma conta? Crie agora!
            </a>
          </Text>
        </footer>
      </div>
    </div>
  )
}
