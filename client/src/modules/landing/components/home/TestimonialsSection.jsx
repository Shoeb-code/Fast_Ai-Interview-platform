import React from "react";

const testimonials = [
  {
    name: "Aman Verma",
    role: "MERN Developer",
    text: "This platform genuinely improved my confidence before placement interviews. The AI feedback on communication and technical answers felt extremely practical.",
    rating: "★★★★★",
    initials: "AV",
  },
  {
    name: "Sara Khan",
    role: "Frontend Engineer",
    text: "The AI scoring dashboard and detailed reports helped me identify weak areas quickly. It feels like having a personal interview coach.",
    rating: "★★★★★",
    initials: "SK",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      
      {/* Heading */}
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-indigo-400">
          Trusted by Learners
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          What Our
          <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Users Say
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-400">
          Hear from students and professionals who improved
          their interview performance with AI-powered practice.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {testimonials.map((item) => (
          <div
            key={item.name}
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-indigo-500/40 hover:bg-white/10"
          >
            {/* Stars */}
            <p className="text-lg text-yellow-400">
              {item.rating}
            </p>

            {/* Review */}
            <p className="mt-5 text-base leading-8 text-gray-300">
              “{item.text}”
            </p>

            {/* User */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 font-semibold">
                {item.initials}
              </div>

              <div>
                <h4 className="font-semibold">
                  {item.name}
                </h4>

                <p className="text-sm text-gray-400">
                  {item.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Trust Strip */}
      <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-8 text-center backdrop-blur-xl">
        <h3 className="text-2xl font-bold">
          Loved by students, developers & job seekers
        </h3>

        <p className="mt-3 text-gray-400">
          Join thousands improving their interview
          confidence every day.
        </p>
      </div>
    </section>
  );
};

export default TestimonialsSection;