import { genghisPortrait } from "../assets";

export default function TemujinSection() {
  return (
    <section id="temujin" className="section temujin-section">
      <div className="section-line">
        <span>02 / 10</span>
        <span>АДАМ. ОДАҚ. БИЛІК.</span>
      </div>
      <div className="split-grid">
        <figure className="temujin-figure">
          <div className="portrait-ring" />
          <img
            className="temujin-portrait"
            src={genghisPortrait}
            alt="Темүжін — Шыңғыс ханның портреті"
            loading="lazy"
          />
          <figcaption>ТЕМҮЖІН — ШЫҢҒЫС ХАН</figcaption>
          <span className="image-index">I.</span>
        </figure>
        <div className="temujin-copy">
          <span className="eyebrow">1170–1204</span>
          <h2 className="section-heading">
            ТЕМҮЖІННІҢ
            <br />
            <em>БИЛІККЕ ЖОЛЫ</em>
          </h2>
          <p className="body-copy">
            Темүжін Моңғолия даласындағы ру-тайпалар арасындағы күресте
            біртіндеп күшейді. Оның билікке көтерілуінде одақтар да,
            сатқындықтар да, ұзақ соғыстар да маңызды рөл атқарды.
          </p>
          <ol className="vertical-timeline">
            {[
              ["1170-жылдар", "Тоғрыл ханмен одақ"],
              ["1203", "Керейіттер жеңілді"],
              ["1204", "Наймандарға шешуші соққы"],
              ["1206", "Ұлы құрылтай"],
            ].map(([year, text]) => (
              <li key={year}>
                <span>{year}</span>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="section-foot">
        <span>БИЛІК ТУЫСТЫҚПЕН ҒАНА ШЕКТЕЛМЕДІ.</span>
        <span>АДАЛДЫҚ ПЕН ҚАБІЛЕТ ЖАҢА ОРЫН АЛДЫ.</span>
      </div>
    </section>
  );
}
