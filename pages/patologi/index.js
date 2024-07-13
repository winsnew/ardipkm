import React, { useState} from "react";
import Link from 'next/link';
import axios from "../../fetch/axios"; 
const Patologi = ({ references }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1); 
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = references.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(references.length / itemsPerPage);

  return (
    <div className="container mx-auto">
      <div className="relative lg:px-20 px-10 w-full min-h-screen sm:py-16 py-16">
        <div className="flex max-w-full flex-col items-center">
          <h1 className="text-white">
            Kamus Patologi Medis Sistem Muskuloskeletal
          </h1>
          <div className="w-full my-4">
            <input
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="pt-4">
          <div className="flex flex-row text-white justify-between items-center">
            <div>
              <h1>Referensi</h1>
            </div>
            <div>
              <button className="px-4 py-2 bg-blue-600 rounded-md">See All</button>
            </div>
          </div>
          <div className="mt-4 mb-2 flex flex-row justify-between items-center text-white">
            <div>
              <label htmlFor="itemsPerPage" className="mr-2">Items per page:</label>
              <select
                id="itemsPerPage"
                value={itemsPerPage}
                onChange={handleItemsPerPageChange}
                className="px-2 py-1 bg-gray-800 rounded-md"
              >
                <option value={2}>2</option>
                <option value={4}>4</option>
                <option value={6}>6</option>
                <option value={8}>8</option>
              </select>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 bg-gray-800 rounded-l-md"
              >
                Prev
              </button>
              <span className="px-3">{currentPage} / {totalPages}</span>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 bg-gray-800 rounded-r-md"
              >
                Next
              </button>
            </div>
          </div>
          <div id="result" className="flex flex-col text-white gap-4">
            {currentItems.map((item, index) => (
              <div key={index} id="item" className="bg-gray-800 p-4 rounded-md">
                <p className="font-bold">{item.title}</p>
                <p>{item.content}</p>
                <Link href={`/patologi/${item.id}`}><a className="text-blue-500">View Details</a></Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  let references = [];

  try {
    const response = await axios.get("/patologi");
    references = response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return {
    props: {
      references,
    },
  };
}

export default Patologi;
