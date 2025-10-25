export interface Skill {
  icon: any
  title: string
  color: string
  textColor?: string
}

export interface Experience {
  title: string
  company: string
  period: string
  description: string
  current: boolean
}

export interface Project {
  number: string
  title: string
  description: string
  image: string
  imagePosition: 'left' | 'right'
  year: number
  link?: string
}

export interface Testimonial {
  text: string
  author: string
  role: string
  featured?: boolean
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}
