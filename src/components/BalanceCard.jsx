export default function BalanceCard({ className = "" }) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl p-6 text-slate-900 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5)] ${className}
                     bg-gradient-to-tr from-[#B8F28B] via-[#9EF1A3] to-[#67D8D5]`}
    >
      {/* kayıtlı hesaplar listesi */}
      <div className="mt-4">
        <p className="text-xl font-semibold text-slate-800/80 mt-0 mb-2">Recent transfers</p>
        <div className="flex items-center gap-3">
          {[
            { name: "Alice", initials: "A", color: "bg-pink-400" },
            { name: "Bob", initials: "B", color: "bg-blue-400" },
            { name: "Charlie", initials: "C", color: "bg-green-400" },
            { name: "Daisy", initials: "D", color: "bg-amber-400" },
            { name: "Ethan", initials: "E", color: "bg-purple-400" },
          ].map((acc) => (
            <button
              key={acc.name}
              className={`h-12 w-12 rounded-full grid place-items-center ${acc.color} text-white font-bold transition-transform duration-300 hover:scale-110 hover:opacity-90 active:scale-95`}
              title={acc.name}
            >
              {acc.initials}
            </button>
          ))}
        </div>
      </div>

      {/* dekoratif şekiller */}
      <div className="pointer-events-none absolute right-[-60px] top-1/2 h-64 w-64 -translate-y-1/2 rotate-12 rounded-3xl bg-white/30 blur-xl" />
      <div className="pointer-events-none absolute right-10 bottom-6 h-28 w-28 rounded-2xl bg-white/25 blur-md rotate-12" />

      <p className="text-lg font-medium opacity-80 mt-10">Total balance</p>
      <div className="mt-2 flex items-start gap-1">
        <span className="text-[44px] leading-none font-black tracking-tight">120,456,50</span>
        <span className="mt-1 text-xl font-semibold">$</span>
      </div>
      <p className="mt-1 text-sm font-medium text-slate-800/80">+$2,456 revenue from last month</p>

      <div className="mt-6 flex items-center gap-4">
        <button className="h-11 rounded-full bg-black px-6 text-white font-semibold shadow hover:opacity-80">
          Transfer
        </button>
        <div className="flex items-center rounded-full bg-white/70 backdrop-blur px-1 py-1 shadow-inner transition-transform duration-300 ease-out hover:-translate-y-1">
          <button className="h-10 rounded-full px-5 text-slate-800 font-semibold bg-white">Top Up</button>
        </div>
      </div>
    </div>
  );
}
