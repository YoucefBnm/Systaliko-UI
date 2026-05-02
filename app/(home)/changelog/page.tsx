import { Header } from '@/components/sections/header';
import { Footer } from '@/components/sections/footer';
import { readFile } from 'fs/promises';
import path from 'path';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Changelog',
  description:
    'All notable changes to Systaliko UI — new components, blocks, fixes, and updates.',
};

interface ChangelogEntry {
  version: string;
  date: string;
  sections: { title: string; items: string[] }[];
}

function parseChangelog(raw: string): ChangelogEntry[] {
  const entries: ChangelogEntry[] = [];

  // Split on h2 headings that have a version number
  const blocks = raw.split(/\n(?=## \[)/);

  for (const block of blocks) {
    // Match "## [0.5.0] - 2026-04-03" or "## [Unreleased]"
    const headerMatch = block.match(
      /^## \[([^\]]+)\](?:\s*-\s*(\d{4}-\d{2}-\d{2}))?/,
    );
    if (!headerMatch) continue;

    const version = headerMatch[1];
    const date = headerMatch[2] ?? '';

    // Skip the Unreleased block if empty
    if (version === 'Unreleased') {
      const body = block.replace(/^## \[Unreleased\].*\n?/, '').trim();
      if (!body) continue;
    }

    // Parse h3 sections (### Added, ### Changed, etc.)
    const sections: { title: string; items: string[] }[] = [];
    const sectionBlocks = block.split(/\n(?=### )/);

    for (const sec of sectionBlocks) {
      const sectionMatch = sec.match(/^### (.+)/);
      if (!sectionMatch) continue;

      const title = sectionMatch[1].trim();
      const items = [...sec.matchAll(/^- (.+)/gm)].map((m) => m[1]);
      if (items.length) sections.push({ title, items });
    }

    if (sections.length || version !== 'Unreleased') {
      entries.push({ version, date, sections });
    }
  }

  return entries;
}

const EMOJI_MAP: Record<string, string> = {
  Added: '✨',
  Changed: '🔄',
  Fixed: '🐛',
  Deprecated: '⚠️',
  Removed: '🗑️',
  Security: '🔒',
};

export default async function ChangelogPage() {
  const raw = await readFile(path.join(process.cwd(), 'CHANGELOG.md'), 'utf-8');
  const entries = parseChangelog(raw);

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="container max-w-3xl py-16 md:py-24 space-y-4">
          <div className="space-y-2 mb-12">
            <h1 className="text-4xl font-bold tracking-tight">Changelog</h1>
            <p className="text-muted-foreground text-lg">
              All notable changes to Systaliko UI — new components, templates,
              fixes, and updates.
            </p>
          </div>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-0 top-2 bottom-0 w-px bg-border ml-[7px]" />

            <div className="space-y-14">
              {entries.map((entry) => (
                <article key={entry.version} className="relative pl-8">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-[6px] size-[15px] rounded-full border-2 border-primary bg-background" />

                  <div className="space-y-6">
                    {/* Version header */}
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h2 className="text-xl font-bold tracking-tight">
                        {entry.version === 'Unreleased'
                          ? 'Unreleased'
                          : `v${entry.version}`}
                      </h2>
                      {entry.date && (
                        <time
                          dateTime={entry.date}
                          className="text-sm text-muted-foreground tabular-nums"
                        >
                          {new Date(entry.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                      )}
                    </div>

                    {/* Sections */}
                    {entry.sections.length > 0 ? (
                      <div className="space-y-6">
                        {entry.sections.map((section) => (
                          <div key={section.title} className="space-y-3">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                              <span>{EMOJI_MAP[section.title] ?? '•'}</span>
                              {section.title}
                            </h3>
                            <ul className="space-y-2">
                              {section.items.map((item, i) => (
                                <li
                                  key={i}
                                  className="text-sm leading-relaxed text-foreground/90"
                                  dangerouslySetInnerHTML={{
                                    __html: item
                                      // Bold **text**
                                      .replace(
                                        /\*\*(.+?)\*\*/g,
                                        '<strong>$1</strong>',
                                      )
                                      // Inline code `text`
                                      .replace(
                                        /`([^`]+)`/g,
                                        '<code class="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">$1</code>',
                                      )
                                      // Arrow →
                                      .replace(/→/g, '&rarr;'),
                                  }}
                                />
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-muted-foreground">
                        No entries yet.
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
