"use client";

import Link from 'next/link';
import { useRouter, useParams, notFound } from 'next/navigation';

import { useContactDialog } from "@/contexts/ContactDialogContext";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, ArrowRight, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { blogPosts } from "@/data/blogData";
import { useEffect, useCallback } from "react";

const BlogPost = () => {
  const { openContactDialog } = useContactDialog();
  const { slug } = useParams<{ slug: string }>();
  const navigate = useRouter();
  const post = blogPosts.find((p) => p.slug === slug);

  // Handle clicks on internal links rendered via dangerouslySetInnerHTML for SPA navigation
  const handleContentClick = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest('a[data-internal]') as HTMLAnchorElement | null;
    if (anchor) {
      e.preventDefault();
      navigate.push(anchor.getAttribute('href') || '/');
    }
  }, [navigate]);

  useEffect(() => {
    const container = document.getElementById('blog-content');
    if (container) {
      container.addEventListener('click', handleContentClick);
      return () => container.removeEventListener('click', handleContentClick);
    }
  }, [handleContentClick, slug]);
  if (!post) return notFound();

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 2);

  // Convert markdown links [text](url) to <a> tags — internal links get data-internal for SPA nav
  const parseInlineMarkdown = (text: string): string => {
    return text
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, linkText, url) => {
        if (url.startsWith('/')) {
          return `<a href="${url}" data-internal="true" class="text-primary hover:underline font-medium">${linkText}</a>`;
        }
        return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-medium">${linkText}</a>`;
      })
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>');
  };

  // Simple markdown-ish rendering for the content
  const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    const elements: React.ReactNode[] = [];
    let i = 0;
    let inTable = false;
    let tableRows: string[][] = [];
    let tableHeaders: string[] = [];

    const flushTable = () => {
      if (tableHeaders.length > 0) {
        elements.push(
          <div key={`table-${i}`} className="overflow-x-auto my-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  {tableHeaders.map((h, hi) => (
                    <th key={hi} className="text-left py-3 px-4 font-semibold text-foreground border-b-2 border-primary/20">
                      {h.trim()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, ri) => (
                  <tr key={ri} className="border-b border-border">
                    {row.map((cell, ci) => (
                      <td key={ci} className="py-3 px-4 text-foreground/70">
                        {cell.trim()}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      inTable = false;
      tableRows = [];
      tableHeaders = [];
    };

    while (i < lines.length) {
      const line = lines[i];

      // Table rows
      if (line.startsWith("|")) {
        const cells = line.split("|").filter((c) => c.trim() !== "");
        if (!inTable) {
          inTable = true;
          tableHeaders = cells;
          i++; // skip separator row
          i++;
          continue;
        } else if (line.includes("---")) {
          i++;
          continue;
        } else {
          tableRows.push(cells);
          i++;
          continue;
        }
      } else if (inTable) {
        flushTable();
      }

      if (line.startsWith("## ")) {
        elements.push(
          <h2 key={i} className="text-2xl font-semibold text-foreground mt-12 mb-4 leading-[1.2]">
            {line.replace("## ", "")}
          </h2>
        );
      } else if (line.startsWith("### ")) {
        elements.push(
          <h3 key={i} className="text-xl font-semibold text-foreground mt-8 mb-3 leading-[1.2]">
            {line.replace("### ", "")}
          </h3>
        );
      } else if (line.startsWith("**") && line.endsWith("**")) {
        elements.push(
          <p key={i} className="text-base font-semibold text-foreground mt-4 mb-2">
            {line.replace(/\*\*/g, "")}
          </p>
        );
      } else if (line.startsWith("- ")) {
        // Collect list items
        const items: string[] = [];
        let j = i;
        while (j < lines.length && lines[j].startsWith("- ")) {
          items.push(lines[j].replace("- ", ""));
          j++;
        }
        elements.push(
          <ul key={i} className="space-y-2 my-4 ml-4">
            {items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-foreground/70 text-base leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                <span dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(item) }} />
              </li>
            ))}
          </ul>
        );
        i = j;
        continue;
      } else if (line.trim() === "") {
        // skip
      } else {
        elements.push(
          <p
            key={i}
            className="text-base text-foreground/70 leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(line) }}
          />
        );
      }
      i++;
    }
    if (inTable) flushTable();
    return elements;
  };

  return (
    <div className="min-h-screen bg-background">
      
      <Navbar />

      {/* Hero */}
      <section className="bg-hero pt-32 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-hero-foreground/50 hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-hero-foreground leading-[1.1] mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-hero-foreground/40">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" /> {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div id="blog-content" className="max-w-3xl mx-auto">
            {renderContent(post.content)}

            {/* Internal Links */}
            {post.internalLinks.length > 0 && (
              <div className="mt-12 p-6 rounded-2xl border border-border bg-card">
                <h3 className="text-lg font-semibold text-foreground mb-4">Related Globify Services</h3>
                <div className="flex flex-wrap gap-3">
                  {post.internalLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
                    >
                      {link.label}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* FAQ Section */}
            {post.faqs.length > 0 && (
              <div className="mt-16">
                <h2 className="text-2xl font-semibold text-foreground mb-8">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {post.faqs.map((faq, idx) => (
                    <div key={idx} className="p-6 rounded-2xl border border-border bg-card">
                      <h3 className="text-base font-semibold text-foreground mb-3">{faq.question}</h3>
                      <p className="text-sm text-foreground/60 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="mt-16 p-8 rounded-2xl bg-primary/5 border border-primary/10 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Ready to Take the Next Step?
              </h3>
              <p className="text-sm text-foreground/60 mb-6 max-w-md mx-auto">
                Let Globify help you implement these strategies for your business in the UAE or India.
              </p>
              <button
                onClick={() => openContactDialog()}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                Schedule a Consultation <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 section-dark">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-semibold text-section-dark-foreground mb-8">
              More in {post.category}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((rp) => (
                <Link key={rp.id} href={`/blog/${rp.slug}`} className="group">
                  <div className="p-6 rounded-2xl border border-section-dark-foreground/[0.06] hover:border-primary/20 transition-all">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-3">
                      {rp.category}
                    </span>
                    <h3 className="text-lg font-semibold text-section-dark-foreground group-hover:text-primary transition-colors mb-2">
                      {rp.title}
                    </h3>
                    <p className="text-sm text-section-dark-foreground/40 line-clamp-2">{rp.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default BlogPost;
