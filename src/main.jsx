import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "aos/dist/aos.css";

import { RouterProvider } from "react-router/dom";
import { router } from "./Routes/Routes";
import AuthProvaider from "./Context/AuthProvaider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvaider>
      <RouterProvider router={router} />
    </AuthProvaider>
  </StrictMode>
);
