export default function DonationCard() {
  return (
    <div className="bg-white rounded-xl border-2 border-church-blue p-8 shadow-sm">
      <h3 className="text-2xl font-bold text-church-blue mb-4">
        Support Our Housing Mission
      </h3>
      <div className="bg-slate-50 rounded-lg p-4 mb-4">
        <p className="text-sm text-church-slate mb-1">Bank account</p>
        <p className="font-mono text-lg font-semibold text-church-blue select-all">
          02-0610-0070823-00
        </p>
      </div>
      <p className="text-church-slate mb-2">
        Reference: <span className="font-semibold">&quot;housing&quot;</span> or{" "}
        <span className="font-semibold">&quot;Kainga&quot;</span>
      </p>
      <p className="text-sm text-church-slate">
        Quarterly updates provided to all supporters.
      </p>
    </div>
  );
}
