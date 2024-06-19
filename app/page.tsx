'use client'

import { Button } from "@/components/ui/button/Index";
import { useState } from "react";


export default function Home() {
  const [loading, setLoading] = useState(false);
  return (
    <main className="mx-auto container mt-20 ">
      <div className="grid grid-cols-4 items-center justify-center gap-8">
        <Button className="justify-self-center">
          Primary
        </Button>

        <Button
           className="justify-self-center"
           loading={loading}
           onClick={() => setLoading(!loading)}
        >Primary</Button>
      </div>

    </main>
  );
}
