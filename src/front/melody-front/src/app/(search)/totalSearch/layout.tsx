import InputSearch from "../../../components/search/InputSearch";

type SearchLayoutProps = {
    children: React.ReactNode;
};

export default function SearchLayout({ children }: SearchLayoutProps){
    return (
        <div className="max-w-md mx-auto p-4">
            <h2 className="text-3xl font-semibold mb-4">Search Page</h2>
            <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Search</h3>
                {children}
            </div>
        </div>
    );
}