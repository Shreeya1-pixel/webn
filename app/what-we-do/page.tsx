"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function WhatWeDo() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 border-b border-border">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-foreground hover:text-accent transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-2xl font-bold">NETWORK</span>
          </Link>
          <div className="hidden md:flex gap-12 items-center">
            <Link href="/who-we-are" className="text-sm text-foreground hover:text-accent transition-colors">
              Who We Are
            </Link>
            <Link href="/what-we-do" className="text-sm text-accent font-semibold">
              What We Do
            </Link>
            <a href="/#impact" className="text-sm text-foreground hover:text-accent transition-colors">
              Impact
            </a>
          </div>
        </div>
      </nav>

      <div className="pt-32"></div>

      {/* Hero Section */}
      <section className="py-28 px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-8xl font-serif font-bold text-foreground leading-tight mb-8">
            One place to meet, build, and grow
          </h1>
          <p className="text-2xl text-muted-foreground max-w-3xl leading-relaxed">Across ideas, clubs, and campuses.</p>
        </div>
      </section>

      {/* Platform Description */}
      <section className="py-28 px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-6xl font-serif font-bold text-foreground mb-8 leading-tight">What is NETWORK?</h2>
            </div>

            <div className="space-y-8">
              <p className="text-xl text-muted-foreground leading-relaxed">
                A platform for students where your curiosity meets opportunity, your projects find collaborators, and
                your network grows with mentors, alumni, and companies.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                It's where students create, share, and find the people who matter — without the noise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Do Section */}
      <section className="py-28 px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-serif font-bold text-foreground mb-20">Here's What You Can Do</h2>

          <div className="space-y-20">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-foreground">Discover Peers</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Find students who share your interests — whether they're across the hall or across the world.
                </p>
              </div>
              <img
                src="/students-collaborating-together-at-campus.jpg"
                alt="Discover peers"
                className="w-full h-auto rounded-lg"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <img
                src="/student-portfolio-profile-showcase.jpg"
                alt="Showcase projects"
                className="w-full h-auto rounded-lg"
              />
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-foreground">Showcase Projects</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Upload your ideas, research, or side hustles — and let the right eyes find you.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-foreground">Find Teammates</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Hackathons, competitions, startups — discover the collaborators who complement your skills.
                </p>
              </div>
              <img
                src="/team-brainstorming-ideas-whiteboard.jpg"
                alt="Find teammates"
                className="w-full h-auto rounded-lg"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <img
                src="/students-at-campus-event.jpg"
                alt="Connect with mentors"
                className="w-full h-auto rounded-lg"
              />
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-foreground">Connect & Learn</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Get guidance, mentorship, and insights from teachers, alumni, and industry professionals who've been
                  there before.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-foreground">Get Noticed</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Your work, collaborations, and achievements attract internships, opportunities, and recruitment in
                  real time.
                </p>
              </div>
              <img
                src="/diverse-students-smiling-and-collaborating.jpg"
                alt="Get noticed by companies"
                className="w-full h-auto rounded-lg"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <img
                src="/students-working-on-creative-project-together.jpg"
                alt="Attend events"
                className="w-full h-auto rounded-lg"
              />
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-foreground">Attend Campus Events</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From fests to workshops to club meetings, see everything happening on and beyond your campus in one
                  place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We're Different */}
      <section className="py-28 px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <img
                src="/students-working-on-creative-project-together.jpg"
                alt="Different approach"
                className="w-full h-auto rounded-lg"
              />
            </div>

            <div>
              <h2 className="text-6xl font-serif font-bold text-foreground mb-8 leading-tight">How We're Different</h2>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                We're not LinkedIn. We're not Discord.
              </p>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We're NETWORK — your digital campus, alive with ideas, energy, and real connections. A space where
                students build, teachers mentor, alumni guide, and companies discover talent — all in one student-first
                ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Impact */}
      <section className="py-28 px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-serif font-bold text-foreground mb-16">The Impact</h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-2 bg-accent flex-shrink-0"></div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Students from different branches launch startups together.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-2 bg-accent flex-shrink-0"></div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Projects find funding and collaborators instantly.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-2 bg-accent flex-shrink-0"></div>
              <p className="text-xl text-muted-foreground leading-relaxed">Clubs expand beyond their campuses.</p>
            </div>
            <div className="flex gap-4">
              <div className="w-2 bg-accent flex-shrink-0"></div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Mentors and alumni guide ideas into action.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-2 bg-accent flex-shrink-0"></div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Companies discover top student talent effortlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Future */}
      <section className="py-32 px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-serif font-bold text-foreground mb-16">The Future</h2>

          <div className="space-y-8">
            <p className="text-xl text-muted-foreground leading-relaxed">
              A world where students lead, create, and collaborate without limits. Where ideas reach across campuses,
              across countries, and find the people who can make them happen.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Where guidance from teachers and alumni accelerates growth and turns ambition into achievement. Where
              companies notice talent in real time, rewarding skill, innovation, and impact.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Where every connection, every project, and every collaboration shapes a future that belongs to the
              student.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 px-8 bg-accent/10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-background rounded-lg p-12 border-2 border-accent">
            <h2 className="text-5xl font-serif font-bold text-foreground mb-6">Talk to Us Like You Would a Friend</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Got questions, ideas, or just want to say hi? We'd love to hear from you.
            </p>
            <button className="px-10 py-4 bg-accent text-accent-foreground font-bold hover:bg-accent/90 transition-colors flex items-center gap-2">
              Contact Us <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 bg-foreground text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl md:text-7xl font-serif font-bold mb-8">Ready to Experience NETWORK?</h2>
          <p className="text-xl text-white/80 mb-12 leading-relaxed">
            Join thousands of students already connecting, collaborating, and creating.
          </p>
          <button className="px-10 py-4 bg-accent text-accent-foreground font-bold text-lg hover:bg-accent/90 transition-colors">
            Get Early Access
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/who-we-are" className="hover:text-foreground transition">
                    Who We Are
                  </a>
                </li>
                <li>
                  <a href="/what-we-do" className="hover:text-foreground transition">
                    What We Do
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-foreground transition">
                    Join Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 NETWORK — Built by Students, for Students.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
