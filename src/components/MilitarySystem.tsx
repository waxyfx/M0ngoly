export const militarySteps = [
  ["10", "ОНДЫҚ"],
  ["100", "ЖҮЗДІК"],
  ["1 000", "МЫҢДЫҚ"],
  ["10 000", "ТҮМЕН"],
];
export function seekScene(id: string, index: number, count: number) {
  const el = document.getElementById(id);
  if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  window.scrollTo({
    top:
      el.offsetTop + (el.offsetHeight - innerHeight) * ((index + 0.3) / count),
    behavior: "smooth",
  });
}
export default function MilitarySystem({
  step,
  onSelect,
}: {
  step: number;
  onSelect: (step: number) => void;
}) {
  return (
    <section id="military" className="military-scroll paper">
      <div className="sticky-stage military-stage">
        <div className="section-line">
          <span>ТӘРТІП АРХИТЕКТУРАСЫ</span>
          <span>1206 ЖЫЛДАН КЕЙІН</span>
        </div>
        <div className="military-layout">
          <div>
            <span className="eyebrow">ӘСКЕРИ ЖҮЙЕ</span>
            <h2 className="section-heading">
              ДАЛА
              <br />
              <em>ЖҮЙЕГЕ</em>
              <br />
              АЙНАЛДЫ.
            </h2>
            <p className="body-copy">
              Шыңғыс хан әскер мен қоғамды ондық жүйе негізінде ұйымдастырды.
              Бұл жүйе тәртіпті күшейтіп, әртүрлі тайпаларды ортақ әскери-саяси
              құрылымға біріктірді.
            </p>
          </div>
          <div className={"army-visual army-step-" + step}>
            <div className="army-top">
              <span>БІР ЖАУЫНГЕРДЕН — БІР ТҮМЕНГЕ</span>
              <i>✧</i>
            </div>
            <svg
              viewBox="0 0 500 310"
              role="img"
              aria-label={
                militarySteps[step][1] + " әскери бөлімінің шартты сызбасы"
              }
            >
              <defs>
                <pattern
                  id="army-dots"
                  width={step === 3 ? 10 : step === 2 ? 16 : 28}
                  height={step === 3 ? 10 : step === 2 ? 16 : 28}
                  patternUnits="userSpaceOnUse"
                >
                  <circle
                    cx="5"
                    cy="5"
                    r={step === 3 ? 1.8 : 2.5}
                    fill="#9F2B1F"
                  />
                </pattern>
              </defs>
              {step === 0 ? (
                Array.from({ length: 10 }, (_, i) => (
                  <circle
                    key={i}
                    cx={110 + (i % 5) * 70}
                    cy={115 + Math.floor(i / 5) * 70}
                    r="7"
                    fill="#9F2B1F"
                  />
                ))
              ) : (
                <rect
                  x="40"
                  y="30"
                  width="420"
                  height="250"
                  fill="url(#army-dots)"
                />
              )}
            </svg>
            <div className="army-count">
              <strong>{militarySteps[step][0]}</strong>
              <span>{militarySteps[step][1]}</span>
            </div>
            <small>Әскер санының шартты көрінісі</small>
          </div>
        </div>
        <div className="step-controls">
          {militarySteps.map(([number, label], i) => (
            <button
              key={label}
              aria-pressed={step === i}
              className={step === i ? "active" : ""}
              onClick={() => {
                onSelect(i);
                seekScene("military", i, 4);
              }}
            >
              <span>0{i + 1}</span>
              {label}
              <small>{number}</small>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
