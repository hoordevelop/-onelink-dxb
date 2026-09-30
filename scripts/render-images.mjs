import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const outDir = path.join(process.cwd(), "public", "images");
fs.mkdirSync(outDir, { recursive: true });

const bike = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1400" height="900" viewBox="0 0 1400 900">
  <defs>
    <linearGradient id="panel" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#163E60"/>
      <stop offset="1" stop-color="#07131E"/>
    </linearGradient>
    <linearGradient id="body" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#1A4A70"/>
      <stop offset="0.45" stop-color="#0B2032"/>
      <stop offset="1" stop-color="#050C14"/>
    </linearGradient>
    <radialGradient id="lamp" cx="35%" cy="35%" r="65%">
      <stop offset="0" stop-color="#FFFFFF"/>
      <stop offset="0.4" stop-color="#9FD4FF"/>
      <stop offset="1" stop-color="#007BFF" stop-opacity="0"/>
    </radialGradient>
    <g id="wheel">
      <circle r="108" fill="#05080D" stroke="#143044" stroke-width="18"/>
      <circle r="74" fill="none" stroke="#008CFF" stroke-width="2"/>
      <circle r="22" fill="#0A1824" stroke="#8EC8FF" stroke-width="2"/>
      <circle r="5" fill="#E7F4FF"/>
    </g>
  </defs>

  <use href="#wheel" x="310" y="640"/>
  <use href="#wheel" x="980" y="640"/>

  <path d="M210 620 A108 108 0 0 1 410 620" fill="none" stroke="#10283A" stroke-width="20" stroke-linecap="round"/>
  <path d="M880 620 A108 108 0 0 1 1080 620" fill="none" stroke="#10283A" stroke-width="20" stroke-linecap="round"/>

  <path d="M250 470
           H470
           C560 470 600 430 640 390
           H860
           C940 390 990 340 1020 290
           L1060 250
           L1100 268
           L1040 360
           C1000 430 960 470 900 500
           H620
           C540 530 470 560 400 590
           H250 Z" fill="url(#body)" stroke="#2174B4" stroke-width="2"/>

  <path d="M300 430
           C430 360 620 355 760 400
           L720 455
           H340 Z" fill="#08141E" stroke="#1A5278" stroke-width="2"/>

  <rect x="120" y="250" width="250" height="230" rx="6" fill="url(#panel)" stroke="#008CFF" stroke-width="2.5"/>
  <path d="M370 360 H430" stroke="#0B2032" stroke-width="18"/>
  <rect x="146" y="276" width="198" height="178" rx="3" fill="none" stroke="#1C5278" stroke-width="2"/>
  <path d="M146 365 H344" stroke="#1C5278" stroke-width="2"/>
  <path d="M245 276 V454" stroke="#1C5278" stroke-width="2"/>

  <path d="M430 500 H860" stroke="#008CFF" stroke-width="3" stroke-linecap="round" opacity="0.8"/>
  <path d="M900 470 L980 640" stroke="#0E2436" stroke-width="14" stroke-linecap="round"/>
  <path d="M860 490 L950 630" stroke="#0E2436" stroke-width="8" stroke-linecap="round"/>
  <path d="M310 640 L470 540" stroke="#0E2436" stroke-width="16" stroke-linecap="round"/>

  <path d="M1000 300 L1085 210" stroke="#10283C" stroke-width="12" stroke-linecap="round"/>
  <path d="M1055 230 H1160" stroke="#10283C" stroke-width="10" stroke-linecap="round"/>
  <path d="M1080 226 H1140" stroke="#8EC8FF" stroke-width="3" stroke-linecap="round"/>

  <circle cx="1088" cy="390" r="16" fill="url(#lamp)"/>
  <path d="M220 770 H1120" stroke="#007BFF" stroke-width="1.5" opacity="0.35"/>
</svg>`;

const car = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="860" viewBox="0 0 1600 860">
  <defs>
    <linearGradient id="paint" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#1B5278"/>
      <stop offset="0.28" stop-color="#0E2942"/>
      <stop offset="0.7" stop-color="#081420"/>
      <stop offset="1" stop-color="#04080E"/>
    </linearGradient>
    <linearGradient id="glass" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#8EC8FF" stop-opacity="0.35"/>
      <stop offset="0.45" stop-color="#0E3E68" stop-opacity="0.55"/>
      <stop offset="1" stop-color="#040C14" stop-opacity="0.95"/>
    </linearGradient>
    <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="6"/>
    </filter>
  </defs>

  <path fill="url(#paint)" stroke="#2A7CC0" stroke-width="3" fill-rule="evenodd" d="
    M120 560
    L210 560
    C250 560 280 500 340 420
    L430 310
    C490 240 580 200 690 200
    L1040 200
    C1140 200 1210 245 1270 330
    L1380 470
    C1415 520 1450 548 1510 558
    L1560 562
    L1560 630
    L120 630
    Z
    M430 640
    m-120 0
    a120 120 0 1 0 240 0
    a120 120 0 1 0 -240 0
    Z
    M1180 640
    m-120 0
    a120 120 0 1 0 240 0
    a120 120 0 1 0 -240 0
    Z"/>

  <path d="M500 300
           C560 235 650 214 760 214
           L1020 214
           C1095 214 1155 248 1200 310
           L1265 410
           L455 410
           Z" fill="url(#glass)" stroke="#9FD0FF" stroke-width="2"/>
  <path d="M820 218 V408" stroke="#9FD0FF" stroke-width="2" opacity="0.35"/>
  <path d="M545 300 Q780 255 1080 292" fill="none" stroke="#F3FAFF" stroke-width="2" opacity="0.35"/>

  <path d="M250 575 H470" stroke="#16344C" stroke-width="3"/>
  <path d="M620 590 H1040" stroke="#008CFF" stroke-width="4" stroke-linecap="round" opacity="0.9" filter="url(#glow)"/>
  <path d="M1320 575 H1488" stroke="#16344C" stroke-width="3"/>

  <path d="M210 600 H330" stroke="#9FD0FF" stroke-width="5" stroke-linecap="round" opacity="0.75"/>
  <path d="M1360 590 H1490" stroke="#7CC4FF" stroke-width="7" stroke-linecap="round"/>
  <circle cx="1425" cy="590" r="18" fill="#007BFF" opacity="0.35" filter="url(#glow)"/>

  <g>
    <circle cx="430" cy="640" r="108" fill="#05080D" stroke="#16344E" stroke-width="16"/>
    <circle cx="430" cy="640" r="72" fill="none" stroke="#008CFF" stroke-width="2.5"/>
    <circle cx="430" cy="640" r="24" fill="#0A1826" stroke="#8EC8FF" stroke-width="2"/>
  </g>
  <g>
    <circle cx="1180" cy="640" r="108" fill="#05080D" stroke="#16344E" stroke-width="16"/>
    <circle cx="1180" cy="640" r="72" fill="none" stroke="#008CFF" stroke-width="2.5"/>
    <circle cx="1180" cy="640" r="24" fill="#0A1826" stroke="#8EC8FF" stroke-width="2"/>
  </g>
  <path d="M140 760 H1500" stroke="#007BFF" stroke-width="2" opacity="0.28"/>
</svg>`;

function tower(x, w, h, windows = true) {
  const y = 680 - h;
  let markup = `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#071827" stroke="#12324A" stroke-width="2"/>`;
  if (!windows) return markup;
  const gapX = 16;
  const gapY = 22;
  const rowOffset = (x % 18);
  for (let yy = y + 12 + rowOffset; yy < 656; yy += gapY) {
    for (let xx = x + 8; xx < x + w - 8; xx += gapX) {
      const lit = (xx * 3 + yy * 7) % 5 !== 0;
      const hot = (xx + yy) % 11 === 0;
      const fill = hot ? "#D7EEFF" : "#5EAEF5";
      const opacity = lit ? (hot ? 0.95 : 0.42) : 0.08;
      markup += `<rect x="${xx}" y="${yy}" width="3.5" height="6" fill="${fill}" opacity="${opacity}"/>`;
    }
  }
  return markup;
}

const blocks = [
  [40, 92, 230],
  [148, 70, 310],
  [232, 120, 200],
  [368, 64, 390],
  [446, 108, 250],
  [570, 48, 280],
  [634, 96, 210],
  [1268, 88, 330],
  [1372, 62, 260],
  [1450, 130, 220],
  [1596, 74, 360],
  [1686, 120, 240],
];

let skylineShapes = blocks.map(([x, w, h]) => tower(x, w, h)).join("");

const burj = [
  [680, 590, 110],
  [590, 510, 84],
  [510, 420, 62],
  [420, 330, 44],
  [330, 240, 28],
  [240, 150, 16],
  [150, 58, 6],
]
  .map(([bottom, top, width]) => {
    const x = 980 - width / 2;
    const h = bottom - top;
    return `<rect x="${x}" y="${top}" width="${width}" height="${h}" fill="#0A2236" stroke="#1A4E74" stroke-width="1.5"/>`;
  })
  .join("");

const burjWindows = [
  [670, 520, 70],
  [520, 360, 40],
  [360, 200, 20],
]
  .map(([bottom, top, width]) => {
    let bits = "";
    const x0 = 980 - width / 2;
    for (let yy = top + 10; yy < bottom - 8; yy += 18) {
      for (let xx = x0 + 4; xx < x0 + width - 4; xx += 12) {
        bits += `<rect x="${xx}" y="${yy}" width="3" height="5" fill="#7CC4FF" opacity="0.55"/>`;
      }
    }
    return bits;
  })
  .join("");

const skyline = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="780" viewBox="0 0 1920 780">
  <defs>
    <linearGradient id="haze" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#020B14" stop-opacity="0"/>
      <stop offset="1" stop-color="#020B14" stop-opacity="0.55"/>
    </linearGradient>
    <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="8"/>
    </filter>
    <filter id="wide" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="18"/>
    </filter>
  </defs>
  <ellipse cx="960" cy="700" rx="780" ry="26" fill="#007BFF" opacity="0.2" filter="url(#wide)"/>
  ${skylineShapes}
  <path d="M1508 680 C1508 470 1536 330 1688 250 C1608 390 1572 530 1560 680 Z" fill="#071827" stroke="#12324A" stroke-width="2"/>
  <path d="M1568 640 C1572 500 1600 390 1660 320" fill="none" stroke="#5EAEF5" stroke-width="2" opacity="0.35"/>
  ${burj}
  ${burjWindows}
  <circle cx="980" cy="52" r="3" fill="#F4FBFF"/>
  <path d="M0 678 H1920" stroke="#008CFF" stroke-width="1.5" opacity="0.55"/>
  <rect y="620" width="1920" height="160" fill="url(#haze)"/>
</svg>`;

async function writePng(name, svg, width, height) {
  const file = path.join(outDir, name);
  await sharp(Buffer.from(svg)).resize(width, height).png().toFile(file);
  console.log("wrote", file);
}

await writePng("hero-bike.png", bike, 1400, 980);
await writePng("hero-car.png", car, 1600, 860);
await writePng("dubai-skyline.png", skyline, 1920, 780);
