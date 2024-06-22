

import { Button } from "@/components/ui/button/Index";
import React, { useState } from "react";
import { ThemeProvider } from "./ThemeContext";

export default function App() {

  return (
    <>
      <ThemeProvider>
        <button className="mt-14 ml-14">Toggle Button</button>
      </Theme.Provider>
    </>
      
  );
}
