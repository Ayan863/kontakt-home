import { CiHeart } from "react-icons/ci";
import { FaBalanceScale } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Card = ({ image, title, firstPrice, lastPrice, sale }) => {
  return (
    <>
      <div className="card relative font-[Montserrat,sans-serif] bg-white rounded-lg duration-200 p-3">
        <img src={image} alt="phone" className="w-[271px] h-[224px]" />
        <div className="description text-[14px] h-[41px]">{title}</div>
        <div className="cost">
          <span className="sale text-[12px] bg-red-500 p-[3px] rounded-md text-white font-semibold">
            -{sale}₼
          </span>
          <div>
            <del className="firstPrice text-[14px] text-[#777777] font-medium">
              {firstPrice}₼
            </del>
          </div>

          <div className="flex justify-between">
            <div className="lastPrice text-[#ff003c] font-bold">
              {lastPrice}₼
            </div>
            <div className="text-[14px] font-semibold">0% 12 ay</div>
          </div>
        </div>

        <div className="other hidden  bg-white w-[231px] p-3 text-[12px]">
          <div className="addbasket flex items-center space-x-4">
            <div className="bg-gray-300 p-2 rounded-full">
              <CiHeart />
            </div>
            <div className="bg-gray-300 p-2 rounded-full">
              <FaBalanceScale />
            </div>
            <button className="bg-red-500 text-white p-2 rounded-lg active:bg-green-500 flex items-center">
              <FaCartShopping />
              <span className="ml-2">Add to basket</span>
            </button>
          </div>

          <div className="icons">
            <div className="ekran flex justify-between">
              <span>Ekran:</span>
              <span>6.1"</span>
            </div>
            <div className="operativ flex justify-between">
              <span>Operativ yaddaş:</span>
              <span>6 GB</span>
            </div>
            <div className="daxili flex justify-between">
              <span>Daxili yaddaş:</span>
              <span>128 GB</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
