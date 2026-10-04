import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'motion/react'
import { Mail, Play, MessageCircle, VolumeX, X } from 'lucide-react'
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
import ytUyPKqaSdLrg from '@/assets/yt_uyPKqaSdLrg.mp4'
import ytO3lHLShW0 from '@/assets/yt_O3lHLShW0.mp4'
import ytEr7p1EkNvR0 from '@/assets/yt_Er7p1EkNvR0.mp4'
import ytM8ZwWxJxdnA from '@/assets/yt_m8ZwWxJxdnA.mp4'
import ytSRtQmFEhlBE from '@/assets/yt_sRtQmFEhlBE.mp4'
import vslY0xfbzMChcw from '@/assets/vsl_y0xfbzMChcw.mp4'
import vslTm4p5wf5de from '@/assets/vsl_tm4p5wf5de.mp4'
import vsl9f7n2qmua4 from '@/assets/vsl_9f7n2qmua4.mp4'
import vslRv00d92adp from '@/assets/vsl_rv00d92adp.mp4'
import vslUxb2hd6oli from '@/assets/vsl_uxb2hd6oli.mp4'
import vslCn1y5pm9o1 from '@/assets/vsl_cn1y5pm9o1.mp4'
import adOdmynya6to from '@/assets/ad_odmynya6to.mp4'
import ad9onin2gc38 from '@/assets/ad_9onin2gc38.mp4'
import adLra91c1hqv from '@/assets/ad_lra91c1hqv.mp4'
import adM036mavsm9 from '@/assets/ad_m036mavsm9.mp4'
import ad9ced1wqktj from '@/assets/ad_9ced1wqktj.mp4'
import ad37uemr9zv8 from '@/assets/ad_37uemr9zv8.mp4'
import bananaZoneGif from '@/assets/banana_zone.mp4'
import reelAq3bwnzyuc from '@/assets/reel_aq3bwnzyuc.mp4'
import reel8az46h3zsp from '@/assets/reel_8az46h3zsp.mp4'
import reel3zke9jtqmv from '@/assets/reel_3zke9jtqmv.mp4'
import reelEbnd3djra4 from '@/assets/reel_ebnd3djra4.mp4'
import reelQczmcbr4if from '@/assets/reel_qczmcbr4if.mp4'

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

const creators = [
  { name: 'Alec Henry', niche: 'Entrepreneuriat', subs: '280K', photo: creator1 },
  { name: 'Camil Mikolajczack', niche: 'Patrimoine', subs: '195K', photo: creator2 },
  { name: 'Hugo Gedio', niche: 'LinkedIn', subs: '410K', photo: creator3 },
  { name: 'Jean Hollaender', niche: 'Business en ligne', subs: '320K', photo: creator4 },
  { name: 'Jody Cavalie', niche: 'Business en ligne', subs: '155K', photo: creator5 },
  { name: 'Yann Darwin', niche: 'Immobilier', subs: '230K', photo: creator6 },
  { name: 'Yomi Denzel', niche: 'E-commerce', subs: '180K', photo: creator7 },
  { name: 'Julien Roman', niche: 'Cryptos', subs: '210K', photo: creator8 },
]

const brands = [
  { title: '', client: '', views: '', bg: '#0d0d0d', thumb: ytSPYbRN2fgM, ytId: 's-PYbRN2fgM' },
  { title: '', client: '', views: '', bg: '#0a0a0a', thumb: ytUyPKqaSdLrg, ytId: 'uyPKqaSdLrg' },
  { title: '', client: '', views: '', bg: '#0c0c0c', thumb: ytO3lHLShW0, ytId: '-O3lHLS-hW0' },
  { title: '', client: '', views: '', bg: '#111111', thumb: ytEr7p1EkNvR0, ytId: 'Er7p1EkNvR0' },
  { title: '', client: '', views: '', bg: '#0e0e0e', thumb: ytM8ZwWxJxdnA, ytId: 'm8ZwWxJxdnA' },
  { title: '', client: '', views: '', bg: '#111', thumb: ytSRtQmFEhlBE, ytId: 'sRtQmFEhlBE' },
]

