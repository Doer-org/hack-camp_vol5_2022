import {FC} from "react"
import {Header} from "semantic-ui-react"
import {AppContainer} from "@/components/layout/AppContainer"

export const AppHeader: FC = () => {
  return (
    <Header className="py-6 lg:py-4">
      <AppContainer>
        <div className="text-7xl text-doer-purple lg:text-3xl">
          MeetHack
        </div>
      </AppContainer>
    </Header>
  )
}