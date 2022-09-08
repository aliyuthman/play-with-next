import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Page() {
  const router = useRouter();

  const { id } = router.query;

  const notes = new Array(15)
    .fill()
    .map((e, i) => ({ id: i, title: `Note: ${i}` }));

  return (
    <div>
      {/* Page {id} <br /> */}
      {notes.map((note) => (
        <div>
          <Link key={note.id} href="/notes/[id]" as={`/notes/${note.id}`}>
            <a>
              <strong>{note.title}</strong>
            </a>
          </Link>
        </div>
      ))}

      <Link href="/"> Home page</Link>
    </div>
  );
}

export default Page;
