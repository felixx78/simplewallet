import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "typeface-inter";
import { SeedProvider } from "./contexts/SeedContext.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MemoryRouter>
      <QueryClientProvider client={queryClient}>
        <SeedProvider>
          <App />
        </SeedProvider>
      </QueryClientProvider>
    </MemoryRouter>
  </React.StrictMode>
);
