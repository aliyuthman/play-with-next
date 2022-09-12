/** @jsxRuntime classic */
// pages/notes/index.jsx
/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";

export default ({ notes }) => {
  // const notes = new Array(15)
  //   .fill(1)
  //   .map((e, i) => ({ id: i, title: `This is my note ${i}` }));


  return (
    <div sx={{ variant: "containers.page" }}>
      <h1>My Notes</h1>

      <div
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {notes.map((note) => (
          <div sx={{ width: "33%", p: 2 }}>
            <Link key={note.id} href="/notes/[id]" as={`/notes/${note.id}`}>
              <a sx={{ textDecoration: "none", cursor: "pointer" }}>
                <div sx={{ variant: "containers.card" }}>
                  <strong>{note.title}</strong>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_URL}/api/note`);
  const { data } = await res.json();

  return {
    props: {
      notes: data,
    },
  };
}

// import Link from "next/link";
// import React from "react";

// function index() {
//   return (
//     <div>
//       <h1>Welcome! This is Note Page</h1>
//       <Link href="/"> Goto Home Page</Link>
//     </div>
//   );
// }

// export default index;
