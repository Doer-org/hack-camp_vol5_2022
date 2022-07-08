import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./coomponents/pages/HomePage";
import { CreateRoomPage } from "./coomponents/pages/CreateRoomPage";
import { RegisterUserPage } from "./coomponents/pages/RegisterUserPage";
import { QuestionsPage } from "./coomponents/pages/QuestionsPage";
import { UserInfoPage } from "./coomponents/pages/UserInfoPage";
import { UserListPage } from "./coomponents/pages/UserListPage";

export class Routing extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="CreateRoom" element={<CreateRoomPage />} />
            <Route path="event" element={<RegisterUserPage />} />
            <Route path="Questions" element={<QuestionsPage />} />
            <Route path="UserInfo" element={<UserInfoPage />} />
            <Route path="event/prepare" element={<UserListPage />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
