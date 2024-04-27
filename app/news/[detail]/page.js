import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default function NewsDetailsPage({ params }) {
  const newsSlug = params.detail;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);
  // if the news iten not exist how not found page
  if (!newsItem) {
    notFound();
  }
  return (
    <>
      <header className="news-article">
        <img src={`/images/news/${newsItem.image}`} />
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>News ID: {newsItem.id}</p>
    </>
  );
}
