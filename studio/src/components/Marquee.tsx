import { useTranslation } from 'react-i18next'

const SEP = '     ·     '

export function Marquee() {
  const { t } = useTranslation()
  const items = t('marquee.items', { returnObjects: true }) as string[]
  const single = items.join(SEP) + SEP
  const track = Array(12).fill(single).join('')

  return (
    <div className="relative overflow-hidden border-y border-white/[0.05] py-5 bg-transparent">
      <div
        className="flex whitespace-nowrap"
        style={{ animation: 'marquee 50s linear infinite' }}
      >
        <span className="font-body font-medium text-[12px] text-white/20 uppercase tracking-[0.18em]">
          {track}
        </span>
      </div>
    </div>
  )
}
