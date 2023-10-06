"use client"
import React, {useEffect, useState} from "react";
import SongSearch from "../../../components/search/SongSearch";
import AlbumSearch from "../../../components/search/AlbumSearch";
import ArtistSearch from "../../../components/search/ArtistSearch";

export default function searchPage(){
    const [inputKeyword,setInputKeyword] = useState('')
    const [searchKeyword,setSearchKeyword] = useState('');
    const handleInputChange = (e) =>{
        setInputKeyword(e.target.value)
    }
    const handleSearch = () => {
        setSearchKeyword(inputKeyword)
    }

    return(
        <>
            <input
                type="text"
                name="searchKeyword"
                placeholder="Search by title"
                value={inputKeyword}
                onChange={handleInputChange}
                className="border rounded-md p-2 w-full mb-2"
            />
            <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Search
            </button>

            {/*<SongSearch searchKeyword={searchKeyword}/>*/}
            <AlbumSearch searchKeyword={searchKeyword}/>
            {/*<ArtistSearch searchKeyword={searchKeyword}/>*/}

        </>
    )
}