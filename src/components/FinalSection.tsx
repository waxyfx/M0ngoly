export default function FinalSection() {
  return (
    <>
      <section id="final" className="final-scroll">
        <div className="sticky-stage final-stage">
          <svg
            className="final-roads"
            viewBox="0 0 1400 800"
            aria-hidden="true"
          >
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" />
              </filter>
            </defs>
            <g>
              {[
                "M0 520Q300 250 650 430T1400 200",
                "M0 300Q300 550 650 430T1400 600",
                "M200 800Q500 600 650 430T1150 0",
                "M0 650Q450 750 650 430T1400 340",
              ].map((d) => (
                <path key={d} d={d} />
              ))}
              <circle cx="650" cy="430" r="6" />
            </g>
          </svg>
          <span className="eyebrow final-label">ТАРИХ АЯҚТАЛМАЙДЫ</span>
          {[
            "ХАНДАР КЕТТІ.",
            "ӘСКЕР КЕТТІ.",
            "ЖОЛДАР ҚАЛДЫ.",
            "ДӘУІР ӨТТІ.",
            "ІЗІ ҚАЛДЫ.",
          ].map((t, i) => (
            <h2 key={t} className={"final-phrase final-phrase-" + i}>
              {t}
            </h2>
          ))}
          <p className="final-description">
            Моңғол дәуірі Еуразияның саяси картасын, халықтардың қозғалысын және
            мемлекеттердің дамуын түбегейлі өзгертті.
          </p>
          <a className="back-start" href="#start">
            БАСЫНА ОРАЛУ <span>↑</span>
          </a>
        </div>
      </section>
      <footer className="site-footer">
        <div className="footer-main">
          <a href="#start" className="footer-brand">
            ҰЛЫ ДАЛА<sup>XIII ғ.</sup>
          </a>
          <p>
            Қазақстан тарихы
            <br />
            Интерактивті тарихи жоба
          </p>
          <a href="#start">ТАРИХҚА ҚАЙТА ОРАЛУ ↗</a>
        </div>
        <details className="sources">
          <summary>
            Дереккөздер және суреттер <span>+</span>
          </summary>
          <div className="source-grid">
            <div>
              <h3>Тарихи деректер</h3>
              <a
                href="https://e-history.kz/en/amp/history-of-kazakhstan/show/9542"
                target="_blank"
                rel="noreferrer"
              >
                Қазақстан тарихы порталы — моңғол жорықтары және ұлыстар ↗
              </a>
              <a
                href="https://e-history.kz/en/amp/history-of-kazakhstan/show/9506"
                target="_blank"
                rel="noreferrer"
              >
                Қазақстан тарихы порталы — ортағасырлық Қазақстан ↗
              </a>
              <a
                href="https://royalarmouries.org/objects-and-stories/stories/the-mongols/the-family-of-genghis-khan"
                target="_blank"
                rel="noreferrer"
              >
                Корольдік қару-жарақ мұражайы — Шыңғыс хан әулеті ↗
              </a>
              <p>
                Ерте оқиғалардың даталары мен Отырар қоршауының ұзақтығы
                жөніндегі деректер әркелкі. Тоғрылмен одақ 1170-жылдар деп,
                қорғаныс мерзімі шамамен алты ай деп берілді.
              </p>
            </div>
            <div>
              <h3>Көрнекі материалдар</h3>
              <p>
                Темүжін, дала және қамал бейнелері — жасанды интеллект көмегімен
                жасалған көркем реконструкциялар. Олар түпнұсқа тарихи портрет
                немесе нақты археологиялық реконструкция емес.
              </p>
              <p>
                Әулет портреттері: ашық тарихи қолжазбалар мен Юань дәуірі
                портреттерінің кейінгі көшірмелері. Географиялық негіз: Natural
                Earth, қоғамдық игілік. Саяси шекаралар — шартты сызба.
              </p>
              <a
                href="https://commons.wikimedia.org/wiki/File:YuanEmperorAlbumGenghisPortrait.jpg"
                target="_blank"
                rel="noreferrer"
              >
                Шыңғыс хан портреті ↗
              </a>
              <a
                href="https://commons.wikimedia.org/wiki/File:Juchi_Khan_(cropped).JPG"
                target="_blank"
                rel="noreferrer"
              >
                Жошы портреті ↗
              </a>
              <a
                href="https://commons.wikimedia.org/wiki/File:Chagatai_Khan_(cropped).JPG"
                target="_blank"
                rel="noreferrer"
              >
                Шағатай портреті ↗
              </a>
              <a
                href="https://commons.wikimedia.org/wiki/File:YuanEmperorAlbumOgedeiPortrait.jpg"
                target="_blank"
                rel="noreferrer"
              >
                Үгедей портреті ↗
              </a>
              <a
                href="https://commons.wikimedia.org/wiki/File:Tolui_Khan.jpg"
                target="_blank"
                rel="noreferrer"
              >
                Төле портреті ↗
              </a>
              <a
                href="https://commons.wikimedia.org/wiki/File:Batu_Khan_on_the_Throne_by_Rashid_al-Din_(cropped).jpg"
                target="_blank"
                rel="noreferrer"
              >
                Бату хан миниатюрасы ↗
              </a>
            </div>
          </div>
        </details>
        <div className="footer-bottom">
          <span>ӨТКЕНДІ ТАНУ — БҮГІНДІ ТҮСІНУ.</span>
          <span>1206 → XIV ғ.</span>
        </div>
      </footer>
    </>
  );
}
