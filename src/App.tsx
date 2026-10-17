import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'motion/react'
import { Play, MessageCircle, VolumeX, X, ChevronDown, Check } from 'lucide-react'
import { LangProvider, useLang, type Lang, type LegalSection } from './i18n'
import logoSvg from './assets/logo.svg'
import mobileLogoSvg from './assets/logo-mobile.svg'
import brand1 from '@/assets/brands/brand1.png'
import brand2 from '@/assets/brands/brand2.png'
import brand3 from '@/assets/brands/brand3.png'
import brand4 from '@/assets/brands/brand4.png'
import brand5 from '@/assets/brands/brand5.png'
import brand6 from '@/assets/brands/brand6.png'
import brand7 from '@/assets/brands/brand7.png'
import brand8 from '@/assets/brands/brand8.png'
import creator1 from '@/assets/creators/creator1.jpg'
import creator2 from '@/assets/creators/creator2.jpg'
import creator3 from '@/assets/creators/creator3.jpg'
import creator4 from '@/assets/creators/creator4.jpg'
import creator5 from '@/assets/creators/creator5.jpg'
import creator6 from '@/assets/creators/creator6.jpg'
import creator7 from '@/assets/creators/creator7.jpg'
import creator8 from '@/assets/creators/creator8.jpg'
import ytSPYbRN2fgM from '@/assets/yt_sPYbRN2fgM.mp4'
import ytEr7p1EkNvR0 from '@/assets/yt_Er7p1EkNvR0.mp4'
import ytM8ZwWxJxdnA from '@/assets/yt_m8ZwWxJxdnA.mp4'
import ytSRtQmFEhlBE from '@/assets/yt_sRtQmFEhlBE.mp4'
import vslY0xfbzMChcw from '@/assets/vsl_y0xfbzMChcw.mp4'
import vslTm4p5wf5de from '@/assets/vsl_tm4p5wf5de.mp4'
import vsl9f7n2qmua4 from '@/assets/vsl_9f7n2qmua4.mp4'
import vslRv00d92adp from '@/assets/vsl_rv00d92adp.mp4'
import vslUxb2hd6oli from '@/assets/vsl_uxb2hd6oli.mp4'
import vslCn1y5pm9o1 from '@/assets/vsl_cn1y5pm9o1.mp4'
import saasIwoeziqb0u from '@/assets/saas_iwoeziqb0u.mp4'
import saasA5t1hj78uk from '@/assets/saas_a5t1hj78uk.mp4'
import adOdmynya6to from '@/assets/ad_odmynya6to.mp4'
import ad9onin2gc38 from '@/assets/ad_9onin2gc38.mp4'
import adLra91c1hqv from '@/assets/ad_lra91c1hqv.mp4'
import ad37uemr9zv8 from '@/assets/ad_37uemr9zv8.mp4'
import bananaZone from '@/assets/banana_zone.mp4'
import reel8az46h3zsp from '@/assets/reel_8az46h3zsp.mp4'
import reel3zke9jtqmv from '@/assets/reel_3zke9jtqmv.mp4'
import reelEbnd3djra4 from '@/assets/reel_ebnd3djra4.mp4'

/* ─── Tokens ─── */
const C = {
  vsl: '#3a0808',
  vslLight: '#d5201f',
  creator: '#1e4d8c',
  creatorLight: '#2563eb',
  brand: '#111111',
  gold: '#b5832a',
  goldLight: '#d4a44c',
  red: '#d5201f',
  redLight: '#e83534',
  neon: '#d5201f',
  neonDark: '#a01818',
}

/* ─── Data ─── */

const stats = [
  { value: '47M+', label: 'Vues générées' },
  { value: '120+', label: 'Vidéos réalisées' },
  { value: '35+', label: 'Créateurs accompagnés' },
  { value: '98%', label: 'Clients satisfaits' },
]

type NicheKey = 'entrepreneurship' | 'wealth' | 'linkedin' | 'onlineBusiness' | 'realEstate' | 'ecommerce' | 'crypto'

const creators: { name: string; niche: NicheKey; subs: string; photo: string }[] = [
  { name: 'Alec Henry', niche: 'entrepreneurship', subs: '280K', photo: creator1 },
  { name: 'Camil Mikolajczack', niche: 'wealth', subs: '195K', photo: creator2 },
  { name: 'Hugo Gedio', niche: 'linkedin', subs: '410K', photo: creator3 },
  { name: 'Jean Hollaender', niche: 'onlineBusiness', subs: '320K', photo: creator4 },
  { name: 'Jody Cavalie', niche: 'onlineBusiness', subs: '155K', photo: creator5 },
  { name: 'Yann Darwin', niche: 'realEstate', subs: '230K', photo: creator6 },
  { name: 'Yomi Denzel', niche: 'ecommerce', subs: '180K', photo: creator7 },
  { name: 'Julien Roman', niche: 'crypto', subs: '210K', photo: creator8 },
]

