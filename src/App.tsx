import React, {useCallback, useState} from 'react';
import axios from 'axios';
import {SearchBar} from "./components/searchbar/SearchBar";
import {About} from "./components/about/About";

function App() {
    const [companyDescription, setCompanyDescription] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSearch = useCallback((term: string) => {
        const apiURL = `http://127.0.0.1:5000/ss`;
        setIsLoading(true);
        const payload = {
            company: term
        };

        const config = {
            'Content-Type': 'application/json'
        }

        axios.post(apiURL, payload)
            .then((response) => {
                console.log(response.data);
                setCompanyDescription(response.data?.description);
                setIsLoading(false);
            })
            .catch((e) => {
                setCompanyDescription('-')
                setIsLoading(false);
            })
            .finally(() => setIsLoading(false));
    }, [])

    return (
        <div className='flex flex-col gap-2 p-4 bg-old-lace min-h-screen'>
            <SearchBar onSearch={handleSearch}/>
            <div className="mt-4">
                <About companyInfo={companyDescription} isLoading={isLoading}/>
            </div>
        </div>
    );
}

export default App;
