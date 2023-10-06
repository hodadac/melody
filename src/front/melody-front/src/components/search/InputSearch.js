"use client"
import React, {useState} from "react";
import {useRouter} from "next/navigation";

function InputSearch(){
    const [inputKeyword,setInputKeyword] = useState('');
    const handleInputChange = (e) => {
        setInputKeyword(e.target.value);
    };
    const router = useRouter();
    const onClickKey = (e) =>{
        router.push(`/total/${inputKeyword}`);
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
        <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={onClickKey}
        >
            Search
        </button>
    </>
    )

}

export default InputSearch;