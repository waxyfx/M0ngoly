import { useState } from "react";
const routes = [
  {
    name: "Шағатай мен Үгедей",
    place: "Отырар",
    path: "M690 80 Q480 80 340 245",
    end: [340, 245],
  },
  {
    name: "Жошы",
    place: "Сырдарияның төменгі ағысы",
    path: "M690 80 Q380 30 170 160",
    end: [170, 160],
  },
  {
    name: "Әскердің бір бөлігі",
    place: "Сырдарияның жоғарғы ағысы",
    path: "M690 80 Q630 140 500 340",
    end: [500, 340],
  },
  {
    name: "Шыңғыс хан",
    place: "Бұхара",
    path: "M690 80 Q580 170 330 380 Q270 430 220 405",
    end: [220, 405],
  },
];
export default function OtyrarSection({ month }: { month: number }) {
  const [route, setRoute] = useState<number | null>(null);
  return (
    <>
      <section id="otyrar" className="section otyrar-section">
        <div className="section-line">
          <span>05 / 10</span>
          <span>БҰРЫЛЫС НҮКТЕСІ</span>
        </div>
        <div className="otyrar-intro">
          <div className="otyrar-mark">
            <svg
              viewBox="0 0 600 400"
              aria-label="Керуеннің Отырарға келуінің шартты бағыты"
              role="img"
            >
              <path
                className="caravan-track"
                d="M570 60Q420 100 400 220T220 260"
              />
              <circle className="otyrar-pulse" cx="220" cy="260" r="30" />
              <circle cx="220" cy="260" r="5" fill="#F2D589" />
              <text x="220" y="310" textAnchor="middle">
                ОТЫРАР
              </text>
              <path
                className="caravan-light"
                pathLength="1"
                d="M570 60Q420 100 400 220T220 260"
              />
            </svg>
            <span>1218</span>
          </div>
          <div>
            <span className="eyebrow">САУДА КЕРУЕНІ. САЯСИ ДАҒДАРЫС.</span>
            <h2 className="section-heading">
              ОТЫРАР
              <br />
              <em>АПАТЫ</em>
            </h2>
            <p className="body-copy">
              Шыңғыс хан жіберген сауда керуені Отырарға келгенде Қайыр хан оны
              тыңшылық жасады деген күдікпен жойды. Осы оқиға Моңғол империясы
              мен Хорезм арасындағы соғыстың тікелей сылтауына айналды.
            </p>
            <aside className="academic-note">
              <span>ДЕРЕККЕ КӨЗҚАРАС</span>Тарихшылар Отырар оқиғасын соғыстың
              жалғыз себебі емес, алдын ала қалыптасқан саяси қайшылықтардың
              шешуші сылтауы ретінде де қарастырады.
            </aside>
          </div>
        </div>
      </section>
      <section className="section campaign-section">
        <div className="campaign-header">
          <h2>
            <em>1219</em>
            <br />
            ЖОРЫҚ БАСТАЛДЫ
          </h2>
          <p>
            Бір әскер.
            <br />
            Төрт бағыт.
          </p>
        </div>
        <div className="campaign-grid">
          <div className="campaign-routes">
            <span className="eyebrow">БАҒЫТТЫ ТАҢДАҢЫЗ</span>
            {routes.map((r, i) => (
              <button
                key={r.name}
                aria-pressed={route === i}
                className={route === i ? "active" : ""}
                onClick={() => setRoute(route === i ? null : i)}
              >
                <span>0{i + 1}</span>
                <div>
                  <strong>{r.name}</strong>
                  <small>{r.place}</small>
                </div>
                <b>↗</b>
              </button>
            ))}
          </div>
          <svg
            className="route-map"
            viewBox="0 0 800 500"
            role="img"
            aria-label="1219 жылғы жорықтың төрт бағыты"
          >
            <defs>
              <pattern
                id="route-grid"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M60 0H0V60"
                  stroke="#D3A84C"
                  fill="none"
                  opacity=".12"
                />
              </pattern>
            </defs>
            <rect width="800" height="500" fill="url(#route-grid)" />
            <path
              className="river"
              d="M70 120Q210 180 280 230T430 310T580 420"
            />
            <text
              className="river-label"
              x="285"
              y="215"
              transform="rotate(32 285 215)"
            >
              СЫРДАРИЯ
            </text>
            <path
              className="mountain"
              d="M520 280L550 220 575 260 610 190 645 240 690 185 740 270M550 220L560 250 575 260M610 190L620 230 645 240"
            />
            {routes.map((r, i) => (
              <g
                key={r.name}
                className={
                  "route-group " +
                  (route !== null && route !== i ? "dimmed" : "")
                }
              >
                <path className="campaign-path" d={r.path} pathLength="1" />
                <circle r="4" fill="#F2D589" className="route-traveler">
                  <animateMotion
                    dur={`${5 + i}s`}
                    repeatCount="indefinite"
                    path={r.path}
                  />
                </circle>
                <circle cx={r.end[0]} cy={r.end[1]} r="5" fill="#F2D589" />
              </g>
            ))}
            <g className="route-labels">
              <text x="650" y="55">
                ЕРТІС
              </text>
              <text x="350" y="275">
                ОТЫРАР
              </text>
              <text x="170" y="440">
                БҰХАРА
              </text>
              <text x="80" y="140">
                ЖЕНТ
              </text>
              <text x="495" y="370">
                БЕНАКЕТ
              </text>
            </g>
          </svg>
        </div>
        <small className="map-note">
          Жорық бағыттары шартты түрде көрсетілген.
        </small>
      </section>
      <section id="siege" className="siege-scroll">
        <div className="sticky-stage siege-stage">
          <div
            className="fortress-image"
            style={{
              filter: `brightness(${1 - month * 0.075}) saturate(${1 - month * 0.08})`,
            }}
          />
          <div className="fortress-shade" />
          <div className="scene-label">
            <span>ОТЫРАР ҚОРҒАНЫСЫ</span>
            <span>1219 — 1220</span>
          </div>
          <div className="siege-copy">
            <span className="eyebrow">БЕРІЛМЕГЕН ҚАЛА</span>
            <h2>
              {month}
              <em> АЙ</em>
            </h2>
            <p>
              Отырар қорғанысы
              <br />
              шамамен алты айға созылды.
            </p>
            <div className="siege-months">
              {Array.from({ length: 6 }, (_, i) => (
                <span key={i} className={i < month ? "active" : ""}>
                  {i + 1}
                </span>
              ))}
            </div>
            <div className={"siege-fall " + (month === 6 ? "visible" : "")}>
              <strong>1220</strong>
              <span>Қала құлады.</span>
            </div>
          </div>
          <p className="scene-bottom">
            Қаланың қорғанысы мен қамал ішіндегі соңғы қарсылықты қоса
            есептегендегі мерзім.
          </p>
          <span className="reconstruction-caption">
            ТАРИХИ КӨРКЕМ РЕКОНСТРУКЦИЯ
          </span>
        </div>
      </section>
    </>
  );
}
