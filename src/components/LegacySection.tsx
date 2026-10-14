export default function LegacySection() {
  return (
    <section id="legacy" className="section legacy-section">
      <div className="section-line">
        <span>10 / 10</span>
        <span>ӨЗГЕРГЕН ӘЛЕМ</span>
      </div>
      <div className="legacy-heading">
        <h2 className="section-heading">
          СОҒЫСТАН КЕЙІН
          <br />
          <em>НЕ ӨЗГЕРДІ?</em>
        </h2>
        <p>
          Жаулап алудың ауыр зардаптары мен
          <br />
          жаңа байланыстар қатар жүрді.
        </p>
      </div>
      <div className="legacy-grid">
        {[
          {
            title: "САЯСАТ",
            text: "Орталықтандырылған билік пен жаңа әкімшілік құрылымдар орнықты.",
            icon: "seal",
          },
          {
            title: "САУДА",
            text: "Еуразиядағы транзиттік бағыттар кеңейіп, аймақтар арасындағы сауда күшейді.",
            icon: "roads",
          },
          {
            title: "БАЙЛАНЫС",
            text: "Шығыс пен Батыс арасындағы дипломатиялық және мәдени қатынастар жанданды.",
            icon: "orbits",
          },
          {
            title: "ХАЛЫҚТАР",
            text: "Көші-қон мен этникалық араласу үдерістері күшейді.",
            icon: "dots",
          },
        ].map((p, i) => (
          <article className={"legacy-panel panel-" + i} key={p.title}>
            <span className="panel-number">0{i + 1}</span>
            <svg
              className={"panel-art " + p.icon}
              viewBox="0 0 200 170"
              aria-hidden="true"
            >
              {i === 0 ? (
                <>
                  <path d="M100 10 160 40V115L100 155 40 115V40Z" />
                  <path d="M100 40v85M70 55v40q30 25 60 0V55M85 120h30" />
                </>
              ) : i === 1 ? (
                <>
                  {[0, 1, 2, 3].map((n) => (
                    <path
                      key={n}
                      d={`M10 ${30 + n * 28}Q80 ${160 - n * 15} 190 ${20 + n * 26}`}
                    />
                  ))}
                </>
              ) : i === 2 ? (
                <>
                  {[0, 1, 2].map((n) => (
                    <ellipse
                      key={n}
                      cx="100"
                      cy="85"
                      rx="80"
                      ry="27"
                      transform={`rotate(${n * 60} 100 85)`}
                    />
                  ))}
                </>
              ) : (
                <>
                  {Array.from({ length: 25 }, (_, n) => (
                    <circle
                      key={n}
                      cx={35 + (n % 5) * 32}
                      cy={20 + Math.floor(n / 5) * 32}
                      r={n % 3 === 0 ? 6 : 2}
                    />
                  ))}
                </>
              )}
            </svg>
            <div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="legacy-note">
        Жорықтар қалалар мен егіншілік ошақтарына зор зиян келтірді. Кейінгі
        қалпына келу үдерісі әр өңірде әртүрлі жүрді.
      </p>
    </section>
  );
}
