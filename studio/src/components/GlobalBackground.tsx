export function GlobalBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -10 }}
    >
      {/* Teal ambient light from top */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(0,229,160,0.06) 0%, transparent 65%)',
        }}
      />
      {/* Edge vignette — darkens perimeter, adds depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 130% 110% at 50% 50%, transparent 45%, rgba(0,0,0,0.45) 100%)',
        }}
      />
    </div>
  )
}
