import { useEffect, useRef, useState } from "react";
import { asset } from "../assets";

export default function LokiFilm({ active }: { active: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useRef(false);
  const userPaused = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [ended, setEnded] = useState(false);
  const [failed, setFailed] = useState(false);
  const [phase, setPhase] = useState(0);

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
      if (!active || !inView.current || document.hidden || preference.matches || userPaused.current || video.ended) {
        video.pause();
        return;
      }
      load();
      void video.play().then(() => {
        if (disposed || !active || !inView.current || document.hidden || preference.matches || userPaused.current) video.pause();
      }).catch(() => { /* The visible play button also supports browsers blocking autoplay. */ });
    };
    const near = new IntersectionObserver(([entry]) => {
      if (active && entry.isIntersecting && !preference.matches) {
        load();
        near.disconnect();
      }
    }, { rootMargin: "250px" });
    const visible = new IntersectionObserver(([entry]) => {
      inView.current = entry.isIntersecting && entry.intersectionRatio >= 0.35;
      sync();
    }, { threshold: [0, 0.35] });
    const onPreference = () => {
      if (preference.matches) {
        setPhase(2);
      }
      sync();
    };
    if (preference.matches) onPreference();
    near.observe(video);
    visible.observe(video);
    preference.addEventListener("change", onPreference);
    document.addEventListener("visibilitychange", sync);
    return () => {
      disposed = true;
      video.pause();
      near.disconnect();
      visible.disconnect();
      preference.removeEventListener("change", onPreference);
      document.removeEventListener("visibilitychange", sync);
    };
  }, [active]);

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
    <>
      <div className="dynasty-film">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="none"
          poster={asset("media/loki-branches-poster.jpg")}
          aria-label="Loki көрінісі — тайпалардан ортақ билікке өтудің көркем ұқсатуы"
          aria-describedby="film-analogy"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onTimeUpdate={(event) => {
            const { currentTime, duration } = event.currentTarget;
            if (Number.isFinite(duration)) setPhase(currentTime >= duration * 0.9 ? 2 : currentTime >= duration * 0.65 ? 1 : 0);
          }}
          onEnded={() => { setEnded(true); setPlaying(false); setPhase(2); }}
          onError={() => { setFailed(true); setPlaying(false); setPhase(2); }}
        />
        <div className={"film-caption " + (phase > 0 ? "visible" : "")} aria-hidden={phase === 0}>
          <p className={phase === 1 ? "visible" : ""} aria-hidden={phase !== 1}>Бір империяның бастауы.</p>
          <p className={phase === 2 ? "visible" : ""} aria-hidden={phase !== 2}>ТЕМҮЖІН</p>
        </div>
        {!failed && <button className="film-control" onClick={togglePlayback} aria-label={playing ? "Бейнені кідірту" : ended ? "Бейнені қайта көру" : "Бейнені ойнату"}>
          <span aria-hidden="true">{playing ? "Ⅱ" : "▷"}</span> {playing ? "Кідірту" : ended ? "Қайта көру" : "Ойнату"}
        </button>}
      </div>
      <div className="film-footnote">
        <p id="film-analogy">Loki көрінісі — көркем ұқсату. Тарихи оқиғаның бейнесі емес.</p>
        <a href="#temujin">Тарихты жалғастыру ↓</a>
      </div>
      {failed && <p className="film-fallback" role="status">Бейне қолжетімсіз. Тарихты төменде жалғастырыңыз.</p>}
    </>
  );
}
