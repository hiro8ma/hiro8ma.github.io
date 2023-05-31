import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button } from '../components/Button'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'success', 'transparent'],
    },
    children: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const TemplateTest = Template.bind({})

TemplateTest.args = {
  variant: 'primary',
  children: 'Primary',
}

export const Primary = (props) => {
  return (
    <Button {...props} variant="primary">
      Primary
    </Button>
  )
}

export const Success = (props) => {
  return (
    <Button {...props} variant="success">
      Primary
    </Button>
  )
}

export const Transparent = (props) => {
  return (
    <Button {...props} variant="transparent">
      Transparent
    </Button>
  )
}