const redVideos = [
  { title: '', client: '', views: '', bg: '#111', wistiaId: 'rv00d92adp', thumb: vslRv00d92adp },
  { title: '', client: '', views: '', bg: '#111', wistiaId: 'uxb2hd6oli', thumb: vslUxb2hd6oli },
  { title: '', client: '', views: '', bg: '#111', wistiaId: 'cn1y5pm9o1', thumb: vslCn1y5pm9o1 },
  { title: '', client: '', views: '', bg: '#111', wistiaId: 'tm4p5wf5de', thumb: vslTm4p5wf5de },
  { title: '', client: '', views: '', bg: '#111', wistiaId: '9f7n2qmua4', thumb: vsl9f7n2qmua4 },
  { title: '', client: '', views: '', bg: '#111', ytId: 'y0xfbzMChcw', thumb: vslY0xfbzMChcw },
]

const productions = [
  { title: '', client: '', views: '', bg: '#111', wistiaId: 'odmynya6to', thumb: adOdmynya6to },
  { title: '', client: '', views: '', bg: '#111', wistiaId: '9onin2gc38', thumb: ad9onin2gc38 },
  { title: '', client: '', views: '', bg: '#111', wistiaId: 'lra91c1hqv', thumb: adLra91c1hqv },
  { title: '', client: '', views: '', bg: '#111', wistiaId: 'm036mavsm9', thumb: adM036mavsm9 },
  { title: '', client: '', views: '', bg: '#111', wistiaId: '9ced1wqktj', thumb: ad9ced1wqktj },
  { title: '', client: '', views: '', bg: '#111', wistiaId: '37uemr9zv8', thumb: ad37uemr9zv8 },
  { title: '', client: '', views: '', bg: '#111', wistiaId: 'odmynya6to', thumb: adOdmynya6to },
  { title: '', client: '', views: '', bg: '#111', wistiaId: '9onin2gc38', thumb: ad9onin2gc38 },
  { title: '', client: '', views: '', bg: '#111', wistiaId: 'lra91c1hqv', thumb: adLra91c1hqv },
  { title: '', client: '', views: '', bg: '#111', wistiaId: 'm036mavsm9', thumb: adM036mavsm9 },
  { title: '', client: '', views: '', bg: '#111', wistiaId: '9ced1wqktj', thumb: ad9ced1wqktj },
  { title: '', client: '', views: '', bg: '#111', wistiaId: '37uemr9zv8', thumb: ad37uemr9zv8 },
]

const reels = [
  { title: '', client: '', views: '', bg: '#111', wistiaId: 'qczmcbr4if', thumb: reelQczmcbr4if },
  { title: '', client: '', views: '', bg: '#111', wistiaId: 'ebnd3djra4', thumb: reelEbnd3djra4 },
  { title: '', client: '', views: '', bg: '#111', wistiaId: '3zke9jtqmv', thumb: reel3zke9jtqmv },
  { title: '', client: '', views: '', bg: '#111', wistiaId: '8az46h3zsp', thumb: reel8az46h3zsp },
  { title: '', client: '', views: '', bg: '#111', wistiaId: 'pws8nqpnwh', thumb: bananaZoneGif },
  { title: '', client: '', views: '', bg: '#111', wistiaId: 'aq3bwnzyuc', thumb: reelAq3bwnzyuc },
  { title: '', client: '', views: '', bg: '#111', wistiaId: 'qczmcbr4if', thumb: reelQczmcbr4if },
  { title: '', client: '', views: '', bg: '#111', wistiaId: 'ebnd3djra4', thumb: reelEbnd3djra4 },
  { title: '', client: '', views: '', bg: '#111', wistiaId: '3zke9jtqmv', thumb: reel3zke9jtqmv },
  { title: '', client: '', views: '', bg: '#111', wistiaId: '8az46h3zsp', thumb: reel8az46h3zsp },
  { title: '', client: '', views: '', bg: '#111', wistiaId: 'pws8nqpnwh', thumb: bananaZoneGif },
  { title: '', client: '', views: '', bg: '#111', wistiaId: 'aq3bwnzyuc', thumb: reelAq3bwnzyuc },
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
  const links = [
    { label: 'Vidéos Youtube', href: '#videos-youtube' },
    { label: 'VSL', href: '#vsl-videos' },
    { label: 'ADS', href: '#ads' },
    { label: 'Reels', href: '#reels' },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mobile-header-position fixed left-0 right-0 z-50 w-[calc(100%-2rem)] max-w-[900px] mx-auto py-2.5 md:py-3 rounded-2xl border border-white/10 bg-[#0c0c0c]/90 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.35)]"
    >
      <div className="px-4 md:px-5 grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-3 md:flex md:justify-between md:gap-5">
        <img src={mobileLogoSvg} alt="Martial Production" className="h-11 w-11 object-contain justify-self-start md:hidden" />
        <img src={logoSvg} alt="Martial Production" className="hidden h-16 w-auto justify-self-start md:block" style={{ maxWidth: 280 }} />
        <div className="hidden md:flex md:w-auto md:items-center md:justify-center md:gap-5">
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
        <div className="col-start-2 row-start-1 md:col-auto md:row-auto flex items-center gap-2">
          <a
            href="https://wa.me/33642908005"
            target="_blank"
            rel="noreferrer"
            aria-label="Contacter sur WhatsApp"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366] px-4 text-xs font-bold text-white shadow-[0_0_0_4px_rgba(37,211,102,0.12)] transition-transform hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" strokeWidth={2.4} />
            <span className="hidden sm:inline">Me contacter</span>
          </a>
          <a
            href="https://www.instagram.com/martialproduction/"
            target="_blank"
            rel="noreferrer"
            aria-label="Voir Martial Production sur Instagram"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#FCAF45] text-white shadow-[0_0_0_4px_rgba(225,48,108,0.12)] transition-transform hover:scale-105"
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
          <a
            href="mailto:contact@martialproduction.fr"
            target="_blank"
            rel="noreferrer"
            aria-label="Envoyer un e-mail à Martial Production"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-transform hover:scale-105 hover:bg-white/15"
          >
            <Mail className="h-5 w-5" strokeWidth={2.2} />
          </a>
        </div>
      </div>
    </motion.nav>
  )
}

