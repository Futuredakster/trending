"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setRedditContent, setHackerNewsContent } from "../redux/actions/contentActions";
import { RootState } from "@/redux/store";
import { fetchRedditContent } from "@/app/server/redditServerAction";
import { fetchHackerNewsContent } from "@/app/server/hackerNewsServerAction";

const Content = ({ type }: { type?: string }) => {
  const dispatch = useDispatch();
  const redditContent = useSelector((state: RootState) => state.content.redditItems);
  const hackerNewsContent = useSelector((state: RootState) => state.content.hackerNewsItems);
  const search = useSelector((state: RootState) => state.search.searchTerm);

  useEffect(() => {
    if(type === "reddit" || !type) {
    fetchRedditContent().then((data) => dispatch(setRedditContent(data)));
    }
    if(type === "hackernews" || !type) {
    fetchHackerNewsContent().then((data) => dispatch(setHackerNewsContent(data)));
    }
  }, []);

  const filteredReddit = redditContent.filter((post: any) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  const filteredHackerNews = hackerNewsContent.filter((post: any) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="content">
      {(type === "hackernews" || !type) && (
        <ul className="content-list">
          <li className="content-item titles block lg:!hidden">
           <h1 className=" text-white">Platform:</h1>  <h1 className="site text-white">Hacker News</h1>
          </li>
          {filteredHackerNews.map((post: any, index: number) => (
            <li key={index} className="content-item">
                 <h1 className="hidden lg:block">Hacker News:</h1>
              {post.title}
              <a className="site pb-5" href={post.url} target="_blank">
                <button className="site but ">Click here to visit the article</button>
              </a>
            </li>
          ))}
        </ul>
      )}

      {(type === "reddit" || !type) && (
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
      )}
    </div>
  );
};

export default Content;
