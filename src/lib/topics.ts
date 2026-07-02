export const TOPICS = [
  { slug: 'ai-arkitektur', label: 'AI-arkitektur' },
  { slug: 'tech-lead', label: 'Tech lead' },
  { slug: 'rollkonvergens', label: 'Rollkonvergens' },
] as const;

export function getTopicLabel(slug: string): string {
  return TOPICS.find((t) => t.slug === slug)?.label ?? slug;
}
