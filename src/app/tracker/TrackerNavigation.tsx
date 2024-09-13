const TrackerNavigation = ({
  options,
  selected,
  setSelected,
}: {
  options: string[];
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <nav>
      <ul className="flex justify-evenly">
        {options.map((item, idx) => (
          <li
            className={`hover:bg-background hover:text-white px-4 py-2 rounded-lg cursor-pointer ${
              selected === item ? "bg-background text-white" : ""
            }`}
            onClick={() => setSelected(item)}
            key={idx}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TrackerNavigation;
