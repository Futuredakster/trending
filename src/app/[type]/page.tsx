"use client";
import { useParams } from 'next/navigation';
import Header from "@/components/header";
import SearchBar from "@/components/searchBar";
import "@/CSS/Main.css";
import Content from "@/components/content";
import Sidebar from "@/components/sidebar";


export default function Home() {
  const params = useParams();
  
  // Safely get type as string or undefined
  const typeParam = Array.isArray(params.type) ? params.type[0] : params.type;

  return (
    <div className="wrapper">
        <Sidebar />
        <div className="main-content-area">
      <Header />
      <SearchBar />
      <div className="title">
        <h1 className="bit font-bold text-4xl">Trending Topics</h1>
      </div>
      <Content type={typeParam} />
      </div>
    </div>
  );
}
