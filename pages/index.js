import Model from "../components/model/model";

const Page = () => {
  return (
    <div className="relative w-full min-h-screen sm:py-16 py-16">
      <div className="max-w-full h-max">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/2 lg:w-1/2 order-0 z-1 flex justify-center py-5 md:order-1"></div>
          <div className="md:w-1/2 lg:w-3/5 md:mx-5 items-center sm:text-center flex flex-col md:justify-center py-6">
            <div className="flex flex-col sm:justify-center md:text-start lg:text-[20px] text-white md:items-start">
              <h1 className="text-3xl font-extrabold leading-none md:text-4xl xl:text-5xl dark:text-white">
                <span className="text-primary-blue">Kamus</span> Digital <br />{" "}
                Terminologi Medis <br /> Sistem Muskoloskeletal
              </h1>
              <div class="text-left md:items-left flex justify-center">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
