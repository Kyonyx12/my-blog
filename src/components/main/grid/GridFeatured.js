import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

import "react-lazy-load-image-component/src/effects/blur.css";

export default function GridFeatured({ data }) {
  return (
    <>
      {data.map((post) => {
        const { id, image, category, article, date } = post;
        return (
          <article className="grid-card" key={id}>
            <Link to={`${id}`}>
              <div className="grid-img-container">
                <LazyLoadImage
                  src={image}
                  alt="post-cover"
                  className="grid-img"
                  effect="blur"
                />
              </div>
            </Link>
            <div className="grid-info">
              <div className="grid-post-type">
                <p>{category}</p>
              </div>
              <div className="grid-article">
                <h4>{article.substring(0, 200)}...</h4>
              </div>
              <Link to={`${id}`}>See more</Link>
              <p>{date}</p>
            </div>
          </article>
        );
      })}
    </>
  );
}
