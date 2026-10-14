import { useEffect, useRef, useState } from "react";
import { asset } from "../assets";

export const sons = [
  {
    name: "ЖОШЫ",
    image: asset("images/portraits/jochi.jpeg"),
    subtitle: "Үлкен ұл",
    territory: "Ертістен батысқа қарайғы ұлан-ғайыр аумақ",
    color: "#C69A45",
  },
  {
    name: "ШАҒАТАЙ",
    image: asset("images/portraits/chagatai.jpeg"),
    subtitle: "Екінші ұл",
    territory: "Жетісудың бір бөлігі, Шығыс Түркістан және Мәуереннахр",
    color: "#A9442D",
  },
  {
    name: "ҮГЕДЕЙ",
    image: asset("images/portraits/ogedei.jpeg"),
    subtitle: "Үшінші ұл",
    territory: "Батыс Моңғолия, Жоғарғы Ертіс және Тарбағатай",
    color: "#3A7182",
  },
  {
    name: "ТӨЛЕ",
    image: asset("images/portraits/tolui.jpeg"),
    subtitle: "Кенже ұл",
    territory: "Моңғолияның негізгі бөлігі",
    color: "#6D624D",
  },
];
export default function SonsSection({ active, onSelect }: {
  active: number | null;
  onSelect: (index: number) => void;
}) {
  const clicks = useRef(0);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const [unlocked, setUnlocked] = useState(false);
  useEffect(() => () => clearTimeout(resetTimer.current), []);
  const revealSecret = () => {
    if (unlocked) return;
    clicks.current += 1;
    clearTimeout(resetTimer.current);
    if (clicks.current === 3) {
      setUnlocked(true);
      clicks.current = 0;
      resetTimer.current = setTimeout(() => setUnlocked(false), 2000);
    } else {
      resetTimer.current = setTimeout(() => { clicks.current = 0; }, 3000);
    }
  };
  const ulusNames = ["Жошы ұлысы", "Шағатай ұлысы", "Үгедей ұлысы", "Төле ұлысы"];
  return (
    <section id="sons" className="section sons-section dynasty-family">
      <div className="section-line">
        <span>06 / 10</span>
        <span>БИЛІКТІҢ ЖАЛҒАСЫ</span>
      </div>
      <div className="sons-heading">
        <span className="eyebrow">ШЫҢҒЫС ХАН ӘУЛЕТІ</span>
        <h2 className="section-heading">Шыңғыс ханның ұлдары <em>және ұлыстар</em></h2>
        <p className="dynasty-subheading">Бір әулет — төрт саяси бағыт</p>
      </div>
      <div className="family-layout">
        <div className="family-art">
          <button className="ulus-secret" onClick={revealSecret} aria-live="polite">
            {unlocked ? <>Achievement unlocked:<br />Family business expanded.</> : "CHOOSE YOUR ULUS"}
          </button>
          <figure className="family-illustration">
            <img src={asset("images/genghis-khan-and-sons.png")}
              alt="Шыңғыс хан — Темүжін және оның ұлдары Жошы, Шағатай, Үгедей, Төле: есімдері белгіленген көркем иллюстрация"
              width="1122" height="1402" loading="lazy" decoding="async" />
            <figcaption><span>КӨРКЕМ ИЛЛЮСТРАЦИЯ</span><span className="family-hover" aria-hidden="true">Choose your ulus.</span></figcaption>
          </figure>
        </div>
        <div className="family-details">
          <p className="family-card-intro">Ұлысты таңдаңыз — оның аумағы төмендегі картада белгіленеді.</p>
          <div className="sons-grid">
            {sons.map((son, i) => (
              <a href="#ulus" className={"son-card " + (active === i ? "selected" : "")}
                key={son.name} onClick={() => onSelect(i)}
                style={{ "--son-color": son.color } as React.CSSProperties}>
                <img className="son-thumbnail" src={son.image} alt="" width="72" height="88" loading="lazy" />
                <div className="son-details">
                  <span className="son-index">0{i + 1} / 04 · {son.subtitle}</span>
                  <h3>{son.name}</h3>
                  <span className="son-ulus-title">{ulusNames[i]}</span>
                  <p>{son.territory}</p>
                </div>
                <span className="son-card-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="sons-note">Мұра бір әулетке тиесілі болды. Ал ұлыстардың жолы бірте-бірте бөлінді.</p>
    </section>
  );
}
