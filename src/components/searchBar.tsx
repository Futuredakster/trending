"use client";
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {searchUpdate} from '../redux/actions/searchActions';
import { RootState } from "@/redux/store";




const searchBar = () => {
const search = useSelector((state: RootState) => state.search.searchTerm);
const dispatch = useDispatch();
  return (
    <div className="search-bar">
      <input
      type="text"
      value={search}
      onChange={e => dispatch(searchUpdate((e.target.value)))}
      placeholder="🔍 Search..."
    />
    </div>
  )
}
// We are going to user server compnents to get the reddit data and then use client components to feed it to redux and then display it.
export default searchBar