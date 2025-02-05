import React from "react";
import { Routes, Route } from "react-router";
import { Chat, Login } from "./pages";
import { Layout } from "./layout";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route element={<Layout />}>
        <Route path="/chat" element={<Chat />} />
      </Route>
    </Routes>
  );
};

export default App;
