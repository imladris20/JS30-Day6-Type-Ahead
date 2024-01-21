import { addCommasToNumber } from "../../utils/utils";

const FilteredListItems = ({ list }) => {
  return list.map((cityInfo, index) => {
    return (
      <li
        key={index}
        className="flex items-center justify-center border-b-[1px] border-solid border-[#d8d8d8] bg-white from-white to-[#efefef] p-[10px] font-serif shadow-suggestions transition-colors duration-200 odd:bg-gradient-to-t even:bg-gradient-to-b sm:p-5"
      >
        <p className="text-sm sm:text-lg">{cityInfo?.city}</p>
        {cityInfo?.state && (
          <p className="text-sm sm:text-lg">, {cityInfo?.state}</p>
        )}
        {cityInfo?.population && (
          <p className="ml-auto text-[9px] text-gray-400 sm:text-xs">
            {addCommasToNumber(cityInfo?.population)}
          </p>
        )}
      </li>
    );
  });
};

export default FilteredListItems;
