import React from "react";
import Ellipse3Img from "../../../assets/Ellipse3.png";
import Ellipse4Img from "../../../assets/Ellipse4.png";
import Ellipse6Img from "../../../assets/Ellipse6.png";

const Reviews = () => {
  return (
    <div className="max-w-screen-2xl px-4 mx-auto py-5 sm:py-12 ">
      <h3 className="text-center text-[#231955] font-bold text-xl sm:texl-2xl md:text-4xl max-w-screen-md mx-auto">
        Reviews from some of our top investors..
      </h3>

      <div className="mt-4 sm:mt-12 lg:mt-10">
        <dl className="flex flex-col md:flex-row items-center  justify-between space-y-2 md:space-y-0 ">
          <div className="max-w-xs  rounded-lg p-4 w-full ">
            <div className="flex items-center">
              <img
                src={Ellipse3Img}
                alt="Staff having a meeting"
                className="w-12 h-12 md:w-20 md:h-20"
              />
              <h4 className="text-black font-bold text-lg md:text-2xl ml-2"> JACKS</h4>
            </div>
            <p className="text-[#8a84a1] ">
              I have made so much profit from ROYAL STOCK investment options.
            </p>
          </div>

          <div className="max-w-xs rounded-lg p-4 w-full">
            <div className="flex items-center">
              <img
                src={Ellipse4Img}
                alt="Staff having a meeting"
                className="w-12 h-12 md:w-20 md:h-20"
              />
              <h4 className="text-black font-bold text-lg md:text-2xl ml-2"> MARA</h4>
            </div>

            <p className="text-[#8a84a1]">
              Stock investment has not been smooth till i was introduced to
              ROYAL STOCK platform.
            </p>
          </div>

          <div className="max-w-xs rounded-lg p-4 text-[#EAE1E1] w-full">
            <div className="flex items-center">
              <img
                src={Ellipse6Img}
                alt="Staff having a meeting"
                className="w-12 h-12 md:w-20 md:h-20"
              />
              <h4 className="text-black font-bold text-lg md:text-2xl ml-2"> DAVIS</h4>
            </div>

            <p className="text-[#8a84a1]">
              I will like to commend transparency,ROYAL STOCK are the best.
            </p>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Reviews;