/* ─── Hero headline ─── */

function Hero() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="flex items-center gap-2 mb-5 justify-center flex-wrap">
          <span className="hero-badge" style={{ background: '#f5c842', color: '#0c0c0c' }}>Monteur vidéo</span>
          <span className="hero-badge" style={{ background: '#f5c842', color: '#0c0c0c' }}>Motion designer</span>
        </div>
        <h1 className="text-[clamp(1.3rem,6.6vw,1.9rem)] md:text-6xl font-bold tracking-tight leading-[1.08] text-white text-center">
          <span className="whitespace-nowrap">Je transforme vos idées</span><br />
          <span className="whitespace-nowrap">en vidéos qui <span className="font-serif-italic">convertissent.</span></span>
        </h1>
        <p className="mt-6 text-white/50 text-base max-w-xl leading-relaxed text-center mx-auto">
          J'accompagne les créateurs et marques qui veulent des vidéos à impact.
        </p>
      </motion.div>
    </div>
  )
}

/* ─── VSL Section ─── */

function VSLSection() {
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
    <section id="vsl" className="mx-auto pb-6" style={{ maxWidth: 1040, paddingInline: 'clamp(2rem, 6vw, 6rem)' }}>
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
            aria-label="Activer le son de la vidéo"
            className="absolute right-3 top-3 z-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#d5201f] px-4 py-3 text-xs font-bold text-white shadow-[0_8px_30px_rgba(0,0,0,0.45),0_0_24px_rgba(213,32,31,0.35)] transition-all hover:scale-[1.03] hover:bg-[#ed2928] disabled:cursor-wait disabled:opacity-60 disabled:hover:scale-100 sm:right-5 sm:top-5 sm:px-5 sm:text-sm"
          >
            <VolumeX className="h-5 w-5" />
            Activer le son
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

function CreatorCard({ name, niche, subs, photo, handle, i }: {
  name: string; niche: string; subs: string; photo: string; handle: string; i: number
}) {
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
  return (
    <section id="créateurs" className="pb-20 pt-8">
      <div className="max-w-6xl mx-auto px-6 mb-2 text-center">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.08] text-white">
          Ils m'ont fait <span className="font-serif-italic">confiance.</span>
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

/* ─── Video Carousel ─── */

type VideoItem = { title: string; client: string; views: string; bg: string; type?: string; name?: string; duration?: string; thumb?: string; ytId?: string; wistiaId?: string }

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

function VideoCarousel({ items, label, accent, dotColor = accent, vertical = false, id }: { items: VideoItem[]; label: string; accent: string; dotColor?: string; vertical?: boolean; id: string }) {
  const [viewW, setViewW] = useState(() => window.innerWidth)
  useEffect(() => {
    const onResize = () => setViewW(window.innerWidth)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  const baseCardW = vertical ? 200 : 320
  const isMobile = viewW < 640
  const visibleCount = isMobile
    ? (vertical ? 4 : 2.15)
    : (vertical ? 3.2 : 1.5)
  const cardW = Math.min(baseCardW, Math.floor((viewW - 32) / visibleCount))
  const gap = isMobile ? 12 : 16
  const totalW = items.length * (cardW + gap)
  const duration = Math.round(totalW / 40)
  const [activeWistia, setActiveWistia] = useState<string | null>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)
  const setRate = (rate: number) => marqueeRef.current?.getAnimations()[0]?.updatePlaybackRate(rate)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, width } = e.currentTarget.getBoundingClientRect()
    const ratio = (e.clientX - left) / width
    setRate(0.15 + ratio * 6.85)
  }

  const doubled = [...items, ...items]

  const Card = ({ item, i }: { item: VideoItem; i: number }) => {
    const title = item.title ?? item.name ?? ''
    const client = item.client ?? item.type ?? ''
    const swatch = item.wistiaId ? `https://fast.wistia.com/embed/medias/${item.wistiaId}/swatch` : null
    return (
      <div
        key={i}
        className="group relative flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-2"
        style={{ width: cardW, aspectRatio: vertical ? '9/16' : '16/9', background: item.bg, border: `1px solid ${accent}22` }}
        onClick={() => {
          if (item.ytId) window.open(`https://www.youtube.com/watch?v=${item.ytId}`, '_blank')
          else if (item.wistiaId) setActiveWistia(item.wistiaId)
        }}
      >
        {item.thumb ? (
          <AutoVideo src={item.thumb} label={title} className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 0.95 }} />
        ) : item.wistiaId ? (
          <div className="absolute inset-0 pointer-events-none">
            {/* @ts-ignore */}
            <wistia-player
              media-id={item.wistiaId}
              style={{ display: 'block', width: '100%', height: '100%' }}
            />
          </div>
        ) : null}
        <div className="absolute inset-0 pointer-events-none" />
        <PlayBadge color={accent} />
        {(title || client) && (
        <div className="absolute bottom-0 left-0 right-0 p-4"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, transparent 100%)' }}>
          {item.type && (
            <span className="text-[10px] uppercase tracking-widest font-semibold px-2 py-0.5 rounded-md mb-1.5 inline-block"
              style={{ background: `${accent}22`, color: accent }}>{item.type}</span>
          )}
          <p className="text-white font-semibold text-sm leading-tight">{title}</p>
          <div className="flex items-center justify-between mt-1">
            <span className="text-xs text-white/40">{client}</span>
            {item.views && item.views !== '—' && <span className="text-xs font-semibold" style={{ color: accent }}>{item.views} vues</span>}
            {item.duration && <span className="text-xs text-white/30">{item.duration}</span>}
          </div>
        </div>
        )}
      </div>
    )
  }

  return (
    <>
    {activeWistia && <WistiaModal mediaId={activeWistia} vertical={vertical} onClose={() => setActiveWistia(null)} />}
    <section id={id} className="pb-16 scroll-mt-36">
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
      <div
        className="relative mx-auto overflow-hidden 2xl:w-[calc(100%-6rem)] 2xl:max-w-[1440px] 2xl:rounded-2xl"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setRate(1)}
      >
        {/* Fade left */}
        <div className="absolute inset-y-0 left-0 w-28 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #0c0c0c 40%, transparent)' }} />
        {/* Fade right */}
        <div className="absolute inset-y-0 right-0 w-28 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #0c0c0c 40%, transparent)' }} />

        <div
          ref={marqueeRef}
          className="marquee-video flex"
          style={{ gap, width: 'max-content', '--marquee-duration': `${duration}s` } as React.CSSProperties}
        >
          {doubled.map((item, i) => <Card key={i} item={item} i={i} />)}
        </div>
      </div>
    </section>
    </>
  )
}

