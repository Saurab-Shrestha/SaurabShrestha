import { parseMarkdown } from '../utils/markdown';

const blogFiles = import.meta.glob('./blog/**/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

export interface ProjectContent {
  id: string;
  name: string;
  tag: string;
  year: string;
  role: string;
  desc: string;
  bg: string;
  tech: string[];
  markdown: string;
}

export interface BlogContent {
  id: string;
  tag: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  markdown: string;
}

export const PROJECTS_CONTENT: Record<string, ProjectContent> = {
  "neuralnoodle": {
    id: "neuralnoodle",
    name: "NeuralNoodle",
    tag: "AI Research Systems",
    year: "2025",
    role: "Architect & Engineer",
    desc: "An agentic RAG system built for deep technical investigation — stateful, hypothesis-driven, and designed to reach Saturation.",
    bg: "neuralnoodle-bg",
    tech: ["LangGraph", "Python", "Qdrant", "FastAPI", "LlamaIndex"],
    markdown: `
# NeuralNoodle

Standard RAG answers questions. NeuralNoodle investigates them.

## The Problem

I hit a wall with standard RAG while trying to find contradictions across 40 transformer architecture papers. A retrieval-augmented system returns the three most similar chunks to your query. It can't hold a hypothesis across 40 documents, track what contradicts what, or tell you when it's actually done looking.

The gap is fundamental: standard RAG is stateless. Every query starts from zero. There's no memory of what was already found, no model of what would count as a complete answer, no way to distinguish "I found nothing" from "nothing exists."

For a researcher asking "what do these papers disagree about?", that's not a limitation — it's a non-starter.

## The Approach

NeuralNoodle is built around a different abstraction: the **Investigation**.

An Investigation is a stateful, long-running session that groups multiple Queries under shared Hypotheses. When you start an Investigation, you define what you're trying to confirm or refute. The system then runs Queries, extracts Evidence from retrieved Chunks, and maps each piece of Evidence to your Hypotheses — either supporting or contradicting them.

The core inference engine is the **Evidence Graph**: a directed structure where nodes are Evidence claims and Hypotheses, and edges carry a polarity (supports / contradicts). As an Investigation runs, the graph grows. The agent uses it to decide what to query next — steering toward gaps, away from already-saturated areas.

An Investigation reaches **Saturation** when successive Queries yield no new Evidence for any active Hypothesis. That's the termination condition. Not a timeout, not a turn limit — epistemic completion.

## Key Components

**Investigation Sentry** — The security gateway that resolves research resources (Collections, Documents) while enforcing strict multi-tenant ownership. Every tool call goes through it before touching the vector store.

**Precision Filter** — Transforms raw retrieved Chunks into high-precision Evidence by handling deduplication, semantic reranking, and confidence thresholding. A chunk that's 70% similar to an existing Evidence claim doesn't produce a new node; it strengthens the existing one.

**Research Toolbelt** — A modular, registry-based assembly of the agent's research capabilities. Tools are first-class objects with defined input/output contracts, making the agent's reasoning auditable: you can inspect exactly which tool was called, with what arguments, and what Evidence it produced.

**Vector Silo** — An abstraction over Qdrant collections that captures collection context for simplified search and ingestion. Switching vector backends doesn't ripple through the agent logic.

## What's Different

The language is intentional. "Investigation" instead of "chat session" because the semantics are different: sessions are ephemeral, Investigations are stateful case files. "Saturation" instead of "done" because it's a specific epistemic state, not a timeout. "Evidence" instead of "result" because the unit of output is a verifiable claim, not a string.

The architecture enforces these distinctions. You can't accidentally skip the Precision Filter. The Evidence Graph is the source of truth, not the raw LLM output.

## Status

Active prototype. The LangGraph pipeline, Evidence Graph, and Precision Filter are implemented. The Research Toolbelt and Investigation Sentry are in progress. The goal is a system where a researcher can upload 40 papers, ask a question, and get back a structured Evidence Graph — not a summary, an argument.
`
  },
  "tdd": {
    id: "tdd",
    name: "Tomato Disease Detection",
    tag: "Computer Vision / AI",
    year: "2023",
    role: "ML Engineer",
    desc: "An AI-powered app assisting farmers by detecting diseases in tomato plants.",
    bg: "tdd-bg",
    tech: ["Python", "TensorFlow", "OpenCV", "Flask"],
    markdown: `
# Tomato Disease Detection

An AI-powered app assisting farmers by detecting diseases in tomato plants.

## The Problem
In rural Nepal, crop diseases often go undiagnosed until it's too late. Farmers lack immediate access to agricultural experts. The goal was to build a mobile-friendly tool that could accurately identify diseases from a single leaf photograph with minimal latency.

## The Solution
I developed a vision pipeline utilizing deep learning. The core is a **Convolutional Neural Network (CNN)** trained on the PlantVillage dataset augmented with local disease samples. 

## Key Implementation Details
- **Classification of 10 distinct tomato leaf status** (late blight, mold, etc.)
- **High-performance inference engine** optimized for CPU latency
- **Quantization-Aware Training** to compress model from 100MB+ to under 15MB
- **Local data caching** for intermittent network connectivity
`
  }
};

// Process dynamically imported blog files
export const BLOGS_CONTENT: Record<string, BlogContent> = Object.entries(blogFiles).reduce(
  (acc, [path, rawContent]) => {
    // Extract slug from path (e.g., './blog/slug/file.md' -> 'slug')
    const pathParts = path.split('/');
    const slug = pathParts[pathParts.length - 2];

    const { metadata, content } = parseMarkdown(rawContent);

    acc[slug] = {
      id: slug,
      tag: metadata.tag || 'Blog',
      title: metadata.title || 'Untitled Post',
      date: metadata.date || 'Unknown Date',
      readTime: metadata.readTime || '5 min read',
      excerpt: metadata.excerpt || '',
      markdown: content,
    };

    return acc;
  },
  {} as Record<string, BlogContent>
);

