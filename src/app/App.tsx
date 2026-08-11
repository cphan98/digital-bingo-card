import { useState, useRef, useEffect } from "react";
import magicWandImage from "../imports/GenerateNewCard/af03c8e7e08139d7be443b3d19eba32723da91d6.png";
import { motion } from "motion/react";
import { jsPDF } from "jspdf";
import svgPaths from "../imports/InteractiveMode/svg-5r48ucxh72";
import sparkleImage from "../imports/stars-1.png";
import starImage from "../imports/star.png";
import stampBackground from "../imports/Group14/a5d8baab0831cfa2757657bd88f21c281c592e58.png";
import checkmarkImage from "../imports/Group14/fbbaa6988c04316137f45b59292eef79b1052ec1.png";
import trashIcon from "../imports/ConfirmReset-3/61b75fdf868b1da311ee535cde3ac2897aed0d4e.png";
import medalImage from "../imports/CompletedCard/8362ac86e1d54d5cbce2a8f24381508d57275961.png";
import cheers1Image from "../imports/HappyNewYear/32babbf94dfe1f4a89a87957ee9cd1bab158913a.png";

type Mode = "interactive" | "editing";

const presetResolutions = [
  "Read 12 books",
  "Try 5 new workout classes",
  "Cancel 2 unused subscriptions",
  "Write a poem or short story",
  "Clean out email inbox",
  "Meditate for 10 mins daily",
  "Save $1,000 this year",
  "Send 5 handwritten letters",
  "Limit takeout to 1x a week",
  "Learn 50 words in a new lang",
  "Take the stairs for a month",
  "Organize the garage",
  "Unsubscribe from junk emails",
  "Drink 2L of water daily",
  "Do yoga twice a week",
  "Go on 12 dates this year",
  "Learn a new software tool",
  "30-day declutter challenge",
  "Cook at home 4x a week",
  "Take a solo day trip",
  "Build a birdhouse",
  "Bike 50 miles total",
  "Track all spending for a month",
  "Post on LinkedIn 5 times",
  "Swim 10 laps non-stop",
  "List 3 gratitudes daily",
  "Attend a live play",
  "Try pottery making",
  "Read a personal finance book",
  "Plant an indoor herb garden",
  "Find a career mentor",
  "Eat a vegetable daily",
  "Go vegan for a week",
  "Wash car once a month",
  "Volunteer 10 hours",
  "Host a dinner party",
  "Update your resume",
  "Walk 10,000 steps daily",
  "Have 10 no-spend days",
  "Do 5 random acts of kindness",
  "24-hour digital detox",
  "Watch a sunrise and sunset",
  "Bake a loaf of bread",
  "Write in a journal 30x",
  "Deep clean the oven",
  "Invest $500",
  "Try 10 new recipes",
  "Listen to 10 ed. podcasts",
  "Watch 5 TED talks",
  "Sleep 8 hours nightly",
  "Run a 5K race",
  "Clear phone storage by 5GB",
  "Read 5 industry articles",
  "Buy coffee for someone",
  "Delete 100 old contacts",
  "Use cash only for a week",
  "Make bed 30 days straight",
  "Paint 3 canvases",
  "Start an emergency fund",
  "Remember 5 birthdays",
  "Meal prep for 4 weeks",
  "Start a scrapbook",
  "Practice typing speed",
  "Join a local club",
  "Clean baseboards in 3 rooms",
  "Drink zero soda for a month",
  "Put away laundry same day",
  "Bring coffee from home 20x",
  "Check credit score monthly",
  "Try a brand new hobby",
  "Call a friend weekly",
  "Learn 3 songs on an instrument",
  "Stretch for 10 mins daily",
  "Compliment a stranger 5x",
  "Take an online course",
  "Hike 5 new trails",
  "Complete a coloring book",
  "Gym 3 times a week",
  "Eat 3 pieces of fruit daily",
  "No social media for a week",
  "Negotiate a bill down",
  "Code a simple website",
  "Take 100 distinct photos",
  "Pack lunch for work 20x",
  "Draw every day for a week",
  "Get a new certification",
  "Say 'no' to a major request",
  "Plan a family reunion",
  "Log meals for 30 days",
  "Organize the junk drawer",
  "Pay off $500 in debt",
  "Write an original song",
  "Do 10 pushups daily",
  "Ask for a raise or promo",
  "Max out retirement match",
  "Visit 3 museums",
  "Hold a 1-minute plank",
  "Finish a 1000-piece puzzle",
  "Clean out the fridge",
  "Create a monthly budget",
  "Attend a networking event",
  "Sell 10 unused items",
  "Knit a scarf",
  "Digitally back up photos",
  "Donate 5 bags of clothes",
];

function generateRandomCard(): string[] {
  const shuffled = [...presetResolutions].sort(() => Math.random() - 0.5);
  const picked = shuffled.slice(0, 24);
  const card = [...picked];
  card.splice(12, 0, "FREE");
  return card;
}

function SparkleIcon({ className, size = 22.75 }: { className?: string; size?: number }) {
  return (
    <img
      src={sparkleImage}
      alt="sparkle"
      className={className}
      style={{ width: size, height: size }}
    />
  );
}

function FlowerIcon() {
  return (
    <svg className="w-10 h-11 -scale-y-100 rotate-180" fill="none" preserveAspectRatio="none" viewBox="0 0 39 45">
      <g clipPath="url(#clip0_12_1313)">
        <path d={svgPaths.p3d40f580} fill="#F2B6A3" stroke="#F2B6A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.72917" />
        <path d={svgPaths.p258d9bf0} fill="#F2B6A3" stroke="#F2B6A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.72917" />
      </g>
      <defs>
        <clipPath id="clip0_12_1313">
          <rect fill="white" height="45" width="39" />
        </clipPath>
      </defs>
    </svg>
  );
}

function EditIcon({ size = 10 }: { size?: number }) {
  return (
    <svg style={{ width: size, height: size }} fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
      <g>
        <path d="M5 8.33333H8.75" stroke="#657652" strokeLinecap="round" strokeLinejoin="round" />
        <path d={svgPaths.p750e400} stroke="#657652" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

function ExportIcon({ color = "#657652", size = 10 }: { color?: string; size?: number }) {
  return (
    <svg style={{ width: size, height: size }} fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
      <g clipPath="url(#clip0_12_1324)">
        <path d={svgPaths.p1ab95b80} stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <path d={svgPaths.p1f22680} stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 1.25V6.25" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_12_1324">
          <rect fill="white" height="10" width="10" />
        </clipPath>
      </defs>
    </svg>
  );
}

function ImageIcon({ size = 10 }: { size?: number }) {
  const h = Math.round(size * 1.33);
  return (
    <div className="relative shrink-0" style={{ width: size, height: h }}>
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 16">
        <g>
          <rect x="1.5" y="1.5" width="9" height="13" rx="1" ry="1" stroke="#fefdf7" strokeWidth="0.987" />
          <circle cx="4.5" cy="5" r="1" stroke="#fefdf7" strokeWidth="0.987" />
          <polyline points="11 11 8 8 2 14" stroke="#fefdf7" strokeWidth="0.987" />
        </g>
      </svg>
    </div>
  );
}

function PdfIcon({ size = 10 }: { size?: number }) {
  const h = Math.round(size * 1.5);
  return (
    <div className="relative shrink-0" style={{ width: size, height: h }}>
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 18">
        <g>
          <path d="M7 1H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V5z" stroke="#fefdf7" strokeWidth="0.898" />
          <path d="M7 3.946V6.979H10" stroke="#fefdf7" strokeWidth="0.898" />
          <path d="M8 9.505H4" stroke="#fefdf7" strokeWidth="0.898" />
          <path d="M8 11.527H4" stroke="#fefdf7" strokeWidth="0.898" />
          <path d="M5 7.484H4.5H4" stroke="#fefdf7" strokeWidth="0.898" />
        </g>
      </svg>
    </div>
  );
}

function ConfettiCanvas({ active }: { active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!active) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = window.innerWidth;
    const H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    const COLORS = ["#F4D892", "#C0B05B", "#657652", "#F2B6A3", "#E89C73", "#E36559", "#E5E9EB", "#94BEBB", "#23617E"];
    const COUNT = 120;
    const DURATION = 6500;

    const drawStar = (c: CanvasRenderingContext2D, r: number) => {
      const inner = r * 0.45;
      c.beginPath();
      for (let i = 0; i < 10; i++) {
        const angle = (i * Math.PI) / 5 - Math.PI / 2;
        const rad = i % 2 === 0 ? r : inner;
        i === 0
          ? c.moveTo(Math.cos(angle) * rad, Math.sin(angle) * rad)
          : c.lineTo(Math.cos(angle) * rad, Math.sin(angle) * rad);
      }
      c.closePath();
      c.fill();
    };

    interface Particle {
      x: number; y: number;
      vx: number; vy: number;
      rotation: number; rotSpeed: number;
      color: string; w: number; h: number;
      shape: "rect" | "circle" | "star";
    }

    const particles: Particle[] = Array.from({ length: COUNT }, (_, i) => {
      const fromLeft = i < COUNT / 2;
      const spread = (Math.random() - 0.5) * (Math.PI / 3.6);
      const baseAngle = fromLeft
        ? -Math.PI / 2.8 + spread
        : Math.PI + Math.PI / 2.8 + spread;
      const speed = 3 + Math.random() * 6;
      const roll = Math.random();
      const shape: "rect" | "circle" | "star" = roll < 0.33 ? "circle" : roll < 0.6 ? "star" : "rect";
      return {
        x: fromLeft ? 0 : W,
        y: H * (0.4 + Math.random() * 0.3),
        vx: Math.cos(baseAngle) * speed,
        vy: Math.sin(baseAngle) * speed,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 7,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        w: 7 + Math.random() * 7,
        h: 3 + Math.random() * 4,
        shape,
      };
    });

    const start = performance.now();

    const animate = (now: number) => {
      ctx.clearRect(0, 0, W, H);
      const t = (now - start) / DURATION;

      let anyAlive = false;
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.07;
        p.vx *= 0.99;
        p.rotation += p.rotSpeed;

        const alpha = Math.max(0, 1 - Math.pow(t, 1.6));
        if (alpha <= 0) continue;
        anyAlive = true;

        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        if (p.shape === "circle") {
          ctx.beginPath();
          ctx.ellipse(0, 0, p.w / 2, p.w / 2, 0, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.shape === "star") {
          drawStar(ctx, p.w / 2);
        } else {
          ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        }
        ctx.restore();
      }

      if (anyAlive) rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 55 }}
    />
  );
}

