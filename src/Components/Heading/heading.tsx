import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface HeadingProps {
    size?: 'lg' | 'xl' | '2xl',
    children: ReactNode,
    asChild?: boolean
}

export function Heading({size = 'xl', children, asChild }: HeadingProps) {

    const Comp = asChild ? Slot : 'h2'

    return (
        <Comp className={clsx("text-gray-100 text-sans", {
            'text-lg': size === 'lg',
            'text-xl': size === 'xl',
            'text-2xl': size === '2xl',
        })}>
            {children}
        </Comp>
    )
}