import LokiFilm from "./LokiFilm";

export default function Hero({ filmActive }: { filmActive: boolean }) {
  return (
    <section id="start" className="hero-scroll" aria-label="Бөлінген дала">
      <div className="sticky-stage hero-stage">
        <div className="hero-photo pointer-layer" />
        <div className="hero-shade" />
        <div className="hero-topline">
          <span>ҚАЗАҚСТАН ТАРИХЫ</span>
          <span>ИНТЕРАКТИВТІ ТАРИХИ САЯХАТ</span>
        </div>
        <div className="hero-copy">
          <div className="eyebrow ornament">XII ҒАСЫРДЫҢ СОҢЫ</div>
          <h1>
            БӨЛІНГЕН
            <br />
            <em>ДАЛА</em>
            <span className="title-star" aria-hidden="true">
              ✧
            </span>
          </h1>
          <p>Бір кеңістік. Бірнеше тайпа. Бір билік жоқ.</p>
          <div className="hero-tribes-small">
            КЕРЕЙІТ <i /> НАЙМАН <i /> МЕРКІТ <i /> ТАТАР
          </div>
        </div>
        <div className="tribe-cloud" aria-hidden="true">
          {["КЕРЕЙІТ", "НАЙМАН", "МЕРКІТ", "ТАТАР", "МОҢҒОЛ"].map((x, i) => (
            <span className={"tribe tribe-" + i} key={x}>
              {x}
            </span>
          ))}
        </div>
        <div className={"hero-film-stage " + (filmActive ? "is-active" : "")} aria-hidden={!filmActive} inert={!filmActive}>
          <span className="eyebrow hero-film-label">ДАЛА ТАРИХЫ ӨЗГЕРЕР СӘТ</span>
          <LokiFilm active={filmActive} />
        </div>
        <div className="hero-bottom">
          <div>
            <span className="tiny-label">01 / 10</span>
            <p>Бір империяның бастауы.</p>
          </div>
          <a href="#temujin" className="scroll-prompt">
            <span>ТӨМЕН ЖЫЛЖЫТ</span>
            <i>↓</i>
          </a>
          <div className="hero-coordinates">
            <span>48° С.Е. &nbsp; 103° Ш.Б.</span>
            <p>Моңғолия даласы</p>
          </div>
        </div>
        <div className="hero-edge">
          <span>ДАЛАДАН — ДҮНИЕЖҮЗІНЕ</span>
          <span>1206 — XIV ҒАСЫР</span>
        </div>
      </div>
    </section>
  );
}
