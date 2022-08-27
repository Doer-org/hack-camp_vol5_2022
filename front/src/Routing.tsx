import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '@/pages/home'
import { CreateRoomPage } from './pages/CreateRoomPage'
import { RegisterUserPage } from './pages/RegisterUserPage'
import { QuestionsPage } from './pages/QuestionsPage'
import { UserInfoPage } from './pages/UserInfoPage'
import { UserListPage } from './pages/UserListPage'
import { StepZero } from './pages/step0/index'

export const Routing: FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="CreateRoom" element={<CreateRoomPage />} />
          <Route path="event" element={<RegisterUserPage />} />
          <Route path="event/step0" element={<StepZero />} />
          <Route path="event/event" element={<QuestionsPage />} />
          <Route path="event/user/list" element={<UserInfoPage />} />
          <Route path="event/prepare" element={<UserListPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
