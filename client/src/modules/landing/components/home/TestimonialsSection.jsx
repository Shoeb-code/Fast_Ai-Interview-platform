import React from "react";
import { Star, CheckCircle, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aman Verma",
    role: "Full-Stack Engineer",
    company: "Placed at Unicorn Fintech",
    initials: "AV",
    avatarBg: "bg-indigo-100 text-indigo-700",
    text: "Practicing multiple rounds helped me pinpoint exactly why my explanations of concurrency and distributed state were falling short. The rubric score and instant breakdown were game-changing.",
  },
  {
    name: "Sara Khan",
    role: "Frontend Engineer",
    company: "Placed at Global SaaS",
    initials: "SK",
    avatarBg: "bg-violet-100 text-violet-700",
    text: "The voice mode simulates the exact cadence of a live recruiter technical screen. I went from stumbling on architectural trade-offs to receiving two competitive offers within a month.",
  },
  {
    name: "Rohit Mehta",
    role: "Cloud & DevOps Engineer",
    company: "Tier-1 Cloud Provider",
    initials: "RM",
    avatarBg: "bg-emerald-100 text-emerald-700",
    text: "The evaluation is genuinely rigorous—not generic praise. It identified that my answers lacked depth on container network policies, giving me a clear checklist of what to study before on-sites.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="border-y border-slate-200/80 bg-slate-50/60 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200/80 bg-indigo-50/80 px-3.5 py-1 text-xs font-semibold text-indigo-700">
            <span>Candidate Success</span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Trusted by Candidates Landing Top Tech Offers
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Read how developers and engineers level up their communication and technical precision.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="mt-14 sm:mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-xs transition hover:border-slate-300 hover:shadow-md"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="mt-4 text-sm leading-relaxed text-slate-700">
                  "{item.text}"
                </p>
              </div>

              {/* Author Profile */}
              <div className="mt-6 flex items-center gap-3.5 border-t border-slate-100 pt-5">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl font-bold text-sm ${item.avatarBg}`}>
                  {item.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    {item.role} • <span className="text-emerald-700 font-medium">{item.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Metric Strip */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-xs">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">12,500+</p>
              <p className="text-xs text-slate-500 mt-1 font-medium">Candidates Prepared</p>
            </div>
            <div className="pt-4 sm:pt-0">
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">92%</p>
              <p className="text-xs text-slate-500 mt-1 font-medium">Interview Pass Rate</p>
            </div>
            <div className="pt-4 sm:pt-0">
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">500+</p>
              <p className="text-xs text-slate-500 mt-1 font-medium">Curated Role Profiles</p>
            </div>
            <div className="pt-4 sm:pt-0">
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">4.9 / 5</p>
              <p className="text-xs text-slate-500 mt-1 font-medium">Average User Rating</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;