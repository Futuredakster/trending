import React from 'react';
import { fetchHackerNewsContent } from '@/app/server/hackerNewsServerAction';
import { fetchRedditContent } from '@/app/server/redditServerAction';
 // Assuming your Search component is here

// Define the type for searchParams for better type safety
interface ContentPageProps {
  searchParams: {
    query?: string; // The search term we put in the URL
    // Add other query params you expect, e.g., page?: string;
  };
}

// Make the component async as it was, and now accept searchParams as a prop
const Contentsr = async ({ searchParams }: ContentPageProps) => {
    const redditContent = await fetchRedditContent();
    const hackerNewsContent = await fetchHackerNewsContent();
     const resolvedSearchParams = (await searchParams) || {};
      const searchQuery = resolvedSearchParams.query || '';

  const filteredReddit = redditContent.filter((post: any) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredHackerNews = hackerNewsContent.filter((post: any) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <div className="content">
        <ul className="content-list">
          <li className="content-item titles block lg:!hidden">
           <h1 className=" text-white">Platform:</h1>  <h1 className="site text-white">Hacker News</h1>
          </li>
          {filteredHackerNews.map((post: any, index: number) => (
            <li key={index} className="content-item">
            <h1 className="hidden lg:block">Hacker News:</h1>
              {post.title}
              <a className="site" href={post.url} target="_blank">
                <button className="site but">Click here to visit the article</button>
              </a>
            </li>
          ))}
        </ul>
        <ul className="content-list">
          <li className="content-item titles block lg:!hidden">
           <h1  className=" text-white">Platform:</h1> <h1 className="site text-white">Reddit</h1>
          </li>
          {filteredReddit.map((post: any, index: number) => (
            <li key={index} className="content-item">
                 <h1 className="hidden lg:block">Reddit:</h1>
              {post.title}
              <a className="site" href={post.url} target="_blank">
                <button className="site but">Click here to visit the article</button>
              </a>
            </li>
          ))}
        </ul>
    </div>
  );
};
export default Contentsr