// src/components/SubscriptionsPanel.jsx
import { FaApple, FaDiscord, FaSpotify } from "react-icons/fa";
import { SiNetflix } from "react-icons/si";

export default function SubscriptionsPanel() {
  const subs = [
    { icon: <FaApple className="text-[#A3AAAE] text-xl" />,   name: "iCloud",        date: "Next 15 July",  price: "$2.99" },
    { icon: <FaDiscord className="text-[#5865F2] text-xl" />, name: "Discord Nitro", date: "Next 19 July",  price: "$8.99" },
    { icon: <FaSpotify className="text-green-400 text-xl" />, name: "Spotify",       date: "Next 04 August",price: "$4.99" },
    { icon: <SiNetflix className="text-red-500 text-xl" />,   name: "Netflix",       date: "Next 12 August",price: "$6.99" },
  ];

  return (
    <div className="rounded-3xl p-4 bg-[#121A26] border border-white/10 shadow">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-semibold">
          Subscriptions <span className="text-white/50">{subs.length}</span>
        </h3>
        <button className="text-white/60 hover:text-white text-sm">Manage ▸</button>
      </div>

      <div className="space-y-3">
        {subs.map((s, i) => (
          <SubRow key={i} icon={s.icon} name={s.name} date={s.date} price={s.price} />
        ))}
      </div>
    </div>
  );
}

function SubRow({ icon, name, date, price }) {
  return (
    <div className="flex items-center justify-between rounded-2xl p-3 bg-white/5 border border-white/10 hover:bg-white/10 transition">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 grid place-items-center rounded-xl bg-white/10">
          {icon}
        </div>
        <div className="leading-tight">
          <div className="font-semibold">{name}</div>
          <div className="text-xs text-white/60">{date}</div>
        </div>
      </div>
      <div className="font-semibold">{price}</div>
    </div>
  );
}
