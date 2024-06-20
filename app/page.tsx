'use client'

import { Button } from "@/components/ui/button/Index";
import { useState } from "react";


export default function Home() {
  const [loading, setLoading] = useState(false);
  return (
    <main className="mx-auto container mt-20 ">
      <div className="grid grid-cols-4 items-center justify-center gap-[4vw]">
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
      </div>

    </main>
  );
}
