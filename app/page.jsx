import Image from "next/image";

const capabilities = [
  {
    title: "Sustainable Buildings",
    description:
      "Construction and integrated systems delivery for housing and commercial developments.",
    image: "/capabilities/sustainable-buildings.jpg",
    alt: "Modern sustainable commercial building",
  },
  {
    title: "Renewable Energy",
    description:
      "Solar park infrastructure and solar plant EPC across high-scale power programs.",
    image: "/capabilities/renewable-energy.jpg",
    alt: "Solar panels in a renewable energy field",
  },
  {
    title: "Smart Grid Infrastructure",
    description:
      "Advanced metering and energy monitoring systems for enterprise and infrastructure sites.",
    image: "/capabilities/smart-grid.jpg",
    alt: "Smart electricity meter infrastructure",
  },
];

const buildingProjects = [
  {
    location: "Maldives",
    category: "Housing EPC",
    title: "4,000 Three-Bedroom Houses",
    client: "Fahi Dhiriulhun Corporation Limited (State-Owned Enterprise)",
    value: "USD 250M (excluding financial cost)",
    status:
      "EPC contract signed with Structures Unlimited LLC; back-to-back turnkey contract with iBuilding.",
    scope: [
      "Large-scale residential development",
      "Turnkey delivery model",
      "Cross-border execution with strategic partners",
    ],
  },
  {
    location: "Hulhumale, Maldives",
    category: "Commercial Building",
    title: "HDC Annex Building Development",
    client: "Housing Development Corporation (Maldives Government)",
    status: "Construction in progress (as noted in profile)",
    scope: [
      "Head office extension building",
      "Construction management and delivery oversight",
      "Government client stakeholder coordination",
    ],
  },
  {
    location: "Hulhumale, Maldives",
    category: "Social Housing",
    title: "Social Housing Development (2,000 Houses)",
    client: "Housing program, Hulhumale",
    status: "Execution consultancy and project management services",
    scope: [
      "Program execution consulting",
      "Project management governance",
      "Schedule and delivery supervision",
    ],
  },
  {
    location: "Chennai & Coimbatore, India",
    category: "Automation + Security",
    title: "India Land Tech Park + KGISL Tech Park",
    client: "Private commercial developers",
    status: "Delivered through project-based infrastructure services",
    scope: [
      "Mechanical and electrical systems",
      "Building automation",
      "Security systems infrastructure",
    ],
  },
];

const energyProjects = [
  {
    location: "Tamilnadu, India",
    category: "Solar Infrastructure",
    title: "180 MW Solar Park Infrastructure",
    client: "Energy infrastructure program",
    status: "Solar park infrastructure development reference",
    scope: [
      "Utility-scale renewable infrastructure",
      "Site and systems integration",
      "Energy transition program support",
    ],
  },
  {
    location: "Tamilnadu, India",
    category: "Solar EPC",
    title: "30 MW Solar Plant Construction",
    client: "Power sector client",
    status: "Solar plant EPC execution reference",
    scope: [
      "Plant construction and EPC coordination",
      "Engineering and implementation management",
      "Operational readiness support",
    ],
  },
  {
    location: "Singapore",
    category: "AMI + EMS",
    title: "Remote Metering and Energy Monitoring References",
    client: "Enterprise and infrastructure sites",
    status: "Implemented references include Changi Airport and Bukit Timah Plaza",
    scope: [
      "Advanced metering infrastructure",
      "Energy monitoring services",
      "Operational energy visibility and reporting",
    ],
  },
];

const stats = [
  { label: "Project Geographies", value: "Singapore, Maldives, India" },
  { label: "Flagship Housing Value", value: "USD 250M+" },
  { label: "Solar Infrastructure", value: "210+ MW" },
  { label: "Housing Scale", value: "6000+ homes" },
];

const partners = [
  {
    name: "Structures Unlimited LLC",
    region: "USA",
    role: "EPC and turnkey delivery partner",
  },
  {
    name: "Power Automation",
    region: "Singapore",
    role: "Power and automation systems partner",
  },
  {
    name: "WAPCOS",
    region: "India",
    role: "Public-sector engineering collaboration",
  },
  {
    name: "Emmedue Building Technologies",
    region: "Global",
    role: "Building technology integration",
  },
];

