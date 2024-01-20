function App() {
  return (
    <form className="search-form max-w-[400px] my-[50px] mx-auto">
      <input type="text" className="search" placeholder="City or State" />
      <ul className="suggestions">
        <li>Filter for a city</li>
        <li>or a state</li>
      </ul>
    </form>
  );
}

export default App;
