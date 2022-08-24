import React, { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { CreateRoomPage } from './pages/CreateRoomPage'
import { RegisterUserPage } from './pages/RegisterUserPage'
import { QuestionsPage } from './pages/QuestionsPage'
import { UserInfoPage } from './pages/UserInfoPage'
import { UserListPage } from './pages/UserListPage'

export const Routing: FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="CreateRoom" element={<CreateRoomPage />} />
          <Route path="event" element={<RegisterUserPage />} />
          <Route path="event/questions" element={<QuestionsPage />} />
          <Route path="event/user/list" element={<UserInfoPage />} />
          <Route path="event/prepare" element={<UserListPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
