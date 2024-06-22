import React, { useContext } from "react";

export default function FunctionalContentComponent() {

    const darkTheme = useContext(ThemeContext);
  return (
    <>
      <button className="mt-14 ml-14">Toggle Button</button>
    </>
  )
}