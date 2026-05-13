import React, { useEffect, useState, useCallback } from 'react';

export interface Heading {
  id: string;
  text: string;
  level: 2 | 3 | 4;
}

interface TableOfContentsProps {
  headings: Heading[];
  scrollContainer?: HTMLElement | null;
  title?: string;
  maxHeight?: number;
}

// ── Scroll read percent ────────────────────────────────────────────────────
function useReadPercent(scrollContainer?: HTMLElement | null): number {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const compute = () => {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainer
        ? scrollContainer
        : document.documentElement;
      setPct(scrollHeight <= clientHeight ? 100 : (scrollTop / (scrollHeight - clientHeight)) * 100);
    };

    const target = scrollContainer ?? window;
    target.addEventListener('scroll', compute, { passive: true });
    compute();
    return () => target.removeEventListener('scroll', compute);
  }, [scrollContainer]);

  return pct;
}

// ── Active heading tracker ─────────────────────────────────────────────────
function useActiveHeading(headings: Heading[]): string {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    if (headings.length === 0) return;

    const headingEls = headings
      .map(h => document.getElementById(h.id))
      .filter(Boolean) as HTMLElement[];

    const updateActive = () => {
      const scrollY = window.scrollY + 130;
      let current = headingEls[0]?.id ?? '';
      for (const el of headingEls) {
        const elTop = el.getBoundingClientRect().top + window.scrollY;
        if (elTop <= scrollY) current = el.id;
      }
      setActiveId(current);
    };
    window.addEventListener('scroll', updateActive, { passive: true });
    updateActive();
    return () => window.removeEventListener('scroll', updateActive);
  }, [headings]);

  return activeId;
}

// ── Component ──────────────────────────────────────────────────────────────
const TableOfContents: React.FC<TableOfContentsProps> = ({
  headings,
  scrollContainer,
  title = 'On this page',
  maxHeight = 620,
}) => {
  const activeId = useActiveHeading(headings);
  const readPercent = useReadPercent(scrollContainer);

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top, behavior: 'smooth' });
  }, []);

  if (headings.length === 0) return null;

  // Only show H2 headings; fallback to all if none are level 2
  const h2s = headings.filter(h => Number(h.level) === 2);
  const items = h2s.length > 0 ? h2s : headings;

  return (
    <aside
      aria-label="Table of contents"
      style={{
        position: 'sticky',
        top: '100px',
        height: 'max-content',
        alignSelf: 'flex-start',
        width: '100%',
      }}
    >
      <div style={{
        background: '#111118',
        borderRadius: '12px',
        overflow: 'hidden',
      }}>

        {/* ── Header ── */}
        <div style={{
          padding: '22px 20px 10px',
          fontSize: '10px',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.28)',
          fontFamily: 'DM Mono, monospace',
          fontWeight: 600,
          userSelect: 'none',
        }}>
          {title}
        </div>

        {/* ── Nav ── */}
        <nav
          aria-label="Page sections"
          style={{
            maxHeight: `${maxHeight}px`,
            overflowY: 'auto',
            overflowX: 'hidden',
            scrollbarWidth: 'none',
          }}
        >
          {items.map((h, index) => {
            const isActive = activeId === h.id;
            const num = String(index + 1).padStart(2, '0');

            return (
              <a
                key={h.id}
                href={`#${h.id}`}
                onClick={(e) => handleClick(e, h.id)}
                aria-current={isActive ? 'location' : undefined}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  padding: '10px 20px',
                  textDecoration: 'none',
                  position: 'relative',
                  background: isActive ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                  transition: 'background 0.18s',
                }}
              >
                {/* Number */}
                <span style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '11px',
                  lineHeight: '1.6',
                  flexShrink: 0,
                  color: isActive ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.18)',
                  fontWeight: 400,
                  transition: 'color 0.18s',
                  userSelect: 'none',
                }}>
                  {num}
                </span>

                {/* Heading text */}
                <span style={{
                  fontSize: '13px',
                  lineHeight: '1.55',
                  color: isActive ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.45)',
                  fontWeight: isActive ? 600 : 400,
                  fontFamily: 'DM Mono, monospace',
                  transition: 'color 0.18s, font-weight 0.18s',
                }}>
                  {h.text}
                </span>
              </a>
            );
          })}
        </nav>

        {/* ── Progress ── */}
        <div style={{
          padding: '14px 20px 18px',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '8px',
          }}>
            <span style={{
              fontSize: '11px',
              color: 'rgba(255,255,255,0.28)',
              fontFamily: 'DM Mono, monospace',
            }}>
              Reading progress
            </span>
            <span style={{
              fontSize: '11px',
              color: 'rgba(255,255,255,0.28)',
              fontFamily: 'DM Mono, monospace',
            }}>
              {Math.round(readPercent)}%
            </span>
          </div>
          <div style={{
            width: '100%',
            height: '3px',
            background: 'rgba(255,255,255,0.07)',
            borderRadius: '2px',
            overflow: 'hidden',
          }}>
            <div style={{
              height: '100%',
              width: `${readPercent}%`,
              background: 'rgba(255,255,255,0.4)',
              borderRadius: '2px',
              transition: 'width 0.3s ease',
            }} />
          </div>
        </div>

      </div>
    </aside>
  );
};

export default TableOfContents;