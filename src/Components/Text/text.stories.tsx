import { Text, TextProps } from './text'

import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Hello World.',
        size: 'sm'
    },
    argTypes: {
        size: {
            options: ['xs', 'sm', 'md'],
            control: {
                type: 'select'
            }
        }
    }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
    args: {
        size: 'xs'
    }
}

export const Large: StoryObj<TextProps> = {
    args: {
        size: 'md'
    }
}

export const CustomChild: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: <p>
            Hello World in tag P
        </p>
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }
}