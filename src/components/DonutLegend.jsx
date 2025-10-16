export default function DonutLegend({ segments, active }) {
  return (
    <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
      {segments.map((s, i) => {
        const on = active === i;
        return (
          <div
            key={s.label}
            className="flex items-center gap-2"
            style={{
              transition: "transform 220ms ease, opacity 220ms ease",
              transform: on ? "translateY(-4px)" : "translateY(0)",
              opacity: on ? 1 : 0.65,
            }}
          >
            <span className="inline-block h-3 w-3 rounded-sm" style={{ background: s.color }} />
            <span className="text-white/80">{s.label}</span>
            <span className="text-white/60">{s.percent}%</span>
          </div>
        );
      })}
    </div>
  );
}
