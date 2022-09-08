import { FC, ReactNode } from "react"

interface IProps {
  children: ReactNode
}

export const EventBackground: FC<IProps> = ({ children }) => {
  return (
    <section className="min-h-screen from-doer-purple to-thin-purple lg:flex lg:items-center lg:justify-center lg:bg-gradient-to-br">
      {children}
    </section>
  )
}