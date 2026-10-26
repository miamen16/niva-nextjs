import { getFeaturedImage, getPlainText } from "../lib/wordpress";

export default function ResourceCards({ items = [], emptyMessage = "New resources are coming soon." }) {
  if (!items.length) {
    return <p className="api-message">{emptyMessage}</p>;
  }

  return (
    <div className="cards">
      {items.map((item, index) => {
        const title = getPlainText(item.title?.rendered || "Untitled resource");
        const description = getPlainText(item.excerpt?.rendered || item.content?.rendered || "");
        const image = getFeaturedImage(item);
        const href = item.link || "https://ourclimateourcommunity.org/";

        return (
          <a className="card" href={href} key={item.id || title} target="_blank" rel="noreferrer">
            <div className={`art ${["mint", "yellow", "coral", "blue"][index % 4]}`}>
              {image ? (
                // WordPress media URLs are returned by the REST API.
                <img className="resource-image" src={image} alt="" loading="lazy" />
              ) : (
                <span aria-hidden="true">{["◉", "☀", "〰", "♧"][index % 4]}</span>
              )}
              <small>{String(index + 1).padStart(2, "0")}</small>
            </div>
            <div className="card-copy">
              <small>EXPLAINER</small>
              <h3>{title}</h3>
              {description && <p>{description.slice(0, 155)}{description.length > 155 ? "…" : ""}</p>}
              <b aria-hidden="true">↗</b>
            </div>
          </a>
        );
      })}
    </div>
  );
}
