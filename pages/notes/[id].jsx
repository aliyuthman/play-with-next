import { useRouter } from "next/router";
import React from "react";

function Page() {
  const router = useRouter();

  const { id } = router.query;
  return <div>Page { id }</div>;
}

export default Page;
