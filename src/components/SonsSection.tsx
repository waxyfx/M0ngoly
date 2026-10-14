export const sons = [
  {
    name: "ЖОШЫ",
    image: "jochi",
    subtitle: "Үлкен ұл",
    territory: "Ертістен батысқа қарайғы ұлан-ғайыр аумақ",
    color: "#C69A45",
  },
  {
    name: "ШАҒАТАЙ",
    image: "chagatai",
    subtitle: "Екінші ұл",
    territory: "Жетісудың бір бөлігі, Шығыс Түркістан және Мәуереннахр",
    color: "#A9442D",
  },
  {
    name: "ҮГЕДЕЙ",
    image: "ogedei",
    subtitle: "Үшінші ұл",
    territory: "Батыс Моңғолия, Жоғарғы Ертіс және Тарбағатай",
    color: "#3A7182",
  },
  {
    name: "ТӨЛЕ",
    image: "tolui",
    subtitle: "Кенже ұл",
    territory: "Моңғолияның негізгі бөлігі",
    color: "#6D624D",
  },
];
export default function SonsSection() {
  return (
    <section id="sons" className="section sons-section">
      <div className="section-line">
        <span>06 / 10</span>
        <span>БИЛІКТІҢ ЖАЛҒАСЫ</span>
      </div>
      <div className="sons-heading">
        <span className="eyebrow">ШЫҢҒЫС ХАН ӘУЛЕТІ</span>
        <h2 className="section-heading">
          ТӨРТ ҰЛ.
          <br />
          <em>ТӨРТ БАҒЫТ.</em>
        </h2>
      </div>
      <figure className="father-portrait">
        <img
          src="/images/genghis.jpg"
          alt="Шыңғыс ханның тарихи портреті"
          loading="lazy"
        />
        <figcaption>
          <strong>ШЫҢҒЫС ХАН</strong>
          <span>БӨРТЕДЕН ТУҒАН ТӨРТ ҰЛЫ</span>
        </figcaption>
      </figure>
      <div className="family-line" aria-hidden="true" />
      <div className="sons-grid">
        {sons.map((son, i) => (
          <a
            href="#ulus"
            className="son-card"
            key={son.name}
            style={{ "--son-color": son.color } as React.CSSProperties}
          >
            <div className="son-image">
              <span className="son-order">0{i + 1}</span>
              <img
                src={"/images/" + son.image + ".jpg"}
                alt={son.name + " — тарихи қолжазбадағы портрет"}
                loading="lazy"
              />
              <span className="portrait-caption">ТАРИХИ БЕЙНЕ</span>
            </div>
            <div className="son-info">
              <div>
                <span>{son.subtitle}</span>
                <h3>{son.name}</h3>
              </div>
              <b aria-hidden="true">↗</b>
            </div>
          </a>
        ))}
      </div>
      <p className="sons-note">
        Мұра бір әулетке тиесілі болды. Ал ұлыстардың жолы бірте-бірте бөлінді.
      </p>
    </section>
  );
}
