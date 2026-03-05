import './style.css'

const navItems = [
  { href: '/', label: 'Home', key: 'home' },
  { href: '/about.html', label: 'About', key: 'about' },
  { href: '/services.html', label: 'Services', key: 'services' },
  { href: '/prices.html', label: 'Prices', key: 'prices' },
  { href: '/how-it-works.html', label: 'How It Works', key: 'how-it-works' },
  { href: '/faq.html', label: 'FAQ', key: 'faq' },
  { href: '/contact.html', label: 'Contact', key: 'contact' }
]

const currentPage = document.body.dataset.page || 'home'

function buildHeader() {
  const desktopLinks = navItems
    .map(
      (item) =>
        `<a class="nav-link ${item.key === currentPage ? 'active' : ''}" href="${item.href}">${item.label}</a>`
    )
    .join('')

  const mobileLinks = navItems
    .map(
      (item) =>
        `<a class="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 ${item.key === currentPage ? 'bg-white/10 text-white' : ''}" href="${item.href}">${item.label}</a>`
    )
    .join('')

  return `
    <header class="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div class="container-shell flex h-20 items-center justify-between">
        <a href="/" class="inline-flex items-center rounded-xl bg-white/95 px-2.5 py-1.5 shadow-glow sm:px-3 sm:py-2" aria-label="Sorted JA Home">
          <img src="/logo-sortedja.svg" alt="Sorted JA" class="h-7 w-auto sm:h-8 lg:h-9" />
        </a>
        <nav class="hidden items-center gap-1 lg:flex">${desktopLinks}</nav>
        <div class="hidden lg:block">
          <button data-open-modal class="btn-primary">Book Consultation</button>
        </div>
        <button id="mobile-nav-toggle" class="rounded-lg border border-white/20 p-2 text-slate-200 lg:hidden" aria-label="Open menu" aria-expanded="false">
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
      <nav id="mobile-nav" class="container-shell hidden flex-col gap-2 pb-4 lg:hidden">${mobileLinks}<button data-open-modal class="btn-primary mt-2">Book Consultation</button></nav>
    </header>
  `
}

function buildFooter() {
  return `
    <footer class="border-t border-white/10 py-10">
      <div class="container-shell grid gap-8 md:grid-cols-3">
        <div>
          <a href="/" class="inline-flex items-center rounded-xl bg-white/95 px-2.5 py-1.5 sm:px-3 sm:py-2">
            <img src="/logo-sortedja.svg" alt="Sorted JA" class="h-7 w-auto sm:h-8" />
          </a>
          <p class="mt-3 text-sm text-slate-300">Premium support for documents, government applications, business registration, travel paperwork, and diaspora services.</p>
        </div>
        <div>
          <h4 class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Quick Links</h4>
          <div class="mt-3 grid grid-cols-2 gap-2 text-sm">${navItems
            .map((item) => `<a class="text-slate-300 transition hover:text-white" href="${item.href}">${item.label}</a>`)
            .join('')}</div>
        </div>
        <div>
          <h4 class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Contact</h4>
          <p class="mt-3 text-sm text-slate-300">Kingston, Jamaica</p>
          <p class="text-sm text-slate-300">hello@sortedja.com</p>
          <p class="text-sm text-slate-300">+1 (876) 555-0199</p>
        </div>
      </div>
      <div class="container-shell mt-8 border-t border-white/10 pt-6 text-xs text-slate-400">© ${new Date().getFullYear()} Sorted JA. All rights reserved.</div>
    </footer>
  `
}

function injectSharedLayout() {
  const headerSlot = document.querySelector('[data-component="site-header"]')
  const footerSlot = document.querySelector('[data-component="site-footer"]')
  if (headerSlot) headerSlot.innerHTML = buildHeader()
  if (footerSlot) footerSlot.innerHTML = buildFooter()
}

function attachMenu() {
  const toggleButton = document.querySelector('#mobile-nav-toggle')
  const menu = document.querySelector('#mobile-nav')
  if (!toggleButton || !menu) return

  toggleButton.addEventListener('click', () => {
    const expanded = toggleButton.getAttribute('aria-expanded') === 'true'
    toggleButton.setAttribute('aria-expanded', String(!expanded))
    menu.classList.toggle('hidden')
  })
}

function injectModal() {
  const modal = document.createElement('div')
  modal.id = 'site-modal'
  modal.className = 'hidden fixed inset-0 z-50 bg-slate-950/80 p-4 backdrop-blur-sm'
  modal.innerHTML = `
    <div class="mx-auto mt-10 max-w-lg rounded-2xl border border-white/15 bg-slate-900 p-6 shadow-glow">
      <div class="flex items-start justify-between gap-4">
        <h3 class="text-2xl font-semibold">Book a Consultation</h3>
        <button data-close-modal class="rounded-lg p-2 text-slate-300 hover:bg-white/10" aria-label="Close modal">✕</button>
      </div>
      <p class="mt-2 text-sm text-slate-300">Tell us what service you need and our team will reach out within one business day.</p>
      <form class="mt-6 grid gap-4">
        <input class="rounded-xl border border-white/15 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-brand-400" type="text" placeholder="Full name" required />
        <input class="rounded-xl border border-white/15 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-brand-400" type="email" placeholder="Email address" required />
        <select class="rounded-xl border border-white/15 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-brand-400" required>
          <option value="">Select service</option>
          <option>Travel & Immigration</option>
          <option>Motor Vehicle Services</option>
          <option>Personal Documents</option>
          <option>Business Registration & Startup</option>
          <option>Diaspora Services</option>
        </select>
        <textarea class="min-h-28 rounded-xl border border-white/15 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-brand-400" placeholder="Brief details"></textarea>
        <button type="submit" class="btn-primary w-full">Submit Request</button>
      </form>
    </div>
  `
  document.body.append(modal)

  const closeModal = () => modal.classList.add('hidden')
  const openModal = () => modal.classList.remove('hidden')

  document.querySelectorAll('[data-open-modal]').forEach((button) => {
    button.addEventListener('click', openModal)
  })

  modal.addEventListener('click', (event) => {
    if (event.target === modal || event.target.closest('[data-close-modal]')) closeModal()
  })

  modal.querySelector('form')?.addEventListener('submit', (event) => {
    event.preventDefault()
    closeModal()
    alert('Thanks! Your request has been received.')
  })
}

function animateReveal() {
  const reveals = document.querySelectorAll('.reveal')
  if (reveals.length === 0) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible')
      })
    },
    { threshold: 0.18 }
  )

  reveals.forEach((element) => observer.observe(element))
}

function setupSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const targetId = anchor.getAttribute('href')
      if (!targetId || targetId === '#') return
      const targetEl = document.querySelector(targetId)
      if (!targetEl) return
      event.preventDefault()
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  })
}

function setupFaqAccordion() {
  const faqItems = document.querySelectorAll('[data-faq-item]')
  if (faqItems.length === 0) return

  faqItems.forEach((item) => {
    const trigger = item.querySelector('[data-faq-trigger]')
    trigger?.addEventListener('click', () => {
      const isOpen = item.classList.contains('open')
      faqItems.forEach((el) => el.classList.remove('open'))
      if (!isOpen) item.classList.add('open')
    })
  })
}

injectSharedLayout()
attachMenu()
injectModal()
animateReveal()
setupSmoothAnchors()
setupFaqAccordion()
