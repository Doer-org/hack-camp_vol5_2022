import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '@/pages/home'
import { CreateRoomPage } from './pages/CreateRoomPage'
import { RegisterUserPage } from './pages/RegisterUserPage'
import { QuestionsPage } from './pages/QuestionsPage'
import { UserInfoPage } from './pages/UserInfoPage'
import { UserListPage } from './pages/UserListPage'
import { EventStep0 } from '@/pages/event/step0'
import { EventNew } from "@/pages/event/new"
import { EventStep1 } from "@/pages/event/step1"
import { EventStep2 } from "@/pages/event/step2"
import { EventPrepare } from "@/pages/event/prepare"
import { EventQuestions } from "@/pages/event/questions"
import { EventPage } from "@/pages/event"

export const Routing: FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="CreateRoom" element={<CreateRoomPage />} />
          <Route path="/event/new" element={<EventNew />} />
          <Route path="event/old" element={<RegisterUserPage />} />
          <Route path="/event" element={<EventPage /> } />
          <Route path="/event/step0" element={<EventStep0/>} />
          <Route path="/event/step1" element={<EventStep1 />} />
          <Route path="/event/step2" element={<EventStep2 />} />
          <Route path="/event/prepare" element={<EventPrepare />} />
          <Route path="/event/questions" element={<EventQuestions />} />
          <Route path="/event/questions/old" element={<QuestionsPage />} />
          <Route path="event/user/list" element={<UserInfoPage />} />
          <Route path="/event/prepare/old" element={<UserListPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
