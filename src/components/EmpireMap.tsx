import geography from "../geography.json";
import { seekScene } from "./MilitarySystem";
export const mapSteps = [
  ["1206", "Моңғолия", "Тайпалар бір орталыққа бірікті."],
  ["1211", "Солтүстік Қытай", "Цзинь мемлекетіне қарсы жорық басталды."],
  ["1218", "Жетісу", "Қарақытай иеліктері бағындырылды."],
  ["1219", "Сырдария", "Хорезмге қарсы жорық басталды."],
  [
    "1221",
    "Орта Азия",
    "Бұхара мен Самарқандтан кейін жорық оңтүстікке жалғасты.",
  ],
  [
    "1227",
    "Шыңғыс хан дәуірінің соңы",
    "Шыңғыс хан қайтыс болды. Жорықтарды мұрагерлері жалғастырды.",
  ],
  ["1236", "Батысқа жорық", "Бату бастаған әскер Еділ Бұлғариясына бет алды."],
  [
    "1241",
    "Шығыс және Орталық Еуропа",
    "Моңғол әскерлері Польша мен Венгрияға жетті.",
  ],
];
export const project = (lon: number, lat: number) => [
  ((lon + 15) / 160) * 1200,
  ((78 - lat) / 70) * 620,
];
export function region(points: number[][]) {
  return (
    "M" + points.map((p) => project(p[0], p[1]).join(",")).join(" L") + "Z"
  );
}
const expansion = [
  [
    [88, 48],
    [96, 55],
    [112, 54],
    [122, 49],
    [116, 42],
    [103, 40],
    [90, 43],
  ],
  [
    [103, 40],
    [116, 42],
    [122, 49],
    [128, 44],
    [123, 36],
    [111, 34],
    [103, 36],
  ],
  [
    [72, 45],
    [79, 49],
    [88, 48],
    [90, 43],
    [103, 40],
    [90, 35],
    [78, 37],
    [72, 41],
  ],
  [
    [60, 46],
    [72, 45],
    [78, 37],
    [70, 34],
    [61, 38],
  ],
  [
    [50, 40],
    [60, 46],
    [61, 38],
    [70, 34],
    [65, 29],
    [54, 29],
    [47, 34],
  ],
  [
    [86, 39],
    [103, 40],
    [111, 34],
    [111, 30],
    [95, 32],
  ],
  [
    [42, 54],
    [63, 57],
    [79, 49],
    [72, 45],
    [60, 46],
    [50, 40],
    [43, 44],
  ],
  [
    [18, 51],
    [28, 56],
    [42, 54],
    [43, 44],
    [34, 44],
    [24, 47],
  ],
];
export const ulusRegions = [
  {
    name: "ЖОШЫ ҰЛЫСЫ",
    color: "#C69A45",
    points: [
      [26, 52],
      [48, 57],
      [80, 51],
      [84, 46],
      [68, 43],
      [54, 39],
      [43, 44],
      [33, 46],
    ],
  },
  {
    name: "ШАҒАТАЙ ҰЛЫСЫ",
    color: "#A9442D",
    points: [
      [62, 40],
      [72, 46],
      [84, 46],
      [94, 43],
      [90, 35],
      [77, 33],
      [67, 35],
    ],
  },
  {
    name: "ҮГЕДЕЙ ҰЛЫСЫ",
    color: "#3A7182",
    points: [
      [80, 51],
      [90, 54],
      [101, 50],
      [96, 44],
      [84, 46],
    ],
  },
  {
    name: "ТӨЛЕ ҰЛЫСЫ",
    color: "#6D624D",
    points: [
      [96, 44],
      [101, 50],
      [111, 54],
      [122, 49],
      [118, 41],
      [105, 40],
    ],
  },
];
export function BaseMap({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <svg
      className={"eurasia-map " + className}
      viewBox="0 0 1200 620"
      role="img"
      aria-label="Еуразияның тарихи картасының шартты сызбасы"
    >
      <defs>
        <pattern
          id="map-grid"
          width="75"
          height="70"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M75 0H0V70"
            fill="none"
            stroke="currentColor"
            strokeWidth=".5"
            opacity=".15"
          />
        </pattern>
        <filter id="route-glow">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>
      <rect width="1200" height="620" fill="url(#map-grid)" />
      <g className="map-land">
        {geography.countries.map((c) => (
          <path key={c.name} d={c.d} />
        ))}
      </g>
      {children}
      <g className="sea-labels">
        <text x="110" y="510">
          ЖЕРОРТА ТЕҢІЗІ
        </text>
        <text x="500" y="570">
          ҮНДІ МҰХИТЫ
        </text>
        <text x="1060" y="470" transform="rotate(-65 1060 470)">
          ТЫНЫҚ МҰХИТЫ
        </text>
      </g>
      <g className="map-compass" transform="translate(1110 100)">
        <path d="M0-30L7 0 0 30-7 0Z M-30 0L0-7 30 0 0 7Z" />
        <text x="0" y="-42">
          С
        </text>
      </g>
    </svg>
  );
}
export function MapCity({
  lon,
  lat,
  label,
}: {
  lon: number;
  lat: number;
  label: string;
}) {
  const [x, y] = project(lon, lat);
  return (
    <g className="map-city" transform={`translate(${x} ${y})`}>
      <circle r="4" />
      <circle r="10" fill="none" opacity=".3" />
      <text x="12" y="-10">
        {label}
      </text>
    </g>
  );
}
export default function EmpireMap({
  step,
  onSelect,
}: {
  step: number;
  onSelect: (step: number) => void;
}) {
  return (
    <section id="expansion" className="expansion-scroll">
      <div className="sticky-stage expansion-stage">
        <div className="scene-label">
          <span>04 / 10</span>
          <span>ШЕКАРАДАН ӘРІ</span>
        </div>
        <div className="map-heading">
          <span className="eyebrow">БІР ҒАСЫРҒА ЖЕТПЕЙ</span>
          <h2>
            ИМПЕРИЯНЫҢ
            <br />
            <em>КЕҢЕЮІ</em>
          </h2>
        </div>
        <div className="expansion-map-wrap">
          <BaseMap>
            {expansion.map((points, i) => (
              <path
                key={i}
                className={"empire-region " + (i <= step ? "is-visible" : "")}
                d={region(points)}
                style={{ fill: i === 0 ? "#C69A45" : "#B83B26" }}
              />
            ))}
            <path
              className="expansion-arrow"
              d="M920 260Q800 170 650 300T240 220"
            />
            <MapCity lon={103.8} lat={47.2} label="ҚАРАҚОРЫМ" />
            <MapCity lon={68.3} lat={42.85} label="ОТЫРАР" />
            <MapCity lon={64.4} lat={39.8} label="БҰХАРА" />
            <MapCity lon={116.4} lat={39.9} label="БЕЙЖІҢ" />
          </BaseMap>
        </div>
        <div className="map-year">
          <strong>{mapSteps[step][0]}</strong>
          <h3>{mapSteps[step][1]}</h3>
          <p>{mapSteps[step][2]}</p>
        </div>
        <div className="map-legend">
          <i /> МОҢҒОЛ ИЕЛІКТЕРІ МЕН ЖОРЫҚ БАҒЫТТАРЫ
        </div>
        <div className="map-timeline">
          {mapSteps.map(([year], i) => (
            <button
              key={year}
              className={i === step ? "active" : ""}
              aria-pressed={i === step}
              onClick={() => {
                onSelect(i);
                seekScene("expansion", i, 8);
              }}
            >
              <span>{year}</span>
              <i />
            </button>
          ))}
        </div>
        <p className="map-disclaimer">
          Карта шартты. Жорық аймақтары тұрақты саяси бақылаумен әрдайым сәйкес
          келмейді.
        </p>
      </div>
    </section>
  );
}
