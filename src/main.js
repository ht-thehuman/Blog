import './style.css'

const posts = [
  {
    id: 1,
    category: 'Lập trình',
    date: '12.09.2026',
    readTime: '6 phút',
    title: 'Từ một trang trắng đến website đầu tiên',
    excerpt: 'Những điều mình ước đã biết khi bắt đầu học HTML, CSS và JavaScript.',
    color: 'from-cyan-400/30 to-blue-600/20',
    content: `Mọi website đều bắt đầu bằng một trang trắng. Điều quan trọng không phải là viết thật nhiều code ngay từ đầu, mà là chia giao diện thành những phần đủ nhỏ để hiểu và kiểm soát.\n\nMình thường bắt đầu bằng cấu trúc HTML có ý nghĩa, sau đó thêm layout bằng CSS và cuối cùng mới dùng JavaScript cho tương tác. Cách này giúp việc tìm lỗi dễ hơn rất nhiều.\n\nVới dự án cá nhân, hãy hoàn thành một phiên bản nhỏ nhưng chạy tốt trước. Sau đó mới thêm animation, dark mode hay các hiệu ứng đặc biệt.`
  },
  {
    id: 2,
    category: 'Thiết kế',
    date: '07.09.2026',
    readTime: '4 phút',
    title: 'Thiết kế giao diện có cá tính mà vẫn dễ dùng',
    excerpt: 'Cá tính không đến từ thật nhiều hiệu ứng — nó đến từ những quyết định nhất quán.',
    color: 'from-violet-400/30 to-fuchsia-600/20',
    content: `Một giao diện đáng nhớ cần có một ý tưởng xuyên suốt. Với H.T. Blog, ý tưởng đó là chiếc máy tính cá nhân — nơi bài viết, thông tin và dự án xuất hiện như những ứng dụng nhỏ.\n\nTuy nhiên, hình thức không nên làm người đọc mất phương hướng. Nút đóng phải giống nút đóng, bài viết phải dễ đọc và độ tương phản luôn đủ rõ.\n\nHãy chọn một bảng màu, một nhịp bo góc và một hệ khoảng cách. Sự nhất quán sẽ làm thiết kế trông chuyên nghiệp hơn.`
  },
  {
    id: 3,
    category: 'Nhật ký',
    date: '31.08.2026',
    readTime: '3 phút',
    title: 'Một tháng học cách hoàn thành dự án',
    excerpt: 'Ghi chép ngắn về việc biến một ý tưởng lớn thành từng việc nhỏ mỗi ngày.',
    color: 'from-amber-300/30 to-orange-600/20',
    content: `Mình từng nghĩ cảm hứng là thứ quyết định một dự án có hoàn thành hay không. Sau một tháng, mình nhận ra lịch làm việc đơn giản lại quan trọng hơn.\n\nMỗi ngày mình chọn một mục tiêu có thể kiểm tra được: xong header, xong dữ liệu bài viết, xong giao diện mobile. Khi mục tiêu đủ rõ, việc bắt đầu trở nên nhẹ nhàng hơn.\n\nMột dự án hoàn chỉnh nhưng chưa hoàn hảo luôn dạy mình nhiều hơn một ý tưởng tuyệt vời nằm mãi trong đầu.`
  },
  {
    id: 4,
    category: 'Lập trình',
    date: '22.08.2026',
    readTime: '5 phút',
    title: 'localStorage: bộ nhớ nhỏ cho website demo',
    excerpt: 'Lưu theme, bài yêu thích và trạng thái giao diện mà chưa cần backend.',
    color: 'from-emerald-400/30 to-teal-700/20',
    content: `localStorage phù hợp cho các bài tập và prototype chạy hoàn toàn trên trình duyệt. Dữ liệu được lưu theo cặp khóa và giá trị, vì vậy object cần được chuyển sang JSON trước khi lưu.\n\nBạn có thể dùng nó cho dark mode, danh sách yêu thích hoặc bản nháp. Nhưng đừng lưu mật khẩu, thông tin nhạy cảm hay dữ liệu quan trọng.\n\nKhi dự án cần đồng bộ giữa nhiều thiết bị, đó là lúc nên chuyển sang backend và cơ sở dữ liệu thật.`
  }
]

const apps = [
  { id: 'blog', label: 'Bài viết', icon: '✦' },
  { id: 'about', label: 'Giới thiệu', icon: '☺' },
  { id: 'projects', label: 'Dự án', icon: '⌘' },
  { id: 'contact', label: 'Liên hệ', icon: '✉' },
]

