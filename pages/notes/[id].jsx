/** @jsx jsx */
/** @jsxRuntime classic */
import React from "react";
import { jsx } from "theme-ui";
import { useRouter } from "next/router";
import Link from "next/link";

export default () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div sx={{ variant: "containers.page" }}>
      <h1>Note: {id} </h1>
    </div>
  );
};

// import Link from "next/link";
// import { useRouter } from "next/router";
// import React from "react";

// function Page() {
//   const router = useRouter();

//   const { id } = router.query;

//   const notes = new Array(15)
//     .fill()
//     .map((e, i) => ({ id: i, title: `Note: ${i}` }));

//   return (
//     <div>
//       {/* Page {id} <br /> */}
//       {notes.map((note) => (
//         <div>
//           <Link key={note.id} href="/notes/[id]" as={`/notes/${note.id}`}>
//             <a>
//               <strong>{note.title}</strong>
//             </a>
//           </Link>
//         </div>
//       ))}

//       <Link href="/"> Home page</Link>
//     </div>
//   );
// }

// export default Page;
