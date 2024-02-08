"use client";
import { useParams } from "next/navigation";

export default function Page() {
  const { dynamic } = useParams();

  return <div>{`page: ${dynamic}`}</div>;
}
