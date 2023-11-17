import { Route, Routes as Switch } from "react-router-dom";

// Pages
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
        <Route path="/books/create" element={<CreateBook />} />
        <Route path="/books/create" element={<ShowBook />} />
        <Route path="/books/create" element={<EditBook />} />
        <Route path="/books/create" element={<DeleteBook />} />
        {/* <Route path="*" element={} /> */}
      </Route>
    </Switch>
  );
}
