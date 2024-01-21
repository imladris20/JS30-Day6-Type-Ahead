const initialMessages = ["Filter for a city", "or a state"];

const InitialListItems = () => {
  return initialMessages.map((message, index) => {
    return (
      <li
        className="flex items-center justify-between border-b-[1px] border-solid border-[#d8d8d8] bg-white from-white to-[#efefef] p-5 font-serif text-sm shadow-suggestions transition-colors duration-200 odd:bg-gradient-to-t even:bg-gradient-to-b sm:text-lg"
        key={index}
      >
        {message}
      </li>
    );
  });
};

export default InitialListItems;
