"use client"
import React, {useEffect, useState} from 'react';
import axios from "axios";


function SongSearch(props) {
    const [songsResult,setSongsResult] = useState('');
    console.log(props.searchKeyword)
    useEffect(() => {
        axios.get(`/api/songs/search?title=${props.searchKeyword}`) // Replace with your API endpoint
            .then((response) => {
                setSongsResult(response.data)
            })
            .catch((error) => {
                console.error('Error loading songs:', error);
            });
    }, [props.searchKeyword]);

    return (
        <>
            {/* Search Results */}
            <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Song Results</h3>
                {Array.isArray(songsResult)
                    ?songsResult.map((song) => {
                        return<ul key={song.songId}>
                            <li  className="border-b py-2">
                                <p>{song.title}</p>
                                <p className="text-gray-600">{song.songInfo}</p>
                                <p>{song.album.releaseDate}</p>
                            </li>
                        </ul>;
                    }) // Update this line
                    :null
                }
            </div>
        </>
    );
}

export default SongSearch;
