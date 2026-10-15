import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TemujinSection from "./components/TemujinSection";
import KurultaiSection from "./components/KurultaiSection";
import MilitarySystem from "./components/MilitarySystem";
import EmpireMap from "./components/EmpireMap";
import OtyrarSection from "./components/OtyrarSection";
import SonsSection from "./components/SonsSection";
import DynastyTransition from "./components/DynastyTransition";
import BackgroundMusic from "./components/BackgroundMusic";
import UlusMap from "./components/UlusMap";
import KazakhstanSection from "./components/KazakhstanSection";
import LegacySection from "./components/LegacySection";
import FinalSection from "./components/FinalSection";
import MapTransition, { ArchiveMap } from "./components/MapTransition";
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const root = useRef<HTMLDivElement>(null);
  const [activeUlus, setActiveUlus] = useState<number | null>(null);
  const [heroFilmActive, setHeroFilmActive] = useState(false);
  const [military, setMilitary] = useState(0),
    [mapStep, setMapStep] = useState(0),
    [month, setMonth] = useState(1);
  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      gsap.to(".page-progress i", {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
        },
      });
      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          desktop: "(min-width: 769px)",
          reduced: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { motion, desktop } = context.conditions!;
          if (!motion) {
            setHeroFilmActive(true);
            setMilitary(3);
            setMapStep(7);
            setMonth(6);
            return;
          }
          const scene = (trigger: string) => ({
            trigger,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          });
          setHeroFilmActive(false);
          const hero = gsap.timeline({
            scrollTrigger: scene("#start"),
            onUpdate: () => setHeroFilmActive(hero.progress() >= 0.7),
          });
          hero
            .to(".hero-copy", { opacity: 0.15, scale: 1.08, duration: 0.3 }, 0)
            .to(".hero-photo", { scale: 1.1, duration: 1 }, 0)
            .fromTo(
              ".tribe",
              { opacity: 0, x: (i) => [-200, 200, -120, 180, -100][i], y: 60 },
              { opacity: 0.85, x: 0, y: 0, stagger: 0.025, duration: 0.2 },
              0.15,
            )
            .to(
              ".tribe",
              {
                x: (i) => [180, -180, 140, -140, 0][i],
                y: (i) => [130, 100, -50, -70, -120][i],
                opacity: 0,
                stagger: 0.015,
                duration: 0.18,
              },
              0.43,
            )
            .to(".hero-copy", { opacity: 0, duration: 0.1 }, 0.43);
          gsap.fromTo(
            ".temujin-portrait",
            { y: desktop ? 65 : 0, scale: 1.08 },
            {
              y: desktop ? -65 : 0,
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: "#temujin",
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2,
              },
            },
          );
          if (desktop)
            gsap.fromTo(
              ".temujin-copy",
              { y: 40 },
              {
                y: -30,
                scrollTrigger: {
                  trigger: "#temujin",
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1,
                },
              },
            );
          gsap.from(".vertical-timeline li", {
            x: 25,
            opacity: 0,
            stagger: 0.15,
            scrollTrigger: { trigger: ".vertical-timeline", start: "top 85%" },
          });
          gsap
            .timeline({ scrollTrigger: scene("#kurultai") })
            .to(
              ".kurultai-number",
              { scale: 1.45, opacity: 0.06, filter: "blur(5px)", duration: 1 },
              0,
            )
            .fromTo(
              ".khan-reveal",
              { opacity: 0, clipPath: "inset(100% 0 0 0)" },
              { opacity: 1, clipPath: "inset(0% 0 0 0)", duration: 0.8 },
              0.25,
            );
          ScrollTrigger.create({
            ...scene("#military"),
            onUpdate: (s) =>
              setMilitary(Math.min(3, Math.floor(s.progress * 4))),
          });
          ScrollTrigger.create({
            ...scene("#expansion"),
            onUpdate: (s) =>
              setMapStep(Math.min(7, Math.floor(s.progress * 8))),
          });
          gsap.fromTo(
            ".expansion-map-wrap",
            { scale: 1 },
            {
              scale: 1.1,
              xPercent: 2,
              ease: "none",
              scrollTrigger: scene("#expansion"),
            },
          );
          gsap
            .timeline({ scrollTrigger: scene("#otyrar-focus") })
            .to(".otyrar-focus-map", { scale: 2.7, duration: 1 }, 0)
            .to(
              ".otyrar-focus-map .map-land, .otyrar-focus-map .sea-labels, .otyrar-focus-map .map-compass",
              { opacity: 0, duration: 0.6 },
              0.4,
            )
            .fromTo(
              ".otyrar-focus-title",
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.4 },
              0.6,
            );
          gsap
            .timeline({
              scrollTrigger: {
                trigger: "#otyrar",
                start: "top 65%",
                end: "center center",
                scrub: 1,
              },
            })
            .fromTo(
              ".caravan-light",
              { strokeDashoffset: 1, opacity: 1 },
              { strokeDashoffset: 0, duration: 1 },
            )
            .to(".caravan-light", { opacity: 0, duration: 0.08 });
          gsap.fromTo(
            ".campaign-path",
            { strokeDashoffset: 1 },
            {
              strokeDashoffset: 0,
              stagger: 0.1,
              scrollTrigger: {
                trigger: ".campaign-section",
                start: "top 65%",
                end: "bottom 90%",
                scrub: 1,
              },
            },
          );
          ScrollTrigger.create({
            ...scene("#siege"),
            onUpdate: (s) =>
              setMonth(Math.min(6, Math.floor(s.progress * 6) + 1)),
          });
          gsap.to(".fortress-image", {
            scale: 1.12,
            xPercent: -3,
            ease: "none",
            scrollTrigger: scene("#siege"),
          });
          gsap.from(".son-card", {
            y: 18,
            opacity: 0,
            stagger: 0.12,
            duration: 0.7,
            clearProps: "transform,opacity",
            ease: "power3.out",
            scrollTrigger: { trigger: ".sons-grid", start: "top 85%" },
          });
          if (desktop) {
            const ulus = gsap.timeline({ scrollTrigger: scene("#ulus") });
            ulus
              .from(
                ".ulus-region",
                { opacity: 0, strokeDashoffset: 1000, duration: 0.7 },
                0,
              )
              .fromTo(
                ".map-portrait-0",
                { x: 380, y: 100 },
                { x: 0, y: 0, duration: 0.8 },
                0,
              )
              .fromTo(
                ".map-portrait-1",
                { x: 120, y: 30 },
                { x: 0, y: 0, duration: 0.8 },
                0,
              )
              .fromTo(
                ".map-portrait-2",
                { x: -110, y: 100 },
                { x: 0, y: 0, duration: 0.8 },
                0,
              )
              .fromTo(
                ".map-portrait-3",
                { x: -300, y: 100 },
                { x: 0, y: 0, duration: 0.8 },
                0,
              )
              .from(
                ".territory-list",
                { y: 40, opacity: 0, duration: 0.3 },
                0.7,
              );
          }
          gsap.to(".fragment", {
            x: (_, el) => Number(el.dataset.x),
            y: (_, el) => Number(el.dataset.y),
            scrollTrigger: {
              trigger: "#division",
              start: "top 65%",
              end: "bottom 80%",
              scrub: 1.2,
            },
          });
          gsap.from(".golden-arrow", {
            scaleX: 0,
            transformOrigin: "left",
            scrollTrigger: {
              trigger: ".golden-horde",
              start: "top 65%",
              end: "center center",
              scrub: 1,
            },
          });
          gsap.from(".legacy-panel", {
            y: 60,
            opacity: 0,
            stagger: 0.15,
            scrollTrigger: { trigger: ".legacy-grid", start: "top 80%" },
          });
          const final = gsap.timeline({ scrollTrigger: scene("#final") });
          for (let i = 0; i < 5; i++) {
            final.fromTo(
              ".final-phrase-" + i,
              { opacity: 0, y: 55, filter: "blur(10px)", scale: 0.93 },
              {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                scale: 1,
                duration: 0.25,
              },
              i,
            );
            if (i < 4)
              final.to(
                ".final-phrase-" + i,
                { opacity: 0, y: -35, filter: "blur(8px)", duration: 0.25 },
                i + 0.7,
              );
          }
          final
            .fromTo(
              ".final-roads",
              { opacity: 0, scale: 1.1 },
              { opacity: 0.65, scale: 1, duration: 1 },
              1.8,
            )
            .fromTo(
              ".final-description, .back-start",
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, duration: 0.4 },
              4,
            );
          const heroEl = document.querySelector<HTMLElement>(".hero-stage");
          const pointer = matchMedia("(pointer: fine)").matches && desktop;
          const move = (e: PointerEvent) => {
            if (!heroEl) return;
            const x = (e.clientX / innerWidth - 0.5) * 12,
              y = (e.clientY / innerHeight - 0.5) * 12;
            gsap.to(".pointer-layer", {
              x,
              y,
              duration: 1.2,
              overwrite: "auto",
            });
          };
          if (pointer) heroEl?.addEventListener("pointermove", move);
          return () => heroEl?.removeEventListener("pointermove", move);
        },
      );
    }, root);
    document.fonts.ready.then(() => ScrollTrigger.refresh());
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    return () => {
      window.removeEventListener("load", refresh);
      mm.revert();
      ctx.revert();
    };
  }, []);
  return (
    <div ref={root}>
      <Header />
      <BackgroundMusic />
      <main>
        <Hero filmActive={heroFilmActive} />
        <TemujinSection />
        <KurultaiSection />
        <MilitarySystem step={military} onSelect={setMilitary} />
        <ArchiveMap />
        <EmpireMap step={mapStep} onSelect={setMapStep} />
        <MapTransition />
        <OtyrarSection month={month} />
        <DynastyTransition />
        <SonsSection active={activeUlus} onSelect={setActiveUlus} />
        <UlusMap active={activeUlus} onSelect={setActiveUlus} />
        <KazakhstanSection />
        <LegacySection />
        <FinalSection />
      </main>
    </div>
  );
}
