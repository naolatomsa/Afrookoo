import { Container, Eyebrow, darkVars } from '../ui.jsx'
import { footerColumns } from '../data.js'

const linkCls = 'block py-1 text-sm text-[#D1D5DB] transition duration-200 hover:translate-x-1 hover:text-brand-light'

export default function Footer() {
  return (
    <footer className={`bg-navy pt-16 pb-8 text-white ${darkVars}`}>
      <Container>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-5">
          <div className="col-span-2 lg:col-span-1">
            <span className="mb-2 inline-block font-serif text-2xl font-semibold text-brand-light">Afrookoo</span>
            <p className="text-sm text-(--muted)">Building Intelligent Technology.</p>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <Eyebrow>{col.title}</Eyebrow>
              {col.links.map(([label, href]) => (
                <a key={label} href={href} className={linkCls}>{label}</a>
              ))}
            </div>
          ))}
        </div>
        <p className="mt-10 border-t border-[#374151] pt-6 text-sm text-(--muted)">
          © 2026 Afrookoo Software. All Rights Reserved.
        </p>
      </Container>
    </footer>
  )
}
