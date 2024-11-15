import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/globals.css";
import App from "./App.tsx";
import ReactLenis from "lenis/react";
import { ThemeProvider } from "./components/utils/ThemeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <ReactLenis
        root
        options={{
          // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
          prevent: (node) => node.classList.contains("modal"),
          lerp: 0.04,
          // infinite: true,
          syncTouch: true,
        }}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReactLenis>
    </ThemeProvider>
  </StrictMode>
);
