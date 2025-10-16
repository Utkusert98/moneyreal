export default function StatCard({ title, value, chip, theme = "income" }) {
  const isIncome = theme === "income";
  return (
    <div
      className={`rounded-3xl p-6 border border-white/10 shadow
                     ${
                       isIncome
                         ? "bg-[linear-gradient(140deg,#1B2B2C_0%,#1D2F38_100%)]"
                         : "bg-[linear-gradient(140deg,#2A1E27_0%,#2B2331_100%)]"
                     }`}
    >
      <h3 className="text-lg font-semibold text-white/90 mb-2">{title}</h3>
      <div className="flex items-center gap-2">
        <span className="text-[34px] leading-none font-bold tracking-tight">{value}</span>
        <span className="text-lg mt-1">$</span>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <p className="text-sm text-white/60">This week’s {title.toLowerCase()}</p>
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full
                          ${isIncome ? "bg-[#B7F398] text-black" : "bg-[#F08D8D] text-white"}`}
        >
          {chip}
        </span>
      </div>
    </div>
  );
}