/* ─── Footer CTA ─── */

function FooterCTA() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-2 sm:px-6 pt-2 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl px-3 py-10 sm:p-12 md:p-20 text-center"
        style={{
          background: 'linear-gradient(135deg, #1a0505, #0c0c0c)',
          border: '1px solid rgba(213,32,31,0.2)',
          boxShadow: '0 0 80px rgba(213,32,31,0.08)'
        }}
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[0.88]">
          Travaillons<br /><span className="font-serif-italic">ensemble.</span>
        </h2>
        <p className="mt-6 whitespace-nowrap text-[clamp(0.46rem,2.3vw,0.875rem)] sm:text-sm text-white/50 leading-relaxed">
          Créateur, marque ou agence — discutons de votre prochain projet vidéo.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://wa.me/33642908005"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366] px-4 py-4 text-sm font-semibold text-white shadow-[0_0_0_4px_rgba(37,211,102,0.12)] transition-all hover:scale-[1.03] sm:px-8"
          >
            <MessageCircle className="h-5 w-5" strokeWidth={2.4} />
            Me contacter
          </a>
          <a
            href="https://www.instagram.com/martialproduction/"
            target="_blank"
            rel="noreferrer"
            aria-label="Voir Martial Production sur Instagram"
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
          <a
            href="mailto:contact@martialproduction.fr"
            target="_blank"
            rel="noreferrer"
            aria-label="Envoyer un e-mail à Martial Production"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-transform hover:scale-105 hover:bg-white/15"
          >
            <Mail className="h-5 w-5" strokeWidth={2.2} />
          </a>
        </div>
      </motion.div>
    </section>
  )
}

