import { useEffect, useRef, useState } from "react";

const branches = ["Жошы ұлысы", "Шағатай ұлысы", "Үгедей ұлысы", "Төле ұлысы"];

export default function DynastyTransition() {
  const branchRef = useRef<HTMLDivElement>(null);
  const [branched, setBranched] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setBranched(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    observer.observe(branchRef.current!);
    return () => observer.disconnect();
  }, []);
  return (
    <section id="dynasty-transition" className="section dynasty-transition" aria-label="Империядан ұлыстарға">
      <div className="dynasty-intro">
        <span className="eyebrow">БІРЛІКТЕН — МҰРАҒА</span>
        <h2>Бір империя.<br />Бір әулет.<br /><em>Бірақ бірнеше бағыт.</em></h2>
      </div>
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
