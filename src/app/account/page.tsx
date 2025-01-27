import { auth } from "@/auth";
import React from "react";

export default async function Account() {
  const session = await auth();
  return (
    <div>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
