import { BaseMap, MapCity } from "./EmpireMap";
import { asset } from "../assets";
export function ArchiveMap() {
  return (
    <figure className="archive-map">
      <img
        src={asset("images/old-map.jpg")}
        alt="Әл-Идриси картографиясы дәстүріндегі Еуразия мен оған іргелес өңірлер картасының қолжазба үзіндісі"
        loading="lazy"
      />
      <figcaption>
        <span className="eyebrow">ҚОЛЖАЗБАДАҒЫ ӘЛЕМ</span>
        <h2>
          КЕҢІСТІК.
          <br />
          <em>ШЕКАРА. ЖОЛ.</em>
        </h2>
        <p>
          Әл-Идриси картасының үзіндісі.
          <br />
          Ортағасырлық дүниетанымның ізі.
        </p>
      </figcaption>
    </figure>
  );
}
export default function MapTransition() {
  return (
    <section id="otyrar-focus" className="otyrar-focus-scroll">
      <div className="sticky-stage otyrar-focus-stage">
        <div className="scene-label">
          <span>ЕУРАЗИЯДАН — БІР ҚАЛАҒА</span>
          <span>1218 ЖЫЛҒА ОРАЛАЙЫҚ</span>
        </div>
        <div className="otyrar-focus-map">
          <BaseMap>
            <MapCity lon={68.3} lat={42.85} label="ОТЫРАР" />
          </BaseMap>
        </div>
        <div className="otyrar-focus-title">
          <span className="eyebrow">СЫРДАРИЯ БОЙЫНДА</span>
          <h2>ОТЫРАР</h2>
          <p>1218</p>
        </div>
      </div>
    </section>
  );
}
