"use client"
import {useSearchParams} from "next/navigation";
import AlbumSearch from "../../../../components/search/AlbumSearch";
import SongSearch from "../../../../components/search/SongSearch";
import ArtistSearch from "../../../../components/search/ArtistSearch";

export default function ResultPage(){
    const router = useSearchParams();
    const keyword = router.get('searchKeyword');

    return(
        <>
            <AlbumSearch searchKeyword={keyword}/>
            <SongSearch searchKeyword={keyword}/>
            <ArtistSearch searchKeyword={keyword}/>
        </>
    )
}