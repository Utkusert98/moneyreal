import { useMemo, useRef } from "react";

export default function DonutChart({
  segments,
  active,
  setActive,
  size = 200,
  showCenter = false,
}) {
  const cx = size / 2, cy = size / 2;
  const outerR = 80, innerR = 50;

  // leave gecikmesi için timer
  const leaveTimer = useRef(null);
  const safeSetActive = (i) => {
    if (leaveTimer.current) {
      clearTimeout(leaveTimer.current);
      leaveTimer.current = null;
    }
    setActive(i);
  };
  const scheduleClear = () => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    leaveTimer.current = setTimeout(() => setActive(null), 150);
  };

  const polar = (r, deg) => {
    const a = ((deg - 90) * Math.PI) / 180;
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  };

  const arcs = useMemo(() => {
    let start = 0;
    return segments.map((s) => {
      const sweep = (s.percent / 100) * 360;
      const end = start + sweep;
      const largeArc = sweep > 180 ? 1 : 0;

      const [x1, y1] = polar(outerR, start);
      const [x2, y2] = polar(outerR, end);
      const [x3, y3] = polar(innerR, end);
      const [x4, y4] = polar(innerR, start);

      const d = [
        `M ${x1} ${y1}`,
        `A ${outerR} ${outerR} 0 ${largeArc} 1 ${x2} ${y2}`,
        `L ${x3} ${y3}`,
        `A ${innerR} ${innerR} 0 ${largeArc} 0 ${x4} ${y4}`,
        "Z",
      ].join(" ");

      // hover itme vektörü
      const mid = start + sweep / 2;
      const [mx, my] = polar((outerR + innerR) / 2, mid);
      const [nx, ny] = polar((outerR + innerR) / 2 + 8, mid);
      const tx = nx - mx, ty = ny - my;

      const arc = { d, tx, ty, start, sweep, mid };
      start = end;
      return arc;
    });
  }, [segments]);

  // tooltip konumu (aktif dilim)
  let tip = null;
  if (active !== null && arcs[active]) {
    const { mid } = arcs[active];
    const [tx, ty] = polar(outerR + 16, mid);
    tip = { x: tx, y: ty, label: segments[active].label, p: segments[active].percent };
  }

  return (
    <div className="relative">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="overflow-visible"
        // svg genelinde mouse çıkınca da gecikmeli temizle
        onMouseLeave={scheduleClear}
        onMouseEnter={() => {
          if (leaveTimer.current) {
            clearTimeout(leaveTimer.current);
            leaveTimer.current = null;
          }
        }}
      >
        {/* Arka halka */}
        <circle cx={cx} cy={cy} r={outerR} fill="rgba(255,255,255,0.06)" />
        <circle cx={cx} cy={cy} r={innerR} fill="#121820" />

        {arcs.map((arc, i) => {
          const isActive = active === i;
          return (
            <g
              key={i}
              onMouseEnter={() => safeSetActive(i)}
              onClick={() => safeSetActive(i)}
              style={{
                transformBox: "fill-box",
                transformOrigin: "center",
                transition: "transform 220ms ease, filter 220ms ease",
                transform: isActive
                  ? `translate(${arc.tx}px, ${arc.ty}px) scale(1.06)`
                  : "translate(0,0) scale(1)",
                filter: isActive
                  ? "drop-shadow(0 6px 12px rgba(0,0,0,0.35))"
                  : "none",
                cursor: "pointer",
              }}
            >
              {/* Görünen dilim */}
              <path d={arc.d} fill={segments[i].color} opacity={0.95} />
              {/* Geniş hitbox: görünmez, kalın stroke (flicker fix) */}
              <path
                d={arc.d}
                fill="none"
                stroke="transparent"
                strokeWidth="16"
                style={{ pointerEvents: "stroke" }}
              />
            </g>
          );
        })}

        {/* Tooltip (pointer-events: none old. flicker yok) */}
        {tip && (
          <g>
            <circle cx={tip.x} cy={tip.y} r="3" fill="white" opacity="0.9" />
            <foreignObject x={tip.x - 60} y={tip.y - 36} width="120" height="32">
              <div className="rounded-md bg-white text-black text-[11px] px-2 py-1 shadow pointer-events-none text-center">
                {tip.label} • {tip.p}%
              </div>
            </foreignObject>
          </g>
        )}
      </svg>

      {/* Merkez yazısı (opsiyonel) */}
      <div className="absolute inset-0 grid place-items-center pointer-events-none">
        {showCenter && active !== null ? (
          <div className="text-center">
            <div className="text-xs text-white/70">{segments[active].label}</div>
            <div className="text-xl font-bold">{segments[active].percent}%</div>
          </div>
        ) : (
          <div className="text-center">
            <div className="text-xs text-white/60">Total</div>
            <div className="text-2xl font-bold">$1,124</div>
          </div>
        )}
      </div>
    </div>
  );
}
