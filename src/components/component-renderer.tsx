import { MotionWrapper } from './motion-wrapper';
import { Header } from './header';
import { Hero } from './hero';
import { Footer } from './footer';
import { Section } from './section';
import { CTA } from './cta';
import { Features } from './features';
import { Testimonials } from './testimonials';
import { Pricing } from './pricing';
import { Contact } from './contact';
import { Gallery } from './gallery';
import { TextBlock } from './text-block';
import { ImageBlock } from './image-block';

interface ComponentProps {
  component: {
    id: string;
    type: string;
    name: string;
    props: Record<string, unknown>;
    styles: Record<string, unknown>;
  };
  index?: number;
}

const componentMap: Record<
  string,
  React.ComponentType<{ props: Record<string, unknown>; styles: Record<string, unknown> }>
> = {
  HEADER: Header,
  HERO: Hero,
  FOOTER: Footer,
  SECTION: Section,
  CTA: CTA,
  FEATURES: Features,
  TESTIMONIALS: Testimonials,
  PRICING: Pricing,
  CONTACT: Contact,
  GALLERY: Gallery,
  TEXT: TextBlock,
  IMAGE: ImageBlock,
  // Also support capitalized names from the editor
  Header: Header,
  Hero: Hero,
  Footer: Footer,
  Section: Section,
  Features: Features,
  Testimonials: Testimonials,
  Pricing: Pricing,
  Contact: Contact,
  Gallery: Gallery,
  Text: TextBlock,
  Image: ImageBlock,
};

export function ComponentRenderer({ component, index = 0 }: ComponentProps) {
  const Component = componentMap[component.type];

  if (!Component) {
    return (
      <div className="bg-gray-50 px-8 py-6 text-center">
        <span className="text-sm text-gray-500">{component.type} component</span>
      </div>
    );
  }

  return (
    <MotionWrapper index={index}>
      <Component props={component.props} styles={component.styles} />
    </MotionWrapper>
  );
}
