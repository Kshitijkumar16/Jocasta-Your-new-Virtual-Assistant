import { featureData } from "../constants/constants";

const WhoJocasta = () => {
  return (
    <section className="pt-20">
      <div className="whoj_gradient flex flex-col rounded-md md:p-20 max-md:pt-10 max-md:px-8 max-md:pb-10">
        <div className="flex flex-1 max-lg:flex-wrap max-lg:gap-4 justify-between items-start lg:gap-[280px] max-sm:gap-[20px] ">
          <div>
            <div className="text-transparent mb-3 purp_orange rounded-full w-[50px] h-[4px]">
              sup
            </div>
            <h3 className="pr-6 mt-1 w-[190px] text-white text-[20px] leading-[29px] font-Manrope font-extrabold tracking-tight ">
              Who &nbsp; is &nbsp; Jocasta?
            </h3>
          </div>
          <p className="text-text-shade text-[20px] font-Manrope leading-[30px] max-sm:text-sm">
            Jocasta, taking inspiration from Iron Man's iconic AI, marks a
            significant leap in the world of technology. This cutting-edge
            Artificial General Intelligence (AGI) product is not merely a
            virtual assistant; it's a pioneering force that transcends
            conventional boundaries.
          </p>
        </div>
        <div className="flex max-lg:flex-wrap justify-between items-center py-12 max-sm:flex-col max-sm:items-start max-sm:gap-[16px] max-sm:py-0 max-lg:gap-6">
          <h3 className="purp_orange mt-16 max-lg:mt-10 max-sm:mt-16 text-transparent bg-clip-text font-Manrope font-extrabold text-[34px] leading-[45px] max-lg:pr-6 max-sm:pr-0 max-sm:text-[20px] max-sm:leading-[25px]">
            The Possibilities are beyond
            <br /> your Imagination
          </h3>
          <a href="#" className="text-subtext-shade max-sm:text-[14px]">
            Explore The Library
          </a>
        </div>
        <div
          id="card-render"
          className="max-sm:mt-16 lg:gap-28 lg:mt-16 max-sm:gap-[53px] "
        >
          <div id="card-container" className="flex max-lg:flex-wrap lg:gap-20 justify-start  mt-8 max-lg:space-y-[50px]">
            {featureData.map((data) => (
              <div key={data.key} className="lg:w-1/3">
                <div className="text-transparent mb-3 purp_orange rounded-full w-[50px] h-[4px]">
                  sup
                </div>
                <h3 className="pr-6 mt-1 text-white text-[18px] leading-[24px] font-Manrope font-extrabold tracking-tight max-md:text-[14px] max-md:leading-[19px] ">
                  {data.label}
                </h3>
                <p className="text-text-shade lg:text-justify font-Manrope text-[14px] leading-[24px] mt-4 max-sm:leading-[20px]">
                  {data.data}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoJocasta;

