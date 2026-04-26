import { siteConfig } from '@/config/site';
import { ArrowRightIcon } from 'lucide-react';
import { LinkText } from '../link-text';
import { Button } from '../ui/button';

export function Contact() {
  return (
    <section
      id="contact"
      className="my-12 max-w-xl mx-auto space-y-4  bg-gradient-to-r from-chart-1/10 via-chart-3/10 to-chart-5/10 border border-border rounded-2xl p-12 text-center"
    >
      <h3 className="font-medium">Let's Talk</h3>
      <p className="text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
        Available for freelance projects, component contracts, and consulting
        engagements.
      </p>
      <Button
        className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
        aria-label="Contact me"
      >
        <LinkText
          href={`mailto:${siteConfig.links.email}?subject=Systaliko20%UI`}
        >
          Get in Touch
        </LinkText>
        <ArrowRightIcon className="size-4" />
      </Button>
    </section>
  );
}
