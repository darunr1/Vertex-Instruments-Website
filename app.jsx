const { HashRouter, NavLink, Link, Routes, Route } = ReactRouterDOM;

function Layout({ children }) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <Link className="brand" to="/" aria-label="Vertex Instruments home">
            <img className="brand-logo" src="assets/vertex-logo.svg" alt="Vertex Instruments" />
          </Link>
          <nav>
            <ul className="nav-links">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/products">Products</NavLink></li>
              <li><NavLink to="/solutions">Solutions</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="container footer-wrap">
          <p>© {new Date().getFullYear()} Vertex Instruments. Built for modern problem-solvers.</p>
          <p>AI calculators • Program packs • Institutional rollouts</p>
        </div>
      </footer>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero section">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">AI calculator platform</p>
            <h1>Now a complete React site with real depth.</h1>
            <p className="lead">
              Vertex Instruments has moved beyond a single-scroll landing page into a multi-page React
              experience that gives each part of your business a focused destination.
            </p>
            <div className="hero-cta">
              <Link className="btn btn-primary" to="/products">Explore Products</Link>
              <Link className="btn btn-secondary" to="/solutions">View Solutions</Link>
            </div>
          </div>
          <article className="panel accent-panel">
            <h2>What changed</h2>
            <ul>
              <li>React-powered multi-page routing</li>
              <li>Dedicated product, solutions, about, and contact pages</li>
              <li>Dark black + white palette with controlled purple accents</li>
              <li>More detailed structure for conversions and trust</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container card-grid three-col">
          <article className="panel">
            <h3>Calculator Hardware</h3>
            <p>Shop modified TI-84 models tuned with AI prompts, reliability checks, and QC-tested parts.</p>
            <Link className="text-link" to="/products">See lineup →</Link>
          </article>
          <article className="panel">
            <h3>Rollout Solutions</h3>
            <p>Deploy calculators to student groups, tutors, or full institutions with staged onboarding.</p>
            <Link className="text-link" to="/solutions">Review plans →</Link>
          </article>
          <article className="panel">
            <h3>Company Story</h3>
            <p>Learn the engineering process behind reliable AI integrations into familiar calculators.</p>
            <Link className="text-link" to="/about">Meet Vertex →</Link>
          </article>
        </div>
      </section>
    </>
  );
}

function ProductsPage() {
  const products = [
    {
      name: 'Vertex AI TI-84 Core',
      price: '$300',
      desc: 'Best for everyday classes and homework acceleration.',
      items: ['Integrated AI launcher', 'Preset math prompts', '30-day support']
    },
    {
      name: 'Vertex AI TI-84 Pro+',
      price: '$400',
      desc: 'Premium package for AP, college STEM, and engineering workflows.',
      items: ['Enhanced internal module', 'Expanded prompt presets', '90-day priority support'],
      featured: true
    },
    {
      name: 'Vertex Lab Edition',
      price: '$549',
      desc: 'Built for tutoring centers and schools running bulk deployment.',
      items: ['Fleet diagnostics profile', 'Team onboarding pack', 'Rollout consultation']
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Products</p>
          <h1>AI-enhanced calculators and add-ons</h1>
        </div>
        <div className="card-grid three-col">
          {products.map((product) => (
            <article key={product.name} className={`panel ${product.featured ? 'featured' : ''}`}>
              {product.featured && <p className="tag">Most Popular</p>}
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>
              <p className="muted">{product.desc}</p>
              <ul>{product.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionsPage() {
  const tracks = [
    ['Student Path', 'Single-device setup with exam-policy tips, onboarding checklist, and update reminders.'],
    ['Tutor Path', 'Multi-device bundle with profile templates and lesson-ready configuration packs.'],
    ['Institution Path', 'Department-wide rollout model with SLA support and phased deployment guidance.']
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Solutions</p>
          <h1>Deployment tracks for every scale</h1>
          <p className="lead">Choose the path that matches how you learn, teach, or manage technology.</p>
        </div>
        <div className="timeline">
          {tracks.map(([title, detail], i) => (
            <article className="panel" key={title}>
              <p className="step">0{i + 1}</p>
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <section className="section">
      <div className="container narrow">
        <div className="section-heading">
          <p className="eyebrow">About</p>
          <h1>Engineering-first calculator innovation</h1>
        </div>
        <article className="panel">
          <p>
            Vertex Instruments began as a hardware lab focused on extending trusted classroom devices with
            modern intelligence—without forcing users to relearn everything.
          </p>
          <p>
            Our process combines electrical integration, firmware behavior tuning, and reliability testing so
            every calculator performs consistently in high-pressure environments.
          </p>
          <p>
            We design for practical AI: easy access, policy awareness, and improved understanding.
          </p>
        </article>
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <section className="section">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">Contact</p>
          <h1>Get a quote or rollout plan</h1>
          <p className="lead">
            Share model preference, quantity, and timeline. We’ll map a package that fits your goals.
          </p>
        </div>
        <form className="panel form" onSubmit={(event) => event.preventDefault()}>
          <label>Name<input type="text" placeholder="Your name" /></label>
          <label>Email<input type="email" placeholder="you@example.com" /></label>
          <label>Request details<textarea rows="5" placeholder="Number of calculators, use case, target date..." /></label>
          <button type="submit" className="btn btn-primary">Send Request</button>
        </form>
      </div>
    </section>
  );
}

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
