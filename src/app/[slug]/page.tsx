import websiteData from '@/data/website.json';
import { ComponentRenderer } from '@/components/component-renderer';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return websiteData.pages
    .filter((p) => !p.isHomePage)
    .map((p) => ({ slug: p.slug }));
}

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = websiteData.pages.find((p) => p.slug === slug);

  if (!page) return notFound();

  return (
    <main>
      {page.components.map((component, i) => (
        <ComponentRenderer key={component.id} component={component} index={i} />
      ))}
    </main>
  );
}
