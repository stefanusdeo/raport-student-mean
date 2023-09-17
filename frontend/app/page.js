"use client";
import Header from "@/components/Header/Header";
import List from "@/components/List/List";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [payload, setPayload] = useState({
    lokasi: "",
    kelas: "",
    mapel: "",
  });
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <Header payload={payload} setPayload={setPayload} />
      <List payload={payload} />
    </main>
  );
}
