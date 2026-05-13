/**
 * Simple markdown frontmatter parser.
 * Extracts YAML-style metadata between --- markers at the top of a string.
 */
export function parseMarkdown(rawContent: string) {
  const frontMatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/;
  const match = rawContent.match(frontMatterRegex);

  if (!match) {
    return { metadata: {}, content: rawContent };
  }

  const yamlBlock = match[1];
  const content = match[2];
  const metadata: Record<string, string> = {};

  // Simple key-value pair parsing for YAML
  yamlBlock.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
      // Remove quotes if present and trim
      metadata[key.trim()] = valueParts.join(':').trim().replace(/^["']|["']$/g, '');
    }
  });

  return { metadata, content };
}