/* ─── Legal footer ─── */

type LegalPage = 'terms' | 'legal' | 'cookies'

function LegalModal({ page, onClose }: { page: LegalPage; onClose: () => void }) {
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
    terms: "Conditions d'utilisation",
    legal: 'Mentions légales',
    cookies: 'Politique sur les Cookies',
  }

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
          aria-label="Fermer"
          className="absolute right-5 top-5 z-10 rounded-full p-2 text-black transition-colors hover:bg-black/5 md:right-7 md:top-6"
        >
          <X className="h-8 w-8 md:h-11 md:w-11" strokeWidth={2.2} />
        </button>

        <h2 id={`legal-title-${page}`} className="mb-6 pr-12 text-center text-3xl font-black tracking-tight md:text-5xl">
          {titles[page]}
        </h2>

        <div className="legal-copy text-sm leading-relaxed md:text-[17px]">
          {page === 'terms' && (
            <>
              <h3>1. Acceptation des Conditions</h3>
              <p>En accédant ou en utilisant ce site web martialproduction.fr, vous acceptez de vous conformer aux présentes Conditions d'Utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser le Site.</p>

              <h3>2. Utilisation du Site</h3>
              <p>2.1. Vous acceptez d'utiliser ce Site conformément à toutes les lois et réglementations applicables, ainsi qu'aux présentes Conditions d'Utilisation.</p>
              <p>2.2. Vous acceptez de ne pas utiliser le Site à des fins illégales, diffamatoires, abusives, obscènes, offensantes, menaçantes, harcelantes ou en violation des droits de propriété intellectuelle de tiers.</p>

              <h3>3. Contenu du Site</h3>
              <p>3.1. Le contenu du Site, y compris mais sans s'y limiter, les textes, les images, les vidéos, les graphiques, les logos et les marques de commerce, est protégé par les lois sur les droits d'auteur et les marques de commerce. Tous les droits sur le contenu sont réservés.</p>
              <p>3.2. Vous ne pouvez pas copier, reproduire, distribuer, publier, afficher publiquement, modifier ou créer des œuvres dérivées à partir du contenu du Site sans notre autorisation préalable écrite.</p>

              <h3>4. Liens Externes</h3>
              <p>Ce Site peut contenir des liens vers des sites web tiers. Nous ne sommes pas responsables du contenu ou de la disponibilité de ces sites et ne pouvons être tenus responsables de tout préjudice ou dommage résultant de votre utilisation de ces sites.</p>

              <h3>5. Cookies et Collecte de Données</h3>
              <p>5.1. Ce Site peut utiliser des cookies pour améliorer votre expérience de navigation. En utilisant ce Site, vous consentez à l'utilisation de cookies conformément à notre Politique de Cookies.</p>
              <p>5.2. Nous pouvons collecter et traiter des informations personnelles conformément à notre Politique de Confidentialité.</p>

              <h3>6. Limitation de Responsabilité</h3>
              <p>6.1. Nous nous efforçons de maintenir le Site à jour et en bon état de fonctionnement, mais nous ne garantissons pas son accessibilité continue ni l'absence d'erreurs ou de virus.</p>
              <p>6.2. Dans la mesure permise par la loi, nous déclinons toute responsabilité pour les pertes ou les dommages directs, indirects, spéciaux ou consécutifs découlant de votre utilisation ou de l'incapacité d'utiliser le Site.</p>

              <h3>7. Modifications des Conditions d'Utilisation</h3>
              <p>Nous nous réservons le droit de modifier les présentes Conditions d'Utilisation à tout moment. Les modifications seront effectives dès leur publication sur le Site. Il vous incombe de consulter régulièrement ces conditions pour prendre connaissance des modifications éventuelles.</p>

              <h3>8. Droit Applicable et Juridiction</h3>
              <p>Les présentes Conditions d'Utilisation sont régies par le droit français. Tout litige relatif à ces conditions sera soumis à la juridiction exclusive des tribunaux français.</p>

              <h3>9. Contact</h3>
              <p>Pour toute question ou préoccupation concernant ces Conditions d'Utilisation, veuillez nous contacter à l'adresse e-mail suivante : contact@martialproduction.fr.</p>
            </>
          )}

          {page === 'legal' && (
            <ol className="legal-numbered-list">
              <li><strong>Nom de l'entreprise ou du propriétaire du site :</strong> Martial Production</li>
              <li><strong>Forme juridique :</strong> Entreprise individuelle</li>
              <li><strong>Adresse postale :</strong> 5 Rue du Ramounat 31230, L'isle en Dodon, France</li>
              <li><strong>Adresse e-mail de contact :</strong> contact@martialproduction.fr</li>
              <li><strong>Numéro RCS :</strong> 920 083 094 R.C.S Toulouse</li>
              <li><strong>Directeur de la publication :</strong> Martial Production (Propriétaire du site)</li>
              <li><strong>Hébergeur du site :</strong> Framer</li>
              <li><strong>Utilisation des cookies :</strong> Nous utilisons des cookies sur ce site web. Les cookies sont de petits fichiers texte stockés sur votre appareil pour améliorer votre expérience de navigation. Vous pouvez choisir d'accepter ou de refuser les cookies en modifiant les paramètres de votre navigateur.</li>
              <li><strong>Liens externes :</strong> Ce site web peut contenir des liens vers des sites externes sur lesquels nous n'avons aucun contrôle. Nous ne sommes pas responsables du contenu de ces sites externes.</li>
              <li><strong>Propriété intellectuelle :</strong> Les contenus de ce site web, y compris les textes, les images et les vidéos, sont protégés par les lois sur les droits d'auteur et les marques de commerce. Toute utilisation non autorisée est strictement interdite.</li>
              <li><strong>Droit applicable :</strong> Ce site web est soumis au droit français.</li>
              <li><strong>Date de dernière mise à jour :</strong> Les présentes mentions légales ont été mises à jour pour la dernière fois le 06/01/2025.</li>
              <li><strong>Clause de non-responsabilité :</strong> Les informations fournies sur ce site web sont à titre informatif uniquement. Nous nous efforçons de maintenir les informations à jour et exactes, mais nous ne garantissons pas leur exhaustivité ni leur exactitude. En conséquence, nous déclinons toute responsabilité pour toute perte ou préjudice découlant de l'utilisation de ce site ou de son contenu.</li>
              <li><strong>Politique de confidentialité :</strong> Nous ne collectons pas délibérément d'informations personnelles sur les visiteurs de notre site web, sauf si elles sont fournies volontairement par le biais de formulaires de contact ou d'autres moyens de communication. Nous nous engageons à protéger la confidentialité de ces informations et à ne pas les partager avec des tiers sans votre consentement explicite. Pour en savoir plus sur notre politique de confidentialité, veuillez nous contacter à l'adresse e-mail indiquée ci-dessus.</li>
              <li><strong>Litiges :</strong><br />En cas de litige concernant ce site web ou son contenu, les tribunaux français auront compétence exclusive pour résoudre le différend conformément au droit français.</li>
              <li><strong>Droit applicable :</strong><br />Ce site web est soumis au droit français, et toute utilisation de ce site est régie par les lois françaises en vigueur.</li>
            </ol>
          )}

          {page === 'cookies' && (
            <>
              <h3>1. Introduction</h3>
              <p>1.1. Cette politique sur les cookies explique comment nous utilisons les cookies et les technologies similaires sur notre site web martialproduction.fr. En utilisant le Site, vous acceptez notre utilisation des cookies conformément à la présente politique.</p>

              <h3>2. Qu'est-ce qu'un Cookie ?</h3>
              <p>2.1. Un cookie est un petit fichier texte placé sur votre ordinateur ou appareil mobile lorsque vous visitez un site web. Les cookies sont largement utilisés pour rendre les sites web plus efficaces et améliorer votre expérience en tant qu'utilisateur.</p>

              <h3>3. Types de Cookies Utilisés</h3>
              <p>3.1. Nous utilisons les types de cookies suivants sur notre Site :</p>
              <ul>
                <li><strong>Cookies Strictement Nécessaires :</strong> Ces cookies sont essentiels pour vous permettre de naviguer sur le Site et d'utiliser ses fonctionnalités. Ils ne peuvent pas être désactivés.</li>
                <li><strong>Cookies de Performance :</strong> Ces cookies collectent des informations sur la manière dont vous utilisez notre Site, telles que les pages que vous consultez le plus fréquemment. Ces données nous aident à améliorer la performance du Site.</li>
                <li><strong>Cookies de Fonctionnalité :</strong> Ces cookies permettent au Site de mémoriser vos choix (comme votre nom d'utilisateur, la langue ou la région) et de fournir des fonctionnalités améliorées et personnalisées.</li>
                <li><strong>Cookies de Publicité et de Ciblage :</strong> Ces cookies sont utilisés pour afficher des publicités pertinentes pour vous. Ils sont généralement placés par des tiers, tels que des réseaux publicitaires.</li>
              </ul>

              <h3>4. Gestion des Cookies</h3>
              <p>4.1. Vous pouvez généralement gérer les cookies via les paramètres de votre navigateur. Vous pouvez choisir d'accepter, de refuser ou de supprimer les cookies. Cependant, veuillez noter que la désactivation des cookies strictement nécessaires peut affecter la fonctionnalité du Site.</p>
              <p>4.2. Vous pouvez également configurer vos préférences de cookies lors de votre première visite sur notre Site en acceptant ou en refusant les cookies non essentiels.</p>

              <h3>5. Cookies de Tiers</h3>
              <p>5.1. Certaines fonctionnalités de notre Site peuvent être fournies par des tiers, qui peuvent également utiliser des cookies. Nous n'avons aucun contrôle sur ces cookies de tiers et vous devez consulter les politiques de confidentialité et de cookies de ces tiers pour plus d'informations.</p>

              <h3>6. Contact</h3>
              <p>6.1. Si vous avez des questions ou des préoccupations concernant notre politique sur les cookies, veuillez nous contacter à l'adresse e-mail suivante : contact@martialproduction.fr.</p>
            </>
          )}
        </div>
      </motion.div>
    </div>
  )
}