/* Chaque section = 4 vidéos.
   16:9 → grille 2×2 sur ordi, 1 colonne sur téléphone.
   9:16 → 4 en ligne sur ordi, 2×2 sur téléphone. */

type VideoItem = { title: string; thumb: string; ytId?: string; wistiaId?: string }

const youtubeVideos: VideoItem[] = [
  { title: 'Hypercapitalisation', ytId: 'Er7p1EkNvR0', thumb: ytEr7p1EkNvR0 },
  { title: 'Impôts', ytId: 's-PYbRN2fgM', thumb: ytSPYbRN2fgM },
  { title: '100K en accompagnement', ytId: 'm8ZwWxJxdnA', thumb: ytM8ZwWxJxdnA },
  { title: "Comment j'utilise l'IA", ytId: 'sRtQmFEhlBE', thumb: ytSRtQmFEhlBE },
]

const saasVideos: VideoItem[] = [
  { title: 'Wise', wistiaId: 'iwoeziqb0u', thumb: saasIwoeziqb0u },
  { title: 'Any style', wistiaId: 'tm4p5wf5de', thumb: vslTm4p5wf5de },
  { title: 'Notion', wistiaId: 'cn1y5pm9o1', thumb: vslCn1y5pm9o1 },
  { title: 'Airbnb', wistiaId: 'a5t1hj78uk', thumb: saasA5t1hj78uk },
]

const vslVideos: VideoItem[] = [
  { title: 'LinkedIn', wistiaId: 'rv00d92adp', thumb: vslRv00d92adp },
  { title: 'Une équipe qui tire la tronche', wistiaId: 'uxb2hd6oli', thumb: vslUxb2hd6oli },
  { title: '3 tactiques', wistiaId: '9f7n2qmua4', thumb: vsl9f7n2qmua4 },
  { title: 'Transmettre un capital', ytId: 'y0xfbzMChcw', thumb: vslY0xfbzMChcw },
]

const adsVideos: VideoItem[] = [
  { title: 'Business IA', wistiaId: '37uemr9zv8', thumb: ad37uemr9zv8 },
  { title: 'Un an plus tard', wistiaId: 'odmynya6to', thumb: adOdmynya6to },
  { title: 'Le recrutement', wistiaId: '9onin2gc38', thumb: ad9onin2gc38 },
  { title: '100% gratuit', wistiaId: 'lra91c1hqv', thumb: adLra91c1hqv },
]

const reelsVideos: VideoItem[] = [
  { title: 'Des millions de dollars', wistiaId: 'ebnd3djra4', thumb: reelEbnd3djra4 },
  { title: 'Pèse 50 milliards', wistiaId: '3zke9jtqmv', thumb: reel3zke9jtqmv },
  { title: 'Ton cerveau est programmé', wistiaId: '8az46h3zsp', thumb: reel8az46h3zsp },
  { title: 'En tout cas', wistiaId: 'pws8nqpnwh', thumb: bananaZone },
]

/* ─── Primitives ─── */

function PlayBadge({ color = 'white' }: { color?: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
        <Play className="w-5 h-5 fill-current" style={{ color }} />
      </div>
    </div>
  )
}

function SectionLabel({ label, color }: { label: string; color: string }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-8">
      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
      <span className="text-xs uppercase tracking-widest font-semibold" style={{ color }}>{label}</span>
    </div>
  )
}

/* ─── Navbar ─── */

