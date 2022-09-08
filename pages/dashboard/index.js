import { useRouter } from "next/router";
import React from "react";

const index = () => {
  const router = useRouter();
  return (
    <div>
      Dashboard <br />
      <button onClick={(e) => router.push("/")}> Goto Home</button>
    </div>
  );
};

export default index;
