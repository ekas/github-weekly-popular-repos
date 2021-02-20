import starImg from "../../assets/star.png";
import "./index.scss";

const FilterBar = () => (
  <div className="card-outline">
    <div className="card">
      <div className="card-stars">
        <img src={starImg} alt="Stars" className="card-stars-img" />
        100
      </div>
      <div className="card-header">
        <p title="github-weekly-popular-repos">github-weekly-popular-repos</p>
      </div>
      <div className="card-language">HTML</div>
      <p className="card-description">
        Shows a list Popular repos weekly Shows a list Popular repos weekly
      </p>
    </div>
  </div>
);

export default FilterBar;
