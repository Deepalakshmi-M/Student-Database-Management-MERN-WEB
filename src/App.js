import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from './Component/Create';
import Edit from "./Component/Edit";
import Page_1 from "./Component/Page_1";
import Book from "./Component/Book/Book";
import Books from "./Component/Book/Books";
// import UpDel from "./Component/Book/Updel";
import React from "react";

function App() {

  return (
    <React.Fragment>
      <main>
    <Routes>
    <Route path="/page_1" element={<Page_1/>} exact />
    <Route path="/create" element={<Create/>} exact />
    <Route path="/book" element={<Book/>} exact />
    <Route path="/books" element={<Books/>} exact />
    {/* <Route path="/Updel" element={<UpDel/>} exact /> */}
    </Routes></main>
    </React.Fragment>
  );
}

export default App;
