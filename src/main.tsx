import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "typeface-inter";
import { SeedProvider } from "./contexts/SeedContext.tsx";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MemoryRouter>
      <QueryClientProvider client={queryClient}>
        <SeedProvider>
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <App />
          </SkeletonTheme>
        </SeedProvider>
      </QueryClientProvider>
    </MemoryRouter>
  </React.StrictMode>
);
