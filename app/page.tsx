

import { Button } from "@/components/ui/button/Index";
import React, { useState } from "react";


export default function App() {

  return (
    <>
      <div className="w-full h-[100vh] bg-black text-white">
        <div className="w-full h-full flex justify-center gap-8 items-center ">
          <Button
            intent="primary"
            size="xl"
          >Click me!</Button>
          <Button
            intent="destructive"
            size="xl"
          >Click me!</Button>
        </div>
      </div>
    </>
      
  );
}
