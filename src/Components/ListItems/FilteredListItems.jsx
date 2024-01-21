import { addCommasToNumber } from "../../utils/utils";

const FilteredListItems = ({ list }) => {
  return list.map((cityInfo, index) => {
    return (
      <li
        key={index}
        className="bg-white border-b-[1px] border-solid border-[#d8d8d8] font-serif p-5 flex items-center capitalize transition-colors duration-200 even:bg-gradient-to-b odd:bg-gradient-to-t from-white to-[#efefef] shadow-suggestions"
      >
        <p className="text-base">{cityInfo?.city}</p>
        {cityInfo?.state && <p className="text-base">, {cityInfo?.state}</p>}
        {cityInfo?.population && (
          <p className="text-gray-400 text-xs ml-auto">
            {addCommasToNumber(cityInfo?.population)}
          </p>
        )}
      </li>
    );
  });
};

export default FilteredListItems;
