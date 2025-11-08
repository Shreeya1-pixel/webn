"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function WhoWeAre() {
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
            <Link href="/who-we-are" className="text-sm text-accent font-semibold">
              Who We Are
            </Link>
            <Link href="/what-we-do" className="text-sm text-foreground hover:text-accent transition-colors">
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
            Campuses are full of students, projects, and events — but nobody knows what's happening.
          </h1>
          <p className="text-2xl text-muted-foreground max-w-3xl leading-relaxed">
            Clubs, workshops, and opportunities get lost in messages, WhatsApp groups, and confusion. NETWORK exists to
            make all of this visible, organized, and easy to join.
          </p>
        </div>
      </section>

      {/* Why We Built Section */}
      <section className="py-28 px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-6xl font-serif font-bold text-foreground mb-8 leading-tight">Why We Built NETWORK</h2>
            </div>

            <div className="space-y-8">
              <p className="text-xl text-muted-foreground leading-relaxed">
                College is full of energy, ideas, and people who could change the world—but everything stays scattered.
                You meet great people, but miss greater opportunities. You build things, but they vanish in your
                folders.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We're creating one home where students can connect, create, and be seen. Where your college life becomes
                a story worth showing—and where collaboration becomes second nature.
              </p>
              <p className="text-xl text-accent font-semibold">We built NETWORK because we lived the frustration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="py-28 px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-6xl font-serif font-bold text-foreground mb-8 leading-tight">The Founder Story</h2>
            </div>

            <div className="space-y-8">
              <p className="text-xl text-muted-foreground leading-relaxed">
                We were two students, constantly running into the same frustration: there was so much happening —
                projects, events, ideas — but we didn't know about any of it. People were building amazing things,
                starting clubs, launching projects... and it was invisible.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Everything stayed local — inside a class, a WhatsApp group, or our own campus. We wanted to meet
                students doing something different, get inspired, and actually collaborate. But nothing let us see
                beyond our immediate world, and we kept missing opportunities — the events, the projects, the people who
                could actually change how we learn and create.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                So we built NETWORK. A space where students can see what's happening across campuses, discover peers,
                join groups, follow projects, and track everything in one place — the calendar, the updates, the ideas —
                so nothing gets lost and every opportunity is in front of you.
              </p>
              <p className="text-xl text-accent font-semibold">
                Every feature comes from that one question: How do we make it impossible for any student, project, or
                event to slip through the cracks?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-28 px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <img
                src="/diverse-students-smiling-and-collaborating.jpg"
                alt="Student community"
                className="w-full h-auto rounded-lg"
              />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-8 tracking-widest uppercase">
                Our Mission
              </h3>
              <h2 className="text-6xl font-serif font-bold text-foreground mb-12 leading-tight">
                We're here to shake up student life.
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>To make talent impossible to ignore.</p>
                <p>To turn strangers into squads, and ideas into impact.</p>
                <p>To make campus feel less like a bubble—and more like the start of something big.</p>
                <p className="text-accent font-semibold">One spark. One chat. One bold move at a time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-28 px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-serif font-bold text-foreground mb-20">Our Values</h2>

          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-foreground">Discovery</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The world is bigger than our classrooms. We believe in seeing it all, learning from it, and connecting
                with it.
              </p>
            </div>
            <div>
              <img
                src="/students-collaborating-together-at-campus.jpg"
                alt="Discovery through collaboration"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div>
              <img
                src="/diverse-students-smiling-and-collaborating.jpg"
                alt="Inspiration from peers"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-foreground">Inspiration</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ideas are contagious. Exposure to what others are building fuels creativity and ambition.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-foreground">Collaboration & Impact</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Alone we go fast, together we go far. True progress happens when students build with others, not just
                alongside them.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every connection, every idea, every interaction should create meaning. Nothing should be lost, and every
                opportunity should count.
              </p>
            </div>
            <div>
              <img
                src="/team-brainstorming-ideas-whiteboard.jpg"
                alt="Collaboration and impact"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-28 px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-serif font-bold text-foreground mb-20 text-center">The Team</h2>

          <div className="grid md:grid-cols-2 gap-20 mb-20">
            <div className="space-y-8">
              <img
                src="/founder-portrait-creative-casual.jpg"
                alt="Jannat Chhabra"
                className="w-full h-auto rounded-lg"
              />
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-3">Jannat Chhabra</h3>
                <p className="text-accent font-semibold mb-4">Co-founder — BITS Pilani, Computer Science</p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Jannat is fascinated by how things work — from complex systems to big ideas. Whether it's the stock
                  market, astrophysics, or patterns in everyday life, she loves dissecting problems and exploring the
                  principles behind them. Her curiosity drives her to understand not just what happens, but why it
                  happens.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Outside of academics, Jannat enjoys traveling, listening to music, solving puzzles like Rubik's Cubes,
                  playing basketball, and having meaningful conversations with friends. She's drawn to meeting people
                  with different mindsets, learning from their experiences, and discovering perspectives that expand her
                  own thinking.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <img
                src="/founder-portrait-creative-casual.jpg"
                alt="Shreya Gupta"
                className="w-full h-auto rounded-lg"
              />
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-3">Shreya Gupta</h3>
                <p className="text-accent font-semibold mb-4">Co-founder — BITS Pilani</p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Shreya thrives on solving problems and figuring out technical challenges. Practical and analytical,
                  she brings clarity and focus to every project, making sure ideas turn into action.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  In her free time, Shreya enjoys reading, playing volleyball, dancing, and exploring tech challenges
                  like coding, CTS, or puzzles that test her problem-solving skills. She approaches everything with
                  curiosity and precision, balancing creativity with execution.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-muted/50 p-12 rounded-lg border-2 border-accent">
            <h3 className="text-2xl font-bold text-foreground mb-4">Guided by</h3>
            <p className="text-lg text-muted-foreground">
              Prof. K.K. Singh, Head of General Sciences, BITS Pilani — who reminded us that ideas only grow when
              shared.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 bg-foreground text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl md:text-7xl font-serif font-bold mb-8">Be Part of the Movement</h2>
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
