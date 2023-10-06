"use client"
import React, {useEffect, useState} from 'react';
import axios from "axios";


function AlbumSearch(props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [albumsResult,setAlbumsResult] = useState('');
    console.log(props.searchKeyword)

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        axios.get(`/api/albums/search?title=${props.searchKeyword}`) // Replace with your API endpoint
            .then((response) => {
                setAlbumsResult(response.data)
            })
            .catch((error) => {
                console.error('Error loading songs:', error);
                setAlbumsResult(null)
            });
    }, [props.searchKeyword]);


    return (
        <>
            <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Album Results</h3>
                {Array.isArray(albumsResult)
                    ?albumsResult.map((album) => {
                        return <ul key={album.albumId}>
                            <li className="border-b py-2">
                                <p>{album.albumTitle}</p>
                                <p className="text-gray-600">{album.albumInfo}</p>
                            </li>
                        </ul>;
                    }) // Update this line
                    :null
                }
            </div>
        </>
    );

}

export default AlbumSearch;
