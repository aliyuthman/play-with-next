import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function index() {
  const router = useRouter();

  const dashboard = () => {


    router.push("/dashboard")
  }

  return (
    <div>
      <h1>Welcome! This is Home page</h1>
      <Link href="/notes">Goto Notes Page</Link> <br />
      <Link href="notes/[id]" as={`notes/1`}>
        Goto Dynamic Page
      </Link>

      <br />
      <button onClick={dashboard}> Goto Dashboard</button>
    </div>
  );
}

export default index;
