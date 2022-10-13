import { Heading, HeadingProps } from './heading'

import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: 'Hello World.',
        size: 'xl'
    },
    argTypes: {
        size: {
            options: ['lg', 'xl', '2xl'],
            control: {
                type: 'select'
            }
        }
    }
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const Small: StoryObj<HeadingProps> = {
    args: {
        size: 'lg'
    }
}

export const Large: StoryObj<HeadingProps> = {
    args: {
        size: '2xl'
    }
}

export const CustomChild: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: <h1>
            Hello World in tag h1
        </h1>
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }
}