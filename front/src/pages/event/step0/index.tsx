import { FC } from 'react'
import { SecCard } from './SecCard'
import {RegisterBackground} from './RegisterBackground'


export const EventStep0: FC = () => {
  return(
    <RegisterBackground>
      <SecCard />
    </RegisterBackground>
  )
}