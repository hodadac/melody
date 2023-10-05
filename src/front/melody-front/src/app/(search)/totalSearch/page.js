import InputSearch from "../../../components/search/InputSearch";



export default function SearchPage({children}){

    return(
        <>
            <InputSearch/>
            <div>{children}</div>
        </>
    )
}