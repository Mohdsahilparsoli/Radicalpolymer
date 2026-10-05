/* Radical Polymers – shared site script (inner pages) */
(function () {
  const $ = (s, c = document) => c.querySelector(s), $$ = (s, c = document) => [...c.querySelectorAll(s)];

  /* broken image fallback: hide image, keep gradient background */
  $$('img').forEach(i => i.addEventListener('error', () => { i.style.opacity = 0 }));

  /* header, progress bar, back-to-top, timeline fill */
  const hdr = $('.hdr'), prog = $('.prog'), tt = $('.totop'), tl = $('.tl'), fill = $('.tl .fill');
  const onScroll = () => {
    const y = scrollY;
    if (hdr) hdr.classList.toggle('scrolled', y > 30);
    if (prog) prog.style.width = (y / Math.max(1, document.documentElement.scrollHeight - innerHeight) * 100) + '%';
    if (tt) tt.classList.toggle('show', y > 600);
    if (tl && fill) { const r = tl.getBoundingClientRect(); fill.style.height = Math.max(0, Math.min(r.height, innerHeight * .6 - r.top)) + 'px' }
    $$('.ts').forEach(s => { if (s.getBoundingClientRect().top < innerHeight * .6) s.classList.add('in') });
  };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  if (tt) tt.onclick = () => scrollTo({ top: 0, behavior: 'smooth' });

  /* mobile menu */
  const navEvt = () => document.dispatchEvent(new Event('navchange'));
  const closeNav = () => { document.body.classList.remove('nav-open'); navEvt() };
  const burger = $('.burger');
  if (burger) burger.onclick = e => { e.stopPropagation(); document.body.classList.toggle('nav-open'); navEvt() };
  document.addEventListener('click', e => { if (document.body.classList.contains('nav-open') && !e.target.closest('.nav-wrap,.burger')) closeNav() });
  $$('.has-dd>a').forEach(a => a.addEventListener('click', e => { if (innerWidth <= 1280) { e.preventDefault(); a.parentElement.classList.toggle('open') } }));
  $$('.nav a').forEach(a => a.addEventListener('click', () => { if (innerWidth <= 1280 && !a.parentElement.classList.contains('has-dd')) closeNav() }));
  $$('.nav-close').forEach(b => b.addEventListener('click', closeNav));
  addEventListener('resize', () => { if (innerWidth > 1280 && document.body.classList.contains('nav-open')) closeNav() });

  /* reveal on scroll */
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }), { threshold: .12 });
  $$('.rv,.q-vis').forEach(el => io.observe(el));

  /* number counters */
  const co = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return; const el = e.target, t = +el.dataset.count; let s = null;
    const st = ts => { s ??= ts; const p = Math.min((ts - s) / 2000, 1); el.textContent = Math.floor(t * (1 - Math.pow(1 - p, 4))); if (p < 1) requestAnimationFrame(st) };
    requestAnimationFrame(st); co.unobserve(el);
  }), { threshold: .5 });
  $$('[data-count]').forEach(el => co.observe(el));

  /* tabs: [data-tabs] wrapper with buttons[data-t] and panes[data-p] */
  $$('[data-tabs]').forEach(w => {
    const bs = $$('[data-t]', w), ps = $$('[data-p]', w);
    bs.forEach(b => b.onclick = () => { bs.forEach(x => x.classList.toggle('on', x === b)); ps.forEach(p => p.classList.toggle('on', p.dataset.p === b.dataset.t)) });
  });

  /* filters: [data-filter] wrapper with buttons[data-f]; items [data-c] inside [data-filter-items] */
  $$('[data-filter]').forEach(w => {
    const items = $$('[data-c]', $(w.dataset.filter));
    $$('[data-f]', w).forEach(b => b.onclick = () => {
      $$('[data-f]', w).forEach(x => x.classList.toggle('on', x === b));
      const f = b.dataset.f;
      items.forEach(c => { const show = f === 'all' || c.dataset.c.split(' ').includes(f); c.classList.toggle('hide', !show); if (show) { c.classList.remove('in'); requestAnimationFrame(() => requestAnimationFrame(() => c.classList.add('in'))) } });
    });
  });

  /* sliders */
  $$('.slider').forEach(root => {
    const tr = $('.sl-track', root); if (!tr || !tr.children.length) return;
    const ctrl = (root.dataset.ctrl && $(root.dataset.ctrl)) || root, dots = $('.sl-dots', root);
    const step = () => tr.children[0].getBoundingClientRect().width + (parseFloat(getComputedStyle(tr).columnGap) || 24);
    const pages = () => Math.max(1, Math.round((tr.scrollWidth - tr.clientWidth) / step()) + 1);
    const upd = () => { if (!dots) return; const i = Math.round(tr.scrollLeft / step());[...dots.children].forEach((d, k) => d.classList.toggle('on', k === i)) };
    const draw = () => { if (!dots) return; dots.innerHTML = ''; for (let i = 0; i < pages(); i++) { const b = document.createElement('button'); b.setAttribute('aria-label', 'Slide ' + (i + 1)); b.onclick = () => tr.scrollTo({ left: i * step(), behavior: 'smooth' }); dots.appendChild(b) } upd() };
    const next = () => { if (tr.scrollLeft + tr.clientWidth >= tr.scrollWidth - 8) tr.scrollTo({ left: 0, behavior: 'smooth' }); else tr.scrollBy({ left: step(), behavior: 'smooth' }) };
    const prev = () => { if (tr.scrollLeft <= 4) tr.scrollTo({ left: tr.scrollWidth, behavior: 'smooth' }); else tr.scrollBy({ left: -step(), behavior: 'smooth' }) };
    const n = $('.next', ctrl), p = $('.prev', ctrl); if (n) n.onclick = next; if (p) p.onclick = prev;
    tr.addEventListener('scroll', upd, { passive: true }); addEventListener('resize', draw); draw();
    let t = setInterval(next, 5500);
    root.addEventListener('mouseenter', () => clearInterval(t)); root.addEventListener('mouseleave', () => { clearInterval(t); t = setInterval(next, 5500) });
  });

  /* gallery lightbox */
  const lb = $('.lb');
  if (lb) {
    $$('[data-lb]').forEach(g => g.onclick = () => { $('img', lb).src = $('img', g).src.replace(/w=\d+/, 'w=1600'); lb.classList.add('show') });
    lb.onclick = e => { if (e.target !== $('img', lb)) lb.classList.remove('show') };
  }

  /* FAQ accordion (one open per group) */
  $$('.fq button').forEach(b => b.onclick = () => {
    const f = b.parentElement, grp = f.parentElement, o = f.classList.contains('open');
    $$('.fq', grp).forEach(x => x.classList.remove('open')); if (!o) f.classList.add('open');
  });

  /* enquiry popup: opens once per visit, and on every [data-open-enquiry] click */
  const pop = $('#enqPopup');
  const openPop = () => { if (!pop) return; pop.classList.add('show'); document.body.style.overflow = 'hidden' };
  const closePop = () => { if (!pop) return; pop.classList.remove('show'); document.body.style.overflow = '' };
  if (pop) {
    let seen = false; try { seen = !!sessionStorage.getItem('rpPopSeen') } catch (e) { }
    if (!seen) addEventListener('load', () => setTimeout(() => { if (!pop.classList.contains('show')) openPop(); try { sessionStorage.setItem('rpPopSeen', '1') } catch (e) { } }, 2500));
    pop.addEventListener('click', e => { if (e.target === pop || e.target.closest('.pop-x')) closePop() });
  }
  $$('[data-open-enquiry]').forEach(b => b.addEventListener('click', e => {
    e.preventDefault(); closeNav();
    const sel = pop && $('select[name="product"]', pop);
    if (sel && b.dataset.product) sel.value = b.dataset.product;
    openPop();
  }));
  addEventListener('keydown', e => { if (e.key === 'Escape') { closePop(); if (lb) lb.classList.remove('show'); if (document.body.classList.contains('nav-open')) closeNav() } });

  /* forms – connect your backend at the TODO line */
  $$('form.enq-f').forEach(f => f.addEventListener('submit', e => {
    e.preventDefault(); let ok = true;
    $$('[required]', f).forEach(i => {
      const v = i.value.trim(), bad = !v || (i.type === 'email' && !/^\S+@\S+\.\S+$/.test(v)) || (i.type === 'tel' && !/^[+\d\s-]{10,15}$/.test(v));
      i.classList.toggle('err', bad); if (bad) ok = false;
    });
    if (!ok) return;
    // TODO: fetch('send-enquiry.php',{method:'POST',body:new FormData(f)})
    f.reset(); const m = $('.form-msg', f) || f.nextElementSibling;
    if (m) { m.textContent = '✓ Thank you! We will contact you shortly.'; m.classList.add('ok') }
    if (f.closest('#enqPopup')) setTimeout(closePop, 2000);
  }));
})();
