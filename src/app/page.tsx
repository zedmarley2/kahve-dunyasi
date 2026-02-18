import websiteData from '@/data/website.json';
import { ComponentRenderer } from '@/components/component-renderer';

export default function HomePage() {
  const homePage =
    websiteData.pages.find((p) => p.isHomePage) ?? websiteData.pages[0];

  if (!homePage) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500">No content yet.</p>
      </main>
    );
  }

  return (
    <main>
      {homePage.components.map((component, i) => (
        <ComponentRenderer key={component.id} component={component} index={i} />
      ))}
    </main>
  );
}
