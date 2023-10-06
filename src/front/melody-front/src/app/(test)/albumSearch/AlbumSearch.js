import axios from "axios";

export async function getData(key){
    const response = axios.get(`/api/albums/search?title=${key}`) // Replace with your API endpoint
    const data = response.data();
    console.log(data)
    return data
}

export default async function AlbumSearch(props) {
    if(props.searchKeyword===''||props.searchKeyword===null){
        return(
            <>
            <p>null</p>
            </>
        )
    }else{
        const searchResult = getData(props.searchKeyword)
        const [albumsResult] = Promise.all([searchResult])
        return (
            <>
                {/* Search Results */}
                <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">Album Results</h3>
                    {Array.isArray(albumsResult)
                        ?albumsResult.map((album) => {
                            return<ul>
                                <li key={album.albumId} className="border-b py-2">
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


}