export default function MiniBars() {
  const bars = [
    { h: 56, l: "Apr", v: "+$4.1k" },
    { h: 72, l: "May", v: "+$2.4k", sel: true },
    { h: 64, l: "Jun", v: "+$3.5k" },
    { h: 52, l: "Jul", v: "+$1.2k" },
    { h: 60, l: "Aug", v: "+$2.4k" },
  ];
  return (
    <div className="grid grid-cols-5 gap-3 items-end h-48">
      {bars.map((b, i) => (
        <div key={i} className="flex flex-col items-center gap-2 transition-transform duration-300 ease-out hover:-translate-y-1">
          <div className={`w-12 rounded-2xl border border-white/10 ${b.sel ? "bg-[#C6B5FF]/60" : "bg-white/10"}`} style={{ height: `${b.h}%` }} />
          <span className="text-xs text-white/60">{b.l}</span>
        </div>
      ))}
    </div>
  );
}
