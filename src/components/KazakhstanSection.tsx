import { useState } from "react";
import geography from "../geography.json";
const regions = [
  {
    name: "Жошы ұлысы",
    color: "#C69A45",
    description:
      "Қазақстан аумағының басым бөлігі: Дешті Қыпшақ даласы, солтүстік және батыс өңірлер.",
  },
  {
    name: "Шағатай ұлысы",
    color: "#A9442D",
    description:
      "Қазақстанның оңтүстігі мен оңтүстік-шығысындағы жерлердің бір бөлігі, соның ішінде Жетісу.",
  },
  {
    name: "Үгедей ұлысы",
    color: "#3A7182",
    description:
      "Шығыс және солтүстік-шығыстағы өңірлердің бір бөлігі: Тарбағатай мен Жоғарғы Ертіс маңы.",
  },
];
export default function KazakhstanSection() {
  const [active, setActive] = useState(0);
  return (
    <section id="kazakhstan" className="section kazakhstan-section paper">
      <div className="section-line">
        <span>09 / 10</span>
        <span>ҚАЗАҚСТАН ЖЕРІ ЖӘНЕ МОҢҒОЛ ДӘУІРІ</span>
      </div>
      <h2 className="section-heading">
        ҚАЗАҚСТАН ЖЕРІ
        <br />
        <em>БІР ҰЛЫСҚА ҒАНА</em>
        <br />
        КІРГЕН ЖОҚ.
      </h2>
      <div className="kazakhstan-layout">
        <div className="kaz-map-wrap">
          <svg
            viewBox="0 0 1050 600"
            role="img"
            aria-label="Қазіргі Қазақстан сұлбасындағы Жошы, Шағатай және Үгедей ұлыстарының шартты орналасуы"
          >
            <defs>
              <clipPath id="kaz-clip">
                <path d={geography.kazakhstan} />
              </clipPath>
              <pattern
                id="kaz-lines"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M40 0H0V40"
                  fill="none"
                  stroke="#5c4324"
                  strokeWidth=".6"
                  opacity=".18"
                />
              </pattern>
            </defs>
            <rect width="1050" height="600" fill="url(#kaz-lines)" />
            <path d={geography.kazakhstan} fill="#2A231A" />
            <g clipPath="url(#kaz-clip)">
              {[
                "M0 0H1050V130L810 225 760 305 680 390 570 410 470 490H0Z",
                "M470 490L570 410 680 390 760 305 870 390 1050 410V600H470Z",
                "M1050 130L810 225 760 305 870 390 1050 410Z",
              ].map((d, i) => (
                <path
                  key={i}
                  d={d}
                  fill={regions[i].color}
                  opacity={active === i ? 1 : 0.45}
                  className="kaz-region"
                />
              ))}
            </g>
            <path
              d={geography.kazakhstan}
              fill="none"
              stroke="#493624"
              strokeWidth="2"
            />
            <g className="kaz-labels">
              <text x="410" y="240">
                ДЕШТІ ҚЫПШАҚ
              </text>
              <text x="720" y="435">
                ЖЕТІСУ
              </text>
              <text x="820" y="240">
                ТАРБАҒАТАЙ
              </text>
              <circle cx="570" cy="470" r="5" />
              <text x="500" y="505">
                ОТЫРАР
              </text>
              <text x="45" y="470" transform="rotate(-80 45 470)">
                КАСПИЙ ТЕҢІЗІ
              </text>
            </g>
          </svg>
          <span className="map-note">
            Қазіргі Қазақстан шекарасы салыстыру үшін берілген.
            <br />
            Тарихи ұлыстардың аумағы шартты көрсетілді.
          </span>
        </div>
        <div className="kaz-region-picker">
          <span className="eyebrow">ҮШ ҰЛЫСТЫҢ ТОҒЫСЫНДА</span>
          {regions.map((r, i) => (
            <button
              className={active === i ? "active" : ""}
              aria-pressed={active === i}
              key={r.name}
              onClick={() => setActive(i)}
            >
              <span className="region-title">
                <i style={{ background: r.color }} />
                <strong>{r.name}</strong>
                <b>{active === i ? "−" : "+"}</b>
              </span>
              <span className="region-description">{r.description}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
