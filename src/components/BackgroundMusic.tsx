import { useEffect, useRef, useState } from "react";
import { asset } from "../assets";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.35);
  const [failed, setFailed] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const audio = audioRef.current!;
    audio.volume = 0.35;
    return () => audio.pause();
  }, []);

  const toggle = async () => {
    const audio = audioRef.current!;
    if (!audio.paused) {
      audio.pause();
      return;
    }
    setFailed(false);
    setLoading(true);
    if (!audio.getAttribute("src")) audio.src = asset("media/throat-singing.mp3");
    try {
      await audio.play();
    } catch {
      setFailed(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <aside className="background-music" aria-label="Фондық музыка">
      <audio ref={audioRef} preload="none" loop
        onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}
        onError={() => { setFailed(true); setPlaying(false); setLoading(false); }} />
      <button className="music-toggle" onClick={toggle} disabled={loading}
        aria-label={playing ? "Музыканы кідірту" : "Музыканы қосу"}
        aria-pressed={playing} title="Көмей әні · I'm an Earthling">
        <span className="music-symbol" aria-hidden="true">{playing ? "Ⅱ" : "♪"}</span>
        <span>{loading ? "Жүктелуде…" : "Көмей әні"}<small>{playing ? "Кідірту" : "Музыканы қосу"}</small></span>
      </button>
      {playing && <label className="music-volume">
        <span className="sr-only">Музыка дыбысының деңгейі</span>
        <input type="range" min="0" max="1" step="0.05" value={volume}
          onChange={(event) => {
            const value = Number(event.target.value);
            setVolume(value);
            audioRef.current!.volume = value;
          }} />
      </label>}
      {failed && <span className="music-error" role="status">Музыка ашылмады. Қайта басыңыз.</span>}
    </aside>
  );
}
