import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center">
      <h1 className="text-3xl">There was a problem</h1>
      <p>We could not found the page youre looking for</p>
      <p>
        Go back to the <Link href="/">dashboard</Link>.
      </p>
    </main>
  );
}
