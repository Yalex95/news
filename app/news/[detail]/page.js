import { DUMMY_NEWS } from "@/dummy-news";

export default function NewsDetailsPage({ params }) {
  const newsSlug = params.detail;
  const newsItem = DUMMY_NEWS.find(newsItem=>newsItem.slug===newsSlug)
  return (
    <>
    <header className="news-article">
      <img src={`/images/news/${newsItem.image}`}/>
    <h1>{newsItem.title}</h1>
    <time dateTime={newsItem.date}>{newsItem.date}</time>
    </header>
      <p>
        News ID: {newsItem.id}
      </p>
    </>
  );
}
