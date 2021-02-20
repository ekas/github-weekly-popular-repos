import starImg from "../../assets/star.png";
import { repoData } from "../../types/repoData";

import "./index.scss";

type CardProps = {
  data: repoData;
};

const Card = ({
  data: { name, description, language, html_url, stargazers_count },
}: CardProps) => (
  <div className="card-outline">
    <div className="card">
      <div className="card-stars">
        <img src={starImg} alt="Stars" className="card-stars-img" />
        {stargazers_count}
      </div>
      <a href={html_url} className="card-link">
        <div className="card-header">
          <p title="github-weekly-popular-repos">{name}</p>
        </div>
      </a>
      <div className="card-language">
        {language === null ? "Other" : language}
      </div>
      <p className="card-description">{description}</p>
    </div>
  </div>
);

export default Card;
