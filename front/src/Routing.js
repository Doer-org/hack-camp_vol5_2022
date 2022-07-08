import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./coomponents/pages/HomePage";
import { CreateRoomPage } from "./coomponents/pages/CreateRoomPage";
import { RegisterYouserPage } from "./coomponents/pages/RegisterYouserPage";
import { QuestionsPage } from "./coomponents/pages/QuestionsPage";

export class Routing extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="CreateRoom" element={<CreateRoomPage />} />
            <Route path="RegisterYouser" element={<RegisterYouserPage />} />
            <Route path="Questions" element={<QuestionsPage />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
