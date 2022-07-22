import { useState } from "react";

const SearchComponent: React.FC = () => {
    const [search, setSearch] = useState('');
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
        console.log(search);
      };
    return (
        <div className="flex justify-start lg:w-0 lg:flex-1">
            <label className="relative block w-10/12">
                <span className="sr-only">Search</span>
                <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
                        placeholder="Search for anything..." type="text" name="search" 
                        onChange={handleSearch}/>
            </label>
        </div>
    )
}

export default SearchComponent