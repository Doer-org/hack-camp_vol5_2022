import {FC} from "react"
import {Header} from "semantic-ui-react"
import {AppContainer} from "@/components/layout/AppContainer"

export const AppHeader: FC = () => {
  return (
    <Header className="py-1">
      <AppContainer>
        <div className="mt-3 text-3xl text-doer-purple">
          MeetHack
        </div>
      </AppContainer>
    </Header>
  )
}