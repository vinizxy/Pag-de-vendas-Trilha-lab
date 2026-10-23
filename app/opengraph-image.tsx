import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Imagem de compartilhamento (WhatsApp, Instagram, Facebook...) com a identidade da marca.
export const alt = "Trilha Lab: seu negócio aparece, passa confiança e vende pelo WhatsApp.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const grotesk = await readFile(join(process.cwd(), "assets/SpaceGrotesk-SemiBold.ttf"));
const mono = await readFile(join(process.cwd(), "assets/JetBrainsMono-Regular.ttf"));
const logo = await readFile(join(process.cwd(), "public/logo/trilha-lab-temporaria.png"), "base64");

const grafite = "#1e2321";
const papel = "#f2f4f1";
const trilha = "#7da168";
const brilho = "#9fe870";
const cinza = "#b2b2b2";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: grafite,
          backgroundImage:
            "linear-gradient(to right, rgba(242,244,241,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(242,244,241,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          fontFamily: "Grotesk",
          color: papel,
          padding: "64px 72px",
        }}
      >
        {/* Trilha */}
        <svg width="120" height="502" viewBox="0 0 100 1000" style={{ position: "absolute", left: 60, top: 128 }}>
          <path d="M50 0 C50 140 86 200 86 340 S14 580 14 720 S50 880 50 1000" fill="none" stroke={brilho} strokeWidth="6" />
        </svg>
        <div style={{ display: "flex", flexDirection: "column", marginLeft: 120, width: 960 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`data:image/png;base64,${logo}`} width={238} height={85} alt="" style={{ marginLeft: -96 }} />
          <div style={{ display: "flex", flexWrap: "wrap", fontSize: 76, lineHeight: 1.04, letterSpacing: -2.5, marginTop: 56 }}>
            <span>Seu negócio aparece, passa confiança e&nbsp;</span>
            <span style={{ color: trilha }}>
              <span style={{ fontFamily: "Mono", color: "#818280" }}>[</span>vende pelo WhatsApp
              <span style={{ fontFamily: "Mono", color: "#818280" }}>]</span>
            </span>
          </div>
          <div style={{ display: "flex", marginTop: 40, fontFamily: "Mono", fontSize: 26, color: cinza }}>
            sites e landing pages · orçamento sem compromisso
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Grotesk", data: grotesk, style: "normal", weight: 600 },
        { name: "Mono", data: mono, style: "normal", weight: 400 },
      ],
    },
  );
}
