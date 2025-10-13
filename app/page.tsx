"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/my-courses-edit-user-admin-page");
  }, [router]);

  return null;
}
