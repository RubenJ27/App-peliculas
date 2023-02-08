import React from 'react'

const ResultListItems = ({id, title, imageURL, onListItemClick}) => {
  const handleListItemClick = () => {
    onListItemClick(id);
  };
  return (
    <div key={id} className="flex flex-row w-full mt-10" style={{ minWidth: 650 }}>
            <div className='w-1/6'>
              <img src={imageURL} alt={title} className="w-32" />
            </div>
            <div className='5/6 flex flex-col items-start py-1 px-4'>
            <p className="font-normal font-lato text-3xl mb-2">{title ?? "Sin titulo"}</p>
            <div className='flex h-full items-end'>
              <button className="border-2 border-special-red rounded-md w-36 h-10 text-xl text-special-red hover:bg-red-400 hover:text-white"
              onClick={handleListItemClick}
              >Ver mas</button>
              </div>

            </div>

          </div>
  )
}

export default ResultListItems