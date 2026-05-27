export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px] sm:w-[300px]">
      {/* Phone frame */}
      <div className="rounded-[2.5rem] border-[8px] border-slate-800 bg-slate-800 shadow-2xl shadow-slate-900/30">
        {/* Notch */}
        <div className="mx-auto h-6 w-28 rounded-b-2xl bg-slate-800" />

        {/* Screen */}
        <div className="overflow-hidden rounded-[2rem] bg-white">
          {/* Status bar */}
          <div className="flex items-center justify-between px-6 py-2 text-[10px] font-semibold text-slate-900">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" /></svg>
              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" /></svg>
            </div>
          </div>

          {/* App header */}
          <div className="bg-indigo-600 px-5 pb-4 pt-2">
            <h3 className="text-sm font-bold text-white">CancelBefore</h3>
            <p className="mt-0.5 text-[10px] text-indigo-200">3 active subscriptions</p>
          </div>

          {/* Subscription cards */}
          <div className="space-y-2.5 px-4 py-3">
            <SubscriptionCard
              name="Netflix"
              price="$15.49"
              daysLeft={3}
              color="bg-red-500"
              letter="N"
            />
            <SubscriptionCard
              name="Spotify"
              price="$11.99"
              daysLeft={12}
              color="bg-green-500"
              letter="S"
            />
            <SubscriptionCard
              name="Adobe CC"
              price="$59.99"
              daysLeft={1}
              color="bg-blue-600"
              letter="A"
              urgent
            />
          </div>

          {/* Quick add */}
          <div className="px-4 pb-4">
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2">Quick Add</p>
            <div className="flex flex-wrap gap-1.5">
              {["Disney+", "Hulu", "YouTube"].map((s) => (
                <span key={s} className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-medium text-slate-600">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom nav */}
          <div className="flex items-center justify-around border-t border-slate-100 px-4 py-2.5">
            <NavIcon label="Subs" active />
            <NavIcon label="History" />
            <NavIcon label="Settings" />
          </div>

          {/* Home indicator */}
          <div className="flex justify-center pb-2 pt-1">
            <div className="h-1 w-24 rounded-full bg-slate-300" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SubscriptionCard({
  name,
  price,
  daysLeft,
  color,
  letter,
  urgent,
}: {
  name: string;
  price: string;
  daysLeft: number;
  color: string;
  letter: string;
  urgent?: boolean;
}) {
  return (
    <div className={`flex items-center gap-3 rounded-xl p-3 ${urgent ? "bg-red-50 border border-red-200" : "bg-slate-50"}`}>
      <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${color} text-xs font-bold text-white`}>
        {letter}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-900">{name}</span>
          <span className="text-xs font-bold text-slate-900">{price}</span>
        </div>
        <div className="flex items-center justify-between mt-0.5">
          <span className={`text-[10px] font-medium ${urgent ? "text-red-600" : "text-slate-500"}`}>
            {urgent ? "Renews tomorrow!" : `Renews in ${daysLeft} days`}
          </span>
          {urgent && (
            <span className="text-[10px] font-semibold text-red-600">Cancel</span>
          )}
        </div>
      </div>
    </div>
  );
}

function NavIcon({ label, active }: { label: string; active?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <div className={`h-1 w-1 rounded-full ${active ? "bg-indigo-600" : "bg-transparent"}`} />
      <span className={`text-[9px] font-medium ${active ? "text-indigo-600" : "text-slate-400"}`}>
        {label}
      </span>
    </div>
  );
}
