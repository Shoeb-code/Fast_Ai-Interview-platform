return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-md"
      />
  
      {/* Modal */}
      <div className="fixed left-1/2 top-1/2 z-[100] max-h-[90vh] w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
        {/* Top Accent */}
        <div className="absolute left-0 top-0 h-[3px] w-full rounded-t-[32px] bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500" />
  
        {/* Glow */}
        <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl" />
  
        <div className="relative z-10">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300">
                Profile Management
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-white">
                Edit Profile
              </h2>
            </div>
  
            <button
              onClick={onClose}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-slate-400 transition hover:bg-white/[0.08] hover:text-white"
            >
              <X size={18} />
            </button>
          </div>
  
          {/* Form */}
          <div className="grid gap-5 md:grid-cols-2">
            <Input
              name="fullName"
              label="Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />
            <Input
              name="currentRole"
              label="Current Role"
              value={formData.currentRole}
              onChange={handleChange}
            />
            <Input
              name="experience"
              label="Experience"
              value={formData.experience}
              onChange={handleChange}
            />
            <Input
              name="course"
              label="Course"
              value={formData.course}
              onChange={handleChange}
            />
            <Input
              name="dreamCompany"
              label="Dream Company"
              value={formData.dreamCompany}
              onChange={handleChange}
            />
            <Input
              name="phone"
              label="Phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <Input
              name="location"
              label="Location"
              value={formData.location}
              onChange={handleChange}
            />
            <Input
              name="website"
              label="Website"
              value={formData.website}
              onChange={handleChange}
            />
            <Input
              name="linkedin"
              label="LinkedIn"
              value={formData.linkedin}
              onChange={handleChange}
            />
            <Input
              name="github"
              label="GitHub"
              value={formData.github}
              onChange={handleChange}
            />
            <Input
              name="leetcode"
              label="LeetCode"
              value={formData.leetcode}
              onChange={handleChange}
            />
            <Input
              name="portfolio"
              label="Portfolio"
              value={formData.portfolio}
              onChange={handleChange}
            />
          </div>
  
          {/* Textareas */}
          <div className="mt-6 space-y-4">
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Tell us about yourself..."
              className="h-32 w-full rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-white placeholder:text-slate-500 outline-none transition focus:border-indigo-500/40 focus:ring-2 focus:ring-indigo-500/10"
            />
  
            <textarea
              name="objective"
              value={formData.objective}
              onChange={handleChange}
              placeholder="Your career objective..."
              className="h-32 w-full rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-white placeholder:text-slate-500 outline-none transition focus:border-purple-500/40 focus:ring-2 focus:ring-purple-500/10"
            />
          </div>
  
          {/* Save Button */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="mt-8 flex w-full items-center justify-center gap-3 rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 py-4 font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:scale-[1.01] hover:shadow-indigo-500/30 disabled:opacity-50"
          >
            <Save size={17} />
            {loading ? "Saving Changes..." : "Save Changes"}
          </button>
        </div>
      </div>
    </>
  );

  