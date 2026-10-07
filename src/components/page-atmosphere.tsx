export function PageAtmosphere() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="page-grid absolute inset-0 opacity-[0.35]" />
      <div className="blob blob-a absolute -left-[20%] top-[8%] h-[420px] w-[420px] rounded-full bg-[#e8e4dc]" />
      <div className="blob blob-b absolute right-[-10%] top-[32%] h-[360px] w-[360px] rounded-full bg-[#dfe8f0]" />
      <div className="blob blob-c absolute bottom-[12%] left-[20%] h-[300px] w-[300px] rounded-full bg-[#ece6df]" />
    </div>
  );
}