function FireworksCanvas({ active }: { active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!active) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = window.innerWidth;
    const H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    const COLORS = ["#F4D892", "#C0B05B", "#657652", "#F2B6A3", "#E89C73", "#E36559", "#E5E9EB", "#94BEBB", "#23617E"];
    const DURATION = 7000;

    interface FWParticle {
      x: number; y: number;
      vx: number; vy: number;
      color: string; radius: number;
      born: number; maxLife: number;
      trail: Array<{ x: number; y: number }>;
    }

    const particles: FWParticle[] = [];

    const addBurst = (bx: number, by: number, delay: number) => {
      const count = 32 + Math.floor(Math.random() * 16);
      const baseColor = COLORS[Math.floor(Math.random() * COLORS.length)];
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2;
        const speed = 2.5 + Math.random() * 4;
        particles.push({
          x: bx, y: by,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          color: Math.random() < 0.4 ? COLORS[Math.floor(Math.random() * COLORS.length)] : baseColor,
          radius: 1.5 + Math.random() * 2,
          born: delay,
          maxLife: 1400 + Math.random() * 800,
          trail: [],
        });
      }
    };

    // Staggered bursts across the screen
    addBurst(W * 0.25, H * 0.25, 0);
    addBurst(W * 0.75, H * 0.2, 600);
    addBurst(W * 0.5, H * 0.15, 1200);
    addBurst(W * 0.2, H * 0.35, 1800);
    addBurst(W * 0.8, H * 0.3, 2400);
    addBurst(W * 0.5, H * 0.3, 3200);

    const start = performance.now();

    const animate = (now: number) => {
      ctx.clearRect(0, 0, W, H);
      const elapsed = now - start;
      const t = elapsed / DURATION;

      let anyAlive = false;
      for (const p of particles) {
        const age = elapsed - p.born;
        if (age < 0) { anyAlive = true; continue; }

        const life = age / p.maxLife;
        if (life > 1) continue;
        anyAlive = true;

        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.06;
        p.vx *= 0.98;

        // Trail
        p.trail.push({ x: p.x, y: p.y });
        if (p.trail.length > 5) p.trail.shift();

        const alpha = Math.max(0, 1 - life * 1.1);

        // Draw trail
        if (p.trail.length > 1) {
          ctx.save();
          ctx.strokeStyle = p.color;
          ctx.lineWidth = p.radius * 0.8;
          ctx.lineCap = "round";
          ctx.globalAlpha = alpha * 0.3;
          ctx.beginPath();
          ctx.moveTo(p.trail[0].x, p.trail[0].y);
          for (const pt of p.trail) ctx.lineTo(pt.x, pt.y);
          ctx.stroke();
          ctx.restore();
        }

        // Draw particle
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      if (anyAlive && t < 1.3) rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 54 }}
    />
  );
}

function CloseIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" stroke="#c0b05b" strokeWidth="1.67" strokeLinecap="round">
      <line x1="12" y1="4" x2="4" y2="12" />
      <line x1="4" y1="4" x2="12" y2="12" />
    </svg>
  );
}

function Stamp({ date, rotation, scale = 1 }: { date: string; rotation: number; scale?: number }) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 animate-stamp-bounce"
      style={{
        '--stamp-rotation': `${rotation}deg`,
        transform: `rotate(${rotation}deg)`
      } as React.CSSProperties}
    >
      <div className="opacity-90 relative w-[42px] h-[42px]" style={{ transform: scale !== 1 ? `scale(${scale})` : undefined }}>
        <div className="absolute left-0 top-0 w-[42px] h-[42px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={stampBackground} />
        </div>
        <div className="absolute left-[1.46px] top-[1.46px] w-[38.914px] h-[38.907px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.9136 38.9073">
            <defs>
              <path id="textArc" d="M 7 19 A 12 12 0 0 1 32 19" />
            </defs>
            <g>
              <path d="M33.2989 16.1177C33.798 18.1908 33.8251 20.3495 33.3782 22.4345C32.9313 24.5195 32.0217 26.4775 30.7168 28.1639C29.4118 29.8503 27.7447 31.2221 25.8385 32.1778C23.9324 33.1336 21.8359 33.6491 19.7039 33.6861C17.5719 33.7231 15.4588 33.2807 13.5207 32.3917C11.5825 31.5027 9.86878 30.1896 8.50605 28.5495C7.14331 26.9095 6.16636 24.9842 5.64733 22.916C5.1283 20.8478 5.08045 18.6894 5.50731 16.6002" stroke="#FEFDF7" strokeLinecap="round" strokeWidth="2" />
              <text fill="#FEFDF7" fontSize="5.5" fontFamily="Quicksand, sans-serif" fontWeight="700" letterSpacing="0.5">
                <textPath href="#textArc" startOffset="50%" textAnchor="middle">
                  {date}
                </textPath>
              </text>
            </g>
          </svg>
        </div>
        <div className="absolute left-[14.5px] top-[14.5px] w-[13px] h-[13px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={checkmarkImage} />
        </div>
      </div>
    </div>
  );
}

interface CompletedSquare {
  date: string;
  rotation: number;
}

const STORAGE_KEY_RESOLUTIONS = "bingo_resolutions";
const STORAGE_KEY_COMPLETED = "bingo_completed";
const STORAGE_KEY_YEAR = "bingo_year";
const STORAGE_KEY_MODAL_SEEN = "bingo_newyear_modal_seen";

function getCurrentYear() {
  return new Date().getFullYear();
}

function msUntilNewYear(): number {
  const now = new Date();
  const nextJan1 = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0, 0);
  return nextJan1.getTime() - now.getTime();
}

function getInitialAppState() {
  const currentYear = getCurrentYear();
  const storedYearStr = localStorage.getItem(STORAGE_KEY_YEAR);
  const storedYear = storedYearStr ? parseInt(storedYearStr) : null;

  const isSimulating = new URLSearchParams(window.location.search).get("simulate") === "newyear";
  const modalSeenYear = localStorage.getItem(STORAGE_KEY_MODAL_SEEN);
  const modalAlreadySeen = modalSeenYear === String(currentYear);
  const isNewYear = isSimulating || (!modalAlreadySeen && storedYear !== null && storedYear !== currentYear);

  const readResolutions = (): string[] | null => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_RESOLUTIONS);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length === 25) return parsed;
      }
    } catch {}
    return null;
  };

  const readCompleted = (): Map<number, CompletedSquare> => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_COMPLETED);
      if (raw) {
        const entries: [number, CompletedSquare][] = JSON.parse(raw);
        return new Map(entries);
      }
    } catch {}
    return new Map();
  };

  if (isNewYear && !isSimulating) {
    // Keep the old card in state so it's visible behind the popup
    const resolutions = readResolutions() ?? generateRandomCard();
    const completed = readCompleted();
    // Mark the modal as seen for this year immediately — prevents re-triggering on refresh
    try {
      localStorage.setItem(STORAGE_KEY_MODAL_SEEN, String(currentYear));
      localStorage.setItem(STORAGE_KEY_YEAR, String(currentYear));
    } catch {}
    return { resolutions, completed, showNewYearModal: true, currentYear };
  }

  if (isSimulating) {
    const resolutions = readResolutions() ?? generateRandomCard();
    const completed = readCompleted();
    return { resolutions, completed, showNewYearModal: true, currentYear };
  }

  // Normal load — year matches or first launch
  const stored = readResolutions();
  const resolutions = (storedYear === currentYear && stored) ? stored : generateRandomCard();
  const completed = storedYear === currentYear ? readCompleted() : new Map<number, CompletedSquare>();

  if (!stored || storedYear !== currentYear) {
    try {
      localStorage.setItem(STORAGE_KEY_RESOLUTIONS, JSON.stringify(resolutions));
      localStorage.setItem(STORAGE_KEY_YEAR, String(currentYear));
      if (storedYear !== currentYear) localStorage.removeItem(STORAGE_KEY_COMPLETED);
    } catch {}
  }

  return { resolutions, completed, showNewYearModal: false, currentYear };
}

