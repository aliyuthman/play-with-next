/** @jsx jsx */
/** @jsxRuntime classic */
import React from "react";
import { jsx } from "theme-ui";
import Link from "next/link";

import dynamic from "next/dynamic";
const BrowserComponent = dynamic(() => import("../src/components/Browser"), {
  ssr: false,
});

export default ({ content }) => (
  <div sx={{ height: `calc(100vh - 60px)` }}>
    <div
      sx={{
        variant: "containers.page",
        display: "flex",
        alignItems: "center",
        height: "100%",
      }}
    >
      <h1 sx={{ fontSize: 8, my: 0 }}>{content.title}</h1>
      <BrowserComponent />
    </div>
  </div>
);

export async function getStaticProps(context) {
  //simulate get data from CMS

  return {
    props: {
      content: {
        title: "This is really nice app",
      },
    },
  };
}

// import Link from "next/link";
// import { useRouter } from "next/router";
// import React from "react";
// /** @jsx jsx */
// import { jsx } from "theme-ui";

// function index() {
//   const router = useRouter();

//   const dashboard = () => {
//     router.push("/dashboard");
//   };

//   return (
//     <div sx={{ height: `calc(100vh - 60px)` }}>
//       <div
//         sx={{
//           variant: "containers.page",
//           display: "flex",
//           alignItems: "center",
//           height: "100%",
//         }}
//       >
//         <h1 sx={{ fontSize: 8, my: 0 }}>
//           This is a really dope note taking app.
//         </h1>
//       </div>
//     </div>
//   );
// }

// export default index;
