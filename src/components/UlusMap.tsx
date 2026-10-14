import { useState } from "react";
import { BaseMap, region, ulusRegions } from "./EmpireMap";
import { sons } from "./SonsSection";
export default function UlusMap() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <>
      <section id="ulus" className="ulus-scroll">
        <div className="sticky-stage ulus-stage">
          <div className="scene-label">
            <span>07 / 10</span>
            <span>ҰЛЫСТАРДЫҢ ҚАЛЫПТАСУЫ</span>
          </div>
          <div className="ulus-heading">
            <span className="eyebrow">БӨЛІНГЕН МҰРА</span>
            <h2>
              БІР ИМПЕРИЯ.
              <br />
              <em>ТӨРТ БАҒЫТ.</em>
            </h2>
          </div>
          <div className="ulus-map">
            <BaseMap>
              {ulusRegions.map((r, i) => (
                <path
                  className={
                    "ulus-region " +
                    (active !== null && active !== i ? "dimmed" : "")
                  }
                  key={r.name}
                  d={region(r.points)}
                  fill={r.color}
                />
              ))}
            </BaseMap>
            {sons.map((s, i) => (
              <button
                key={s.name}
                aria-pressed={active === i}
                className={"map-portrait map-portrait-" + i}
                onClick={() => setActive(active === i ? null : i)}
                aria-label={s.name + " ұлысын көрсету"}
              >
                <img
                  src={"/images/" + s.image + ".jpg"}
                  alt=""
                  loading="lazy"
                />
                <span>{s.name}</span>
              </button>
            ))}
          </div>
          <div className="territory-list">
            {sons.map((s, i) => (
              <button
                className={active === i ? "active" : ""}
                key={s.name}
                aria-pressed={active === i}
                onClick={() => setActive(active === i ? null : i)}
                style={{ "--son-color": s.color } as React.CSSProperties}
              >
                <span>
                  <i />
                  {s.name}
                </span>
                <p>{s.territory}</p>
              </button>
            ))}
          </div>
          <p className="map-disclaimer">
            Бастапқы үлестер шартты берілген. Ұлыстардың шекарасы уақыт өте
            өзгерді.
          </p>
        </div>
      </section>
      <section id="division" className="section division-section">
        <div className="section-line">
          <span>08 / 10</span>
          <span>XIII ҒАСЫРДЫҢ ЕКІНШІ ЖАРТЫСЫ</span>
        </div>
        <div className="division-heading">
          <h2 className="section-heading">
            БІРЛІК
            <br />
            <em>МӘҢГІ БОЛМАДЫ.</em>
          </h2>
          <p className="body-copy">
            Шыңғыс хан құрған біртұтас саяси кеңістік бірден жойылған жоқ. XIII
            ғасырдың ортасынан бастап ұлыстардың дербестігі күшейіп, орталық
            биліктің ықпалы әлсіреді.
          </p>
        </div>
        <BaseMap className="division-map">
          {[
            { ...ulusRegions[0], dx: -25, dy: -15 },
            { ...ulusRegions[1], dx: -10, dy: 22 },
            {
              name: "ХУЛАГУЛАР МЕМЛЕКЕТІ",
              color: "#A17B60",
              points: [
                [35, 39],
                [48, 41],
                [63, 39],
                [66, 29],
                [53, 26],
                [43, 32],
              ],
              dx: -25,
              dy: 30,
            },
            {
              name: "ЮАНЬ ӘУЛЕТІ",
              color: "#3A7182",
              points: [
                [96, 52],
                [116, 52],
                [131, 45],
                [122, 24],
                [110, 20],
                [99, 28],
                [94, 38],
              ],
              dx: 30,
              dy: 5,
            },
          ].map((r) => (
            <path
              className="fragment"
              key={r.name}
              data-x={r.dx}
              data-y={r.dy}
              d={region(r.points)}
              fill={r.color}
            />
          ))}
        </BaseMap>
        <div className="fragment-labels">
          {[
            "ЖОШЫ ҰЛЫСЫ",
            "ШАҒАТАЙ ҰЛЫСЫ",
            "ХУЛАГУЛАР МЕМЛЕКЕТІ",
            "ЮАНЬ ӘУЛЕТІ",
          ].map((s, i) => (
            <span key={s}>
              <i
                style={{
                  background: ["#C69A45", "#A9442D", "#A17B60", "#3A7182"][i],
                }}
              />
              {s}
            </span>
          ))}
        </div>
        <div className="division-dates">
          <span>
            <strong>1259</strong>Мөңке ханның өлімі
          </span>
          <span>
            <strong>1260–1264</strong>Тақ үшін күрес
          </span>
          <span>
            <strong>1260-жылдардан</strong>Дербес мемлекеттер
          </span>
        </div>
      </section>
      <section className="section golden-horde">
        <div className="golden-text">
          <span className="eyebrow">БАТЫСҚА АУҒАН САЯСИ ОРТАЛЫҚ</span>
          <h2>
            ЖОШЫ ҰЛЫСЫ
            <br />
            <span className="golden-arrow">⟶</span>
            <br />
            <em>АЛТЫН ОРДА</em>
          </h2>
          <p className="body-copy">
            Жошы әулетінің иеліктері кейін Алтын Орданың саяси негізіне айналды.
            Бату хан тұсында мемлекет күшейіп, Еуразиядағы маңызды саяси және
            сауда орталықтарының біріне айналды.
          </p>
          <span className="golden-date">XIII — XV ҒАСЫРЛАР</span>
        </div>
        <figure className="batu-portrait">
          <div className="batu-orbit" />
          <img
            src="/images/batu.jpg"
            alt="Тақта отырған Бату хан — Рашид ад-Дин қолжазбасындағы миниатюра"
            loading="lazy"
          />
          <figcaption>
            <strong>БАТУ ХАН</strong>
            <span>ЖОШЫНЫҢ ҰЛЫ · АЛТЫН ОРДАНЫҢ НЕГІЗІН ҚАЛАУШЫ</span>
          </figcaption>
        </figure>
      </section>
    </>
  );
}
