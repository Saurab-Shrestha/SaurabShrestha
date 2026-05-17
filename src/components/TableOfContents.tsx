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
        background: 'oklch(97% 0.005 50)',
        border: '1px solid oklch(88% 0.006 50)',
        borderRadius: '8px',
        overflow: 'hidden',
      }}>

        {/* ── Header ── */}
        <div style={{
          padding: '22px 20px 10px',
          fontSize: '10px',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'oklch(52% 0.012 50)',
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
                  background: isActive ? 'oklch(94.5% 0.006 50)' : 'transparent',
                  transition: 'background 220ms cubic-bezier(0.4,0,0.2,1)',
                }}
              >
                {/* Number */}
                <span style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '11px',
                  lineHeight: '1.6',
                  flexShrink: 0,
                  color: isActive ? 'oklch(45% 0.015 50)' : 'oklch(68% 0.01 50)',
                  fontWeight: 400,
                  transition: 'color 220ms cubic-bezier(0.4,0,0.2,1)',
                  userSelect: 'none',
                }}>
                  {num}
                </span>

                {/* Heading text */}
                <span style={{
                  fontSize: '13px',
                  lineHeight: '1.55',
                  color: isActive ? 'oklch(18% 0.01 50)' : 'oklch(45% 0.012 50)',
                  fontWeight: isActive ? 600 : 400,
                  fontFamily: 'DM Mono, monospace',
                  transition: 'color 220ms cubic-bezier(0.4,0,0.2,1), font-weight 220ms cubic-bezier(0.4,0,0.2,1)',
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
          borderTop: '1px solid oklch(88% 0.006 50)',
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '8px',
          }}>
            <span style={{
              fontSize: '11px',
              color: 'oklch(52% 0.012 50)',
              fontFamily: 'DM Mono, monospace',
            }}>
              Reading progress
            </span>
            <span style={{
              fontSize: '11px',
              color: 'oklch(52% 0.012 50)',
              fontFamily: 'DM Mono, monospace',
            }}>
              {Math.round(readPercent)}%
            </span>
          </div>
          <div style={{
            width: '100%',
            height: '3px',
            background: 'oklch(88% 0.006 50)',
            borderRadius: '2px',
            overflow: 'hidden',
          }}>
            <div style={{
              height: '100%',
              width: `${readPercent}%`,
              background: '#ff5c35',
              borderRadius: '2px',
              transition: 'width 420ms cubic-bezier(0.16, 1, 0.3, 1)',
            }} />
          </div>
        </div>

      </div>
    </aside>
  );
};

export default TableOfContents;