function Navbar() {
  const { t } = useLang()
  const links = [
    { label: t.nav.youtube, href: '#videos-youtube' },
    { label: t.nav.saas, href: '#motion-saas' },
    { label: t.nav.vsl, href: '#vsl-videos' },
    { label: t.nav.ads, href: '#ads' },
    { label: t.nav.reels, href: '#reels' },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mobile-header-position fixed left-0 right-0 z-50 w-[calc(100%-2rem)] max-w-[900px] mx-auto py-2.5 md:py-3 rounded-2xl border border-white/10 bg-[#0c0c0c]/90 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.35)]"
    >
      <div className="px-4 md:px-5 grid grid-cols-[1fr_auto] items-center gap-x-3 gap-y-3 md:flex md:justify-between md:gap-4">
        <img src={mobileLogoSvg} alt="Martial Production" className="h-11 w-11 object-contain justify-self-start md:hidden" />
        <img src={logoSvg} alt="Martial Production" className="hidden h-16 w-auto justify-self-start md:block" style={{ maxWidth: 280 }} />
        <div className="hidden lg:flex lg:w-auto lg:items-center lg:justify-center lg:gap-4">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="shrink-0 whitespace-nowrap text-[11px] md:text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="col-start-2 row-start-1 md:col-auto md:row-auto flex items-center gap-2 min-[380px]:gap-3">
          <LangSwitcher />
          <RdvButton />
          <WhatsAppButton />
        </div>
      </div>
    </motion.nav>
  )
}

/* ─── Sélecteur de langue ─── */

function Flag({ lang }: { lang: Lang }) {
  const id = React.useId().replace(/:/g, '')
  return (
    <span className="inline-flex h-[14px] w-5 shrink-0 overflow-hidden rounded-[3px] ring-1 ring-inset ring-white/15" aria-hidden="true">
      {lang === 'fr' ? (
        <svg viewBox="0 0 3 2" className="h-full w-full" preserveAspectRatio="none">
          <rect width="1" height="2" fill="#002395" />
          <rect x="1" width="1" height="2" fill="#ffffff" />
          <rect x="2" width="1" height="2" fill="#ed2939" />
        </svg>
      ) : (
        <svg viewBox="0 0 60 30" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
          <clipPath id={`${id}-s`}><path d="M0,0 v30 h60 v-30 z" /></clipPath>
          <clipPath id={`${id}-t`}><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" /></clipPath>
          <g clipPath={`url(#${id}-s)`}>
            <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#ffffff" strokeWidth="6" />
            <path d="M0,0 L60,30 M60,0 L0,30" clipPath={`url(#${id}-t)`} stroke="#c8102e" strokeWidth="4" />
            <path d="M30,0 v30 M0,15 h60" stroke="#ffffff" strokeWidth="10" />
            <path d="M30,0 v30 M0,15 h60" stroke="#c8102e" strokeWidth="6" />
          </g>
        </svg>
      )}
    </span>
  )
}

const LANG_OPTIONS: { code: Lang; label: string }[] = [
  { code: 'fr', label: 'Français' },
  { code: 'en', label: 'English' },
]

/** Pastille drapeau + code + chevron, qui ouvre un petit menu FR / EN */
function LangSwitcher() {
  const { lang, setLang, t } = useLang()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onPointer = (e: PointerEvent) => { if (!ref.current?.contains(e.target as Node)) setOpen(false) }
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('pointerdown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div ref={ref} className="relative shrink-0">
      <button
        type="button"
        aria-label={t.nav.language}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
        className="inline-flex h-10 items-center gap-1.5 rounded-full border border-white/15 bg-[#1b1b1b] px-2.5 text-xs font-bold text-white shadow-[0_6px_20px_rgba(0,0,0,0.45)] transition-colors hover:border-white/25 hover:bg-[#232323]"
      >
        <Flag lang={lang} />
        <span className="hidden min-[380px]:inline">{lang.toUpperCase()}</span>
        <ChevronDown className={`hidden h-3.5 w-3.5 text-white/70 transition-transform duration-200 min-[380px]:block ${open ? 'rotate-180' : ''}`} strokeWidth={2.4} />
      </button>
      {open && (
        <div
          role="menu"
          className="absolute left-0 top-full z-10 mt-2 min-w-[156px] rounded-2xl border border-white/10 bg-[#111111] p-1 shadow-[0_10px_35px_rgba(0,0,0,0.55)] md:left-auto md:right-0"
        >
          {LANG_OPTIONS.map(option => (
            <button
              key={option.code}
              type="button"
              role="menuitemradio"
              aria-checked={lang === option.code}
              onClick={() => { setLang(option.code); setOpen(false) }}
              className={`flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-colors hover:bg-white/5 ${lang === option.code ? 'text-white' : 'text-white/60 hover:text-white'}`}
            >
              <Flag lang={option.code} />
              {option.label}
              {lang === option.code && <Check className="ml-auto h-4 w-4 text-[#f5c842]" strokeWidth={2.6} />}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

/* ─── Boutons de contact ─── */

const WHATSAPP_URL = 'https://wa.me/33642908005'
const CALENDLY_URL = 'https://calendly.com/martialproduction/call30min'
// Couleurs sombres : appliquées si l'offre Calendly le permet, sinon ignorées
const CALENDLY_POPUP_URL = `${CALENDLY_URL}?background_color=111111&text_color=ffffff&primary_color=d5201f`
const CALENDLY_SCRIPT = 'https://assets.calendly.com/assets/external/widget.js'
const CALENDLY_CSS = 'https://assets.calendly.com/assets/external/widget.css'

type CalendlyApi = { initPopupWidget: (opts: { url: string }) => void }
const getCalendly = () => (window as unknown as { Calendly?: CalendlyApi }).Calendly

/** Charge une seule fois le script et le style de la pop-up Calendly */
function loadCalendly() {
  if (!document.querySelector(`link[href="${CALENDLY_CSS}"]`)) {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = CALENDLY_CSS
    document.head.appendChild(link)
  }
  if (!document.querySelector(`script[src="${CALENDLY_SCRIPT}"]`)) {
    const script = document.createElement('script')
    script.src = CALENDLY_SCRIPT
    script.async = true
    document.head.appendChild(script)
  }
}

/** Ouvre la pop-up Calendly. Si le script n'a pas pu charger, le lien ouvre Calendly dans un nouvel onglet. */
function openCalendly(e: React.MouseEvent<HTMLAnchorElement>) {
  const Calendly = getCalendly()
  if (!Calendly) return
  e.preventDefault()
  Calendly.initPopupWidget({ url: CALENDLY_POPUP_URL })
}

/** Bouton sombre avec pastille rouge → ouvre la pop-up Calendly */
function RdvButton({ large = false }: { large?: boolean }) {
  const { t } = useLang()
  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noreferrer"
      onClick={openCalendly}
      className={`relative inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-white/15 bg-[#1b1b1b] font-bold uppercase tracking-wide text-white shadow-[0_6px_20px_rgba(0,0,0,0.45)] transition-all hover:scale-[1.03] hover:border-white/25 hover:bg-[#232323] ${large ? 'h-12 px-7 text-sm' : 'h-10 px-3 text-[11px] min-[380px]:px-4 md:text-xs'}`}
    >
      {large ? (
        <span>{t.nav.rdv}</span>
      ) : (
        <>
          <span className="sm:hidden">{t.nav.rdvShort}</span>
          <span className="hidden sm:inline">{t.nav.rdv}</span>
        </>
      )}
      <span className="absolute -right-0.5 -top-0.5 flex h-3 w-3" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f05252] opacity-60" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-[#f05252]" />
      </span>
    </a>
  )
}

/** Bouton rond vert avec halo → WhatsApp */
function WhatsAppButton({ large = false }: { large?: boolean }) {
  const { t } = useLang()
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label={t.nav.whatsapp}
      className={`inline-flex shrink-0 items-center justify-center rounded-full bg-[#4fce5d] text-white shadow-[0_0_0_4px_rgba(79,206,93,0.2),0_0_0_8px_rgba(79,206,93,0.08)] transition-transform hover:scale-105 ${large ? 'h-12 w-12' : 'h-10 w-10'}`}
    >
      <MessageCircle className={large ? 'h-6 w-6' : 'h-5 w-5'} strokeWidth={2.4} />
    </a>
  )
}

/* ─── Hero headline ─── */

function Hero() {
  const { t } = useLang()
  return (
    <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="flex items-center gap-2 mb-5 justify-center flex-wrap">
          {t.hero.badges.map(badge => (
            <span key={badge} className="hero-badge" style={{ background: '#f5c842', color: '#0c0c0c' }}>{badge}</span>
          ))}
        </div>
        <h1 className="text-[clamp(1.3rem,6.6vw,1.9rem)] md:text-6xl font-bold tracking-tight leading-[1.08] text-white text-center">
          <span className="whitespace-nowrap">{t.hero.line1}</span><br />
          <span className="whitespace-nowrap">{t.hero.line2}<span className="font-serif-italic">{t.hero.accent}</span></span>
        </h1>
        <p className="mt-6 text-white/50 text-base max-w-xl leading-relaxed text-center mx-auto">
          {t.hero.sub}
        </p>
      </motion.div>
    </div>
  )
}

/* ─── VSL Section ─── */

function VSLSection() {
  const { t } = useLang()
  const playerRef = useRef<HTMLElement & { muted: boolean }>(null)
  const [isMuted, setIsMuted] = useState(true)
  const [isPlayerReady, setIsPlayerReady] = useState(false)

  React.useEffect(() => {
    const player = playerRef.current
    const handleReady = () => setIsPlayerReady(true)
    player?.addEventListener('api-ready', handleReady)

    const s1 = document.createElement('script')
    s1.src = 'https://fast.wistia.com/player.js'
    s1.async = true
    document.head.appendChild(s1)

    const s2 = document.createElement('script')
    s2.src = 'https://fast.wistia.com/embed/u0x61zcxq1.js'
    s2.async = true
    s2.type = 'module'
    document.head.appendChild(s2)

    return () => {
      player?.removeEventListener('api-ready', handleReady)
      document.head.removeChild(s1)
      document.head.removeChild(s2)
    }
  }, [])

  const toggleSound = () => {
    const player = playerRef.current
    if (!player || !isPlayerReady) return

    try {
      player.muted = false
      setIsMuted(false)
    } catch {
      // Wistia can reject media changes while its iframe is still settling.
      // Keep the control visible so the user can retry without surfacing an app error.
    }
  }

  return (
    <section id="vsl" className="mx-auto pb-6 w-[calc(100%-2rem)] max-w-[900px]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="relative w-full overflow-hidden"
        style={{ border: '1px solid rgba(213,32,31,0.25)', borderRadius: '2rem' }}
      >
        <style>{`wistia-player[media-id='u0x61zcxq1']:not(:defined){background:center/contain no-repeat url('https://fast.wistia.com/embed/medias/u0x61zcxq1/swatch');display:block;filter:blur(5px);padding-top:56.25%;}`}</style>
        {/* @ts-ignore */}
        <wistia-player
          ref={playerRef}
          media-id="u0x61zcxq1"
          aspect="1.7777777777777777"
          autoplay="true"
          muted="true"
          style={{ display: 'block', width: '100%' }}
        />
        {isMuted && (
          <button
            type="button"
            onClick={toggleSound}
            disabled={!isPlayerReady}
            aria-label={t.vsl.soundAria}
            className="absolute right-3 top-3 z-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#d5201f] px-4 py-3 text-xs font-bold text-white shadow-[0_8px_30px_rgba(0,0,0,0.45),0_0_24px_rgba(213,32,31,0.35)] transition-all hover:scale-[1.03] hover:bg-[#ed2928] disabled:cursor-wait disabled:opacity-60 disabled:hover:scale-100 sm:right-5 sm:top-5 sm:px-5 sm:text-sm"
          >
            <VolumeX className="h-5 w-5" />
            {t.vsl.sound}
          </button>
        )}
      </motion.div>
    </section>
  )
}

/* ─── Stats ─── */

function StatsRow() {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {stats.map(({ value, label }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="rounded-full px-6 py-3.5 flex flex-col items-center text-center border"
            style={{ background: 'rgba(37,99,235,0.08)', borderColor: 'rgba(37,99,235,0.25)' }}
          >
            <span className="text-2xl font-bold text-white leading-none">{value}</span>
            <span className="text-xs mt-1 font-medium" style={{ color: C.creatorLight }}>{label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

/* ─── Créateurs ─── */

const ROTATIONS = [-11, -7, -4, -1, 1, 4, 7, 11]

function CreatorCard({ name, niche: nicheKey, subs, photo, handle, i }: {
  name: string; niche: NicheKey; subs: string; photo: string; handle: string; i: number
}) {
  const { t } = useLang()
  const niche = t.creators.niches[nicheKey]
  const [hovered, setHovered] = useState(false)
  const rotate = ROTATIONS[i] ?? 0
  return (
    <motion.div
      key={name}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.07, duration: 0.55 }}
      className="creator-card relative flex-shrink-0 cursor-pointer"
      style={{ zIndex: hovered ? 20 : 14 - Math.abs(rotate) }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Speech bubble tooltip */}
      <div
        className="absolute left-1/2 pointer-events-none"
        style={{
          bottom: '100%',
          transform: 'translateX(-50%)',
          marginBottom: 12,
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.2s ease, transform 0.2s ease',
          transformOrigin: 'bottom center',
          scale: hovered ? '1' : '0.85',
          zIndex: 30,
          whiteSpace: 'nowrap',
        }}
      >
        <div
          className="relative px-3 py-1.5 rounded-full text-sm font-semibold"
          style={{ background: C.creatorLight, color: 'white' }}
        >
          {name}
          {/* Tail */}
          <span
            className="absolute left-1/2"
            style={{
              top: '100%',
              transform: 'translateX(-50%)',
              width: 0, height: 0,
              borderLeft: '6px solid transparent',
              borderRight: '6px solid transparent',
              borderTop: `7px solid ${C.creatorLight}`,
            }}
          />
        </div>
      </div>

      {/* Card */}
      <div
        className="creator-card-frame relative rounded-2xl overflow-hidden"
        style={{
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: hovered ? '0 24px 60px rgba(0,0,0,0.7)' : '0 8px 24px rgba(0,0,0,0.5)',
          transition: 'box-shadow 0.3s ease, transform 0.4s ease',
          transform: hovered
            ? `rotate(0deg) translateY(-8px)`
            : `rotate(${rotate}deg) translateY(0px)`,
        }}
      >
        <img
          src={photo}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            objectPosition: 'top center',
            transition: 'transform 0.5s ease',
            transform: hovered ? 'scale(1.1)' : 'scale(1)',
          }}
        />
        {/* Gradient */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)',
          transition: 'opacity 0.3s',
          opacity: hovered ? 1 : 0.7,
        }} />
        {/* Niche badge */}
        <div
          className="absolute bottom-0 left-0 right-0 flex justify-center pb-2"
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateY(0)' : 'translateY(4px)',
            transition: 'opacity 0.25s ease, transform 0.25s ease',
          }}
        >
          <span style={{
            display: 'inline-block',
            background: '#d5201f',
            color: '#fff',
            fontSize: niche.length > 10 ? '0.45rem' : '0.55rem',
            fontWeight: 700,
            letterSpacing: '0.07em',
            textTransform: 'uppercase',
            padding: niche.length > 10 ? '3px 7px' : '3px 9px',
            borderRadius: 100,
            whiteSpace: 'nowrap',
            boxShadow: '0 2px 8px rgba(213,32,31,0.5)',
          }}>
            {niche}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

const BRAND_LOGOS = [brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8]

function BrandBanner() {
  const trackRef = useRef<HTMLDivElement>(null)
  const setRate = (rate: number) => trackRef.current?.getAnimations()[0]?.updatePlaybackRate(rate)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, width } = e.currentTarget.getBoundingClientRect()
    const ratio = (e.clientX - left) / width
    setRate(0.15 + ratio * 6.85)
  }
  return (
    <div style={{ maxWidth: 1040, margin: '0 auto', paddingInline: 'clamp(2rem, 6vw, 6rem)' }}>
    <div className="brand-banner relative overflow-hidden" style={{ borderRadius: '1rem' }}
      onMouseMove={handleMouseMove} onMouseLeave={() => setRate(1)}>
      <div className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #0c0c0c 20%, transparent)' }} />
      <div className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #0c0c0c 20%, transparent)' }} />
      <div ref={trackRef} style={{ display: 'flex', width: 'max-content', animation: 'brandScroll 18s linear infinite' }}>
        {[...BRAND_LOGOS, ...BRAND_LOGOS].map((src, i) => (
          <div key={i} className="brand-logo-item">
            <img
              src={src}
              alt=""
              className="brand-logo"
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

function CreateursSection() {
  const { t } = useLang()
  return (
    <section id="créateurs" className="pb-20 pt-8">
      <div className="max-w-6xl mx-auto px-6 mb-2 text-center">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.08] text-white">
          {t.creators.title}<span className="font-serif-italic">{t.creators.accent}</span>
        </h2>
      </div>

      {/* Horizontal strip — cards slightly overlapping */}
      <div className="creators-grid">
        {creators.map((c, i) => (
          <div
            key={c.name}
            className="creator-card-wrap"
            style={{ marginRight: i < creators.length - 1 ? 'clamp(-20px, -1.5vw, -8px)' : 0 }}
          >
            <CreatorCard {...c} handle={c.name.split(' ')[0]} i={i} />
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── Video Grid ─── */

function AutoVideo({ src, label, className, style }: { src: string; label: string; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    const v = ref.current
    if (!v) return
    v.muted = true
    v.defaultMuted = true
    v.play().catch(() => {})
  }, [])
  return <video ref={ref} src={src} aria-label={label} muted loop playsInline preload="metadata" className={className} style={style} />
}

function WistiaModal({ mediaId, onClose, vertical = false }: { mediaId: string; onClose: () => void; vertical?: boolean }) {
  React.useEffect(() => {
    const s1 = document.createElement('script'); s1.src = 'https://fast.wistia.com/player.js'; s1.async = true; document.head.appendChild(s1)
    const s2 = document.createElement('script'); s2.src = `https://fast.wistia.com/embed/${mediaId}.js`; s2.async = true; s2.type = 'module'; document.head.appendChild(s2)
    return () => { document.head.removeChild(s1); document.head.removeChild(s2) }
  }, [mediaId])
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <div
        className="relative"
        style={vertical
          ? { width: 'min(calc(100vw - 2rem), calc((100dvh - 6rem) * 9 / 16), 520px)' }
          : { width: '100%', maxWidth: 900, padding: '0 1.5rem' }}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className={`absolute -top-10 ${vertical ? 'right-0' : 'right-6'} text-white/60 hover:text-white text-2xl font-light`}
        >✕</button>
        <style>{`wistia-player[media-id='${mediaId}']:not(:defined){background:center/contain no-repeat url('https://fast.wistia.com/embed/medias/${mediaId}/swatch');display:block;filter:blur(5px);padding-top:${vertical ? '177.7778%' : '56.25%'};}`}</style>
        {/* @ts-ignore */}
        <wistia-player
          media-id={mediaId}
          aspect={vertical ? '0.5625' : '1.7777777777777777'}
          autoplay="true"
          style={{ display: 'block', width: '100%', borderRadius: '1rem', overflow: 'hidden' }}
        />
      </div>
    </div>
  )
}

function VideoGrid({ items, label, accent, dotColor = accent, vertical = false, id }: { items: VideoItem[]; label: string; accent: string; dotColor?: string; vertical?: boolean; id: string }) {
  const { t } = useLang()
  const [activeWistia, setActiveWistia] = useState<string | null>(null)

  const open = (item: VideoItem) => {
    if (item.ytId) window.open(`https://www.youtube.com/watch?v=${item.ytId}`, '_blank')
    else if (item.wistiaId) setActiveWistia(item.wistiaId)
  }

  // 16:9 avec un nombre impair de vidéos : la dernière est centrée sur sa ligne
  const isLoneLast = (i: number) => !vertical && items.length % 2 === 1 && i === items.length - 1

  return (
    <>
    {activeWistia && <WistiaModal mediaId={activeWistia} vertical={vertical} onClose={() => setActiveWistia(null)} />}
    <section id={id} className="pb-16 md:pb-20 scroll-mt-36">
      <div className="max-w-6xl mx-auto px-6 mb-8 flex justify-center">
        <div className="flex items-center gap-3">
          <span
            className="h-3 w-3 rounded-full"
            style={{
              backgroundColor: dotColor,
              boxShadow: `0 0 7px ${dotColor}, 0 0 16px ${dotColor}, 0 0 30px ${dotColor}`,
            }}
          />
          <span className="text-3xl md:text-4xl font-bold tracking-tight text-white">{label}</span>
        </div>
      </div>
      {/* Même largeur que le header : w-[calc(100%-2rem)] max-w-[900px] */}
      <div
        className={`mx-auto grid w-[calc(100%-2rem)] max-w-[900px] gap-4 md:gap-5 ${vertical ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-1 sm:grid-cols-2'}`}
      >
        {items.map((item, i) => (
          <motion.button
            key={`${item.ytId ?? item.wistiaId}-${i}`}
            type="button"
            onClick={() => open(item)}
            aria-label={t.videos.watch(item.title)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            className={`group relative block w-full overflow-hidden rounded-[1.25rem] md:rounded-[1.5rem] bg-[#111] cursor-pointer transition-[translate,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] ${isLoneLast(i) ? 'sm:col-span-2 sm:justify-self-center sm:w-[calc(50%-0.5rem)] md:w-[calc(50%-0.625rem)]' : ''}`}
            style={{ aspectRatio: vertical ? '9/16' : '16/9', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <AutoVideo src={item.thumb} label={item.title} className="absolute inset-0 w-full h-full object-cover" />
            <PlayBadge color={accent} />
          </motion.button>
        ))}
      </div>
    </section>
    </>
  )
}

/* ─── Footer CTA ─── */

function FooterCTA() {
  const { t } = useLang()
  return (
    <section id="contact" className="mx-auto w-[calc(100%-2rem)] max-w-[900px] pt-2 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl px-3 py-10 sm:px-8 sm:py-12 md:px-10 md:py-16 text-center"
        style={{
          background: 'linear-gradient(135deg, #1a0505, #0c0c0c)',
          border: '1px solid rgba(213,32,31,0.2)',
          boxShadow: '0 0 80px rgba(213,32,31,0.08)'
        }}
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[0.88]">
          {t.cta.title}<br /><span className="font-serif-italic">{t.cta.accent}</span>
        </h2>
        <p className="mt-6 whitespace-nowrap text-[clamp(0.46rem,2.3vw,0.875rem)] sm:text-sm text-white/50 leading-relaxed">
          {t.cta.sub}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-4">
          <RdvButton large />
          <div className="flex items-center gap-4">
          <WhatsAppButton large />
          <a
            href="https://www.instagram.com/martialproduction/"
            target="_blank"
            rel="noreferrer"
            aria-label={t.nav.instagram}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#FCAF45] text-white shadow-[0_0_0_4px_rgba(225,48,108,0.12)] transition-transform hover:scale-105"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="18" x="3" y="3" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
            </svg>
          </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

/* ─── Legal footer ─── */

type LegalPage = 'terms' | 'legal' | 'cookies'

function LegalModal({ page, onClose }: { page: LegalPage; onClose: () => void }) {
  const { t } = useLang()
  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  const titles: Record<LegalPage, string> = {
    terms: t.footer.terms,
    legal: t.footer.legal,
    cookies: t.footer.cookies,
  }

  const renderSections = (sections: LegalSection[]) => sections.map(section => (
    <React.Fragment key={section.title}>
      <h3>{section.title}</h3>
      {section.paragraphs?.map(text => <p key={text}>{text}</p>)}
      {section.list && (
        <ul>
          {section.list.map(item => <li key={item.label}><strong>{item.label}</strong> {item.text}</li>)}
        </ul>
      )}
    </React.Fragment>
  ))

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-2 backdrop-blur-md md:p-6"
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`legal-title-${page}`}
        initial={{ opacity: 0, scale: 0.97, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative max-h-[calc(100dvh-1rem)] w-full max-w-[1500px] overflow-y-auto rounded-[1.75rem] bg-white px-5 pb-8 pt-16 text-black shadow-2xl md:max-h-[calc(100dvh-3rem)] md:px-8 md:pb-10 md:pt-5"
        onClick={event => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={t.footer.close}
          className="absolute right-5 top-5 z-10 rounded-full p-2 text-black transition-colors hover:bg-black/5 md:right-7 md:top-6"
        >
          <X className="h-8 w-8 md:h-11 md:w-11" strokeWidth={2.2} />
        </button>

        <h2 id={`legal-title-${page}`} className="mb-6 pr-12 text-center text-3xl font-black tracking-tight md:text-5xl">
          {titles[page]}
        </h2>

        <div className="legal-copy text-sm leading-relaxed md:text-[17px]">
          {page === 'terms' && renderSections(t.legal.terms)}

          {page === 'legal' && (
            <ol className="legal-numbered-list">
              {t.legal.notice.map((item, i) => (
                <li key={i}><strong>{item.label}</strong>{item.lineBreak ? <br /> : ' '}{item.text}</li>
              ))}
            </ol>
          )}

          {page === 'cookies' && renderSections(t.legal.cookies)}
        </div>
      </motion.div>
    </div>
  )
}

function LegalFooter() {
  const { t } = useLang()
  const [activePage, setActivePage] = useState<LegalPage | null>(null)
  const links: Array<{ page: LegalPage; label: string }> = [
    { page: 'terms', label: t.footer.terms },
    { page: 'legal', label: t.footer.legal },
    { page: 'cookies', label: t.footer.cookies },
  ]

  return (
    <>
      <footer className="border-t border-white/5 px-6 pb-10 pt-8 text-center">
        <img src={logoSvg} alt="Martial Production" className="mx-auto h-24 w-auto md:h-32" />
        <nav aria-label={t.footer.legalNav} className="mt-3 flex flex-col items-center justify-center gap-3 text-sm text-white/55 sm:flex-row sm:gap-7 md:text-base">
          {links.map(link => (
            <button
              key={link.page}
              type="button"
              onClick={() => setActivePage(link.page)}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </button>
          ))}
        </nav>
      </footer>
      {activePage && <LegalModal page={activePage} onClose={() => setActivePage(null)} />}
    </>
  )
}

/* ─── App root ─── */

export default function App() {
  return (
    <LangProvider>
      <Site />
    </LangProvider>
  )
}

function Site() {
  const { t } = useLang()
  React.useEffect(() => { loadCalendly() }, [])
  React.useEffect(() => {
    if (document.querySelector('script[src="https://fast.wistia.com/player.js"]')) return
    const s = document.createElement('script'); s.src = 'https://fast.wistia.com/player.js'; s.async = true; document.head.appendChild(s)
  }, [])
  return (
    <div className="mx-auto min-h-screen w-full max-w-[1920px] bg-[#0c0c0c] text-white" style={{ fontFamily: 'Inter, system-ui, sans-serif', overflowX: 'hidden' }}>
      {/* Warm radial glow — fixed behind everything */}
      <div className="fixed inset-0 pointer-events-none z-0" style={{
        background: 'radial-gradient(ellipse 90% 55% at 50% -5%, rgba(160,60,10,0.38) 0%, rgba(100,30,5,0.18) 40%, transparent 70%)'
      }} />
      <Navbar />
      <div className="h-[136px] md:h-[104px]" aria-hidden="true" />
      <Hero />
      <VSLSection />
      <BrandBanner />
      <CreateursSection />
      <VideoGrid id="videos-youtube" items={youtubeVideos} label={t.nav.youtube} accent="rgba(255,255,255,0.5)" dotColor="#d5201f" />
      <VideoGrid id="motion-saas" items={saasVideos} label={t.nav.saas} accent="#22d3ee" />
      <VideoGrid id="vsl-videos" items={vslVideos} label={t.nav.vsl} accent={C.redLight} dotColor="#f5c842" />
      <VideoGrid id="ads" items={adsVideos} label={t.nav.ads} accent={C.red} dotColor="#2563eb" vertical />
      <VideoGrid id="reels" items={reelsVideos} label={t.nav.reels} accent="#a855f7" vertical />
      <FooterCTA />
      <LegalFooter />
    </div>
  )
}
