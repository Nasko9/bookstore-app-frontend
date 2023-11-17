import { Route, Routes as Switch } from "react-router-dom";

// Pages
import Home from "./home";
// Layout component
import Layout from "../components/layout";

export default function Rotes() {
  return (
    <Switch>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="*" element={} /> */}
      </Route>
    </Switch>
  );
}