function ProjectCard({ project, delay, tone = "building" }) {
  const isEnergy = tone === "energy";

  const cardBorder = isEnergy ? "border-[var(--energy-ring)]" : "border-[var(--building-ring)]";
  const cardBg = "bg-[var(--surface)]";
  const shadow = isEnergy
    ? "shadow-[0_8px_20px_rgba(24,122,72,0.10)] hover:shadow-[0_12px_26px_rgba(24,122,72,0.16)]"
    : "shadow-[0_8px_20px_rgba(32,78,168,0.09)] hover:shadow-[0_12px_26px_rgba(32,78,168,0.14)]";
  const locationBadge = isEnergy
    ? "bg-[var(--energy-soft)] text-[var(--energy-deep)]"
    : "bg-[var(--building-soft)] text-[var(--building-deep)]";
  const categoryBadge = isEnergy
    ? "border-[var(--energy-ring)] text-[var(--energy-deep)]"
    : "border-[var(--building-ring)] text-[var(--building-deep)]";
  const divider = isEnergy ? "border-[var(--energy-ring)]" : "border-[var(--building-ring)]";
  const scopeKicker = "text-[var(--ink)]";

  return (
    <article
      className={`fade-up rounded-3xl border ${cardBorder} ${cardBg} p-6 transition hover:-translate-y-0.5 ${shadow}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-4 flex flex-wrap items-center gap-1">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] ${locationBadge}`}
        >
          {project.location}
        </span>
        <span
          className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] ${categoryBadge}`}
        >
          {project.category}
        </span>
      </div>

      <h3 className="font-heading text-2xl tracking-tight">{project.title}</h3>

      <dl className="mt-4 space-y-2 text-sm leading-relaxed text-[var(--muted)]">
        <div>
          <dt className="inline font-semibold text-[var(--ink)]">Client: </dt>
          <dd className="inline">{project.client}</dd>
        </div>
        {project.value ? (
          <div>
            <dt className="inline font-semibold text-[var(--ink)]">Value: </dt>
            <dd className="inline">{project.value}</dd>
          </div>
        ) : null}
        <div>
          <dt className="inline font-semibold text-[var(--ink)]">Status: </dt>
          <dd className="inline">{project.status}</dd>
        </div>
      </dl>

      <div className={`mt-4 border-t pt-4 ${divider}`}>
        <p className={`text-xs font-semibold uppercase tracking-[0.08em] ${scopeKicker}`}>Scope</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[var(--muted)]">
          {project.scope.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      <header className="sticky top-0 z-40 border-b border-[var(--ring)] bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-5 md:px-8">
          <a href="#top" aria-label="iBuilding home" className="flex items-center">
            <Image
              src="/ibuilding-logo-transparent.png"
              alt="iBuilding logo"
              width={1536}
              height={1024}
              priority
              className="h-16 w-auto md:h-20"
            />
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-[var(--muted)] md:flex">
            <a href="#profile" className="transition-colors hover:text-[var(--brand-deep)]">
              Profile
            </a>
            <a href="#projects" className="transition-colors hover:text-[var(--brand-deep)]">
              Projects
            </a>
            <a href="#partners" className="transition-colors hover:text-[var(--brand-deep)]">
              Partners
            </a>
            <a href="#contact" className="transition-colors hover:text-[var(--brand-deep)]">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="border-b border-[var(--ring)] bg-white px-5 py-14 md:px-8 md:py-20">
          <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-[1.15fr_0.85fr]">
            <div className="fade-up rounded-3xl border border-[var(--ring)] bg-[var(--surface)] p-5 md:p-6">
              <p className="section-kicker">Company Profile</p>
              <h1 className="font-heading mt-3 max-w-3xl text-4xl leading-tight tracking-tight md:text-6xl">
                Professional infrastructure partner for sustainable buildings and energy systems.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
                iBuilding Pte Ltd supports complex delivery programs across construction,
                renewable energy, and smart infrastructure with experienced multinational teams
                and strategic partner networks.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-full bg-[var(--brand-deep)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--brand)]"
                >
                  Explore Projects
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-[var(--ring-dark)] px-5 py-2.5 text-sm font-semibold text-[var(--brand-deep)] transition hover:bg-[var(--surface-soft)]"
                >
                  Contact Team
                </a>
              </div>
            </div>

            <aside className="fade-up rounded-3xl border border-[var(--ring)] bg-[var(--surface)] p-6 shadow-sm">
              <Image
                src="/ibuilding-logo-transparent.png"
                alt="iBuilding"
                width={1536}
                height={1024}
                className="h-20 w-auto md:h-24"
              />
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.11em] text-[var(--brand-deep)]">
                Snapshot
              </p>
              <div className="mt-3 space-y-3">
                {stats.map((item) => (
                  <article key={item.label} className="rounded-xl border border-[var(--ring)] bg-white p-3">
                    <p className="text-xs uppercase tracking-[0.1em] text-[var(--muted)]">
                      {item.label}
                    </p>
                    <p className="mt-1 font-heading text-lg tracking-tight text-[var(--brand-deep)]">
                      {item.value}
                    </p>
                  </article>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section id="profile" className="px-5 py-14 md:px-8 md:py-20">
          <div className="mx-auto w-full max-w-6xl">
            <div className="fade-up mb-8">
              <p className="section-kicker">Capabilities</p>
              <h2 className="font-heading mt-3 text-3xl tracking-tight md:text-5xl">
                Focused delivery across construction, renewable energy, and smart systems
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {capabilities.map((item, idx) => (
                <article
                  key={item.title}
                  className="group fade-up overflow-hidden rounded-2xl border border-[var(--ring)] bg-white shadow-sm"
                  style={{ animationDelay: `${idx * 90}ms` }}
                >
                  <div className="overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={1600}
                      height={1000}
                      className="h-44 w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-2xl tracking-tight">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] md:text-base">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="border-y border-[var(--ring)] bg-white px-5 py-14 md:px-8 md:py-20">
          <div className="mx-auto w-full max-w-6xl">
            <div className="fade-up mb-10">
              <p className="section-kicker">Projects</p>
              <h2 className="font-heading mt-3 text-3xl tracking-tight md:text-5xl">
                Portfolio organized by infrastructure domain
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[var(--muted)] md:text-base">
                To make navigation clear for visitors, projects are split into two tracks: core
                building/construction delivery and energy/smart infrastructure delivery.
              </p>
            </div>

            <div className="space-y-12">
              <div className="fade-up rounded-3xl border border-[var(--building-ring)] bg-[var(--surface)] p-5 md:p-6">
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--ink)]">
                      Building, Construction and Automation
                    </p>
                    <h3 className="font-heading mt-1 text-2xl tracking-tight text-[var(--ink)] md:text-3xl">
                      Urban housing and commercial infrastructure
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
                      This track covers housing developments, government/commercial building work,
                      and automation/security systems integration.
                    </p>
                  </div>
                  <span className="rounded-full border border-[var(--building)] bg-[var(--building-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--building-deep)]">
                    {buildingProjects.length} Projects
                  </span>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  {buildingProjects.map((project, idx) => (
                    <ProjectCard key={project.title} project={project} delay={idx * 70} />
                  ))}
                </div>
              </div>

              <div className="fade-up rounded-3xl border border-[var(--energy-ring)] bg-[var(--surface)] p-5 md:p-6">
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--ink)]">
                      Energy and Smart Infrastructure
                    </p>
                    <h3 className="font-heading mt-1 text-2xl tracking-tight text-[var(--ink)] md:text-3xl">
                      Renewable power and monitoring systems
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
                      This track highlights solar infrastructure, EPC delivery, and advanced
                      metering/energy monitoring references.
                    </p>
                  </div>
                  <span className="rounded-full border border-[var(--energy)] bg-[var(--energy-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--energy-deep)]">
                    {energyProjects.length} Projects
                  </span>
                </div>

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {energyProjects.map((project, idx) => (
                    <ProjectCard key={project.title} project={project} delay={idx * 70} tone="energy" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="partners" className="px-5 py-14 md:px-8 md:py-20">
          <div className="mx-auto w-full max-w-6xl rounded-3xl border border-[var(--ring)] bg-[linear-gradient(180deg,var(--surface)_0%,#f8faff_100%)] p-6 shadow-[0_14px_30px_rgba(26,45,92,0.08)] md:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="fade-up">
                <p className="section-kicker">Strategic Partners</p>
                <h3 className="font-heading mt-3 text-3xl tracking-tight md:text-4xl">
                  Delivery strength through specialized collaborations
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] md:text-base">
                  Our partner network enables regional execution capability across EPC,
                  automation, engineering services, and smart infrastructure delivery.
                </p>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  <span className="rounded-full border border-[var(--ring-dark)] bg-white px-3 py-1.5 text-sm text-[var(--brand-deep)]">
                    EPC Delivery
                  </span>
                  <span className="rounded-full border border-[var(--ring-dark)] bg-white px-3 py-1.5 text-sm text-[var(--brand-deep)]">
                    Automation Systems
                  </span>
                  <span className="rounded-full border border-[var(--ring-dark)] bg-white px-3 py-1.5 text-sm text-[var(--brand-deep)]">
                    Engineering Services
                  </span>
                  <span className="rounded-full border border-[var(--ring-dark)] bg-white px-3 py-1.5 text-sm text-[var(--brand-deep)]">
                    Smart Infrastructure
                  </span>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {partners.map((partner, idx) => (
                  <article
                    key={partner.name}
                    className="fade-up rounded-2xl border border-[var(--ring)] bg-white p-4 shadow-sm"
                    style={{ animationDelay: `${idx * 70}ms` }}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--brand-deep)]">
                      {partner.region}
                    </p>
                    <h4 className="font-heading mt-2 text-xl tracking-tight">{partner.name}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{partner.role}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-[var(--ring)] bg-white px-5 py-12 md:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <Image
            src="/ibuilding-logo-transparent.png"
            alt="iBuilding logo"
            width={1536}
            height={1024}
            className="h-16 w-auto md:h-20"
          />

          <div className="mt-8 grid gap-7 md:grid-cols-2">
            <section>
              <p className="section-kicker">Head Office</p>
              <h3 className="font-heading mt-2 text-2xl tracking-tight">iBuilding Pte Ltd</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] md:text-base">
                Blk 1003, Bukit Merah Central
                <br />
                #07-06, Singapore 159836
                <br />
                +65 63770887
              </p>
            </section>

            <section>
              <p className="section-kicker">Associate Office</p>
              <h3 className="font-heading mt-2 text-2xl tracking-tight">Rigel Solar &amp; Infra LLP</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] md:text-base">
                Meenakshi Towers
                <br />
                13, Rajamannar Street, T. Nagar
                <br />
                Chennai 17, India
              </p>
            </section>
          </div>
        </div>
      </footer>
    </div>
  );
}
