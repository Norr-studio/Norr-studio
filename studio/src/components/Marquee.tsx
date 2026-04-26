const ITEMS = [
  'Brand Design',
  'Conversion Optimization',
  'AI-Powered Builds',
  '2-Week Delivery',
  'Motion Design',
  'Design Systems',
  'Norr Studio',
]

const SEP = '     ·     '
const SINGLE = ITEMS.join(SEP) + SEP
// 12 repetitions ensures the track is wider than any viewport before the -50% loop point
const TRACK = Array(12).fill(SINGLE).join('')

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-white/[0.05] py-5 bg-transparent">
      <div
        className="flex whitespace-nowrap"
        style={{ animation: 'marquee 50s linear infinite' }}
      >
        <span className="font-body font-medium text-[12px] text-white/20 uppercase tracking-[0.18em]">
          {TRACK}
        </span>
      </div>
    </div>
  )
}
