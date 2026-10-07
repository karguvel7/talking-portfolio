export function WorkIllustration({ variant }: { variant: "cli" | "platform" | "incident" }) {
  return (
    <div className="relative" aria-hidden>
      <p className="mb-2 font-mono text-xs text-mute">Illustrative UI (not a live product)</p>
      <div className="card overflow-hidden bg-[#faf9f7] p-4">
        <div className="h-48 rounded-xl border border-line bg-white p-3">
          {variant === "cli" && (
            <svg viewBox="0 0 320 160" className="h-full w-full" role="img" aria-label="CLI mock">
              <rect width="320" height="160" fill="#faf9f7" rx="8" />
              <rect x="12" y="12" width="296" height="24" fill="#0d0d0d" rx="4" />
              <circle cx="24" cy="24" r="4" fill="#e9e6e0" />
              <circle cx="36" cy="24" r="4" fill="#e9e6e0" />
              <circle cx="48" cy="24" r="4" fill="#e9e6e0" />
              <text x="16" y="58" fontFamily="monospace" fontSize="11" fill="#3a3a3a">
                $ specguard diff openapi/v1.yaml openapi/v2.yaml
              </text>
              <text x="16" y="78" fontFamily="monospace" fontSize="11" fill="#0d0d0d">
                ✖ breaking: removed GET /users/:id
              </text>
              <rect x="16" y="96" width="120" height="8" fill="#e9e6e0" rx="2" />
              <rect x="16" y="112" width="200" height="8" fill="#e9e6e0" rx="2" />
            </svg>
          )}
          {variant === "platform" && (
            <svg viewBox="0 0 320 160" className="h-full w-full" role="img" aria-label="Platform mock">
              <rect width="320" height="160" fill="#fff" rx="8" />
              <rect x="0" y="0" width="320" height="28" fill="#0d0d0d" rx="8" />
              <rect x="12" y="40" width="72" height="108" fill="#f4f2ee" rx="6" />
              <rect x="92" y="40" width="216" height="48" fill="#e9e6e0" rx="6" />
              <rect x="92" y="96" width="100" height="52" fill="#e9e6e0" rx="6" />
              <rect x="200" y="96" width="108" height="52" fill="#e9e6e0" rx="6" />
            </svg>
          )}
          {variant === "incident" && (
            <svg viewBox="0 0 320 160" className="h-full w-full" role="img" aria-label="Incident hub mock">
              <rect width="320" height="160" fill="#fff" rx="8" />
              <rect x="12" y="12" width="140" height="136" fill="#f4f2ee" rx="6" />
              <rect x="164" y="12" width="144" height="64" fill="#e9e6e0" rx="6" />
              <rect x="164" y="84" width="144" height="64" fill="#e9e6e0" rx="6" />
              <circle cx="32" cy="32" r="6" fill="#0d0d0d" />
              <rect x="48" y="26" width="88" height="8" fill="#d8d5cf" rx="2" />
              <rect x="24" y="52" width="116" height="8" fill="#e9e6e0" rx="2" />
              <rect x="24" y="68" width="96" height="8" fill="#e9e6e0" rx="2" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}
