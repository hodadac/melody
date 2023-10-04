"use client"
import React, { Component } from 'react';
import axios from 'axios';

class SongManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: [],
            newSong: {
                title: '',
                songInfo: '',
                // Add other song fields here
            },
            searchKeyword: '',
            searchResults: [], // Initialize searchResults state
        };
    }

    componentDidMount() {
        this.loadSongs();
    }

    loadSongs = () => {
        axios.get('/api/albums') // Replace with your API endpoint
            .then((response) => {
                this.setState({ albums: response.data });
            })
            .catch((error) => {
                console.error('Error loading songs:', error);
            });
    };


    handleInputChange = (e) => {
        this.setState({ searchKeyword: e.target.value });
    };


    handleAlbumSearch = () => {
        const { searchKeyword } = this.state;
        axios.get(`/api/albums/search?title=${searchKeyword}`) // Replace with your API endpoint
            .then((response) => {
                console.log("search called");
                console.log(response.data);
                this.setState({ searchResults: response.data }); // Update searchResults instead of songs
            })
            .catch((error) => {
                console.error('Error searching songs:', error);
            });
    };

    render() {
        const { albums, searchKeyword } = this.state;
        console.log(albums);

        return (
            <div className="max-w-md mx-auto p-4">
                <h2 className="text-3xl font-semibold mb-4">Album</h2>

                <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">Search</h3>
                    <input
                        type="text"
                        name="searchKeyword"
                        placeholder="Search by title"
                        value={searchKeyword}
                        onChange={this.handleInputChange}
                        className="border rounded-md p-2 w-full mb-2"
                    />
                    <button onClick={this.handleAlbumSearch} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                        Search
                    </button>
                </div>

                {/* Search Results */}
                <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">Search Results</h3>
                    <ul>
                        {this.state.searchResults.map((album) => ( // Update this line
                            <li key={album.albumId} className="border-b py-2">
                                <p>{album.albumTitle}</p>
                                <p className="text-gray-600">{album.albumInfo}</p>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        );

    }
}

export default SongManager;