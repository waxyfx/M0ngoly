export default function KurultaiSection() {
  return (
    <section id="kurultai" className="kurultai-scroll">
      <div className="sticky-stage kurultai-stage">
        <div className="scene-label">
          <span>03 / 10</span>
          <span>ТАЙПАЛАРДАН — МЕМЛЕКЕТКЕ</span>
        </div>
        <div className="dust" />
        <div className="kurultai-number">
          <span className="eyebrow">ҰЛЫ ҚҰРЫЛТАЙ</span>
          <div>1206</div>
          <p>Темүжін</p>
        </div>
        <div className="khan-reveal">
          <img
            src="/images/genghis.jpg"
            alt="Шыңғыс ханның Юань дәуірінің дәстүріндегі портреті"
            loading="lazy"
          />
          <span className="eyebrow">ЖАҢА ЕСІМ. ЖАҢА ДӘУІР.</span>
          <h2>
            ШЫҢҒЫС
            <br />
            <em>ХАН</em>
          </h2>
          <p>Бірнеше тайпа. Бір билік. Бір империя.</p>
        </div>
        <p className="scene-bottom">
          Онон өзені маңындағы құрылтайда Темүжін ұлы хан болып жарияланды.
        </p>
      </div>
    </section>
  );
}