export default function App() {
  const initRef = useRef<ReturnType<typeof getInitialAppState> | null>(null);
  if (!initRef.current) initRef.current = getInitialAppState();
  const init = initRef.current;

  useEffect(() => {
    let link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = sparkleImage;
  }, []);

  const rootRef = useRef<HTMLDivElement>(null);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const [isLandscape, setIsLandscape] = useState(false);
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      const w = entry.contentRect.width;
      const h = entry.contentRect.height;
      setIsTablet(w >= 600);
      setIsDesktop(w >= 800);
      setIsLandscape(w > h);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const [mode, setMode] = useState<Mode>("interactive");
  const [resolutions, setResolutions] = useState<string[]>(() => init.resolutions);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editValue, setEditValue] = useState("");
  const [completed, setCompleted] = useState<Map<number, CompletedSquare>>(() => init.completed);
  const [showExportModal, setShowExportModal] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [showIncompleteWarning, setShowIncompleteWarning] = useState(false);
  const [showCompletedCard, setShowCompletedCard] = useState(false);
  const [showGenerateConfirm, setShowGenerateConfirm] = useState(false);
  const [showLineComplete, setShowLineComplete] = useState(false);
  const [showChecklistPreview, setShowChecklistPreview] = useState(false);
  const [exportPreviewPage, setExportPreviewPage] = useState(1);
  const [currentYear, setCurrentYear] = useState(() => init.currentYear);
  const [showNewYearModal, setShowNewYearModal] = useState(() => init.showNewYearModal);


  // Show New Year popup automatically at midnight on January 1st.
  // Only arm the timer when within ~24 days of new year — setTimeout silently fires
  // immediately if the delay exceeds the browser max (~2.1 billion ms / ~24 days).
  useEffect(() => {
    const ms = msUntilNewYear();
    const MAX_SAFE_TIMEOUT = 2_000_000_000;
    if (ms > MAX_SAFE_TIMEOUT) return;
    const timer = setTimeout(() => {
      try { localStorage.removeItem(STORAGE_KEY_MODAL_SEEN); } catch {}
      setShowNewYearModal(true);
    }, ms);
    return () => clearTimeout(timer);
  }, [currentYear]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_RESOLUTIONS, JSON.stringify(resolutions));
    } catch {}
  }, [resolutions]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_COMPLETED, JSON.stringify([...completed.entries()]));
    } catch {}
  }, [completed]);

  const handleCellClick = (index: number) => {
    if (mode === "editing") {
      if (index === 12) return;
      setEditingIndex(index);
      setEditValue(resolutions[index]);
    } else {
      if (index === 12) return;
      toggleComplete(index);
    }
  };

  const handleSave = () => {
    if (editingIndex !== null) {
      const newResolutions = [...resolutions];
      newResolutions[editingIndex] = editValue;
      setResolutions(newResolutions);
      setEditingIndex(null);
    }
  };

  const BINGO_LINES = [
    [0,1,2,3,4],[5,6,7,8,9],[10,11,12,13,14],[15,16,17,18,19],[20,21,22,23,24],
    [0,5,10,15,20],[1,6,11,16,21],[2,7,12,17,22],[3,8,13,18,23],[4,9,14,19,24],
    [0,6,12,18,24],[4,8,12,16,20],
  ];
  const isLineComplete = (line: number[], map: Map<number, CompletedSquare>) =>
    line.every(i => i === 12 || map.has(i));

  const toggleComplete = (index: number) => {
    const newCompleted = new Map(completed);
    if (newCompleted.has(index)) {
      newCompleted.delete(index);
    } else {
      const now = new Date();
      const day = String(now.getDate()).padStart(2, '0');
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const year = String(now.getFullYear()).slice(-2);
      const dateString = `${day}/${month}/${year}`;
      const rotation = Math.random() * 30 - 15;
      newCompleted.set(index, { date: dateString, rotation });
      const nonCenter = [0,1,2,3,4,5,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,23,24];
      const allDone = nonCenter.every(i => newCompleted.has(i));
      if (allDone) {
        setShowCompletedCard(true);
      } else {
        const newLine = BINGO_LINES.some(
          line => isLineComplete(line, newCompleted) && !isLineComplete(line, completed)
        );
        if (newLine) setShowLineComplete(true);
      }
    }
    setCompleted(newCompleted);
  };

  const handleReset = () => {
    // Empty all squares (except center FREE square) and clear all completion stamps
    const emptyResolutions = resolutions.map((_, index) =>
      index === 12 ? "FREE" : ""
    );
    setResolutions(emptyResolutions);
    setCompleted(new Map());
  };

  const handleGenerate = () => {
    setResolutions(generateRandomCard());
    setCompleted(new Map());
    setShowGenerateConfirm(false);
    setMode("interactive");
  };

  const handleNewYearBegin = async () => {
    const oldYear = parseInt(localStorage.getItem(STORAGE_KEY_YEAR) ?? String(currentYear - 1));

    const dl = (c: HTMLCanvasElement, name: string) => {
      const a = document.createElement("a");
      a.download = name;
      a.href = c.toDataURL();
      a.click();
    };

    const cardCanvas = await generateCanvas();
    if (cardCanvas) {
      dl(cardCanvas, `resolution-bingo-${oldYear}-card.png`);
      generateChecklistCanvas().then(cl => setTimeout(() => dl(cl, `resolution-bingo-${oldYear}-checklist.png`), 300));
    } else {
      generateChecklistCanvas().then(cl => dl(cl, `resolution-bingo-${oldYear}-checklist.png`));
    }

    const newCard = generateRandomCard();
    const newYear = getCurrentYear();
    try {
      localStorage.setItem(STORAGE_KEY_RESOLUTIONS, JSON.stringify(newCard));
      localStorage.setItem(STORAGE_KEY_YEAR, String(newYear));
      localStorage.removeItem(STORAGE_KEY_COMPLETED);
    } catch {}
    setResolutions(newCard);
    setCompleted(new Map());
    setCurrentYear(newYear);
    setMode("interactive");
    setShowNewYearModal(false);
  };

  const hasEmptySquares = () => {
    // Check if any non-center square is empty
    return resolutions.some((resolution, index) => 
      index !== 12 && resolution.trim() === ""
    );
  };

  const handleShuffle = () => {
    const positions = [0,1,2,3,4,5,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,23,24];
    const values = positions.map(i => resolutions[i]);
    const stamps = positions.map(i => completed.get(i) ?? null);
    for (let i = values.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [values[i], values[j]] = [values[j], values[i]];
      [stamps[i], stamps[j]] = [stamps[j], stamps[i]];
    }
    const newResolutions = [...resolutions];
    const newCompleted = new Map<number, CompletedSquare>(
      completed.has(12) ? [[12, completed.get(12)!]] : []
    );
    positions.forEach((pos, i) => {
      newResolutions[pos] = values[i];
      if (stamps[i]) newCompleted.set(pos, stamps[i]);
    });
    setResolutions(newResolutions);
    setCompleted(newCompleted);
  };

  const handleSaveChanges = () => {
    if (hasEmptySquares()) {
      setShowIncompleteWarning(true);
    } else {
      toggleMode();
    }
  };

  const toggleMode = () => {
    setEditingIndex(null);
    setMode(mode === "interactive" ? "editing" : "interactive");
  };

  const generateCanvas = async (scale = 1): Promise<HTMLCanvasElement | null> => {
    return new Promise((resolve) => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        resolve(null);
        return;
      }

      canvas.width = 880 * scale;
      canvas.height = 1200 * scale;

      // Fill entire canvas before applying scale transform
      ctx.fillStyle = "#faf6f0";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Helper function to draw rounded rectangle
      const roundRect = (x: number, y: number, width: number, height: number, radius: number) => {
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
      };

      // Load all images
      const sparkleImg = new Image();
      sparkleImg.src = sparkleImage;

      const starImg = new Image();
      starImg.src = starImage;

      const stampBgImg = new Image();
      stampBgImg.src = stampBackground;

      const checkImg = new Image();
      checkImg.src = checkmarkImage;

      let imagesLoaded = 0;
      const totalImages = 4;
      const checkAllLoaded = () => {
        imagesLoaded++;
        if (imagesLoaded === totalImages) {
          drawCanvas();
        }
      };

      const drawCanvas = () => {
        ctx.scale(scale, scale);
        const CX = 440; // logical 1x center, unaffected by scale
        ctx.textAlign = "center";
        ctx.textBaseline = "alphabetic";

        // Year
        ctx.fillStyle = "#c0b05b";
        ctx.font = "700 36px Quicksand, sans-serif";
        ctx.fillText(String(getCurrentYear()), CX, 90);

        // "Bingo"
        ctx.fillStyle = "#e36559";
        ctx.font = "700 100px Caprasimo, serif";
        ctx.fillText("Bingo", CX, 210);

        // Sparkle icons flanking "Bingo" — vertically centered to Bingo, spaced outside text
        const sparkleSize = 40;
        const sparkleY = 154; // center at ~174 (210 - ~36 cap-height/2 = 174, minus 20)
        // Left sparkle — flipped horizontally
        ctx.save();
        ctx.translate(CX - 165, sparkleY);
        ctx.scale(-1, 1);
        ctx.drawImage(sparkleImg, 0, 0, sparkleSize, sparkleSize);
        ctx.restore();
        // Right sparkle — normal
        ctx.drawImage(sparkleImg, CX + 165, sparkleY, sparkleSize, sparkleSize);

        // Subtitle
        ctx.fillStyle = "#657652";
        ctx.font = "600 28px Quicksand, sans-serif";
        ctx.letterSpacing = "4px";
        ctx.fillText("RESOLUTIONS", CX, 272);
        ctx.letterSpacing = "0px";

        // Divider
        ctx.strokeStyle = "#e8dcc8";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(CX - 80, 292);
        ctx.lineTo(CX + 80, 292);
        ctx.stroke();

        // Grid settings
        const gridSize = 5;
        const cellSize = 140;
        const gapX = 8;
        const gapY = 8;
        const totalGridWidth = cellSize * gridSize + gapX * (gridSize - 1);
        const startX = (880 - totalGridWidth) / 2;
        const startY = 360;
        ctx.textBaseline = "middle";

        for (let row = 0; row < gridSize; row++) {
          for (let col = 0; col < gridSize; col++) {
            const index = row * gridSize + col;
            const x = startX + col * (cellSize + gapX);
            const y = startY + row * (cellSize + gapY);

            if (index === 12) {
              // Center star icon
              const starSize = 32.5 * 3; // Scale up for canvas resolution
              ctx.drawImage(starImg, x + cellSize / 2 - starSize / 2, y + cellSize / 2 - starSize / 2, starSize, starSize);
            } else {
              // Draw rounded rectangle
              roundRect(x, y, cellSize, cellSize, 6);
              ctx.fillStyle = "#fefdf7";
              ctx.fill();

              ctx.strokeStyle = "#f1e8d7";
              ctx.lineWidth = 2;
              ctx.stroke();

              // Draw text
              ctx.fillStyle = "#2b2b23";
              ctx.font = "600 16px Quicksand";
              ctx.textAlign = "center";
              ctx.textBaseline = "middle";

              const text = resolutions[index];
              const words = text.split(" ");
              const maxWidth = cellSize - 24;
              const lineHeight = 22;
              let lines: string[] = [];
              let currentLine = "";

              for (const word of words) {
                const testLine = currentLine + (currentLine ? " " : "") + word;
                const metrics = ctx.measureText(testLine);
                if (metrics.width > maxWidth && currentLine) {
                  lines.push(currentLine);
                  currentLine = word;
                } else {
                  currentLine = testLine;
                }
              }
              if (currentLine) {
                lines.push(currentLine);
              }

              const totalHeight = lines.length * lineHeight;
              let lineY = y + cellSize / 2 - totalHeight / 2 + lineHeight / 2;

              for (const line of lines) {
                ctx.fillText(line, x + cellSize / 2, lineY);
                lineY += lineHeight;
              }

              // Draw stamp if completed
              const completedData = completed.get(index);
              if (completedData) {
                ctx.save();
                ctx.globalAlpha = 0.9;

                const stampSize = 126; // 42px * 3 for scale
                const stampX = x + cellSize / 2;
                const stampY = y + cellSize / 2;

                ctx.translate(stampX, stampY);
                ctx.rotate((completedData.rotation * Math.PI) / 180);

                // Draw stamp background
                ctx.drawImage(stampBgImg, -stampSize / 2, -stampSize / 2, stampSize, stampSize);

                // Draw the arc path from Figma SVG (scaled up 3x from 42px design)
                // The path is positioned at (1.46px, 1.46px) with viewBox 38.9136x38.9073
                const scale = 3;
                const pathOffset = 1.46 * scale;
                ctx.strokeStyle = "#FEFDF7";
                ctx.lineCap = "round";

                // Create SVG path scaled and positioned correctly
                const path = new Path2D("M33.2989 16.1177C33.798 18.1908 33.8251 20.3495 33.3782 22.4345C32.9313 24.5195 32.0217 26.4775 30.7168 28.1639C29.4118 29.8503 27.7447 31.2221 25.8385 32.1778C23.9324 33.1336 21.8359 33.6491 19.7039 33.6861C17.5719 33.7231 15.4588 33.2807 13.5207 32.3917C11.5825 31.5027 9.86878 30.1896 8.50605 28.5495C7.14331 26.9095 6.16636 24.9842 5.64733 22.916C5.1283 20.8478 5.08045 18.6894 5.50731 16.6002");

                // Position the path correctly: offset from center by path position and scale
                ctx.save();
                ctx.translate(-stampSize / 2 + pathOffset, -stampSize / 2 + pathOffset);
                ctx.scale(scale, scale);
                ctx.lineWidth = 2; // Set lineWidth after scale to get proper thickness
                ctx.stroke(path);
                ctx.restore();

                // Draw arched text - position each character along the arc
                ctx.fillStyle = "#FEFDF7";
                ctx.font = "700 18.5px Quicksand"; // Increased from 16.5px for better visibility
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";

                const text = completedData.date;
                const arcRadius = 39; // Match the radius of the drawn circular line
                const arcStartAngle = Math.PI * 0.85; // Rotated more to the left for centering
                const arcEndAngle = Math.PI * 0.15; // Rotated more to the left for centering
                const totalAngle = arcStartAngle - arcEndAngle;
                const angleStep = totalAngle / (text.length - 1); // Increased spacing to fit within the arc ends

                for (let i = 0; i < completedData.date.length; i++) {
                  const angle = arcStartAngle - (i * angleStep);
                  const charX = Math.cos(angle) * arcRadius;
                  const charY = -Math.sin(angle) * arcRadius; // Aligned with the circular line

                  ctx.save();
                  ctx.translate(charX, charY);
                  ctx.rotate(-angle + Math.PI / 2);
                  ctx.fillText(completedData.date[i], 0, 0);
                  ctx.restore();
                }

                // Draw checkmark at exact position from Figma
                const checkSize = 39; // 13px * 3
                const checkOffsetX = 0; // Centered
                const checkOffsetY = 0;
                ctx.drawImage(checkImg, checkOffsetX - checkSize / 2, checkOffsetY - checkSize / 2, checkSize, checkSize);

                ctx.restore();
              }
            }
          }
        }

        resolve(canvas);
      };

      sparkleImg.onload = checkAllLoaded;
      starImg.onload = checkAllLoaded;
      stampBgImg.onload = checkAllLoaded;
      checkImg.onload = checkAllLoaded;

      sparkleImg.onerror = () => {
        resolve(null);
      };
      starImg.onerror = () => {
        resolve(null);
      };
      stampBgImg.onerror = () => {
        resolve(null);
      };
      checkImg.onerror = () => {
        resolve(null);
      };
    });
  };

  const generateChecklistCanvas = (scale = 1): Promise<HTMLCanvasElement> => {
    return new Promise((resolve) => {
    const W = 880, H = 1200;
    const canvas = document.createElement("canvas");
    canvas.width = W * scale;
    canvas.height = H * scale;
    const ctx = canvas.getContext("2d")!;

    const sparkleImg = new Image();
    sparkleImg.src = sparkleImage;
    sparkleImg.onload = () => draw();
    sparkleImg.onerror = () => draw();

    const draw = () => {
    ctx.scale(scale, scale);
    // Background
    ctx.fillStyle = "#faf6f0";
    ctx.fillRect(0, 0, W, H);

    // Header
    const CX = W / 2;
    ctx.textAlign = "center";
    ctx.textBaseline = "alphabetic";
    ctx.fillStyle = "#c0b05b";
    ctx.font = "700 36px Quicksand, sans-serif";
    ctx.fillText(String(currentYear), CX, 90);

    // "Bingo"
    ctx.fillStyle = "#e36559";
    ctx.font = "700 100px Caprasimo, serif";
    ctx.fillText("Bingo", CX, 210);

    // Sparkle icons flanking "Bingo" — same positioning as bingo card canvas
    const sparkleSize = 40;
    const sparkleY = 154;
    ctx.save();
    ctx.translate(CX - 165, sparkleY);
    ctx.scale(-1, 1);
    ctx.drawImage(sparkleImg, 0, 0, sparkleSize, sparkleSize);
    ctx.restore();
    ctx.drawImage(sparkleImg, CX + 165, sparkleY, sparkleSize, sparkleSize);

    ctx.fillStyle = "#657652";
    ctx.font = "600 28px Quicksand, sans-serif";
    ctx.letterSpacing = "4px";
    ctx.fillText("RESOLUTION CHECKLIST", CX, 272);
    ctx.letterSpacing = "0px";

    // Divider
    ctx.strokeStyle = "#e8dcc8";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(CX - 80, 292);
    ctx.lineTo(CX + 80, 292);
    ctx.stroke();

    // Progress section
    const items = [0,1,2,3,4,5,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,23,24];
    const doneCount = items.filter(i => completed.has(i)).length;
    const pct = Math.round((doneCount / 24) * 100);

    const progX = 60, progY = 370, progW = W - 120;

    ctx.textAlign = "left";
    ctx.fillStyle = "#2b2b23";
    ctx.font = "600 30px Quicksand, sans-serif";
    ctx.fillText("Progress", progX, progY);

    // Draw "/ 24" first to measure its width, then draw the count to its left
    ctx.textAlign = "right";
    ctx.fillStyle = "#94bebb";
    ctx.font = "600 28px Quicksand, sans-serif";
    const slash24 = " / 24";
    const slash24W = ctx.measureText(slash24).width;
    ctx.fillText(slash24, progX + progW, progY);
    ctx.fillStyle = "#657652";
    ctx.font = "700 36px Quicksand, sans-serif";
    ctx.fillText(`${doneCount}`, progX + progW - slash24W, progY);

    // Progress bar
    const barY = progY + 18;
    ctx.fillStyle = "#ede5d8";
    ctx.beginPath();
    ctx.roundRect(progX, barY, progW, 14, 7);
    ctx.fill();
    if (pct > 0) {
      ctx.fillStyle = "#657652";
      ctx.beginPath();
      ctx.roundRect(progX, barY, progW * (pct / 100), 14, 7);
      ctx.fill();
    }
    ctx.textAlign = "right";
    ctx.fillStyle = "#94bebb";
    ctx.font = "500 24px Quicksand, sans-serif";
    ctx.fillText(`${pct}% complete`, progX + progW, barY + 52);

    // Checklist — 3 columns
    const listTop = barY + 100;
    const cols = 3;
    const colW = (W - 120) / cols;
    const rowH = 80;
    const checkSize = 24;

    ctx.textAlign = "left";
    items.forEach((idx, n) => {
      const col = n % cols;
      const row = Math.floor(n / cols);
      const x = 60 + col * colW;
      const y = listTop + row * rowH;
      const isDone = completed.has(idx);
      const stamp = completed.get(idx);

      // Checkbox — vertically centered in row
      const cbX = x + 4, cbY = y + (rowH - checkSize) / 2;
      ctx.strokeStyle = isDone ? "#657652" : "#c0b05b";
      ctx.fillStyle = isDone ? "#657652" : "transparent";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(cbX, cbY, checkSize, checkSize, 4);
      if (isDone) { ctx.fill(); } else { ctx.stroke(); }

      if (isDone) {
        ctx.strokeStyle = "#fefdf7";
        ctx.lineWidth = 2.5;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.beginPath();
        ctx.moveTo(cbX + 5, cbY + checkSize / 2);
        ctx.lineTo(cbX + checkSize / 2 - 2, cbY + checkSize - 6);
        ctx.lineTo(cbX + checkSize - 4, cbY + 5);
        ctx.stroke();
      }

      // Text
      const textX = cbX + checkSize + 10;
      ctx.fillStyle = isDone ? "#657652" : "#2b2b23";
      ctx.font = `600 19px Quicksand, sans-serif`;
      const maxW = colW - checkSize - 28;
      const words = resolutions[idx].split(" ");
      let line = "";
      // baseline aligned to checkbox vertical center (cbY + checkSize/2 + ~7 for cap-height offset)
      let lineY = cbY + checkSize / 2 + 7;
      for (const word of words) {
        const test = line ? line + " " + word : word;
        if (ctx.measureText(test).width > maxW && line) {
          ctx.fillText(line, textX, lineY);
          line = word;
          lineY += 22;
        } else {
          line = test;
        }
      }
      ctx.fillText(line, textX, lineY);

      if (stamp) {
        ctx.fillStyle = "#94bebb";
        ctx.font = "500 17px Quicksand, sans-serif";
        ctx.fillText(stamp.date, textX, lineY + 20);
      }
    });

    resolve(canvas);
    }; // end draw
    }); // end Promise
  };

  const handleExportImage = async () => {
    const canvas = await generateCanvas();
    if (!canvas) return;

    const year = getCurrentYear();
    const dl = (c: HTMLCanvasElement, name: string) => {
      const a = document.createElement("a");
      a.download = name;
      a.href = c.toDataURL();
      a.click();
    };
    dl(canvas, `resolution-bingo-${year}-card.png`);
    generateChecklistCanvas().then(cl => setTimeout(() => dl(cl, `resolution-bingo-${year}-checklist.png`), 300));
    setShowExportModal(false);
  };

  const handleExportPDF = async () => {
    const canvas = await generateCanvas(2);
    if (!canvas) return;

    const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
    const pdfW = pdf.internal.pageSize.getWidth();
    const pdfH = pdf.internal.pageSize.getHeight();

    const addCanvasToPdf = (c: HTMLCanvasElement) => {
      pdf.setFillColor(250, 246, 240);
      pdf.rect(0, 0, pdfW, pdfH, "F");
      const ratio = c.width / c.height;
      const pdfRatio = pdfW / pdfH;
      let iW: number, iH: number, xOff: number, yOff: number;
      if (ratio > pdfRatio) {
        iW = pdfW * 0.9; iH = iW / ratio;
        xOff = pdfW * 0.05; yOff = (pdfH - iH) / 2;
      } else {
        iH = pdfH * 0.9; iW = iH * ratio;
        xOff = (pdfW - iW) / 2; yOff = pdfH * 0.05;
      }
      pdf.addImage(c.toDataURL("image/png"), "PNG", xOff, yOff, iW, iH);
    };

    addCanvasToPdf(canvas);
    pdf.addPage();
    const clCanvas = await generateChecklistCanvas(2);
    addCanvasToPdf(clCanvas);
    pdf.save(`resolution-bingo-${getCurrentYear()}.pdf`);
    setShowExportModal(false);
  };

  const isTabletPortrait = isTablet && !isLandscape;

  // Responsive icon sizes
  const icoBtn   = isDesktop ? 14 : isTablet ? 12 : 10;
  const icoClose = isDesktop ? 20 : isTablet ? 18 : 16;
  // Responsive modal sizing helpers
  const mFontSm  = isDesktop ? "14px" : isTabletPortrait ? "16px" : isTablet ? "12px" : "10px";
  const mFontMd  = isDesktop ? "16px" : isTabletPortrait ? "18px" : isTablet ? "14px" : "12px";
  const mFontLg  = isDesktop ? "20px" : isTabletPortrait ? "22px" : isTablet ? "18px" : "16px";
  const mMaxW    = isDesktop ? "320px" : isTabletPortrait ? "360px" : isTablet ? "280px" : "248px";
  const mIconSz  = isDesktop ? "90px"  : isTabletPortrait ? "100px" : isTablet ? "80px"  : "70px";
  const mPadding = isDesktop ? "32px"  : isTablet ? "28px"  : "24px";

  return (
    <>
    <div ref={rootRef} className="bg-[#faf6f0] max-w-[100vw] flex flex-col items-center"
      style={{ height: "100dvh", overflowY: isTablet ? "auto" : "hidden", paddingTop: isTabletPortrait ? "20px" : isTablet ? "59px" : "16px", paddingBottom: "20px", paddingLeft: "clamp(16px, calc(5vw - 2.75px), 64px)", paddingRight: "clamp(16px, calc(5vw - 2.75px), 64px)" }}>
      <div className="w-full flex flex-col"
        style={{ maxWidth: isDesktop ? "560px" : isLandscape ? "380px" : "100%", height: isTabletPortrait ? "calc(100dvh - 40px)" : isTablet ? "calc(100dvh - 79px)" : "calc(100dvh - 36px)" }}>
        {/* Header */}
        <div className="flex flex-col gap-1" style={{ marginBottom: isTablet ? "12px" : "6px" }}>
          <div className="flex flex-col items-center">
            <p className="font-['Quicksand'] font-bold text-[#c0b05b] mb-[-8px]" style={{ fontSize: isDesktop ? "20px" : isTabletPortrait ? "22px" : isTablet ? "18px" : "16px", lineHeight: "26px" }}>{currentYear}</p>
            <div className="flex gap-2 items-center justify-center">
              <div className="-scale-y-100 rotate-180">
                <SparkleIcon size={isDesktop ? 32 : isTablet ? 27 : 22.75} />
              </div>
              <h1 className="font-['Caprasimo'] text-[#e36559]" style={{ fontSize: isDesktop ? "49px" : isTablet ? "47px" : "45px", lineHeight: "60px" }}>Bingo</h1>
              <SparkleIcon size={isDesktop ? 32 : isTablet ? 27 : 22.75} />
            </div>
          </div>
          <p className={`font-['Quicksand'] font-semibold text-center ${mode === "editing" ? "text-[#23617e]" : "text-[#657652]"}`} style={{ fontSize: isDesktop ? "16px" : isTabletPortrait ? "18px" : isTablet ? "14px" : "13px", lineHeight: "18px" }}>
            {mode === "editing"
              ? "Click any square to edit your goals"
              : "Click squares to mark them complete"}
          </p>
        </div>

        {/* Grid — centered in the remaining space between header and footer */}
        <div className="flex-1 flex items-center">
          <div className="r-grid grid grid-cols-5 gap-[6px] w-full">
            {resolutions.map((resolution, index) => {
              const isCenter = index === 12;
              const completedData = completed.get(index);

              return (
                <div
                  key={index}
                  className={`r-cell aspect-square rounded-[4px] border border-[#f1e8d7] flex items-center justify-center p-[5px] relative ${
                    isCenter ? "bg-transparent border-none" : "bg-[#fefdf7] cursor-pointer"
                  }`}
                  onClick={() => handleCellClick(index)}
                >
                  {isCenter ? (
                    <img src={starImage} alt="star" className="h-auto" style={{ width: isDesktop ? "68%" : isTablet ? "62%" : "55%" }} />
                  ) : (
                    <>
                      <p className="font-['Quicksand'] font-semibold text-[#2b2b23] text-center" style={{ fontSize: isDesktop ? "13px" : isTabletPortrait ? "15px" : isTablet ? "11px" : "10px", lineHeight: isDesktop ? "15px" : isTabletPortrait ? "17px" : isTablet ? "13px" : "12px" }}>
                        {resolution}
                      </p>
                      {mode === "editing" && (
                        <div className="r-edit-badge absolute top-[4px] right-[4px] pointer-events-none" style={{ width: isDesktop ? "14px" : isTablet ? "11px" : "7px", height: isDesktop ? "14px" : isTablet ? "11px" : "7px" }}>
                          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                            <g clipPath="url(#editClip)">
                              <path d="M3 5H5.25" stroke="#94BEBB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                              <path d="M4.094 0.9055C4.19352 0.805977 4.32851 0.750066 4.46925 0.750066C4.61 0.750066 4.74498 0.805977 4.8445 0.9055C4.94402 1.00502 4.99993 1.14 4.99993 1.28075C4.99993 1.4215 4.94402 1.55648 4.8445 1.656L1.842 4.65875C1.78252 4.71822 1.70901 4.76173 1.62825 4.78525L0.91025 4.99475C0.888738 5.00103 0.865935 5.0014 0.844228 4.99584C0.82252 4.99028 0.802707 4.97898 0.786862 4.96314C0.771017 4.94729 0.759722 4.92748 0.754161 4.90577C0.7486 4.88407 0.748976 4.86126 0.75525 4.83975L0.96475 4.12175C0.988305 4.04108 1.03181 3.96766 1.09125 3.90825L4.094 0.9055Z" stroke="#94BEBB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                            </g>
                            <defs>
                              <clipPath id="editClip"><rect fill="white" height="6" width="6" /></clipPath>
                            </defs>
                          </svg>
                        </div>
                      )}
                      {completedData && mode === "interactive" && (
                        <Stamp date={completedData.date} rotation={completedData.rotation} scale={isDesktop ? 2.1 : isTabletPortrait ? 2.4 : isTablet ? 1.3 : 1.40} />
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>{/* end centering wrapper */}

        {/* Buttons */}
        <div className="w-full" style={{ paddingTop: isTablet ? "12px" : "6px" }}>
          <div className="relative w-full">
            {/* Interactive mode — defines zone height */}
            <div
              className="r-btn-row flex flex-col gap-3"
              style={{ visibility: mode === "interactive" ? "visible" : "hidden", pointerEvents: mode === "interactive" ? "auto" : "none", flexDirection: isDesktop ? "row" : "column", gap: isDesktop ? "20px" : "12px" }}
            >
              <button
                onClick={toggleMode}
                className="r-btn w-full border border-[#f1e8d7] rounded-full px-[14px] py-[6px] flex items-center justify-center gap-1"
              >
                <EditIcon size={icoBtn} />
                <span className="font-['Quicksand'] font-semibold text-[#657652]" style={{ fontSize: isDesktop ? "16px" : isTabletPortrait ? "18px" : isTablet ? "14px" : "13px", lineHeight: "18px" }}>Edit</span>
              </button>
              <button
                onClick={() => { setShowExportModal(true); setExportPreviewPage(1); }}
                className="r-btn w-full bg-[#657652] rounded-full px-[14px] py-[6px] flex items-center justify-center gap-1 hover:bg-[#576447] transition-colors"
              >
                <ExportIcon color="#faf6f0" size={icoBtn} />
                <span className="font-['Quicksand'] font-semibold text-[#faf6f0]" style={{ fontSize: isDesktop ? "16px" : isTabletPortrait ? "18px" : isTablet ? "14px" : "13px", lineHeight: "18px" }}>Share</span>
              </button>
            </div>
            {/* Edit mode — absolutely overlaid on the same zone */}
            <div
              className="r-btn-row absolute inset-0 flex flex-col gap-3"
              style={{ visibility: mode === "editing" ? "visible" : "hidden", pointerEvents: mode === "editing" ? "auto" : "none", flexDirection: isDesktop ? "row" : "column", gap: isDesktop ? "20px" : "12px" }}
            >
              <button
                onClick={handleShuffle}
                className="r-btn w-full border border-[#f1e8d7] rounded-full px-[14px] py-[6px] flex items-center justify-center gap-1 hover:bg-[#f7f3ec] transition-colors"
              >
                <svg className="shrink-0" style={{ width: icoBtn, height: icoBtn }} viewBox="0 0 10 10" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.9">
                  <path d="M1 7 C4 7 6 3 9 3" stroke="#657652" />
                  <path d="M8 2 L9 3 L8 4" stroke="#657652" />
                  <path d="M1 3 C4 3 6 7 9 7" stroke="#657652" />
                  <path d="M8 6 L9 7 L8 8" stroke="#657652" />
                </svg>
                <span className="font-['Quicksand'] font-semibold text-[#657652]" style={{ fontSize: isDesktop ? "16px" : isTabletPortrait ? "18px" : isTablet ? "14px" : "13px", lineHeight: "18px" }}>Shuffle</span>
              </button>
              <button
                onClick={handleSaveChanges}
                className="r-btn w-full bg-[#657652] rounded-full px-[14px] py-[6px] flex items-center justify-center gap-1 hover:bg-[#576447] transition-colors"
              >
                <svg className="shrink-0" style={{ width: icoBtn, height: icoBtn }} viewBox="0 0 10 10" fill="none">
                  <path d="M8.5 9H1.5C1.22 9 1 8.78 1 8.5V1.5C1 1.22 1.22 1 1.5 1H7L9 3V8.5C9 8.78 8.78 9 8.5 9Z" stroke="#fefdf7" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="3" y="1" width="4" height="2.5" rx="0.3" stroke="#fefdf7" strokeWidth="0.9"/>
                  <rect x="2" y="5.5" width="6" height="3.5" rx="0.3" stroke="#fefdf7" strokeWidth="0.9"/>
                </svg>
                <span className="font-['Quicksand'] font-semibold text-[#fefdf7]" style={{ fontSize: isDesktop ? "16px" : isTabletPortrait ? "18px" : isTablet ? "14px" : "13px", lineHeight: "18px" }}>Save changes</span>
              </button>
            </div>
          </div>
          {/* Secondary row — hidden in interactive mode to hold space */}
          <div className="flex items-center" style={{ marginTop: isTablet ? "16px" : "8px", paddingBottom: isTabletPortrait ? "28px" : isTablet ? "12px" : "0px", visibility: mode === "editing" ? "visible" : "hidden", justifyContent: isDesktop ? "space-between" : "center", gap: isDesktop ? "20px" : "12px" }}>
            <button
              onClick={() => setShowResetConfirm(true)}
              className="rounded-full px-[14px] py-[6px]"
              style={{ pointerEvents: mode === "editing" ? "auto" : "none", flex: isDesktop ? "1" : undefined, textAlign: isDesktop ? "center" : undefined }}
            >
              <span className="font-['Quicksand'] font-semibold text-[#e36559]" style={{ fontSize: isDesktop ? "16px" : isTabletPortrait ? "18px" : isTablet ? "14px" : "13px", lineHeight: "18px" }}>Reset card</span>
            </button>
            {!isDesktop && <span className="font-['Quicksand'] text-[12px] leading-[18px] text-[#f1e8d7] select-none">|</span>}
            <button
              onClick={() => setShowGenerateConfirm(true)}
              className="rounded-full px-[14px] py-[6px]"
              style={{ pointerEvents: mode === "editing" ? "auto" : "none", flex: isDesktop ? "1" : undefined, textAlign: isDesktop ? "center" : undefined }}
            >
              <span className="font-['Quicksand'] font-semibold text-[#23617e]" style={{ fontSize: isDesktop ? "16px" : isTabletPortrait ? "18px" : isTablet ? "14px" : "13px", lineHeight: "18px" }}>New card</span>
            </button>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {editingIndex !== null && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setEditingIndex(null)}
        >
          <motion.div
            className="bg-white rounded-[14px] w-full relative"
            style={{ padding: mPadding, maxWidth: mMaxW }}
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.88, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 380, damping: 20, mass: 0.7 }}
          >
            <button
              onClick={() => setEditingIndex(null)}
              className="absolute top-[13px] right-[13px] text-[#c0b05b] hover:opacity-70 transition-opacity w-4 h-4"
            >
              <CloseIcon size={icoClose} />
            </button>

            <h2 className="font-['Quicksand'] font-bold text-[#2b2b23] text-center mb-[16px]" style={{ fontSize: mFontLg, lineHeight: "26px" }}>Edit Resolution</h2>

            <div className="flex flex-col gap-[5px] items-end mb-[16px]">
              <textarea
                value={editValue}
                onChange={(e) => setEditValue(e.target.value.slice(0, 50))}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSave();
                  } else if (e.key === "Escape") {
                    setEditingIndex(null);
                  }
                }}
                autoFocus
                className="w-full h-[120px] px-[16px] py-[12px] font-['Quicksand'] font-medium text-[#2b2b23] border-[1.5px] border-[#f1e8d7] rounded-[10px] focus:border-[#657652] focus:outline-none resize-none"
                style={{ fontSize: mFontLg, lineHeight: "26px" }}
                placeholder="Enter your resolution..."
              />
              <span className="font-['Quicksand'] font-semibold text-[#94bebb]" style={{ fontSize: mFontSm, lineHeight: "18px" }}>
                {editValue.length}/50 characters
              </span>
            </div>

            <div className="flex items-center justify-between">
              <button
                onClick={() => setEditingIndex(null)}
                className="px-[14px] py-[6px] font-['Quicksand'] font-semibold text-[#c0b05b]"
                style={{ fontSize: mFontMd, lineHeight: "20px" }}
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-[#657652] rounded-full px-[14px] py-[6px] flex items-center gap-1 hover:bg-[#576447] transition-colors"
              >
                <svg className="size-[11px] shrink-0" viewBox="0 0 11 11" fill="none">
                  <path d="M1.5 5.5L4.5 8.5L9.5 2.5" stroke="#fefdf7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="font-['Quicksand'] font-semibold text-[#fefdf7]" style={{ fontSize: mFontMd, lineHeight: "20px" }}>Done</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Export Modal */}
      {showExportModal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setShowExportModal(false)}
        >
          <motion.div
            className="bg-white rounded-[14px] w-full relative"
            style={{ padding: mPadding, maxWidth: isDesktop ? "360px" : isTablet ? "320px" : "280px" }}
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.88, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 380, damping: 20, mass: 0.7 }}
          >
            <button
              onClick={() => setShowExportModal(false)}
              className="absolute top-[13px] right-[13px] text-[#c0b05b] hover:text-[#2b2b23] transition-colors"
            >
              <CloseIcon size={icoClose} />
            </button>
            <div className="mb-5">
              <h2 className="text-[#2b2b23] text-center font-['Quicksand'] font-bold" style={{ fontSize: mFontLg, lineHeight: "26px" }}>Share Bingo Card</h2>
            </div>

            {/* Preview slideshow */}
            <div className="mb-5">
              {/* Swipeable stage — pages float inside at correct aspect ratio */}
              <div
                className="relative overflow-hidden h-[310px] select-none cursor-grab active:cursor-grabbing bg-[#faf6f0]"
                onTouchStart={(e) => { (e.currentTarget as HTMLDivElement).dataset.sx = String(e.touches[0].clientX); }}
                onTouchEnd={(e) => {
                  const dx = e.changedTouches[0].clientX - parseFloat((e.currentTarget as HTMLDivElement).dataset.sx ?? "0");
                  if (dx < -30) setExportPreviewPage(p => Math.min(2, p + 1));
                  if (dx >  30) setExportPreviewPage(p => Math.max(1, p - 1));
                }}
                onMouseDown={(e) => { (e.currentTarget as HTMLDivElement).dataset.sx = String(e.clientX); }}
                onMouseUp={(e) => {
                  const dx = e.clientX - parseFloat((e.currentTarget as HTMLDivElement).dataset.sx ?? "0");
                  if (dx < -30) setExportPreviewPage(p => Math.min(2, p + 1));
                  if (dx >  30) setExportPreviewPage(p => Math.max(1, p - 1));
                }}
              >
                  {/* Page 1 — bingo card */}
                  <div
                    className="absolute top-0 h-[310px] w-[227px] bg-[#faf6f0] p-4 flex flex-col items-center justify-center gap-[10px] transition-transform duration-300 ease-in-out overflow-hidden"
                    style={{ left: "50%", transform: exportPreviewPage === 1 ? "translateX(-50%)" : "translateX(calc(-50% - 200%))" }}
                  >
                    <div className="h-[54px] relative shrink-0 w-[117.906px]">
                      <p className="absolute font-['Quicksand'] font-bold leading-[18px] left-[45.11px] top-0 text-[#c0b05b] text-[12px] whitespace-nowrap">{currentYear}</p>
                      <div className="absolute flex gap-[6px] h-[40px] items-center justify-center left-0 top-[14px] w-[117.906px]">
                        <img src={sparkleImage} alt="sparkle" className="w-[12px] h-[12px] shrink-0 -scale-y-100 rotate-180" />
                        <h3 className="text-[28px] leading-[40px] text-[#e36559] font-['Caprasimo'] shrink-0">Bingo</h3>
                        <img src={sparkleImage} alt="sparkle" className="w-[12px] h-[12px] shrink-0" />
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-[4px]">
                      <p className="font-['Quicksand'] font-semibold text-[6px] leading-[10px] tracking-[0.1em] uppercase text-[#657652]">Resolutions</p>
                      <div className="w-8 h-px bg-[#e8dcc8]" />
                    </div>
                    <div className="inline-grid grid-cols-[repeat(5,minmax(0,1fr))] gap-x-[5px] gap-y-[5px]" style={{ width: 180 }}>
                      {resolutions.map((resolution, index) => {
                        const isCenter = index === 12;
                        const completedData = completed.get(index);
                        return (
                          <div key={index} className={`size-[32px] rounded-[3px] relative ${isCenter ? "" : "bg-[#fefdf7]"}`}>
                            {isCenter ? (
                              <div className="flex items-center justify-center p-[3px] size-full">
                                <img src={starImage} alt="star" className="size-[22px]" />
                              </div>
                            ) : (
                              <>
                                <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[3px]" />
                                <div className="flex items-center justify-center size-full p-[4px]">
                                  <p className="font-['Quicksand'] font-semibold leading-[5.5px] text-[#2b2b23] text-[4.5px] text-center w-full overflow-hidden">{resolution}</p>
                                </div>
                                {completedData && (
                                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ transform: `rotate(${completedData.rotation}deg)` }}>
                                    <div className="opacity-90 relative w-[32px] h-[32px]">
                                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={stampBackground} />
                                      <div className="absolute left-[1.11px] top-[1.11px] w-[29.63px] h-[29.62px]">
                                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.9136 38.9073">
                                          <defs><path id="textArcP1" d="M 7 19 A 12 12 0 0 1 32 19" /></defs>
                                          <path d="M33.2989 16.1177C33.798 18.1908 33.8251 20.3495 33.3782 22.4345C32.9313 24.5195 32.0217 26.4775 30.7168 28.1639C29.4118 29.8503 27.7447 31.2221 25.8385 32.1778C23.9324 33.1336 21.8359 33.6491 19.7039 33.6861C17.5719 33.7231 15.4588 33.2807 13.5207 32.3917C11.5825 31.5027 9.86878 30.1896 8.50605 28.5495C7.14331 26.9095 6.16636 24.9842 5.64733 22.916C5.1283 20.8478 5.08045 18.6894 5.50731 16.6002" stroke="#FEFDF7" strokeLinecap="round" strokeWidth="2" />
                                          <text fill="#FEFDF7" fontSize="4.2" fontFamily="Quicksand, sans-serif" fontWeight="700" letterSpacing="0.5">
                                            <textPath href="#textArcP1" startOffset="50%" textAnchor="middle">{completedData.date}</textPath>
                                          </text>
                                        </svg>
                                      </div>
                                      <div className="absolute left-[11px] top-[11px] w-[10px] h-[10px]">
                                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={checkmarkImage} />
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Page 2 — checklist */}
                  {(() => {
                    const items = [0,1,2,3,4,5,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,23,24];
                    const doneCount = items.filter(i => completed.has(i)).length;
                    const pct = Math.round((doneCount / 24) * 100);
                    return (
                      <div
                        className="absolute top-0 h-[310px] w-[227px] bg-[#faf6f0] p-[14px] flex flex-col gap-[8px] transition-transform duration-300 ease-in-out overflow-hidden"
                        style={{ left: "50%", transform: exportPreviewPage === 2 ? "translateX(-50%)" : "translateX(calc(-50% + 200%))" }}
                      >
                        <div className="flex flex-col items-center gap-0">
                          <p className="font-['Quicksand'] font-bold text-[9px] leading-[13px] text-[#c0b05b]">{currentYear}</p>
                          <p className="font-['Caprasimo'] text-[18px] leading-[24px] text-[#e36559]">Bingo</p>
                          <p className="font-['Quicksand'] font-semibold text-[6.5px] leading-[10px] tracking-[0.1em] uppercase text-[#657652]">Resolution Checklist</p>
                          <div className="w-10 h-px bg-[#e8dcc8] mt-[5px]" />
                        </div>
                        <div className="flex flex-col gap-[4px]">
                          <div className="flex items-center justify-between">
                            <span className="font-['Quicksand'] font-semibold text-[7px] text-[#2b2b23]">Progress</span>
                            <span className="font-['Quicksand'] font-bold text-[11px] leading-none text-[#657652]">
                              {doneCount}<span className="text-[8px] font-semibold text-[#94bebb]"> / 24</span>
                            </span>
                          </div>
                          <div className="h-[3.5px] rounded-full bg-[#ede5d8] overflow-hidden">
                            <div className="h-full rounded-full bg-[#657652]" style={{ width: `${pct}%` }} />
                          </div>
                          <p className="font-['Quicksand'] font-medium text-[6px] text-[#94bebb] text-right">{pct}% complete</p>
                        </div>
                        <div className="grid grid-cols-3 gap-x-[6px]">
                          {items.map((idx, n) => {
                            const isDone = completed.has(idx);
                            const stamp = completed.get(idx);
                            return (
                              <div key={idx} className={`flex items-start gap-[4px] py-[3.5px] ${n < 21 ? "border-b border-[#ede5d8]" : ""}`}>
                                <div className={`mt-[1.5px] shrink-0 size-[7px] rounded-[1.5px] border flex items-center justify-center ${isDone ? "bg-[#657652] border-[#657652]" : "border-[#c0b05b]"}`}>
                                  {isDone && (
                                    <svg viewBox="0 0 6 5" fill="none" className="size-[4px]">
                                      <path d="M0.5 2.5L2 4L5.5 0.5" stroke="#fefdf7" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                  )}
                                </div>
                                <div className="min-w-0">
                                  <p className={`font-['Quicksand'] font-semibold text-[6px] leading-[8px] ${isDone ? "text-[#657652]" : "text-[#2b2b23]"} overflow-hidden`} style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>
                                    {resolutions[idx]}
                                  </p>
                                  {stamp && (
                                    <p className="font-['Quicksand'] text-[5px] leading-[7px] text-[#94bebb]">{stamp.date}</p>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })()}

                {/* Dot indicators — overlaid on preview */}
                <div className="absolute bottom-[10px] left-0 right-0 flex items-center justify-center gap-[5px] pointer-events-none">
                  {[1, 2].map(p => (
                    <div key={p} className={`rounded-full transition-all duration-200 ${exportPreviewPage === p ? "w-[14px] h-[4px] bg-[#c0b05b]" : "size-[4px] bg-[#c0b05b]/40"}`} />
                  ))}
                </div>
              </div>

              {/* Navigation — below the preview */}
              <div className="flex items-center justify-center gap-[14px] mt-[8px]">
                <button
                  onClick={() => setExportPreviewPage(p => Math.max(1, p - 1))}
                  disabled={exportPreviewPage === 1}
                  className="font-['Quicksand'] font-bold text-[16px] leading-none text-[#c0b05b] disabled:opacity-25 transition-opacity"
                >‹</button>
                <span className="font-['Quicksand'] font-semibold text-[10px] text-[#94bebb]">{exportPreviewPage} / 2</span>
                <button
                  onClick={() => setExportPreviewPage(p => Math.min(2, p + 1))}
                  disabled={exportPreviewPage === 2}
                  className="font-['Quicksand'] font-bold text-[16px] leading-none text-[#c0b05b] disabled:opacity-25 transition-opacity"
                >›</button>
              </div>
            </div>

            {/* Export options */}
            <div className="flex justify-between mb-2">
              <button onClick={handleExportImage} className="bg-[#657652] text-[#fefdf7] rounded-full px-[14px] py-[6px] font-['Quicksand'] font-semibold flex items-center gap-1 hover:bg-[#576447] transition-colors" style={{ fontSize: mFontMd, lineHeight: "20px" }}>
                <ImageIcon size={icoBtn} />
                As image
              </button>
              <button onClick={handleExportPDF} className="bg-[#657652] text-[#fefdf7] rounded-full px-[14px] py-[6px] font-['Quicksand'] font-semibold flex items-center gap-1 hover:bg-[#576447] transition-colors" style={{ fontSize: mFontMd, lineHeight: "20px" }}>
                <PdfIcon size={icoBtn} />
                As PDF
              </button>
            </div>

            <div className="flex justify-center">
              <button onClick={() => setShowExportModal(false)} className="text-[#c0b05b] hover:text-[#a09549] transition-colors font-['Quicksand'] font-semibold px-[14px] py-[6px]" style={{ fontSize: mFontMd, lineHeight: "20px" }}>
                Cancel
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Checklist Page 2 Preview */}
      {showChecklistPreview && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-[60] overflow-y-auto"
          onClick={() => setShowChecklistPreview(false)}
        >
          <motion.div
            className="w-full max-w-[480px] my-4 rounded-[16px] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.92, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 340, damping: 22, mass: 0.8 }}
          >
            {/* Page 2 document */}
            <div className="bg-[#faf6f0] px-10 py-8 flex flex-col gap-6">

              {/* Header */}
              <div className="flex flex-col items-center gap-[2px]">
                <p className="font-['Quicksand'] font-bold text-[12px] leading-[18px] text-[#c0b05b]">{currentYear}</p>
                <p className="font-['Caprasimo'] text-[26px] leading-[34px] text-[#e36559]">Bingo</p>
                <p className="font-['Quicksand'] font-semibold text-[9px] leading-[14px] tracking-[0.12em] uppercase text-[#657652] mt-[2px]">Resolution Checklist</p>
                <div className="w-14 h-px bg-[#e8dcc8] mt-3" />
              </div>

              {/* Progress tracker */}
              {(() => {
                const items = [0,1,2,3,4,5,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,23,24];
                const done = items.filter(i => completed.has(i)).length;
                const pct = Math.round((done / 24) * 100);
                return (
                  <>
                    <div className="flex flex-col gap-[6px]">
                      <div className="flex items-center justify-between">
                        <span className="font-['Quicksand'] font-semibold text-[10px] text-[#2b2b23]">Progress</span>
                        <div className="flex items-baseline gap-[3px]">
                          <span className="font-['Quicksand'] font-bold text-[20px] leading-none text-[#657652]">{done}</span>
                          <span className="font-['Quicksand'] font-semibold text-[12px] text-[#94bebb]">/ 24</span>
                        </div>
                      </div>
                      <div className="h-[5px] rounded-full bg-[#ede5d8] overflow-hidden">
                        <div className="h-full rounded-full bg-[#657652]" style={{ width: `${pct}%` }} />
                      </div>
                      <p className="font-['Quicksand'] font-medium text-[9px] text-[#94bebb] text-right">{pct}% complete</p>
                    </div>

                    {/* Checklist */}
                    <div className="grid grid-cols-2 gap-x-6">
                      {items.map((idx, n) => {
                        const isDone = completed.has(idx);
                        const stamp = completed.get(idx);
                        const isLastLeft = n === 11;
                        const isLastRight = n === 23;
                        return (
                          <div
                            key={idx}
                            className={`flex items-start gap-[7px] py-[6px] ${(!isLastLeft && !isLastRight) ? "border-b border-[#ede5d8]" : ""}`}
                          >
                            {/* Checkbox */}
                            <div className={`mt-[2px] shrink-0 size-[11px] rounded-[2.5px] border flex items-center justify-center ${isDone ? "bg-[#657652] border-[#657652]" : "border-[#c0b05b]"}`}>
                              {isDone && (
                                <svg viewBox="0 0 8 7" fill="none" className="size-[6px]">
                                  <path d="M1 3.5L3 5.5L7 1" stroke="#fefdf7" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              )}
                            </div>
                            {/* Text */}
                            <div className="flex flex-col min-w-0">
                              <p className={`font-['Quicksand'] font-semibold text-[9.5px] leading-[13px] ${isDone ? "text-[#657652]" : "text-[#2b2b23]"}`}>
                                {resolutions[idx]}
                              </p>
                              {stamp && (
                                <p className="font-['Quicksand'] font-medium text-[8px] leading-[11px] text-[#94bebb]">
                                  {stamp.date}
                                </p>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </>
                );
              })()}

              {/* Footer */}
              <div className="flex flex-col items-center gap-[4px] pt-1">
                <div className="w-14 h-px bg-[#e8dcc8]" />
                <p className="font-['Quicksand'] font-medium text-[8.5px] text-[#c0b05b] tracking-wide mt-2">
                  {currentYear} Resolution Bingo · {new Date().toLocaleDateString("en-GB")}
                </p>
              </div>
            </div>

            {/* Modal footer bar */}
            <div className="bg-white px-6 py-3 flex items-center justify-between">
              <p className="font-['Quicksand'] font-semibold text-[10px] text-[#94bebb]">Preview — page 2 of 2</p>
              <button
                onClick={() => setShowChecklistPreview(false)}
                className="font-['Quicksand'] font-semibold text-[11px] text-[#c0b05b] hover:text-[#a09549] transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Reset Confirm Modal */}
      {showResetConfirm && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setShowResetConfirm(false)}
        >
          <motion.div
            className="bg-white rounded-[14px] w-full relative"
            style={{ maxWidth: mMaxW }}
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.88, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 380, damping: 20, mass: 0.7 }}
          >
            <button
              onClick={() => setShowResetConfirm(false)}
              className="absolute top-[13px] right-[13px] text-[#c0b05b] hover:opacity-70 transition-opacity w-4 h-4"
            >
              <CloseIcon size={icoClose} />
            </button>

            {/* Title */}
            <div className="px-6 pt-6">
              <h2 className="font-['Quicksand'] font-bold text-[#2b2b23] text-center" style={{ fontSize: mFontLg, lineHeight: "26px" }}>Clear all prompts? 🗑️</h2>
            </div>

            {/* Content */}
            <div className="px-6 pt-[15px]">
              <p className="font-['Quicksand'] font-semibold text-[#2b2b23] text-center" style={{ fontSize: mFontMd, lineHeight: "20px" }}>
                This will permanently erase your grid. <span className="font-bold">All progress will be lost.</span>
              </p>
            </div>

            {/* Buttons */}
            <div className="px-6 pt-[28px] pb-[24px] flex items-center justify-between">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="px-[14px] py-[6px] font-['Quicksand'] font-semibold text-[#c0b05b]"
                style={{ fontSize: mFontMd, lineHeight: "20px" }}
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  handleReset();
                  setShowResetConfirm(false);
                }}
                className="bg-[#e36559] rounded-full px-[14px] py-[6px] font-['Quicksand'] font-semibold text-[#2b2b23] hover:bg-[#d65b50] transition-colors"
                style={{ fontSize: mFontMd, lineHeight: "20px" }}
              >
                Clear all
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Generate New Card Confirm Modal */}
      {showGenerateConfirm && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setShowGenerateConfirm(false)}
        >
          <motion.div
            className="bg-white rounded-[14px] w-full relative"
            style={{ maxWidth: mMaxW }}
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.88, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 380, damping: 20, mass: 0.7 }}
          >
            <button
              onClick={() => setShowGenerateConfirm(false)}
              className="absolute top-[13px] right-[13px] text-[#c0b05b] hover:opacity-70 transition-opacity w-4 h-4"
            >
              <CloseIcon size={icoClose} />
            </button>

            {/* Title */}
            <div className="px-6 pt-6">
              <h2 className="font-['Quicksand'] font-bold text-[#2b2b23] text-center" style={{ fontSize: mFontLg, lineHeight: "26px" }}>Generate a new card? 🪄</h2>
            </div>

            {/* Body text */}
            <div className="px-6 pt-[15px]">
              <p className="font-['Quicksand'] font-semibold text-[#2b2b23] text-center" style={{ fontSize: mFontMd, lineHeight: "20px" }}>
                {"This will replace your current board with 24 randomly selected resolutions. "}
                <span className="font-bold">All progress will be lost.</span>
              </p>
            </div>

            {/* Buttons */}
            <div className="px-6 pt-[28px] pb-[24px] flex items-center justify-between">
              <button
                onClick={() => setShowGenerateConfirm(false)}
                className="px-[14px] py-[6px] font-['Quicksand'] font-semibold text-[#c0b05b]"
                style={{ fontSize: mFontMd, lineHeight: "20px" }}
              >
                Cancel
              </button>
              <button
                onClick={handleGenerate}
                className="bg-[#657652] rounded-full px-[14px] py-[6px] font-['Quicksand'] font-semibold text-[#faf6f0] hover:bg-[#576447] transition-colors"
                style={{ fontSize: mFontMd, lineHeight: "20px" }}
              >
                Generate
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Incomplete Warning Modal */}
      {showIncompleteWarning && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setShowIncompleteWarning(false)}
        >
          <motion.div
            className="bg-white rounded-[14px] w-full relative"
            style={{ maxWidth: mMaxW }}
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.88, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 380, damping: 20, mass: 0.7 }}
          >
            <button
              onClick={() => setShowIncompleteWarning(false)}
              className="absolute top-[13px] right-[13px] text-[#c0b05b] hover:opacity-70 transition-opacity w-4 h-4"
            >
              <CloseIcon size={icoClose} />
            </button>

            {/* Title */}
            <div className="px-6 pt-6">
              <h2 className="font-['Quicksand'] font-bold text-[#2b2b23] text-center" style={{ fontSize: mFontLg, lineHeight: "26px" }}>Incomplete bingo card 🛠️</h2>
            </div>

            {/* Content */}
            <div className="px-6 pt-[15px]">
              <p className="font-['Quicksand'] font-semibold text-[#2b2b23] text-center" style={{ fontSize: mFontMd, lineHeight: "20px" }}>
                You still have some empty squares! Please fill in all the prompts before saving.
              </p>
            </div>

            {/* Button */}
            <div className="px-6 pt-[28px] pb-[24px] flex items-center">
              <button
                onClick={() => setShowIncompleteWarning(false)}
                className="w-full bg-[#657652] rounded-full px-[14px] py-[6px] font-['Quicksand'] font-semibold text-[#fefdf7] hover:bg-[#576447] transition-colors"
                style={{ fontSize: mFontMd, lineHeight: "20px" }}
              >
                Let's finish it!
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Fireworks + Happy New Year Modal */}
      <FireworksCanvas active={showNewYearModal} />
      {showNewYearModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <motion.div
            className="bg-white rounded-[14px] w-full relative"
            style={{ maxWidth: mMaxW }}
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.88, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 380, damping: 20, mass: 0.7 }}
          >
            <button
              onClick={() => setShowNewYearModal(false)}
              className="absolute top-[13px] right-[13px] text-[#c0b05b] hover:opacity-70 transition-opacity w-4 h-4"
            >
              <CloseIcon size={icoClose} />
            </button>

            <div className="px-6 pt-6">
              <h2 className="font-['Quicksand'] font-bold text-[#2b2b23] text-center" style={{ fontSize: mFontLg, lineHeight: "26px" }}>Happy New Year! 🥂</h2>
            </div>

            <div className="px-6 pt-[15px]">
              <p className="font-['Quicksand'] font-semibold text-[#2b2b23] text-center" style={{ fontSize: mFontMd, lineHeight: "20px" }}>
                {"We've saved a snapshot of your old board to your device, and your new grid is ready to go!"}
              </p>
            </div>

            <div className="px-6 pt-[20px] pb-[25px]">
              <button
                onClick={handleNewYearBegin}
                className="w-full bg-[#657652] rounded-full px-[14px] py-[6px] font-['Quicksand'] font-semibold text-[#faf6f0] hover:bg-[#576447] transition-colors"
                style={{ fontSize: mFontMd, lineHeight: "20px" }}
              >
                {"Let's Begin!"}
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Line Complete Modal */}
      {showLineComplete && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setShowLineComplete(false)}
        >
          <motion.div
            className="bg-white rounded-[14px] w-full relative"
            style={{ maxWidth: mMaxW }}
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.88, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 380, damping: 20, mass: 0.7 }}
          >
            <button
              onClick={() => setShowLineComplete(false)}
              className="absolute top-[13px] right-[13px] text-[#c0b05b] hover:opacity-70 transition-opacity w-4 h-4"
            >
              <CloseIcon size={icoClose} />
            </button>
            <div className="px-6 pt-6">
              <h2 className="font-['Quicksand'] font-bold text-[#2b2b23] text-center" style={{ fontSize: mFontLg, lineHeight: "26px" }}>{"That's a Bingo! ✨"}</h2>
            </div>
            <div className="px-6 pt-[15px]">
              <p className="font-['Quicksand'] font-semibold text-[#2b2b23] text-center" style={{ fontSize: mFontMd, lineHeight: "20px" }}>
                {"Great progress! Let's see if you can turn this line into a fully stamped board."}
              </p>
            </div>
            <div className="px-6 pt-[20px] pb-[24px]">
              <button
                onClick={() => setShowLineComplete(false)}
                className="w-full bg-[#657652] rounded-full px-[14px] py-[6px] font-['Quicksand'] font-semibold text-[#faf6f0] hover:bg-[#576447] transition-colors"
                style={{ fontSize: mFontMd, lineHeight: "20px" }}
              >
                Challenge Accepted
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Confetti */}
      <ConfettiCanvas active={showCompletedCard} />

      {/* Completed Card Modal */}
      {showCompletedCard && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setShowCompletedCard(false)}
        >
          <motion.div
            className="bg-white rounded-[14px] w-full relative"
            style={{ maxWidth: mMaxW }}
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.88, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 380, damping: 20, mass: 0.7 }}
          >
            <button
              onClick={() => setShowCompletedCard(false)}
              className="absolute top-[13px] right-[13px] text-[#c0b05b] hover:opacity-70 transition-opacity w-4 h-4"
            >
              <CloseIcon size={icoClose} />
            </button>

            {/* Title */}
            <div className="px-6 pt-6">
              <h2 className="font-['Quicksand'] font-bold text-[#2b2b23] text-center" style={{ fontSize: mFontLg, lineHeight: "26px" }}>Full House! 🎉</h2>
            </div>

            {/* Body text */}
            <div className="px-6 pt-[15px]">
              <p className="font-['Quicksand'] font-semibold text-[#2b2b23] text-center" style={{ fontSize: mFontMd, lineHeight: "20px" }}>
                You did it! You crushed every single resolution on your board.
              </p>
            </div>

            {/* Share Victory button */}
            <div className="px-6 pt-[28px] pb-[24px]">
              <button
                onClick={() => { setShowCompletedCard(false); setShowExportModal(true); setExportPreviewPage(1); }}
                className="w-full bg-[#657652] rounded-full px-[14px] py-[6px] flex items-center justify-center gap-1 hover:bg-[#576447] transition-colors"
              >
                <ExportIcon color="#faf6f0" size={icoBtn} />
                <span className="font-['Quicksand'] font-semibold text-[#faf6f0]" style={{ fontSize: mFontSm, lineHeight: "18px" }}>Share Victory</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
    </>
  );
}