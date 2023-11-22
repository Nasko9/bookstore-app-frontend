import { Route, Routes as Switch } from "react-router-dom";

// User Pages
import Login from "./Auth/Login";
import Register from "./Auth/Register";
// Book pages
import CreateBook from "./book/CreateBook";
import DeleteBook from "./book/DeleteBook";
import EditBook from "./book/EditBook";
import ShowBook from "./book/ShowBook";
import Home from "./home/Home";
// Layout component
import Layout from "../components/layout";

export default function Rotes() {
  return (
    <Switch>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/books/create" element={<CreateBook />} />
        <Route path="/books/create" element={<ShowBook />} />
        <Route path="/books/create" element={<EditBook />} />
        <Route path="/books/create" element={<DeleteBook />} />
        {/* <Route path="*" element={} /> */}
      </Route>
    </Switch>
  );
}
