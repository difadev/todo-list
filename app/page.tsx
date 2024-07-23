"use client"

import { useEffect } from "react";

export default function Home() {


  
  useEffect(() => {
    // getSample();
  }, [])

  const getSample = async () => {
    try {
      const response = await fetch('/api/list-anime');
      if (response.ok) {
        const result = await response.json();
      } else {
        throw new Error(response.statusText)
      }
    } catch (err:any) {
      // setAlert(err.message);
    }
  }

  return (
    <main className="justify-between p-24">
      <h1 className="text-3xl my-2 font-popregular">
        Welcome
      </h1>
    </main>
  );
}
