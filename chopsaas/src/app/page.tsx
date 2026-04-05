import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* Grid background */}
      <div
        className="fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🍽️</span>
          <span
            className="text-xl font-bold tracking-tight"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Chop<span className="text-[#f97316]">Saas</span>
          </span>
        </div>
        <div className="flex items-center gap-6">
          <Link
            href="/auth/login"
            className="text-sm text-zinc-400 hover:text-white transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="/auth/register"
            className="text-sm bg-[#f97316] text-white px-4 py-2 rounded-lg hover:bg-[#ea6c0a] transition-colors font-medium"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 pt-20 pb-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-zinc-400 font-medium tracking-wide uppercase">
              Multi-Vendor Restaurant Platform
            </span>
          </div>

          <h1
            className="text-6xl md:text-8xl font-bold leading-[0.95] mb-8"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Your restaurant,
            <br />
            <span className="text-[#f97316]">your menu,</span>
            <br />
            your brand.
          </h1>

          <p className="text-lg text-zinc-400 max-w-xl mb-12 leading-relaxed">
            Launch a fully branded digital ordering system for your restaurant.
            QR menus, live order tracking, staff management — all in one
            platform.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/auth/register"
              className="inline-flex items-center gap-2 bg-[#f97316] text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-[#ea6c0a] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Register Your Restaurant
              <span className="text-lg">→</span>
            </Link>
            <Link
              href="/auth/login"
              className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 text-white px-8 py-4 rounded-xl text-base font-semibold hover:border-zinc-600 transition-all"
            >
              Admin Login
            </Link>
          </div>
        </div>

        {/* Floating stat cards */}
        <div className="absolute right-8 top-24 hidden lg:flex flex-col gap-4">
          {[
            { label: 'Active Restaurants', value: '2,400+' },
            { label: 'Orders Today', value: '18,329' },
            { label: 'Avg. Setup Time', value: '< 5 min' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-2xl px-6 py-4 text-right"
            >
              <div
                className="text-2xl font-bold text-white"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-zinc-500 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-800">
          {[
            {
              icon: '📱',
              title: 'QR-Based Ordering',
              desc: 'Customers scan a table QR code and order directly — no app download needed.',
            },
            {
              icon: '🎨',
              title: 'Branded Experience',
              desc: 'Upload your logo, set your colors. Every customer sees your brand, not ours.',
            },
            {
              icon: '⚡',
              title: 'Live Order Board',
              desc: 'Kanban-style order management. Watch orders move from pending to ready in real time.',
            },
            {
              icon: '👥',
              title: 'Staff Roles',
              desc: 'Owner, manager, cashier, waiter — assign roles with the right level of access.',
            },
            {
              icon: '💳',
              title: 'Transaction Tracking',
              desc: 'Record payments, view revenue, and export reports. Full financial visibility.',
            },
            {
              icon: '📊',
              title: 'Platform Analytics',
              desc: "Super admins get a bird's-eye view of every restaurant on the platform.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="bg-[#0a0a0a] p-8 hover:bg-zinc-900/50 transition-colors group"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                {feature.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 pb-24">
        <div className="bg-[#f97316] rounded-3xl p-16 text-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 50%, #fff 0%, transparent 50%), radial-gradient(circle at 80% 50%, #fff 0%, transparent 50%)',
            }}
          />
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 relative"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Ready to go digital?
          </h2>
          <p className="text-orange-100 mb-8 text-lg relative">
            Get your restaurant online in minutes. No technical knowledge
            needed.
          </p>
          <Link
            href="/auth/register"
            className="inline-flex items-center gap-2 bg-black text-white px-10 py-4 rounded-xl text-base font-semibold hover:bg-zinc-900 transition-all relative"
          >
            Start for Free
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-900 px-8 py-8 max-w-7xl mx-auto flex items-center justify-between">
        <span
          className="text-sm font-semibold"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Chop<span className="text-[#f97316]">Saas</span>
        </span>
        <p className="text-xs text-zinc-600">
          © {new Date().getFullYear()} ChopSaas. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
