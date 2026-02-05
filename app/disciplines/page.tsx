import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const disciplines = [
    {
        title: 'Architecture',
        icon: '🏛️',
        description: 'Creating timeless structures that define skylines and inspire communities.',
    },
    {
        title: 'Interior Design',
        icon: '🛋️',
        description: 'Crafting beautiful interiors that enhance daily living experiences.',
    },
    {
        title: 'Urban Design',
        icon: '🌆',
        description: 'Shaping cities and communities through thoughtful urban planning.',
    },
    {
        title: 'Landscape Architecture',
        icon: '🌿',
        description: 'Designing outdoor spaces that connect people with nature.',
    },
    {
        title: 'Parametric Design',
        icon: '📐',
        description: 'Using computational tools to create innovative organic forms.',
    },
    {
        title: 'Sustainable Design',
        icon: '♻️',
        description: 'Building responsibly for a better environmental future.',
    },
    {
        title: 'Experiential Design',
        icon: '✨',
        description: 'Creating immersive environments that engage all the senses.',
    },
    {
        title: 'Digital Visualization',
        icon: '🖥️',
        description: 'Bringing designs to life through cutting-edge visualization technology.',
    },
];

const companies = [
    {
        name: 'Blubloom Interiors',
        icon: '🏠',
        description: 'Specialized interior design practice focusing on premium residential and commercial spaces.',
    },
    {
        name: 'Blubloom XR',
        icon: '🥽',
        description: 'Extended reality studio focused on immersive architectural visualization and digital experiences.',
    },
    {
        name: 'Blubloom Consulting',
        icon: '💼',
        description: 'Strategic design consultancy offering expertise in architectural programming and user experience.',
    },
];

export default function DisciplinesPage() {
    return (
        <>
            <Header />

            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1 className="page-header-title">Disciplines</h1>
                    <p className="page-header-subtitle">
                        Our multidisciplinary approach combines expertise across architecture, design, and technology to deliver exceptional results.
                    </p>
                </div>
            </section>

            {/* Disciplines Grid */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-4" style={{ gap: 'var(--space-6)' }}>
                        {disciplines.map((discipline, index) => (
                            <div key={index} className="discipline-card">
                                <div className="discipline-card-bg"></div>
                                <div className="discipline-card-content">
                                    <div className="discipline-card-icon">{discipline.icon}</div>
                                    <h3 className="discipline-card-title">{discipline.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Companies */}
            <section className="section bg-cream">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">Our Companies</span>
                        <h2 className="section-title">A family of design excellence</h2>
                    </div>

                    <div className="grid grid-3" style={{ gap: 'var(--space-8)' }}>
                        {companies.map((company, index) => (
                            <div key={index} className="company-card">
                                <div className="company-card-icon">{company.icon}</div>
                                <h3 className="company-card-title">{company.name}</h3>
                                <p className="company-card-description">{company.description}</p>
                                <Link href="#" className="company-card-link">
                                    Learn more →
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-section">
                <div className="container">
                    <h2 className="cta-title">Have a question?</h2>
                    <p className="cta-subtitle">Want to work with us?</p>
                    <Link href="/contact" className="btn btn-primary btn-lg">
                        Contact Us
                    </Link>
                </div>
            </section>

            <Footer />
        </>
    );
}
