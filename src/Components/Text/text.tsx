import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface TextProps {
    size?: 'xs' | 'sm' | 'md',
    children: ReactNode,
    asChild?: boolean
}

export function Text({size = 'sm', children, asChild }: TextProps) {

    const Comp = asChild ? Slot : 'span'

    return (
        <Comp className={clsx("text-gray-100 text-sans", {
            'text-xs': size === 'xs',
            'text-sm': size === 'sm',
            'text-md': size === 'md',
        })}>
            {children}
        </Comp>
    )
}