import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PROJECTS } from '../../lib/constants/index'
import ProjectDetailClient from './ProjectDetailClient'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) {
    return {
      title: 'Project Not Found | Ahmed Khaled'
    };
  }
  return {
    title: `${project.title} - Deep Dive Analysis | Ahmed Khaled`,
    description: project.description,
  };
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  
  if (!project) {
    notFound();
  }

  return <ProjectDetailClient slug={slug} />;
}
