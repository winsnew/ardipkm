// components/Table.js
// import { getDataPatologi, getPatologiPages } from "../path/to/dataFetching";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";
import parse from "html-react-parser";

export const Table = async () => {

  return (
    <div className="flex flex-col w-full justify-center items-center ">
      <div className="flex justify-between items-center w-1/2 border-b-2 border-gray-700 ">
        <h3 className="text-white font-bold text-xl">Referensi</h3>
        <div className="flex gap-4 justify-center items-center p-2">
          <p className="text-white">Semua</p>
          <div className="bg-white rounded-xl">
            <IoIosArrowRoundForward size={25} />
          </div>
        </div>
      </div>

      {/* {data.map((item, index) => (
        <div key={index} className="flex flex-col gap-y-2 w-1/2 border-b-2 border-gray-600 mb-4">
          <h1 className="text-white font-medium text-xl">{item.nama}</h1>
          <small className="text-white">
            {truncateHtmlText({ text: item.deskripsi || "", maxLength: 400 })}
          </small>
          <div className="flex w-full justify-end">
            <Link
              href={`/patologi/${item.id}`}
              className="inline-flex px-3 py-2 text-sm font-medium text-white focus:outline-none"
            >
              Lihat Referensi
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      ))} */}
      {/* <Pagination totalPages={totalPages} /> */}
    </div>
  );
};

export default Table;
