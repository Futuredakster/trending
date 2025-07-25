// app/page.tsx
import Header from "@/components/header";
import SearchBar from "@/components/searchBar"; // Assuming you might use this later
import Search from "@/components/search";     // Your client-side search input
import Contentsr from "@/components/contentsr"; // Your Server Component that needs searchParams
import "@/CSS/Main.css";
import Sidebar from "@/components/sidebar";
import Content from "@/components/content"; // Assuming you might use this later

// Define the type for the props that a page component receives
interface HomePageProps {
  searchParams: {
    query?: string; // The search term we expect from the URL
    // Add any other query parameters you might use, e.g., page?: string;
  };
}

// Make the Home component an async function to accommodate Contentsr if Contentsr is also async
// And accept the searchParams prop from Next.js
export default async function Home({ searchParams }: HomePageProps) {
  return (
    <div className="wrapper">
      <Sidebar /> {/* Sidebar is now the first child to be visually on the left (due to row-reverse later) */}
      <div className="main-content-area"> {/* NEW DIV to group the right-side content */}
        <Header />
        <Search />
        <div className="title ">
          <h1 className="bit font-bold text-4xl ">Trending Topics</h1>
        </div>
        <Contentsr searchParams={searchParams} />
      </div>
    </div>
  );
}