type SearchLayoutProps = {
    children: React.ReactNode;
};

export default function SearchLayout({ children }: SearchLayoutProps): JSX.Element {
    return (
        <div className="max-w-md mx-auto p-4">
            <h2 className="text-3xl font-semibold mb-4"></h2>
                <h3 className="text-xl font-semibold mb-2">Search Result</h3>
                {children}
        </div>
    );
}