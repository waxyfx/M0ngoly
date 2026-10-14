import { useEffect, useRef, useState } from "react";
export const chapters = [
  ["start", "Бөлінген дала", "XII ғасыр"],
  ["temujin", "Темүжін", "1170–1204"],
  ["kurultai", "Ұлы құрылтай", "1206"],
  ["expansion", "Империяның кеңеюі", "1206–1241"],
  ["otyrar", "Отырар және Хорезм", "1218–1220"],
  ["sons", "Төрт ұл — төрт бағыт", "Шыңғыс хан әулеті"],
  ["ulus", "Ұлыстардың қалыптасуы", "XIII ғасыр"],
  ["division", "Империяның бөлінуі", "XIII ғасырдың екінші жартысы"],
  ["kazakhstan", "Қазақстан жері", "Моңғол дәуірі"],
  ["legacy", "Мұра: ізі қалды", "XIII–XIV ғасырлар"],
];
export default function Header() {
  const [active, setActive] = useState("start"),
    [scrolled, setScrolled] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { rootMargin: "-15% 0px -65% 0px" },
    );
    chapters.forEach(([id]) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });
    const update = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", update);
    };
  }, []);
  const nav = [
    ["start", "Бастау"],
    ["temujin", "Темүжін"],
    ["kurultai", "1206"],
    ["expansion", "Жорықтар"],
    ["ulus", "Ұлыстар"],
    ["legacy", "Мұра"],
  ];
  return (
    <>
      <a className="skip-link" href="#temujin">
        Мазмұнға өту
      </a>
      <header className={scrolled ? "site-header scrolled" : "site-header"}>
        <a className="brand" href="#start" aria-label="Ұлы дала — бастау">
          <svg viewBox="0 0 40 48" aria-hidden="true">
            <path d="M20 4v40M7 10v13c0 10 26 10 26 0V10M13 42h14M15 4l5 7 5-7" />
          </svg>
          <span>
            ҰЛЫ ДАЛА<sup>XIII ғ.</sup>
          </span>
        </a>
        <nav aria-label="Негізгі навигация">
          {nav.map(([id, label]) => (
            <a
              key={id}
              className={active === id ? "active" : ""}
              href={"#" + id}
              aria-current={active === id ? "location" : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
        <button
          className="timeline-button"
          onClick={() => dialog.current?.showModal()}
        >
          Хронология <span aria-hidden="true">↗</span>
        </button>
      </header>
      <div className="page-progress" aria-hidden="true">
        <span>1206 → XIV ғ.</span>
        <div>
          <i />
        </div>
      </div>
      <dialog
        ref={dialog}
        className="timeline-dialog"
        onClick={(e) => {
          if (e.target === dialog.current) dialog.current?.close();
        }}
      >
        <div className="dialog-top">
          <span className="eyebrow">ОН ТАРАУ · БІР ТАРИХ</span>
          <button
            className="close-button"
            aria-label="Хронологияны жабу"
            onClick={() => dialog.current?.close()}
          >
            ×
          </button>
        </div>
        <h2>Дәуір бойымен.</h2>
        <div className="chapter-list">
          {chapters.map(([id, title, date], i) => (
            <a href={"#" + id} key={id} onClick={() => dialog.current?.close()}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <strong>{title}</strong>
              <small>{date}</small>
              <b aria-hidden="true">↗</b>
            </a>
          ))}
        </div>
      </dialog>
    </>
  );
}