const state = {
  theme: localStorage.getItem('ht-theme') || 'dark',
  category: 'Tất cả',
  search: '',
  z: 10,
}

document.querySelector('#app').innerHTML = `
  <main class="desktop ${state.theme === 'light' ? 'light' : ''}" aria-label="Màn hình H.T. Blog">
    <section class="desktop-icons absolute left-5 top-5 z-[2] flex flex-col gap-2" aria-label="Ứng dụng">
      ${apps.map(app => `
        <button class="desktop-icon" data-open="${app.id}" aria-label="Mở ${app.label}">
          <span class="icon-tile">${app.icon}</span>
          <span class="mt-2 block text-sm font-semibold">${app.label}</span>
        </button>
      `).join('')}
    </section>

    <section id="blog" class="window glass" style="left:16%;top:7%;z-index:8" aria-label="Cửa sổ bài viết">
      ${titlebar('blog', 'H.T. Blog', '✦')}
      <div class="window-body p-5 sm:p-7">
        <div class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p class="mb-2 text-sm font-bold uppercase tracking-[.22em] text-teal-300">Creative log / 2026</p>
            <h1 class="max-w-xl text-3xl font-black leading-tight sm:text-5xl">Viết về code, thiết kế và hành trình sáng tạo.</h1>
          </div>
          <div class="relative min-w-56">
            <label class="sr-only" for="search">Tìm bài viết</label>
            <input id="search" class="soft-surface w-full rounded-2xl border border-white/15 bg-white/8 px-4 py-3 text-base outline-none placeholder:text-slate-400 focus:border-teal-300" placeholder="Tìm bài viết…" />
          </div>
        </div>
        <div id="categories" class="mb-5 flex flex-wrap gap-2"></div>
        <div id="posts" class="grid gap-4 sm:grid-cols-2"></div>
      </div>
    </section>

    <section id="about" class="window glass is-hidden" style="left:28%;top:14%;z-index:6" aria-label="Cửa sổ giới thiệu">
      ${titlebar('about', 'Giới thiệu', '☺')}
      <div class="window-body p-6 sm:p-8">
        <div class="grid gap-7 sm:grid-cols-[150px_1fr] sm:items-start">
          <div class="grid aspect-square place-items-center rounded-[32px] bg-gradient-to-br from-teal-300 to-violet-500 text-6xl shadow-2xl">HT</div>
          <div><p class="text-sm font-bold uppercase tracking-[.2em] text-teal-300">Xin chào, mình là H.T.</p><h2 class="mt-2 text-3xl font-black">Web developer đang học cách kể chuyện bằng giao diện.</h2><p class="muted mt-4 leading-7 text-slate-300">Đây là góc nhỏ để mình ghi lại bài học về JavaScript, thiết kế web và quá trình hoàn thành những dự án cá nhân.</p><div class="mt-5 flex flex-wrap gap-2">${['JavaScript','Tailwind CSS','UI Design','Drawing'].map(x => `<span class="soft-surface rounded-full border border-white/15 bg-white/8 px-3 py-1.5 text-sm">${x}</span>`).join('')}</div></div>
        </div>
      </div>
    </section>

    <section id="projects" class="window glass is-hidden" style="left:22%;top:11%;z-index:6" aria-label="Cửa sổ dự án">
      ${titlebar('projects', 'Dự án', '⌘')}
      <div class="window-body p-6 sm:p-8"><p class="mb-5 text-sm font-bold uppercase tracking-[.2em] text-teal-300">Selected work</p><div class="grid gap-4 sm:grid-cols-2">${[['TripGO','Website mô phỏng đặt vé máy bay bằng JavaScript.','01'],['Music Player','Trình phát nhạc có playlist và thanh kéo tương tác.','02'],['H.T. Blog','Desktop blog với cửa sổ kéo-thả.','03']].map(p => `<article class="soft-surface rounded-3xl border border-white/15 bg-white/8 p-5"><span class="text-sm text-teal-300">${p[2]}</span><h3 class="mt-7 text-2xl font-bold">${p[0]}</h3><p class="muted mt-2 text-slate-300">${p[1]}</p></article>`).join('')}</div></div>
    </section>

    <section id="contact" class="window glass is-hidden" style="left:32%;top:18%;z-index:6" aria-label="Cửa sổ liên hệ">
      ${titlebar('contact', 'Liên hệ', '✉')}
      <div class="window-body p-7 text-center sm:p-10"><div class="mx-auto grid size-20 place-items-center rounded-3xl bg-teal-300 text-4xl text-slate-950">✉</div><h2 class="mt-5 text-3xl font-black">Cùng tạo điều gì đó thú vị.</h2><p class="muted mx-auto mt-3 max-w-md text-slate-300">Bạn có câu hỏi, góp ý hoặc muốn trao đổi về một dự án? Hãy gửi email cho mình.</p><a href="mailto:hello@htblog.dev" class="mt-6 inline-flex rounded-full bg-teal-300 px-6 py-3 font-bold text-slate-950 transition hover:bg-teal-200">hello@htblog.dev</a></div>
    </section>

    <section id="reader" class="window glass is-hidden" style="left:20%;top:6%;z-index:7" aria-label="Cửa sổ đọc bài">
      ${titlebar('reader', 'Đọc bài', '▤')}
      <article id="reader-content" class="window-body p-6 sm:p-10"></article>
    </section>

    <aside id="start-menu" class="glass absolute bottom-20 left-4 z-50 hidden w-[min(360px,calc(100vw-32px))] rounded-3xl p-4">
      <p class="px-2 pb-3 text-sm font-bold uppercase tracking-[.2em] text-teal-300">H.T. Blog</p>
      <div class="grid grid-cols-2 gap-2">${apps.map(a => `<button data-open="${a.id}" class="soft-surface flex items-center gap-3 rounded-2xl border border-white/10 bg-white/8 p-3 text-left hover:bg-white/15"><span class="text-2xl">${a.icon}</span><span class="font-semibold">${a.label}</span></button>`).join('')}</div>
    </aside>

    <footer class="glass fixed bottom-3 left-1/2 z-[60] flex w-[min(760px,calc(100%-24px))] -translate-x-1/2 items-center justify-between rounded-2xl px-3 py-2" aria-label="Thanh công cụ">
      <div class="flex items-center gap-1"><button id="start" class="control bg-teal-300 font-black text-slate-950" aria-label="Mở menu">HT</button>${apps.map(a => `<button data-open="${a.id}" class="control text-lg" title="${a.label}" aria-label="Mở ${a.label}">${a.icon}</button>`).join('')}</div>
      <div class="flex items-center gap-1"><button id="theme" class="control" aria-label="Đổi giao diện">${state.theme === 'dark' ? '☀' : '☾'}</button><time id="clock" class="min-w-[70px] text-right text-sm font-semibold"></time></div>
    </footer>
  </main>
`

