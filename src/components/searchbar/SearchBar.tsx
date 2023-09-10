import React, {KeyboardEvent, useCallback} from 'react';

interface SearchBarProps {
    onSearch: (companyName: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({onSearch}) => {
    const handleSearch = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const searchTerm = e.currentTarget.value;
            onSearch(searchTerm);
        }
    }, [onSearch])

    return (
        <div className="flex items-center justify-center mt-4">
            <input
                type="text"
                placeholder="Search..."
                className="w-1/3 py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                onKeyDown={handleSearch}
            />
        </div>
    )
}