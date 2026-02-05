'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
    {
        id: 1,
        title: 'Skyline Residences',
        category: 'Residential',
        year: '2025',
        image: '/images/skyline_residences_1770313949164.png',
    },
    {
        id: 2,
        title: 'Azure Office Complex',
        category: 'Commercial',
        year: '2024',
        image: '/images/azure_office_1770313967938.png',
    },
    {
        id: 3,
        title: 'Emerald Gardens Hotel',
        category: 'Hospitality',
        year: '2023',
        image: '/images/emerald_hotel_1770313984713.png',
    },
    {
        id: 4,
        title: 'Serene Spa Retreat',
        category: 'Commercial',
        year: '2023',
        image: '/images/spa_retreat_1770314055343.png',
    },
    {
        id: 5,
        title: 'Urban Loft Apartments',
        category: 'Residential',
        year: '2024',
        image: '/images/skyline_residences_1770313949164.png',
    },
    {
        id: 6,
        title: 'Modern Museum Gallery',
        category: 'Cultural',
        year: '2022',
        image: '/images/hero_interior_1770313928374.png',
    },
    {
        id: 7,
        title: 'Harbor View Restaurant',
        category: 'Hospitality',
        year: '2023',
        image: '/images/emerald_hotel_1770313984713.png',
    },
    {
        id: 8,
        title: 'Coastal Retreat Villa',
        category: 'Residential',
        year: '2024',
        image: '/images/hero_interior_1770313928374.png',
    },
    {
        id: 9,
        title: 'Tech Innovation Center',
        category: 'Commercial',
        year: '2025',
        image: '/images/azure_office_1770313967938.png',
    },
];

const categories = ['All', 'Residential', 'Commercial', 'Hospitality', 'Cultural'];

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <>
            <Header />

            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1 className="page-header-title">Our Projects</h1>
                    <p className="page-header-subtitle">
                        Explore our portfolio of award-winning residential, commercial, and hospitality projects that push the boundaries of contemporary design.
                    </p>
                </div>
            </section>

            {/* Projects Section */}
            <section className="section">
                <div className="container">
                    {/* Filter Tabs */}
                    <div className="filter-tabs">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`filter-tab ${activeCategory === category ? 'active' : ''}`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <div className="projects-grid">
                        {filteredProjects.map((project) => (
                            <Link href="#" key={project.id} className="project-card">
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
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-section">
                <div className="container">
                    <h2 className="cta-title">Ready to start your project?</h2>
                    <p className="cta-subtitle">Let's bring your vision to life.</p>
                    <Link href="/contact" className="btn btn-primary btn-lg">
                        Get In Touch
                    </Link>
                </div>
            </section>

            <Footer />
        </>
    );
}
