const initialMessages = ["Filter for a city", "or a state"];

const InitialListItems = () => {
  return initialMessages.map((message, index) => {
    return (
      <li
        className="bg-white border-b-[1px] border-solid border-[#d8d8d8] p-5 flex justify-between items-center capitalize transition-colors duration-200 even:bg-gradient-to-b odd:bg-gradient-to-t from-white to-[#efefef] shadow-suggestions"
        key={index}
      >
        {message}
      </li>
    );
  });
};

export default InitialListItems;
