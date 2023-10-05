"use client"
import React, {useState} from "react";
import Link from "next/link";

function InputSearch(){
    const [inputKeyword,setInputKeyword] = useState('');
    const handleInputChange = (e) => {
        setInputKeyword(e.target.value);
    };

    return (
       <>
        <input
            type="text"
            name="searchKeyword"
            placeholder="Search by title"
            value={inputKeyword}
            onChange={handleInputChange}
            className="border rounded-md p-2 w-full mb-2"
        />
        <Link href={{
            pathname:'/totalSearch/resultSearch',
            query:{searchKeyword:inputKeyword,
            }}}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Search</button>
        </Link>
       </>
    );
}

export  default InputSearch;