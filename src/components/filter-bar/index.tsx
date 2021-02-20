import { useEffect, useState } from "react";
import { repoData } from "../../types/repoData";

import "./index.scss";

type FilterBarProps = {
  filteredData: repoData[];
  setLanguageFilter: Function;
};

const FilterBar = ({ filteredData, setLanguageFilter }: FilterBarProps) => {
  const [languages, setLanguages] = useState<string[]>([]);

  useEffect(() => {
    const langErr: string[] = [];
    filteredData.forEach((item, i) => {
      if (langErr.indexOf(item.language) === -1) {
        langErr.push(item.language);
      }
    });
    setLanguages(langErr);
  }, [filteredData]);

  return (
    <div className="filter-bar">
      <select onChange={(e) => setLanguageFilter(e.target.value)}>
        <option key={`option_all`} value="all">
          All languages
        </option>
        {languages.map((item, i) => (
          <option key={`option_${i}`} value={item}>
            {item}
          </option>
        ))}
        <option key={`option_other`} value="other">
          Other
        </option>
      </select>
    </div>
  );
};

export default FilterBar;