function titlebar(id, title, icon) {
  return `<header class="titlebar flex items-center justify-between border-b border-white/10 px-4 py-3" data-drag="${id}"><div class="flex items-center gap-3"><span class="grid size-9 place-items-center rounded-xl bg-teal-300/15 text-teal-200">${icon}</span><strong>${title}</strong></div><div class="flex gap-1"><button class="control" data-minimize="${id}" aria-label="Thu nhỏ ${title}">—</button><button class="control" data-maximize="${id}" aria-label="Phóng to ${title}">□</button><button class="control hover:!bg-rose-500/80" data-close="${id}" aria-label="Đóng ${title}">×</button></div></header>`
}

function renderCategories() {
  const categories = ['Tất cả', ...new Set(posts.map(p => p.category))]
  document.querySelector('#categories').innerHTML = categories.map(category => `<button class="tag rounded-full border border-white/15 px-3 py-1.5 text-sm font-semibold ${category === state.category ? 'active' : 'soft-surface bg-white/8'}" data-category="${category}">${category}</button>`).join('')
}

function renderPosts() {
  const query = state.search.trim().toLowerCase()
  const visible = posts.filter(post => (state.category === 'Tất cả' || post.category === state.category) && (!query || `${post.title} ${post.excerpt}`.toLowerCase().includes(query)))
  document.querySelector('#posts').innerHTML = visible.length ? visible.map(post => `
    <button class="post-card soft-surface overflow-hidden rounded-3xl border border-white/15 bg-white/5 text-left" data-post="${post.id}">
      <span class="block h-28 bg-gradient-to-br ${post.color} p-4"><span class="rounded-full bg-slate-950/40 px-3 py-1 text-xs font-bold text-white">${post.category}</span></span>
      <span class="block p-5"><span class="muted text-xs font-semibold uppercase tracking-wider text-slate-400">${post.date} · ${post.readTime}</span><strong class="mt-2 block text-xl leading-snug">${post.title}</strong><span class="muted mt-2 block text-sm leading-6 text-slate-300">${post.excerpt}</span></span>
    </button>`).join('') : `<div class="soft-surface col-span-full rounded-3xl border border-white/15 bg-white/5 p-10 text-center"><p class="text-3xl">⌕</p><h3 class="mt-3 text-xl font-bold">Không tìm thấy bài viết</h3><p class="muted mt-1 text-slate-300">Thử một từ khóa hoặc danh mục khác nhé.</p></div>`
}

