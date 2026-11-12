import { useState } from 'react'
import { Section, Heading, Card, Modal, TagBadge } from '../ui.jsx'
import Reveal, { stagger } from './Reveal.jsx'
import { insights, insightTopics } from '../data.js'
import { FileText, Clock, ArrowRight, CheckCircle } from './Icons.jsx'

export default function Insights() {
  const [selectedArticle, setSelectedArticle] = useState(null)

  return (
    <Section id="insights" tone="surface">
      <Heading
        eyebrow="Insights & Perspectives"
        eyebrowIcon={FileText}
        title="Engineering insights from production trenches."
        intro="Technical perspectives on multi-agent AI systems, resilient software architectures, distributed retail data, and mobile performance."
      />

      {/* Grid of Articles */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 mb-12">
        {insights.map((article, i) => (
          <Reveal as="article" key={article.slug} delay={stagger(i, 2, 100)}>
            <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-[var(--border-card)] bg-[var(--bg-card)] p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/50 hover:shadow-xl">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="rounded-full bg-blue-500/10 px-3 py-1 font-mono text-[11px] font-semibold text-blue-600 dark:text-blue-400">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 font-mono text-xs text-[var(--text-muted)]">
                    <Clock size={13} />
                    <span>{article.readTime}</span>
                    <span>·</span>
                    <span>{article.date}</span>
                  </div>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[var(--text-heading)] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-3 leading-snug">
                  {article.title}
                </h3>

                <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                  {article.summary}
                </p>

                {/* Highlights Preview */}
                <div className="space-y-1.5 border-t border-[var(--border-subtle)] pt-4 mb-6">
                  {article.highlights.slice(0, 2).map((h) => (
                    <div key={h} className="flex items-start gap-2 text-xs text-[var(--text-body)]">
                      <CheckCircle size={13} className="text-blue-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Author & Read Action */}
              <div className="border-t border-[var(--border-subtle)] pt-4 mt-auto flex items-center justify-between">
                <span className="text-xs font-medium text-[var(--text-muted)]">
                  By {article.author}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedArticle(article)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:gap-2.5 transition-all cursor-pointer"
                >
                  <span>Read Key Takeaways</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Topics pills */}
      <Reveal delay={150}>
        <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-[var(--border-subtle)]">
          <span className="font-mono text-xs text-[var(--text-muted)] mr-2">
            Frequent Topics:
          </span>
          {insightTopics.map((t) => (
            <span
              key={t}
              className="rounded-full border border-[var(--border-card)] bg-[var(--bg-card)] px-3 py-1 font-mono text-xs text-[var(--text-body)] hover:border-blue-500 hover:text-blue-500 transition-colors"
            >
              #{t}
            </span>
          ))}
        </div>
      </Reveal>

      {/* Modal for Article Deep Dive */}
      <Modal
        isOpen={!!selectedArticle}
        onClose={() => setSelectedArticle(null)}
        title={selectedArticle ? selectedArticle.title : ''}
      >
        {selectedArticle && (
          <div className="space-y-5 text-[var(--text-body)]">
            <div className="flex items-center gap-3 font-mono text-xs text-blue-600 dark:text-blue-400 border-b border-[var(--border-subtle)] pb-3">
              <span>{selectedArticle.category}</span>
              <span>·</span>
              <span>{selectedArticle.readTime}</span>
              <span>·</span>
              <span>By {selectedArticle.author}</span>
            </div>

            <p className="text-base text-[var(--text-body)] leading-relaxed font-medium">
              {selectedArticle.summary}
            </p>

            <div className="rounded-xl border border-[var(--border-card)] bg-[var(--bg-subtle)] p-5 space-y-3">
              <h4 className="font-mono text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold">
                Core Architectural Takeaways
              </h4>
              <ul className="space-y-2.5">
                {selectedArticle.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[var(--text-body)]">
                    <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-[var(--border-subtle)] pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <p className="text-xs text-[var(--text-muted)]">
                Want to discuss implementing these concepts in your organization?
              </p>
              <a
                href="#contact"
                onClick={() => setSelectedArticle(null)}
                className="rounded-xl bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-500 transition-colors"
              >
                Reach Out to Our Architects
              </a>
            </div>
          </div>
        )}
      </Modal>
    </Section>
  )
}
