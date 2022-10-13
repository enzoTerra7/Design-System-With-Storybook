import { clsx } from 'clsx'
import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';


export interface InputRootProps {
    children: ReactNode
}

function InputRoot ({children}: InputRootProps) {
    return (
        <div className={
            clsx(
                "flex items-center h-12 gap-3 py-4 px-3 rounded bg-gray-800 text-gray-100 text-xs placeholder:text-gray-400 focus-within:ring-2 ring-cyan-300")
        }>
            {children}
        </div>
    )
}

InputIcon.displayName = "Input.Root"

export interface InputIconProps {
    children: ReactNode
}

function InputIcon ({children}: InputIconProps) {
    return (
        <Slot
            className="w-6 h-6 text-gray-400"
        >
            {children}
        </Slot>
    )
}

InputIcon.displayName = "Input.Icon"

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

function Input(props: InputProps) {

    return (
        <input
            className='bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none'
            {...props}
        />
    )
}

InputIcon.displayName = "Input.Input"

export const InputComponent = {
    Root: InputRoot,
    Input: Input,
    Icon: InputIcon
}