import Link from "next/link";
import React from "react";

function index() {
  return (
    <div>
      <h1>Welcome! This is Note Page</h1>
      <Link href="/"> Goto Home Page</Link>
    </div>
  );
}

export default index;
