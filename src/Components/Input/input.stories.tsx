import { InputComponent, InputProps, InputRootProps } from './input'
import { Envelope } from 'phosphor-react'
import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Components/Input',
    component: InputComponent.Root,
    args: {
        children: [
            <InputComponent.Icon>
                    <Envelope />
            </InputComponent.Icon>,
            <InputComponent.Input placeholder="example of placeholder" />
        ]
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }
} as Meta<InputRootProps>

export const Default: StoryObj<InputProps> = {}

export const WithoutIcon: StoryObj<InputProps> = {
    args: {
        children: <InputComponent.Input placeholder="example of placeholder" />
    },
}
