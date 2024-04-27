import NewList from "@/components/news-list";
import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import Link from "next/link";

export default function News() {
  return (
    <>
      <h1>News page</h1>
      <NewList news={DUMMY_NEWS} />
    </>
  );
}