function LegalFooter() {
  const [activePage, setActivePage] = useState<LegalPage | null>(null)
  const links: Array<{ page: LegalPage; label: string }> = [
    { page: 'terms', label: "Conditions d'utilisation" },
    { page: 'legal', label: 'Mentions légales' },
    { page: 'cookies', label: 'Politique sur les Cookies' },
  ]

  return (
    <>
      <footer className="border-t border-white/5 px-6 pb-10 pt-8 text-center">
        <img src={logoSvg} alt="Martial Production" className="mx-auto h-24 w-auto md:h-32" />
        <nav aria-label="Informations légales" className="mt-3 flex flex-col items-center justify-center gap-3 text-sm text-white/55 sm:flex-row sm:gap-7 md:text-base">
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
      <VideoCarousel id="videos-youtube" items={brands} label="Vidéos Youtube" accent="rgba(255,255,255,0.5)" dotColor="#d5201f" />
      <VideoCarousel id="vsl-videos" items={redVideos} label="VSL" accent={C.redLight} dotColor="#f5c842" />
      <VideoCarousel id="ads" items={productions} label="ADS" accent={C.red} dotColor="#2563eb" vertical />
      <VideoCarousel id="reels" items={reels} label="Reels" accent="#a855f7" vertical />
      <FooterCTA />
      <LegalFooter />
    </div>
  )
}
