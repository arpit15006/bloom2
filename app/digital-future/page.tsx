import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

const innovationAreas = [
    {
        number: '01',
        title: 'Data and Analytics',
        description: 'We generate and process information from millions of data points across all our projects to gain deeper understanding of spaces and the changing needs of people who use them.',
    },
    {
        number: '02',
        title: 'Design Optimization',
        description: 'We analyze requirements and existing spaces to help clients identify the most suitable route forward, supplying costs, timeframes, and detailed predictions for future adaptability.',
    },
    {
        number: '03',
        title: 'Digital Products',
        description: 'Our Digital Products team creates custom programs, plug-ins, and tools that dramatically improve quality and efficiency of our design process.',
    },
    {
        number: '04',
        title: 'Digital Delivery',
        description: 'We constantly develop innovative new tools and workflows for BIM management, streamlining delivery and improving collaborative efficiency.',
    },
];

export default function DigitalFuturePage() {
    return (
        <>
            <Header />

            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1 className="page-header-title">Digital Future</h1>
                    <p className="page-header-subtitle">
                        Propelling our designs into exciting new frontiers through cutting-edge technology and innovation.
                    </p>
                </div>
            </section>

            {/* Vision Section */}
            <section className="section">
                <div className="container container-sm">
                    <p style={{ fontSize: 'var(--text-xl)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-8)', textAlign: 'center' }}>
                        Our architectural projects are often vast in scale, which means they can take years to reach completion. With the speed at which technology advances, there is a danger that buildings might be outdated before the first occupants have moved in.
                    </p>
                    <p style={{ fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-relaxed)', textAlign: 'center', color: 'var(--text-secondary)' }}>
                        Our Digital Futures team is a collection of forward-thinking designers who explore and create new technologies that propel our designs into exciting new frontiers, resulting in buildings that not only stand the test of time but define the future.
                    </p>
                </div>
            </section>

            {/* Featured Digital Projects */}
            <section className="section bg-cream">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">Featured Projects</span>
                        <h2 className="section-title">Digital Innovation in Action</h2>
                    </div>

                    <div className="grid grid-2" style={{ gap: 'var(--space-8)' }}>
                        <Link href="#" className="project-card" style={{ aspectRatio: '16/10' }}>
                            <div className="project-card-image">
                                <Image
                                    src="/images/azure_office_1770313967938.png"
                                    alt="Nexus Innovation Hub"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className="project-card-overlay"></div>
                            <div className="project-card-content">
                                <span className="project-card-year">2025</span>
                                <h3 className="project-card-title">Nexus Innovation Hub</h3>
                                <div className="project-card-link">
                                    View Project →
                                </div>
                            </div>
                        </Link>
                        <Link href="#" className="project-card" style={{ aspectRatio: '16/10' }}>
                            <div className="project-card-image">
                                <Image
                                    src="/images/hero_interior_1770313928374.png"
                                    alt="Digital Experience Center"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className="project-card-overlay"></div>
                            <div className="project-card-content">
                                <span className="project-card-year">2023</span>
                                <h3 className="project-card-title">Digital Experience Center</h3>
                                <div className="project-card-link">
                                    View Project →
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Innovation Areas */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">Areas of Digital Innovation</span>
                        <h2 className="section-title">Driving Blubloom Forward</h2>
                        <p className="section-description">
                            Our Digital team focuses on new products, services and insights that boost functionality for clients and enhance user experiences.
                        </p>
                    </div>

                    <div className="grid grid-2" style={{ gap: 'var(--space-8)' }}>
                        {innovationAreas.map((area, index) => (
                            <div key={index} className="innovation-card">
                                <div className="innovation-card-number">{area.number}</div>
                                <h3 className="innovation-card-title">{area.title}</h3>
                                <p className="innovation-card-description">{area.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SpaceTwin Product */}
            <section className="section dark-section">
                <div className="container">
                    <div className="studio-grid">
                        <div className="studio-content">
                            <span className="section-label">Digital Product</span>
                            <h2 className="section-title section-title-light" style={{ textAlign: 'left' }}>
                                SpaceTwin
                            </h2>
                            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-6)' }}>
                                SpaceTwin is an immersive 3D web platform that transforms the process of visualizing real-world spaces, whether as part of the design and review process, or once the space is fully constructed.
                            </p>
                            <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: 'var(--space-8)' }}>
                                It enables property owners and operators to seamlessly explore, visualize, and create digital content within their space.
                            </p>
                            <Link href="#" className="btn btn-primary">
                                Learn more about SpaceTwin
                            </Link>
                        </div>
                        <div className="studio-image">
                            <Image
                                src="/images/azure_office_1770313967938.png"
                                alt="SpaceTwin Platform"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
