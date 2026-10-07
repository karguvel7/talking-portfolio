import Image from "next/image";
import { logoPath } from "@/lib/assets";

const BRAND: Record<string, string> = {
  angular: logoPath("angular.svg"),
  react: logoPath("react.svg"),
  "three-js": logoPath("threedotjs.svg"),
  "node-js": logoPath("nodedotjs.svg"),
  python: logoPath("python.svg"),
  mongodb: logoPath("mongodb.svg"),
  neo4j: logoPath("neo4j.svg"),
  mysql: logoPath("mysql.svg"),
  clickhouse: logoPath("clickhouse.svg"),
  aws: logoPath("aws.svg"),
  azure: logoPath("azure.svg"),
  android: logoPath("android.svg"),
  github: logoPath("github.svg"),
  openapi: logoPath("openapi.svg"),
  docker: logoPath("docker.svg"),
  typescript: logoPath("typescript.svg"),
};

const CONCEPT: Record<string, string> = {
  "micro-frontends": "layers",
  "mean-stack": "stack",
  "rest-apis": "api",
  "oauth-2-0": "lock",
  microservices: "grid",
  llms: "spark",
  "ai-workflows": "flow",
  "multi-agent-systems": "nodes",
  agile: "cycle",
  "leading-development-teams": "people",
  "xamarin-forms": "mobile",
  cordova: "mobile",
};

export function isBrand(slug: string): boolean {
  return slug in BRAND;
}

export function TechLogo({ slug, name }: { slug: string; name: string }) {
  const src = BRAND[slug];
  if (src) {
    return (
      <Image
        src={src}
        alt={`${name} logo`}
        width={150}
        height={150}
        className="h-[150px] w-[150px] object-contain drop-shadow-[0_0_24px_rgba(13,13,13,0.08)]"
      />
    );
  }
  const concept = CONCEPT[slug] ?? "dot";
  return (
    <div
      className="grid h-[150px] w-[150px] place-items-center rounded-2xl border border-line bg-soft text-mute"
      aria-hidden
    >
      <ConceptIcon kind={concept} />
    </div>
  );
}

function ConceptIcon({ kind }: { kind: string }) {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden>
      <rect x="8" y="8" width="48" height="48" rx="12" stroke="currentColor" />
      <text x="32" y="38" textAnchor="middle" fontSize="10" fill="currentColor">
        {kind.slice(0, 4)}
      </text>
    </svg>
  );
}
