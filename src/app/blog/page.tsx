"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import {
  ArrowRight,
  Search,
  Calendar,
  Clock,
  TrendingUp,
  BookOpen,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { blogPosts, blogCategories, type BlogCategory } from "@/data/blogData";
import { useContactDialog } from "@/contexts/ContactDialogContext";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | "All">(
    "All",
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(9);
  const { openContactDialog } = useContactDialog();

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const featuredPosts = blogPosts.filter((p) => p.featured);
  const latestPosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  // Reset visible count when filter changes
  const handleCategoryChange = (cat: BlogCategory | "All") => {
    setActiveCategory(cat);
    setVisibleCount(9);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-hero pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-4">
              Insights & Strategy
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hero-foreground leading-[1.1] mb-6">
              Digital Commerce <br />
              <span className="text-primary">Insights & Trends</span>
            </h1>
            <p className="text-lg text-hero-foreground/60 leading-relaxed max-w-2xl mx-auto mb-8">
              Expert perspective on e-commerce, technology, and digital growth
              strategies for businesses in the UAE and India. Data-driven,
              actionable, and built for decision-makers.
            </p>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-hero-foreground/30" />
              <input
                type="text"
                placeholder="Search insights..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-full bg-hero-foreground/5 border border-hero-foreground/10 text-hero-foreground text-sm placeholder:text-hero-foreground/30 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="bg-background border-b border-border sticky top-[73px] z-40 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 py-4 overflow-x-auto no-scrollbar">
            <button
              onClick={() => handleCategoryChange("All")}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeCategory === "All"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted/10 text-foreground/60 hover:bg-muted/20"
              }`}
            >
              All Posts
            </button>
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted/10 text-foreground/60 hover:bg-muted/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blogs */}
      {activeCategory === "All" && searchQuery === "" && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-2 mb-10">
              <Sparkles className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-semibold text-foreground">
                Featured Insights
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, i) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block h-full"
                  >
                    <div className="h-full rounded-2xl border border-border hover:border-primary/30 bg-card p-6 transition-all hover:shadow-lg">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                          {post.category}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-accent/50 text-accent-foreground text-sm font-semibold">
                          Featured
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-snug mb-3">
                        {post.title}
                      </h3>
                      <p className="text-sm text-foreground/50 leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-3 text-sm text-foreground/40">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {new Date(post.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {post.readTime}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Latest / Filtered Insights */}
      <section
        className={`py-20 ${activeCategory === "All" && searchQuery === "" ? "section-dark" : "bg-background"}`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 mb-10">
            <BookOpen className="w-5 h-5 text-primary" />
            <h2
              className={`text-2xl font-semibold ${activeCategory === "All" && searchQuery === "" ? "text-section-dark-foreground" : "text-foreground"}`}
            >
              {activeCategory === "All"
                ? "Latest Insights"
                : `${activeCategory} Insights`}
            </h2>
            <span
              className={`ml-2 text-sm ${activeCategory === "All" && searchQuery === "" ? "text-section-dark-foreground/40" : "text-foreground/40"}`}
            >
              ({filteredPosts.length}{" "}
              {filteredPosts.length === 1 ? "article" : "articles"})
            </span>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-foreground/40 text-lg">
                No articles found matching your criteria.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="wait">
                {latestPosts.map((post, i) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group block h-full"
                    >
                      <div
                        className={`h-full rounded-2xl border p-6 transition-all hover:shadow-lg ${
                          activeCategory === "All" && searchQuery === ""
                            ? "border-section-dark-foreground/[0.06] hover:border-primary/20 bg-section-dark-foreground/[0.03]"
                            : "border-border hover:border-primary/30 bg-card"
                        }`}
                      >
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                          {post.category}
                        </span>
                        <h3
                          className={`text-lg font-semibold group-hover:text-primary transition-colors leading-snug mb-3 ${
                            activeCategory === "All" && searchQuery === ""
                              ? "text-section-dark-foreground"
                              : "text-foreground"
                          }`}
                        >
                          {post.title}
                        </h3>
                        <p
                          className={`text-sm leading-relaxed mb-4 line-clamp-3 ${
                            activeCategory === "All" && searchQuery === ""
                              ? "text-section-dark-foreground/50"
                              : "text-foreground/50"
                          }`}
                        >
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between mt-auto">
                          <div
                            className={`flex items-center gap-3 text-sm ${
                              activeCategory === "All" && searchQuery === ""
                                ? "text-section-dark-foreground/30"
                                : "text-foreground/40"
                            }`}
                          >
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5" />
                              {new Date(post.date).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" />
                              {post.readTime}
                            </span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}

          {/* Load More + Count */}
          {filteredPosts.length > 0 && (
            <div className="flex flex-col items-center gap-4 mt-12">
              <p
                className={`text-sm ${activeCategory === "All" && searchQuery === "" ? "text-section-dark-foreground/40" : "text-foreground/40"}`}
              >
                Showing {latestPosts.length} of {filteredPosts.length} articles
              </p>
              {hasMore && (
                <button
                  onClick={() => setVisibleCount((prev) => prev + 9)}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                  Load More
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <TrendingUp className="w-4 h-4" />
              Ready to Grow?
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-[1.1] mb-6">
              Turn Insights Into <span className="text-primary">Action</span>
            </h2>
            <p className="text-lg text-foreground/50 leading-relaxed mb-10 max-w-2xl mx-auto">
              Our team of digital commerce experts helps businesses in the UAE
              and India implement strategies that drive measurable growth. Let's
              discuss your goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={openContactDialog}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                Schedule a Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-4 rounded-full text-sm font-semibold hover:border-primary/30 hover:text-primary transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
