import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

const philosophy = [
    {
        title: 'Innovation',
        description: 'We embrace new ideas, technologies, and approaches to create forward-thinking designs that respond to contemporary challenges.',
    },
    {
        title: 'Sustainability',
        description: 'Environmental responsibility is integral to our process, from material selection to energy-efficient systems and biophilic design strategies.',
    },
    {
        title: 'Human-Centered',
        description: 'We design with people in mind, creating spaces that enhance wellbeing, foster connection, and adapt to changing needs.',
    },
];

const process = [
    {
        number: '01',
        title: 'Discovery',
        description: 'Research, site analysis, and client workshops to establish project goals and vision.',
    },
    {
        number: '02',
        title: 'Concept Development',
        description: 'Exploration of ideas through sketches, models, and preliminary designs.',
    },
    {
        number: '03',
        title: 'Design Refinement',
        description: 'Detailed development of the preferred concept with material and technical specifications.',
    },
    {
        number: '04',
        title: 'Implementation',
        description: 'Coordination with contractors and specialists to bring the design to life.',
    },
];

const news = [
    {
        date: 'June 15, 2023',
        title: 'Blubloom Interiors Wins Design Award',
        excerpt: 'Our Harmony Cultural Complex project receives international recognition for innovative sustainability features.',
    },
    {
        date: 'May 2, 2023',
        title: 'New Studio Opening',
        excerpt: 'Blubloom Interiors expands with a new design studio in Berlin, bringing our innovative approach to Central Europe.',
    },
    {
        date: 'April 10, 2023',
        title: 'Sustainability Initiative',
        excerpt: 'Announcing our commitment to carbon-neutral operations by 2025 and sustainable designs for all new projects.',
    },
];

const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '200+', label: 'Completed Projects' },
    { number: '45', label: 'Design Awards' },
    { number: '85', label: 'Team Members' },
];

export default function AboutPage() {
    return (
        <>
            <Header />

            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1 className="page-header-title">About Blubloom Interiors</h1>
                    <p className="page-header-subtitle">
                        A visionary architecture and interior design studio
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="section">
                <div className="container">
                    <div className="studio-grid">
                        <div className="studio-content">
                            <span className="section-label">Our Story</span>
                            <h2 className="section-title" style={{ textAlign: 'left' }}>
                                Founded on the belief that design transforms lives
                            </h2>
                            <p style={{ fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-6)' }}>
                                Founded in 2010, Blubloom Interiors began as a small practice with a big vision: to create architecture that positively impacts people's lives and the environment.
                            </p>
                            <p>
                                Our founders, renowned architects with decades of experience, assembled a team of talented designers who shared their passion for innovative and sustainable design. Over the years, we've grown into an award-winning studio recognized for our distinctive approach that balances bold creativity with practical functionality.
                            </p>
                            <p>
                                Today, our diverse team brings expertise from around the world, working collaboratively to push the boundaries of what's possible in architecture and interior design.
                            </p>
                        </div>
                        <div className="studio-image">
                            <Image
                                src="/images/studio_team_1770314036019.png"
                                alt="Blubloom Interiors Studio"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                            <div className="studio-image-accent"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Philosophy */}
            <section className="section bg-cream">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">Our Philosophy</span>
                        <h2 className="section-title">Design has the power to transform</h2>
                        <p className="section-description">
                            At Blubloom Interiors, we believe that thoughtful design has the power to transform spaces, communities, and lives.
                        </p>
                    </div>

                    <div className="grid grid-3" style={{ gap: 'var(--space-8)' }}>
                        {philosophy.map((item, index) => (
                            <div key={index} className="philosophy-card">
                                <h3 className="philosophy-card-title">{item.title}</h3>
                                <p className="philosophy-card-description">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Process */}
            <section className="section process-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">Design Process</span>
                        <h2 className="section-title">From vision to reality</h2>
                    </div>

                    <div className="process-timeline">
                        {process.map((step, index) => (
                            <div key={index} className="process-step">
                                <div className="process-step-number">{step.number}</div>
                                <h3 className="process-step-title">{step.title}</h3>
                                <p className="process-step-description">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* News Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">News</span>
                        <h2 className="section-title">Latest Updates</h2>
                    </div>

                    <div className="grid grid-3" style={{ gap: 'var(--space-8)' }}>
                        {news.map((item, index) => (
                            <div key={index} className="news-card">
                                <div className="news-card-content">
                                    <span className="news-card-date">{item.date}</span>
                                    <h3 className="news-card-title">{item.title}</h3>
                                    <p className="news-card-excerpt">{item.excerpt}</p>
                                    <Link href="#" className="news-card-link">
                                        Read More →
                                    </Link>
                                </div>
                            </div>
                        ))}
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

            <Footer />
        </>
    );
}
