export default function SectionHeading({ eyebrow, title, accent, description }) {
  return (
    <div className="section-head">
      <div>
        {eyebrow && <p className="eyebrow">✳ {eyebrow}</p>}
        <h2>
          {title}
          {accent && <><br /><em>{accent}</em></>}
        </h2>
      </div>
      {description && <p>{description}</p>}
    </div>
  );
}
