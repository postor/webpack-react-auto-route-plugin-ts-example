import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, useRoutes } from "react-router-dom";
import getRoutes from "./get-routes";

let el = document.createElement("div");
document.body.append(el);
let routes = getRoutes();
console.log(routes);

const App = () => {
  return useRoutes(routes);
};

createRoot(el).render(
  <BrowserRouter>
    <Suspense fallback={"loading..."}>
      <App />
    </Suspense>
  </BrowserRouter>
);
