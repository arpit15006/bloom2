import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const featuredProjects = [
    {
      title: 'Skyline Residences',
      category: 'Residential',
      year: '2025',
      image: '/images/skyline_residences_1770313949164.png',
    },
    {
      title: 'Azure Office Complex',
      category: 'Commercial',
      year: '2024',
      image: '/images/azure_office_1770313967938.png',
    },
    {
      title: 'Emerald Gardens Hotel',
      category: 'Hospitality',
      year: '2023',
      image: '/images/emerald_hotel_1770313984713.png',
    },
  ];

  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '200+', label: 'Completed Projects' },
    { number: '45', label: 'Design Awards' },
    { number: '85', label: 'Team Members' },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <Image
            src="/images/hero_interior_1770313928374.png"
            alt="Luxury Interior Design"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="hero-overlay"></div>

        <div className="container hero-content">
          <p className="hero-subtitle animate-fadeInUp">Award-Winning Design Studio</p>
          <h1 className="hero-title animate-fadeInUp delay-200">
            We design the<br />
            places where people<br />
            <span>love to create.</span>
          </h1>
          <p className="hero-description animate-fadeInUp delay-400">
            We're a global architecture firm with teams spanning multiple continents creating exceptional spaces that amplify human experiences.
          </p>
          <div className="hero-cta animate-fadeInUp delay-600">
            <Link href="/projects" className="btn btn-primary btn-lg">
              Explore Projects
            </Link>
            <Link href="/about" className="btn btn-outline-light btn-lg">
              Learn More
            </Link>
          </div>
        </div>

        <div className="scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-indicator-line"></div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Featured Projects</span>
            <h2 className="section-title">Design that defines experiences</h2>
            <p className="section-description">
              Explore our portfolio of award-winning residential, commercial, and hospitality projects that push the boundaries of contemporary design.
            </p>
          </div>

          <div className="projects-grid">
            {featuredProjects.map((project, index) => (
              <Link href="/projects" key={index} className="project-card">
                <div className="project-card-image">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="project-card-overlay"></div>
                <div className="project-card-content">
                  <span className="project-card-year">{project.year}</span>
                  <h3 className="project-card-title">{project.title}</h3>
                  <span className="project-card-category">{project.category}</span>
                  <div className="project-card-link">
                    View Project
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/projects" className="btn btn-secondary btn-lg">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Studio Section */}
      <section className="section studio-section">
        <div className="container">
          <div className="studio-grid">
            <div className="studio-content">
              <span className="section-label">Our Studio</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                Crafting environments that inspire
              </h2>
              <p style={{ fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-6)' }}>
                Blubloom Interiors is an award-winning architecture and interior design practice founded on the belief that design has the power to transform people's lives.
              </p>
              <p style={{ marginBottom: 'var(--space-8)' }}>
                Our approach combines innovative thinking with technical excellence, creating spaces that are both beautiful and functional. With a diverse portfolio spanning residential, commercial, and cultural projects, our team brings a wealth of experience and a fresh perspective to every challenge.
              </p>
              <Link href="/about" className="btn btn-primary">
                Learn More About Us
              </Link>
            </div>
            <div className="studio-image">
              <Image
                src="/images/studio_team_1770314036019.png"
                alt="Blubloom Interiors Team"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="studio-image-accent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <h2 className="cta-title">Have a project in mind?</h2>
          <p className="cta-subtitle">Let's create something extraordinary together.</p>
          <Link href="/contact" className="btn btn-primary btn-lg">
            Get In Touch
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
