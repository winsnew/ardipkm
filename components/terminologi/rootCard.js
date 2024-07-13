import { IoArrowForwardOutline } from "react-icons/io5";
import Link from "next/link";

export const Card = ({ label }) => {
  const Label =
    label === "root" ? "root" : label === "prefix" ? "prefix" : "suffix";
  const LabelContent =
    label === "root"
      ? "Istilah medis untuk menentukan subjek istilah"
      : label === "prefix"
      ? "Awalan dari suatu istilah yang merubah akar"
      : "Akhiran dari suatu istilah yang merubah akar";

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow bg-gradient-dark dark:border-gray-700">
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 capitalize text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {Label}
          </h5>
        </a>
        <p className="mb-3 md:w-3/4 font-normal text-gray-700 dark:text-gray-400">
          {LabelContent}
        </p>
        <div className="flex w-full justify-end">
          <Link
            href={`/terminologi/${Label}`}
            className="inline-flex px-3 py-2 text-sm font-medium text-white focus:outline-none"
          >
            Lihat
            <IoArrowForwardOutline className="text-xl ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export const CardList = () => {
  const labels = ["root", "prefix", "suffix"];

  return (
    <div className="flex flex-wrap gap-4">
      {labels.map((label) => (
        <Card key={label} label={label} />
      ))}
    </div>
  );
};
