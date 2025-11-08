"use client"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [waitlistForm, setWaitlistForm] = useState({ name: "", college: "", email: "", year: "", branch: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleWaitlistSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 border-b border-border">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <div className="text-2xl font-bold text-foreground">NETWORK</div>
          <div className="hidden md:flex gap-12 items-center">
            <Link href="/who-we-are" className="text-sm text-foreground hover:text-accent transition-colors">
              Who We Are
            </Link>
            <Link href="/what-we-do" className="text-sm text-foreground hover:text-accent transition-colors">
              What We Do
            </Link>
            <a href="#waitlist" className="text-sm text-foreground hover:text-accent transition-colors">
              Join the Waitlist
            </a>
            <button className="px-6 py-2 bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors">
              Get Access
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Video Background */}
      <section className="relative w-full h-screen flex items-end pt-24 overflow-hidden bg-foreground">
        <div className="absolute inset-0 w-full h-full">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202025-11-04%20at%209.03.05%20PM-pcko2gcrbU5m1VUCI1GhnnVlARK7gG.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 w-full px-8 pb-24">
          <div className="max-w-4xl">
            <h1 className="text-7xl md:text-8xl font-serif font-bold text-white mb-4 leading-tight">Make Noise.</h1>
            <h1 className="text-7xl md:text-8xl font-serif font-bold text-accent mb-8 leading-tight">Get Noticed.</h1>
            <p className="text-2xl text-white/90 mb-6 font-semibold">Not social, not corporate, just students.</p>
            <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
              A network that exists for one reason — to make student collaboration effortless. Nothing more. Nothing
              less.
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white" />
        </div>
      </section>

      {/* Video Description Section */}
      <section className="py-28 px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-sm font-semibold text-muted-foreground mb-8 tracking-widest uppercase">The Story</h2>
            </div>
            <div>
              <h3 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-8 leading-tight">
                We saw how disconnected campuses really are
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Great students, great ideas, but no real way to find each other. So we built NETWORK, a platform where
                students can discover peers, join groups, share projects, and collaborate across campuses where
                connections turn into ideas you didn't know were possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="py-28 px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-serif font-bold text-foreground mb-20">Key Highlights</h2>

          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-foreground">Campus Calendar</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                See what's happening around your campus — events, fests, clubs, and competitions — all in one place.
              </p>
            </div>
            <div>
              <img
                src="/students-at-campus-event.jpg"
                alt="Campus events and activities"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div>
              <img
                src="/students-working-on-creative-project-together.jpg"
                alt="Student groups and communities"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-foreground">Groups & Communities</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Join groups that speak your language — AI, design, music, startups, or memes. Find your tribe.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-foreground">Projects & Startups</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Show what you're building. Find teammates. Turn your ideas into something that matters.
              </p>
            </div>
            <div>
              <img
                src="/team-brainstorming-ideas-whiteboard.jpg"
                alt="Student projects and startups"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <img
                src="/student-portfolio-profile-showcase.jpg"
                alt="Student profiles showcase"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-foreground">Verified Student Profiles</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Your profile, your vibe — verified by your college email. Post your projects. Share your ideas. Let the
                campus see what you're really capable of.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cross Campus Collaboration */}
      <section className="py-28 px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <img
                src="/students-collaborating-together-at-campus.jpg"
                alt="Cross campus collaboration"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-6xl font-serif font-bold text-foreground mb-8 leading-tight">
                Collaborate Across Campuses
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Your ideas don't have to stop at your college walls. Find teammates, join projects, and build with
                students from other campuses — together, your work goes further.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Voices Section */}
      <section className="py-28 px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-serif font-bold text-foreground mb-20 text-center">Student Voices</h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-background p-8 rounded-lg border-l-4 border-accent">
              <p className="text-lg text-muted-foreground mb-4 italic leading-relaxed">
                "I didn't even know half the events were happening until I saw them here. Now I actually plan my week
                around them."
              </p>
              <p className="font-semibold text-foreground">Anika, beta tester</p>
            </div>
            <div className="bg-background p-8 rounded-lg border-l-4 border-accent">
              <p className="text-lg text-muted-foreground mb-4 italic leading-relaxed">
                "Finally, a calendar that's not just another boring app. I can see all club meets, workshops, and
                competitions in one place."
              </p>
              <p className="font-semibold text-foreground">Rohan, pilot user</p>
            </div>
            <div className="bg-background p-8 rounded-lg border-l-4 border-accent">
              <p className="text-lg text-muted-foreground mb-4 italic leading-relaxed">
                "I love how easy it is to see what other students are building. Makes me want to start something
                myself."
              </p>
              <p className="font-semibold text-foreground">Rohan, pilot user</p>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-28 px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl font-serif font-bold text-foreground mb-8 text-center">Join the Waitlist</h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Be among the first students to experience NETWORK. Early access coming soon.
          </p>

          <form onSubmit={handleWaitlistSubmit} className="bg-background p-12 rounded-lg border-2 border-accent">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="Full Name"
                value={waitlistForm.name}
                onChange={(e) => setWaitlistForm({ ...waitlistForm, name: e.target.value })}
                className="px-4 py-3 bg-muted border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={waitlistForm.email}
                onChange={(e) => setWaitlistForm({ ...waitlistForm, email: e.target.value })}
                className="px-4 py-3 bg-muted border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
                required
              />
              <input
                type="text"
                placeholder="College Name"
                value={waitlistForm.college}
                onChange={(e) => setWaitlistForm({ ...waitlistForm, college: e.target.value })}
                className="px-4 py-3 bg-muted border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
                required
              />
              <input
                type="text"
                placeholder="Year (e.g., 2nd Year)"
                value={waitlistForm.year}
                onChange={(e) => setWaitlistForm({ ...waitlistForm, year: e.target.value })}
                className="px-4 py-3 bg-muted border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Branch/Major"
              value={waitlistForm.branch}
              onChange={(e) => setWaitlistForm({ ...waitlistForm, branch: e.target.value })}
              className="w-full px-4 py-3 bg-muted border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent mb-6"
              required
            />
            <button
              type="submit"
              className="w-full px-8 py-3 bg-accent text-accent-foreground font-bold hover:bg-accent/90 transition-colors"
            >
              {submitted ? "Submitted!" : "Join Waitlist"}
            </button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 bg-foreground text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl md:text-7xl font-serif font-bold mb-8">Ready to Join the Movement?</h2>
          <p className="text-xl text-white/80 mb-12 leading-relaxed">
            Be among the first to connect with an extraordinary network of driven students across campuses.
          </p>
          <button className="px-10 py-4 bg-accent text-accent-foreground font-bold text-lg hover:bg-accent/90 transition-colors">
            Get Early Access
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 mb-12">
            <div>
              <h3 className="font-bold text-lg mb-4">NETWORK</h3>
              <p className="text-sm text-muted-foreground">Built by students, for students.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
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
                  <a href="#waitlist" className="hover:text-foreground transition">
                    Join Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
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
