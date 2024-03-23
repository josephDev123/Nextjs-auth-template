"use client";

import { useSession } from "next-auth/react";

export default function page() {
  const { data: session } = useSession();
  return <section>Root page : {session?.user?.name}</section>;
}
