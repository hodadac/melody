"use client"
import React, {useEffect, useState} from 'react';
import axios from "axios";

function ArtistSearch(props) {
    const [artistsResult,setArtistsResult] = useState('');
    const [groupsResult,setGroupResult] = useState('');
    console.log(props.searchKeyword)

    useEffect(() => {
        axios.get(`/api/artists/search/solo/?title=${props.searchKeyword}`) // Replace with your API endpoint
            .then((response) => {
                setArtistsResult(response.data)
            })
            .catch((error) => {
                console.error('Error loading songs:', error);
            });
        axios.get(`/api/artists/search/group/?title=${props.searchKeyword}`) // Replace with your API endpoint
            .then((response) => {
                setGroupResult(response.data)
            })
            .catch((error) => {
                console.error('Error loading songs:', error);
            });

    }, [props.searchKeyword]);

    return (
        <>
            {/* Search Results */}
            <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Artist Results</h3>
                {Array.isArray(artistsResult)
                    ?artistsResult.map((artist) => {
                        return<ul key={artist.soloArtistId}>
                            <li className="border-b py-2">
                                <p>{artist.singerName}</p>
                                <p className="text-gray-600">{artist.singerInfo}</p>
                            </li>
                        </ul>;
                    }) // Update this line
                    :null
                }
            </div>
            <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Group Results</h3>
                {Array.isArray(groupsResult)
                    ?groupsResult.map((group) => {
                        return<ul key={group.groupAritistId}>
                            <li className="border-b py-2">
                                <p>{group.groupName}</p>
                                <p className="text-gray-600">{group.groupInfo}</p>
                            </li>
                        </ul>;
                    }) // Update this line
                    :null
                }
            </div>
        </>
    );
}

export default ArtistSearch;
