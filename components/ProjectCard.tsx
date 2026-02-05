import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
    title: string;
    category: string;
    year: string;
    image: string;
    href?: string;
}

export default function ProjectCard({ title, category, year, image, href = '#' }: ProjectCardProps) {
    return (
        <Link href={href} className="project-card">
            <div className="project-card-image">
                <Image
                    src={image}
                    alt={title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
            </div>
            <div className="project-card-overlay"></div>
            <div className="project-card-content">
                <span className="project-card-year">{year}</span>
                <h3 className="project-card-title">{title}</h3>
                <span className="project-card-category">{category}</span>
                <div className="project-card-link">
                    View Project
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </Link>
    );
}
