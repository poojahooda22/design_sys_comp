'use client'

import { Button } from "@/components/ui/button/Index";
import { useState } from "react";


export default function Home() {
  const [loading, setLoading] = useState(false);

  const [count, setCount] = useState(1)

  function increment() {
    setCount(prevCount => prevCount + 1 )
  }

  function decrement() {
    setCount(prevCount => prevCount - 1)
  }
  return (
    <main className="mx-auto container mt-20 text-white ">
      {/* <div className="grid grid-cols-4 items-center justify-center gap-[4vw]">
        <Button className="justify-self-center" size="small">
          Primary
        </Button>
        <Button className="justify-self-center" size="medium" disabled>
          Primary
        </Button>
        <Button className="justify-self-center" size="large">
          Primary
        </Button>
        <Button
           className="justify-self-center"
           loading={loading}
           onClick={() => setLoading(!loading)}
        >Primary</Button>
        <Button
          className="justify-self-center"
          intent="secondary"
          size="small"
        >
          Secondary
        </Button>
        <Button
          className="justify-self-center"
          intent="secondary"
          size="medium"
        >
          Secondary
        </Button>
        <Button
          className="justify-self-center"
          intent="secondary"
          size="large"
        >
          Secondary
        </Button>
        <Button
          className="justify-self-center"
          intent="secondary"
          size="xl"
        >
          Secondary
        </Button>
        <Button
          className="justify-self-center"
          intent="destructive"
          size="small"
        >
          Destructive
        </Button>
        <Button
          className="justify-self-center"
          intent="destructive"
          size="medium"
        >
          Destructive
        </Button>
        <Button
          className="justify-self-center"
          intent="destructive"
          size="large"
        >
          Destructive
        </Button>
        <Button
          className="justify-self-center"
          intent="destructive"
          size="xl"
        >
          Destructive
        </Button>
      </div> */}
        <button 
        onClick={decrement}
        className="text-[1.5vw] mr-4 bg-blue-500 px-[2vw] rounded-lg">-</button>
        <span className="text-[2vw] ">{count}</span>
        <button 
        onClick={increment}
        className="text-[1.5vw] ml-4 bg-blue-500 px-[2vw] py-[0vw] rounded-lg">+</button>
    </main>
  );
}
