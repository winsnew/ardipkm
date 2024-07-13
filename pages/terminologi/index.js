import {CardList} from "../../components/terminologi/rootCard";

const Terminologi = () => {
  return (
    <>
      <div className="relative w-full min-h-screen sm:py-16 py-16">
        <div className="max-w-full h-max">
          <div className="flex max-w-full flex-col items-center gap-10">
            <h1 className="text-white text-3xl">
              Kamus Terminologi Medis Sistem Muskuloskeletal
            </h1>
            <div>
              <CardList/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terminologi;
