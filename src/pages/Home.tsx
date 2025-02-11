import type { ChangeEvent } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Results } from './Results';
import { ResultsSearch } from './ResultsSearch';
export const Home = (): JSX.Element => {
  const navigate = useNavigate();
  const [inputSearchValue, setSearch] = useState('');

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    setSearch(target.value);
  };

  const handleKeyDown = (event: { key: string }): void => {
    if (event.key === 'Enter') {
      // 👇 Get input value
      navigate(`/results/${inputSearchValue.replace(/\s/g, '+')}`);
    }
  };

  const handleCleanClick = (): void => {
    setSearch('');
  };

  const handleSearchClick = (): void => {
    navigate(`/results/${inputSearchValue.replace(/\s/g, '+')}`);
  };

  return (
    <>
      <div className="flex w-full h-full bg-[url('/img-movies.jpg')] object-contain bg-cover">
        <div className="w-full h-full flex justify-top items-center flex-col px-5 pt-2 bg-gradient-to-t from-transparent to-current pb-2">
          <div className="w-full h-full pt-[4rem]">
            <h2 className="text-5xl font-bold font-lato text-white mb-2">Busca tu película...</h2>
            <p className="text-2xl font-weight font-lato text-white">
              Millones de películas, y personas por descubrir. Explora ahora.
            </p>
          </div>
          <div className="flex w-full mt-[3.2rem] mb-[10rem] justify-center">
            <form className="flex w-full border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div className="flex w-full">
                <div className="flex inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input
                  type="search"
                  value={inputSearchValue}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  id="default-search"
                  className="custom-input flex flex-wrap w-full p-4 pl-4 sm:text-lg md:text-xl lg:text-2xl xl:text-2xl border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 appearance-none truncate"
                  placeholder="Busca una película, programa de televisión, persona....."
                  required
                />
              </div>
              <div className="flex w-[8%] mx-3 items-center justify-end">
                {/* <button
                  type="submit"
                  onKeyDown={handleKeyDown}
                  onClick={handleSearchClick}
                  className="h-2/3 text-sm text-white px-5 py-2 right-2.5 bottom-2.5 mr-[1rem] rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button> */}
                <button
                  onClick={handleCleanClick}
                  className="h-2/3 text-white right-2.5 bottom-2.5 text-sm px-5 py-2 rounded-lg bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium dark:bg-red-500 dark:hover:bg-red-500 dark:focus:ring-red-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {inputSearchValue.length >= 1 ? <ResultsSearch inputSearchValue={inputSearchValue} /> : <Results />}
    </>
  );
};