function openWindow(id) {
  const win = document.querySelector(`#${id}`)
  if (!win) return
  win.classList.remove('is-hidden')
  win.style.zIndex = ++state.z
  document.querySelector('#start-menu').classList.add('hidden')
}

function openPost(id) {
  const post = posts.find(item => item.id === Number(id))
  if (!post) return
  document.querySelector('#reader-content').innerHTML = `<p class="text-sm font-bold uppercase tracking-[.2em] text-teal-300">${post.category} · ${post.date}</p><h2 class="mt-3 text-3xl font-black leading-tight sm:text-5xl">${post.title}</h2><p class="muted mt-4 text-lg text-slate-300">${post.excerpt}</p><div class="my-7 h-px bg-white/15"></div><div class="muted space-y-5 text-base leading-8 text-slate-200">${post.content.split('\n\n').map(p => `<p>${p}</p>`).join('')}</div>`
  openWindow('reader')
}

document.addEventListener('click', event => {
  const open = event.target.closest('[data-open]')
  const close = event.target.closest('[data-close]')
  const minimize = event.target.closest('[data-minimize]')
  const maximize = event.target.closest('[data-maximize]')
  const category = event.target.closest('[data-category]')
  const post = event.target.closest('[data-post]')
  if (open) openWindow(open.dataset.open)
  if (close || minimize) document.querySelector(`#${(close || minimize).dataset[close ? 'close' : 'minimize']}`).classList.add('is-hidden')
  if (maximize) document.querySelector(`#${maximize.dataset.maximize}`).classList.toggle('is-maximized')
  if (category) { state.category = category.dataset.category; renderCategories(); renderPosts() }
  if (post) openPost(post.dataset.post)
})

document.querySelector('#search').addEventListener('input', event => { state.search = event.target.value; renderPosts() })
document.querySelector('#start').addEventListener('click', () => document.querySelector('#start-menu').classList.toggle('hidden'))
document.querySelector('#theme').addEventListener('click', event => {
  state.theme = state.theme === 'dark' ? 'light' : 'dark'
  document.querySelector('.desktop').classList.toggle('light', state.theme === 'light')
  event.currentTarget.textContent = state.theme === 'dark' ? '☀' : '☾'
  localStorage.setItem('ht-theme', state.theme)
})

document.querySelectorAll('.window').forEach(win => win.addEventListener('pointerdown', () => { win.style.zIndex = ++state.z }))
document.querySelectorAll('[data-drag]').forEach(bar => {
  bar.addEventListener('pointerdown', event => {
    if (window.innerWidth <= 700 || event.target.closest('button')) return
    const win = document.querySelector(`#${bar.dataset.drag}`)
    if (win.classList.contains('is-maximized')) return
    const rect = win.getBoundingClientRect()
    const startX = event.clientX - rect.left
    const startY = event.clientY - rect.top
    bar.setPointerCapture(event.pointerId)
    const move = e => {
      const maxX = window.innerWidth - win.offsetWidth
      const maxY = window.innerHeight - 86
      win.style.left = `${Math.max(0, Math.min(maxX, e.clientX - startX))}px`
      win.style.top = `${Math.max(0, Math.min(maxY, e.clientY - startY))}px`
    }
    const end = () => { bar.removeEventListener('pointermove', move); bar.removeEventListener('pointerup', end) }
    bar.addEventListener('pointermove', move)
    bar.addEventListener('pointerup', end)
  })
})

function updateClock() {
  document.querySelector('#clock').textContent = new Intl.DateTimeFormat('vi-VN', { hour: '2-digit', minute: '2-digit' }).format(new Date())
}

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') document.querySelector('#start-menu').classList.add('hidden')
})

renderCategories()
renderPosts()
updateClock()
setInterval(updateClock, 30000)
