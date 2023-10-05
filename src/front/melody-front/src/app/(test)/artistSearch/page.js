"use client"
import React, { Component } from 'react';
import axios from 'axios';

class ArtistManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: [],
            newSong: {
                title: '',
                songInfo: '',
                // Add other song fields here
            },
            searchKeyword:null,
            searchResults: [], // Initialize searchResults state
        };
    }

    componentDidMount() {
        this.loadArtists();
    }

    loadArtists = () => {
        axios.get('/api/artists') // Replace with your API endpoint
            .then((response) => {
                this.setState({ songs: response.data });
            })
            .catch((error) => {
                console.error('Error loading songs:', error);
            });
    };


    handleInputChange = (e) => {
        this.setState({ searchKeyword: e.target.value });
    };


    handleArtistSearch = () => {
        const { searchKeyword } = this.state;
        console.log("search:",searchKeyword);
        axios.get(`/api/artists/search/solo/?title=${searchKeyword}`) // Replace with your API endpoint
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
        const { songs, searchKeyword } = this.state;
        console.log(songs);

        return (
            <div className="max-w-md mx-auto p-4">
                <h2 className="text-3xl font-semibold mb-4">Artist</h2>

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
                    <button onClick={this.handleArtistSearch} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                        Search
                    </button>
                </div>

                {/* Search Results */}
                <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">Search Results</h3>
                    <ul>
                        {this.state.searchResults.map((solo) => ( // Update this line
                            <li key={solo.soloArtistId} className="border-b py-2">
                                <p>{solo.singerName}</p>
                                <p className="text-gray-600">{solo.singerInfo}</p>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        );

    }
}

export default ArtistManager;