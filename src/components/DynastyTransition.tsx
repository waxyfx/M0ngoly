import { useEffect, useRef, useState } from "react";
import { asset } from "../assets";

const branches = ["Жошы ұлысы", "Шағатай ұлысы", "Үгедей ұлысы", "Төле ұлысы"];

export default function DynastyTransition() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const branchRef = useRef<HTMLDivElement>(null);
  const inView = useRef(false);
  const userPaused = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [ended, setEnded] = useState(false);
  const [failed, setFailed] = useState(false);
  const [phase, setPhase] = useState(0);
  const [branched, setBranched] = useState(false);

  useEffect(() => {
    const video = videoRef.current!;
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    let disposed = false;
    const load = () => {
      if (!video.getAttribute("src")) {
        video.src = asset("media/loki-branches.mp4");
        video.preload = "metadata";
        video.load();
      }
    };
    const sync = () => {
      if (!inView.current || document.hidden || preference.matches || userPaused.current || video.ended) {
        video.pause();
        return;
      }
      load();
      void video.play().then(() => {
        if (disposed || !inView.current || document.hidden || preference.matches || userPaused.current) video.pause();
      }).catch(() => { /* The visible play button also supports browsers blocking autoplay. */ });
    };
    const near = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !preference.matches) {
        load();
        near.disconnect();
      }
    }, { rootMargin: "250px" });
    const visible = new IntersectionObserver(([entry]) => {
      inView.current = entry.isIntersecting && entry.intersectionRatio >= 0.35;
      sync();
    }, { threshold: [0, 0.35] });
    const branchObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setBranched(true);
        branchObserver.disconnect();
      }
    }, { threshold: 0.2 });
    const onPreference = () => {
      if (preference.matches) {
        setPhase(2);
        setBranched(true);
      }
      sync();
    };
    if (preference.matches) onPreference();
    near.observe(video);
    visible.observe(video);
    branchObserver.observe(branchRef.current!);
    preference.addEventListener("change", onPreference);
    document.addEventListener("visibilitychange", sync);
    return () => {
      disposed = true;
      video.pause();
      near.disconnect();
      visible.disconnect();
      branchObserver.disconnect();
      preference.removeEventListener("change", onPreference);
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current!;
    if (!video.paused) {
      userPaused.current = true;
      video.pause();
      return;
    }
    userPaused.current = false;
    if (!video.getAttribute("src")) video.src = asset("media/loki-branches.mp4");
    if (video.ended) video.currentTime = 0;
    setEnded(false);
    setPhase(0);
    void video.play().catch(() => setPlaying(false));
  };

  return (
    <section id="dynasty-transition" className="section dynasty-transition" aria-label="Империядан ұлыстарға">
      <div className="dynasty-intro">
        <span className="eyebrow">БІРЛІКТЕН — МҰРАҒА</span>
        <h2>Бір империя.<br />Бір әулет.<br /><em>Бірақ бірнеше бағыт.</em></h2>
      </div>
      <div className="dynasty-film">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="none"
          poster={asset("media/loki-branches-poster.jpg")}
          aria-label="Loki көрінісі — саяси бағыттардың тармақталуына көркем ұқсату"
          aria-describedby="film-analogy"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onTimeUpdate={(event) => {
            const { currentTime, duration } = event.currentTarget;
            if (Number.isFinite(duration)) setPhase(currentTime >= duration * 0.9 ? 2 : currentTime >= duration * 0.65 ? 1 : 0);
          }}
          onEnded={() => { setEnded(true); setPlaying(false); setPhase(2); setBranched(true); }}
          onError={() => { setFailed(true); setPlaying(false); setPhase(2); setBranched(true); }}
        />
        <div className={"film-caption " + (phase > 0 ? "visible" : "")} aria-hidden={phase === 0}>
          <p className={phase === 1 ? "visible" : ""} aria-hidden={phase !== 1}>Ұлы империяның болашағы<br />бірнеше саяси бағытқа бөлінді.</p>
          <p className={phase === 2 ? "visible" : ""} aria-hidden={phase !== 2}>Шыңғыс ханның ұлдары</p>
        </div>
        {!failed && <button className="film-control" onClick={togglePlayback} aria-label={playing ? "Бейнені кідірту" : ended ? "Бейнені қайта көру" : "Бейнені ойнату"}>
          <span aria-hidden="true">{playing ? "Ⅱ" : "▷"}</span> {playing ? "Кідірту" : ended ? "Қайта көру" : "Ойнату"}
        </button>}
      </div>
      <div className="film-footnote">
        <p id="film-analogy">Loki көрінісі — тармақталудың көркем ұқсатуы. Тарихи оқиғаның бейнесі емес.</p>
        <a href="#sons">Әулетке өту ↓</a>
      </div>
      {failed && <p className="film-fallback" role="status">Бейне қолжетімсіз. Әулет тарихын төменде жалғастырыңыз.</p>}
      <div ref={branchRef} className={"dynasty-branches " + (branched ? "is-revealed" : "")}>
        <p className="branch-origin">Моңғол империясы</p>
        <div className="branch-paths">
          {branches.map((label, index) => <a href="#sons" key={label} style={{ "--branch-index": index } as React.CSSProperties}>
            <span>0{index + 1}</span><strong>{label}</strong>
          </a>)}
        </div>
      </div>
    </section>
  );
}
