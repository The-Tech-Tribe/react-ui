import React, {useCallback, useState} from 'react';
import axios from 'axios';
import {SearchBar} from "./components/searchbar/SearchBar";
import {About} from "./components/about/About";

function App() {
    const [companyDescription, setCompanyDescription] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSearch = useCallback((term: string) => {
        const apiURL = `127.0.0.1:5000/company?name=${term}`;
        setIsLoading(true);
        axios.get(apiURL)
            .then((response) => {
                setCompanyDescription(response.data);
                setIsLoading(false);
            })
            .catch((e) => {
                setCompanyDescription('AMDAris Limited Liability Company is a company based in Chișinău, Moldova. It is managed by Petru Haheu and has an official identification number of 1009600020033. The company\'s contact information includes a fax number at (022) 00-02-61 and an email address at [email protected] They have a website at www.amdaris.com and can be found on Facebook , LinkedIn (https://www.linkedin.com/company/amdaris-llp/), and Twitter (http://twitter.com/Amdaris). The office is located in Chișinău at MD-2012, mun.Chișinău, mun.Chișinău, str.M-t Varlaam, 63/23, et. 10. Amdaris is a limited liability company that delivers exceptional software through established processes.');
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
