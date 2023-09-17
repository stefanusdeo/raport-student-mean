"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
function ReactQuery({ children }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  );
}

export default ReactQuery;
