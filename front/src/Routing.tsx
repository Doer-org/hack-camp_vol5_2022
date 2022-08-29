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

export const Routing: FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="CreateRoom" element={<CreateRoomPage />} />
          <Route path="/event/new" element={<EventNew />} />
          <Route path="event" element={<RegisterUserPage />} />
          <Route path="/event/step0" element={<EventStep0/>} />
          <Route path="event/event" element={<QuestionsPage />} />
          <Route path="event/user/list" element={<UserInfoPage />} />
          <Route path="event/prepare" element={<UserListPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
