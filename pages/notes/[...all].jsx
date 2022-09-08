import { useRouter } from "next/router";
import React from "react";

const EllipsisRoute = () => {
  const router = useRouter();

  const { all } = router.query;
  console.log(all);
  return <div> {all} </div>;
};

export default EllipsisRoute;
