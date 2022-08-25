import { FC } from 'react'
import { Footer } from '@/components/layout/Footer'
import {SecTop} from "@/pages/home/SecTop"
import {SecHowTo} from "@/pages/home/SecHowTo"
import {SecContributors} from "@/pages/home/SecContributors"
import {SecDoer} from "@/pages/home/SecDoer"
import {AppHeader} from "@/components/layout/AppHeader"

export const Home: FC = () => {
  return (
    <div>
      <AppHeader/>
      <SecTop/>
      <SecHowTo/>
      <SecContributors/>
      <SecDoer/>
      <Footer />
    </div>
  )
}
