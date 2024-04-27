import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";

export default function News() {
  return (
    <>
      <h1>News page</h1>

      <ul className="news-list">
        {DUMMY_NEWS.map(newsItem =>(
        <li key={newsItem.id}>
          <Link href={`/news/${newsItem.slug}`}>{newsItem.title}</Link>
        </li>

        ))}
      </ul>
    </>
  );
}
