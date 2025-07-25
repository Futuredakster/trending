"use client";

import { useEffect } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useSelector, useDispatch } from 'react-redux';
import { searchUpdate } from '../redux/actions/searchActions';
import { RootState } from "@/redux/store";

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const search = useSelector((state: RootState) => state.search.searchTerm);
  const dispatch = useDispatch();


  useEffect(() => {
    const hasQuery = searchParams.get("query");
    if (hasQuery) {
      const params = new URLSearchParams(searchParams);
      params.delete("query");
      params.delete("page"); // Optional
      replace(`${pathname}?${params.toString()}`);
      dispatch(searchUpdate("")); // Clear Redux state too
    }
  }, []);

  const handleSearchChange = (term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    params.delete("page");
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={search}
        onChange={(e) => {
          dispatch(searchUpdate(e.target.value));
          handleSearchChange(e.target.value);
        }}
        placeholder="🔍 Search..."
      />
    </div>
  );
};

export default Search;
