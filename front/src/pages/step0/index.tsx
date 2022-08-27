import { FC } from 'react'
import { SecCard } from './SecCard'
import {RegisterBackground} from './RegisterBackground'


export const StepZero: FC = () => {
    return(
    <RegisterBackground>
    <SecCard />
    </RegisterBackground>
    )
}