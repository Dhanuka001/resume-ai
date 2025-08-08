'use client';

import { useMemo, useState, useEffect } from 'react';
import {
  CheckCircle2,
  Brain,
  UserCheck,
  LayoutTemplate,
  FileText,
  TrendingUp,
  Gauge,
  ListChecks,
} from 'lucide-react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

type Metric = { label: string; value: string; tone?: 'good' | 'warn' | 'bad' };
type Summary = { label: string; value: number; icon: React.ElementType };

const pill =
  'rounded-xl bg-[#121212] border border-[#242424] px-4 py-3 flex items-center justify-between text-sm text-gray-300';

const AnalysisResults = () => {
  // Demo data — replace with props later
  const overallScore = 85;
  const summaries: Summary[] = [
    { label: 'Skills Match', value: 92, icon: Brain },
    { label: 'Experience', value: 78, icon: UserCheck },
    { label: 'Format', value: 88, icon: LayoutTemplate },
  ];

  const overviewLeft: Metric[] = [
    { label: 'Length', value: '2 pages' },
    { label: 'Keywords Matched', value: '18/25', tone: 'good' },
    { label: 'ATS Compatibility', value: '92%', tone: 'good' },
  ];
  const overviewRight: Metric[] = [
    { label: 'Industry Match', value: 'Technology' },
    { label: 'Experience Level', value: 'Senior' },
    { label: 'Readability Score', value: 'Excellent', tone: 'good' },
  ];

  const [tab, setTab] =
    useState<'overview' | 'skills' | 'experience' | 'suggestions'>('overview');

  useMemo(() => overallScore, [overallScore]);

  return (
    <section
      id="how-it-works"
      className="px-6 sm:px-12 py-16 text-white bg-gradient-to-b from-[#0b0b0b] to-[#141414]"
    >
      {/* Heading */}
      <div className="max-w-6xl mx-auto mb-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
          Your Resume{' '}
          <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
            Analysis Results
          </span>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto space-y-8">
        {/* Overall Score Card */}
        <div className="rounded-2xl bg-[#111214] border border-[#232428] p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Donut */}
          <div className="flex items-center gap-5">
            <DonutScore score={overallScore} />

            <div>
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <CheckCircle2 size={18} />
                Strong Performance
              </div>
              <p className="text-gray-300 max-w-md mt-1 text-sm">
                Your resume shows excellent potential with room for strategic improvements.
              </p>
            </div>
          </div>

          {/* Summary pills */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full md:w-auto">
            {summaries.map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="rounded-xl bg-[#0f1012] border border-[#232428] p-5 text-center shadow-sm"
              >
                <div className="mx-auto mb-2 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-400">
                  <Icon className="text-black" size={18} />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
                  {value}%
                </div>
                <div className="text-xs text-gray-400 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="rounded-2xl bg-[#111214] border border-[#232428]">
          <div className="flex gap-2 p-2 border-b border-[#232428]">
            <TabBtn active={tab === 'overview'} onClick={() => setTab('overview')} icon={FileText}>
              Overview
            </TabBtn>
            <TabBtn active={tab === 'skills'} onClick={() => setTab('skills')} icon={ListChecks}>
              Skills
            </TabBtn>
            <TabBtn active={tab === 'experience'} onClick={() => setTab('experience')} icon={Gauge}>
              Experience
            </TabBtn>
            <TabBtn
              active={tab === 'suggestions'}
              onClick={() => setTab('suggestions')}
              icon={TrendingUp}
            >
              Suggestions
            </TabBtn>
          </div>

          {/* Panel */}
          <div className="p-6 md:p-8">
            {tab === 'overview' && (
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  {overviewLeft.map((m) => (
                    <MetricRow key={m.label} {...m} />
                  ))}
                </div>
                <div className="space-y-4">
                  {overviewRight.map((m) => (
                    <MetricRow key={m.label} {...m} />
                  ))}
                </div>
              </div>
            )}

            {tab === 'skills' && (
              <div className="text-gray-300 text-sm">
                Coming soon: top hard/soft skills detected, missing keywords, and priority gaps.
              </div>
            )}

            {tab === 'experience' && (
              <div className="text-gray-300 text-sm">
                Coming soon: role seniority, impact density, and quantification quality.
              </div>
            )}

            {tab === 'suggestions' && (
              <div className="text-gray-300 text-sm">
                Coming soon: targeted, actionable edits to improve ATS match and readability.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================
   DonutScore (very thick ring)
   ========================= */
function DonutScore({ score }: { score: number }) {
  // Count-up for the center number
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v));

  useEffect(() => {
    const controls = animate(mv, score, { duration: 1.6, ease: 'easeOut' });
    return () => controls.stop();
  }, [score, mv]);

  // SVG ring math 
  const size = 132;       
  const center = size / 2;
  const stroke = 26;               
  const radius = center - stroke / 2; 
  const circumference = 2 * Math.PI * radius;
  const progress = score / 100;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="block">
        <defs>
          <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#facc15" />
          </linearGradient>
        </defs>

        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke="#2a2a2a"
          strokeWidth={stroke}
          fill="none"
        />

        <motion.circle
          cx={center}
          cy={center}
          r={radius}
          stroke="url(#ringGradient)"
          strokeWidth={stroke}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: circumference * (1 - progress) }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.6, ease: 'easeOut' }}
          style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
        />
      </svg>

      {/* Inner disc + value — inset bumped to match thick stroke */}
      <div className="absolute inset-[16px] rounded-full bg-[#0f1012] border border-[#232428] grid place-items-center">
        <span className="text-2xl font-bold">
          <motion.span>{rounded}</motion.span>%
        </span>
      </div>
    </div>
  );
}

/* ============== helpers ============== */
function TabBtn({
  active,
  onClick,
  icon: Icon,
  children,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm transition ${
        active
          ? 'bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-semibold'
          : 'text-gray-300 hover:text-white hover:bg-white/5'
      }`}
    >
      <Icon size={16} />
      {children}
    </button>
  );
}

function MetricRow({ label, value, tone }: Metric) {
  const toneClass =
    tone === 'good'
      ? 'text-emerald-400'
      : tone === 'warn'
      ? 'text-yellow-300'
      : tone === 'bad'
      ? 'text-red-400'
      : 'text-gray-200';

  return (
    <div className={pill}>
      <span className="text-gray-400">{label}</span>
      <span className={`font-semibold ${toneClass}`}>{value}</span>
    </div>
  );
}

export default AnalysisResults;
