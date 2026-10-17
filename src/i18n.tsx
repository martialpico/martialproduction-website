import React, { createContext, useContext, useEffect, useState } from 'react'

/* ─── Langues du site : français et anglais ───
   Ordre de choix de la langue au chargement :
   1. ?lang=fr ou ?lang=en dans l'adresse (pratique pour envoyer un lien en anglais)
   2. le choix fait avec le sélecteur, mémorisé dans le navigateur
   3. la langue principale du navigateur : français → FR, toutes les autres → EN */

export type Lang = 'fr' | 'en'

const STORAGE_KEY = 'mp-lang'

function detectLang(): Lang {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get('lang')
    if (fromUrl === 'fr' || fromUrl === 'en') return fromUrl
  } catch { /* adresse illisible : on passe à la suite */ }
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'fr' || saved === 'en') return saved
  } catch { /* stockage bloqué (navigation privée…) : on passe à la suite */ }
  const first = (navigator.languages?.[0] || navigator.language || '').toLowerCase()
  return first.startsWith('fr') ? 'fr' : 'en'
}

/* ─── Textes ─── */

export type LegalSection = { title: string; paragraphs?: string[]; list?: { label: string; text: string }[] }
export type LegalItem = { label: string; text: string; lineBreak?: boolean }

const fr = {
  nav: {
    youtube: 'Vidéos Youtube',
    saas: 'Motion SaaS',
    vsl: 'VSL',
    ads: 'ADS',
    reels: 'Reels',
    rdv: 'Prendre un rendez-vous',
    rdvShort: 'Rendez-vous',
    whatsapp: 'Me contacter sur WhatsApp',
    instagram: 'Voir Martial Production sur Instagram',
    language: 'Changer de langue',
  },
  hero: {
    badges: ['Monteur vidéo', 'Motion designer'],
    line1: 'Je transforme vos idées',
    line2: 'en vidéos qui ',
    accent: 'convertissent.',
    sub: "J'accompagne les créateurs et marques qui veulent des vidéos à impact.",
  },
  vsl: {
    sound: 'Activer le son',
    soundAria: 'Activer le son de la vidéo',
  },
  creators: {
    title: "Ils m'ont fait ",
    accent: 'confiance.',
    niches: {
      entrepreneurship: 'Entrepreneuriat',
      wealth: 'Patrimoine',
      linkedin: 'LinkedIn',
      onlineBusiness: 'Business en ligne',
      realEstate: 'Immobilier',
      ecommerce: 'E-commerce',
      crypto: 'Cryptos',
    },
  },
  videos: {
    watch: (title: string) => `Voir la vidéo : ${title}`,
  },
  cta: {
    title: 'Travaillons',
    accent: 'ensemble.',
    sub: 'Créateur, marque ou agence — discutons de votre prochain projet vidéo.',
  },
  footer: {
    legalNav: 'Informations légales',
    close: 'Fermer',
    terms: "Conditions d'utilisation",
    legal: 'Mentions légales',
    cookies: 'Politique sur les Cookies',
  },
  legal: {
    terms: [
      { title: '1. Acceptation des Conditions', paragraphs: ["En accédant ou en utilisant ce site web martialproduction.fr, vous acceptez de vous conformer aux présentes Conditions d'Utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser le Site."] },
      { title: '2. Utilisation du Site', paragraphs: [
        "2.1. Vous acceptez d'utiliser ce Site conformément à toutes les lois et réglementations applicables, ainsi qu'aux présentes Conditions d'Utilisation.",
        '2.2. Vous acceptez de ne pas utiliser le Site à des fins illégales, diffamatoires, abusives, obscènes, offensantes, menaçantes, harcelantes ou en violation des droits de propriété intellectuelle de tiers.',
      ] },
      { title: '3. Contenu du Site', paragraphs: [
        "3.1. Le contenu du Site, y compris mais sans s'y limiter, les textes, les images, les vidéos, les graphiques, les logos et les marques de commerce, est protégé par les lois sur les droits d'auteur et les marques de commerce. Tous les droits sur le contenu sont réservés.",
        '3.2. Vous ne pouvez pas copier, reproduire, distribuer, publier, afficher publiquement, modifier ou créer des œuvres dérivées à partir du contenu du Site sans notre autorisation préalable écrite.',
      ] },
      { title: '4. Liens Externes', paragraphs: ['Ce Site peut contenir des liens vers des sites web tiers. Nous ne sommes pas responsables du contenu ou de la disponibilité de ces sites et ne pouvons être tenus responsables de tout préjudice ou dommage résultant de votre utilisation de ces sites.'] },
      { title: '5. Cookies et Collecte de Données', paragraphs: [
        "5.1. Ce Site peut utiliser des cookies pour améliorer votre expérience de navigation. En utilisant ce Site, vous consentez à l'utilisation de cookies conformément à notre Politique de Cookies.",
        '5.2. Nous pouvons collecter et traiter des informations personnelles conformément à notre Politique de Confidentialité.',
      ] },
      { title: '6. Limitation de Responsabilité', paragraphs: [
        "6.1. Nous nous efforçons de maintenir le Site à jour et en bon état de fonctionnement, mais nous ne garantissons pas son accessibilité continue ni l'absence d'erreurs ou de virus.",
        "6.2. Dans la mesure permise par la loi, nous déclinons toute responsabilité pour les pertes ou les dommages directs, indirects, spéciaux ou consécutifs découlant de votre utilisation ou de l'incapacité d'utiliser le Site.",
      ] },
      { title: "7. Modifications des Conditions d'Utilisation", paragraphs: ["Nous nous réservons le droit de modifier les présentes Conditions d'Utilisation à tout moment. Les modifications seront effectives dès leur publication sur le Site. Il vous incombe de consulter régulièrement ces conditions pour prendre connaissance des modifications éventuelles."] },
      { title: '8. Droit Applicable et Juridiction', paragraphs: ["Les présentes Conditions d'Utilisation sont régies par le droit français. Tout litige relatif à ces conditions sera soumis à la juridiction exclusive des tribunaux français."] },
      { title: '9. Contact', paragraphs: ["Pour toute question ou préoccupation concernant ces Conditions d'Utilisation, veuillez nous contacter à l'adresse e-mail suivante : contact@martialproduction.fr."] },
    ] as LegalSection[],
    notice: [
      { label: "Nom de l'entreprise ou du propriétaire du site :", text: 'Martial Production' },
      { label: 'Forme juridique :', text: 'Entreprise individuelle' },
      { label: 'Adresse postale :', text: "5 Rue du Ramounat 31230, L'isle en Dodon, France" },
      { label: 'Adresse e-mail de contact :', text: 'contact@martialproduction.fr' },
      { label: 'Numéro RCS :', text: '920 083 094 R.C.S Toulouse' },
      { label: 'Directeur de la publication :', text: 'Martial Production (Propriétaire du site)' },
      { label: 'Hébergeur du site :', text: 'Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis. Téléphone : +1 559 288 7060. Site : vercel.com' },
      { label: 'Utilisation des cookies :', text: "Nous utilisons des cookies sur ce site web. Les cookies sont de petits fichiers texte stockés sur votre appareil pour améliorer votre expérience de navigation. Vous pouvez choisir d'accepter ou de refuser les cookies en modifiant les paramètres de votre navigateur." },
      { label: 'Liens externes :', text: "Ce site web peut contenir des liens vers des sites externes sur lesquels nous n'avons aucun contrôle. Nous ne sommes pas responsables du contenu de ces sites externes." },
      { label: 'Propriété intellectuelle :', text: "Les contenus de ce site web, y compris les textes, les images et les vidéos, sont protégés par les lois sur les droits d'auteur et les marques de commerce. Toute utilisation non autorisée est strictement interdite." },
      { label: 'Droit applicable :', text: 'Ce site web est soumis au droit français.' },
      { label: 'Date de dernière mise à jour :', text: 'Les présentes mentions légales ont été mises à jour pour la dernière fois le 17/10/2026.' },
      { label: 'Clause de non-responsabilité :', text: "Les informations fournies sur ce site web sont à titre informatif uniquement. Nous nous efforçons de maintenir les informations à jour et exactes, mais nous ne garantissons pas leur exhaustivité ni leur exactitude. En conséquence, nous déclinons toute responsabilité pour toute perte ou préjudice découlant de l'utilisation de ce site ou de son contenu." },
      { label: 'Politique de confidentialité :', text: "Nous ne collectons pas délibérément d'informations personnelles sur les visiteurs de notre site web, sauf si elles sont fournies volontairement par le biais de formulaires de contact ou d'autres moyens de communication. Nous nous engageons à protéger la confidentialité de ces informations et à ne pas les partager avec des tiers sans votre consentement explicite. Pour en savoir plus sur notre politique de confidentialité, veuillez nous contacter à l'adresse e-mail indiquée ci-dessus." },
      { label: 'Litiges :', text: 'En cas de litige concernant ce site web ou son contenu, les tribunaux français auront compétence exclusive pour résoudre le différend conformément au droit français.', lineBreak: true },
      { label: 'Droit applicable :', text: 'Ce site web est soumis au droit français, et toute utilisation de ce site est régie par les lois françaises en vigueur.', lineBreak: true },
    ] as LegalItem[],
    cookies: [
      { title: '1. Introduction', paragraphs: ['1.1. Cette politique sur les cookies explique comment nous utilisons les cookies et les technologies similaires sur notre site web martialproduction.fr. En utilisant le Site, vous acceptez notre utilisation des cookies conformément à la présente politique.'] },
      { title: "2. Qu'est-ce qu'un Cookie ?", paragraphs: ["2.1. Un cookie est un petit fichier texte placé sur votre ordinateur ou appareil mobile lorsque vous visitez un site web. Les cookies sont largement utilisés pour rendre les sites web plus efficaces et améliorer votre expérience en tant qu'utilisateur."] },
      { title: '3. Types de Cookies Utilisés', paragraphs: ['3.1. Nous utilisons les types de cookies suivants sur notre Site :'], list: [
        { label: 'Cookies Strictement Nécessaires :', text: "Ces cookies sont essentiels pour vous permettre de naviguer sur le Site et d'utiliser ses fonctionnalités. Ils ne peuvent pas être désactivés." },
        { label: 'Cookies de Performance :', text: 'Ces cookies collectent des informations sur la manière dont vous utilisez notre Site, telles que les pages que vous consultez le plus fréquemment. Ces données nous aident à améliorer la performance du Site.' },
        { label: 'Cookies de Fonctionnalité :', text: "Ces cookies permettent au Site de mémoriser vos choix (comme votre nom d'utilisateur, la langue ou la région) et de fournir des fonctionnalités améliorées et personnalisées." },
        { label: 'Cookies de Publicité et de Ciblage :', text: 'Ces cookies sont utilisés pour afficher des publicités pertinentes pour vous. Ils sont généralement placés par des tiers, tels que des réseaux publicitaires.' },
      ] },
      { title: '4. Gestion des Cookies', paragraphs: [
        '4.1. Vous pouvez généralement gérer les cookies via les paramètres de votre navigateur. Vous pouvez choisir d\'accepter, de refuser ou de supprimer les cookies. Cependant, veuillez noter que la désactivation des cookies strictement nécessaires peut affecter la fonctionnalité du Site.',
        '4.2. Vous pouvez également configurer vos préférences de cookies lors de votre première visite sur notre Site en acceptant ou en refusant les cookies non essentiels.',
      ] },
      { title: '5. Cookies de Tiers', paragraphs: ['5.1. Certaines fonctionnalités de notre Site peuvent être fournies par des tiers, qui peuvent également utiliser des cookies. Nous n\'avons aucun contrôle sur ces cookies de tiers et vous devez consulter les politiques de confidentialité et de cookies de ces tiers pour plus d\'informations.'] },
      { title: '6. Contact', paragraphs: ["6.1. Si vous avez des questions ou des préoccupations concernant notre politique sur les cookies, veuillez nous contacter à l'adresse e-mail suivante : contact@martialproduction.fr."] },
    ] as LegalSection[],
  },
}

export type Dict = typeof fr

const en: Dict = {
  nav: {
    youtube: 'YouTube Videos',
    saas: 'SaaS Motion',
    vsl: 'VSL',
    ads: 'ADS',
    reels: 'Reels',
    rdv: 'Book a call',
    rdvShort: 'Book a call',
    whatsapp: 'Contact me on WhatsApp',
    instagram: 'See Martial Production on Instagram',
    language: 'Change language',
  },
  hero: {
    badges: ['Video editor', 'Motion designer'],
    line1: 'I turn your ideas',
    line2: 'into videos that ',
    accent: 'convert.',
    sub: 'I help creators and brands who want videos that make an impact.',
  },
  vsl: {
    sound: 'Turn on sound',
    soundAria: 'Turn on the video sound',
  },
  creators: {
    title: 'Trusted by ',
    accent: 'creators.',
    niches: {
      entrepreneurship: 'Entrepreneurship',
      wealth: 'Wealth',
      linkedin: 'LinkedIn',
      onlineBusiness: 'Online business',
      realEstate: 'Real estate',
      ecommerce: 'E-commerce',
      crypto: 'Crypto',
    },
  },
  videos: {
    watch: (title: string) => `Watch the video: ${title}`,
  },
  cta: {
    title: "Let's work",
    accent: 'together.',
    sub: "Creator, brand or agency — let's talk about your next video project.",
  },
  footer: {
    legalNav: 'Legal information',
    close: 'Close',
    terms: 'Terms of use',
    legal: 'Legal notice',
    cookies: 'Cookie policy',
  },
  legal: {
    terms: [
      { title: '1. Acceptance of the Terms', paragraphs: ['By accessing or using the website martialproduction.fr, you agree to comply with these Terms of Use. If you do not accept these terms, please do not use the Site.'] },
      { title: '2. Use of the Site', paragraphs: [
        '2.1. You agree to use this Site in accordance with all applicable laws and regulations and with these Terms of Use.',
        '2.2. You agree not to use the Site for any unlawful, defamatory, abusive, obscene, offensive, threatening or harassing purpose, or in violation of the intellectual property rights of third parties.',
      ] },
      { title: '3. Site Content', paragraphs: [
        '3.1. The content of the Site, including but not limited to text, images, videos, graphics, logos and trademarks, is protected by copyright and trademark laws. All rights to the content are reserved.',
        '3.2. You may not copy, reproduce, distribute, publish, publicly display, modify or create derivative works from the content of the Site without our prior written permission.',
      ] },
      { title: '4. External Links', paragraphs: ['This Site may contain links to third-party websites. We are not responsible for the content or availability of those sites and cannot be held liable for any loss or damage resulting from your use of them.'] },
      { title: '5. Cookies and Data Collection', paragraphs: [
        '5.1. This Site may use cookies to improve your browsing experience. By using this Site, you consent to the use of cookies in accordance with our Cookie Policy.',
        '5.2. We may collect and process personal information in accordance with our Privacy Policy.',
      ] },
      { title: '6. Limitation of Liability', paragraphs: [
        '6.1. We strive to keep the Site up to date and in good working order, but we do not guarantee its continuous availability or that it is free of errors or viruses.',
        '6.2. To the extent permitted by law, we disclaim all liability for any direct, indirect, special or consequential loss or damage arising from your use of, or inability to use, the Site.',
      ] },
      { title: '7. Changes to the Terms of Use', paragraphs: ['We reserve the right to modify these Terms of Use at any time. Changes take effect as soon as they are published on the Site. It is your responsibility to review these terms regularly to stay informed of any changes.'] },
      { title: '8. Governing Law and Jurisdiction', paragraphs: ['These Terms of Use are governed by French law. Any dispute relating to these terms shall be subject to the exclusive jurisdiction of the French courts.'] },
      { title: '9. Contact', paragraphs: ['For any question or concern about these Terms of Use, please contact us at the following email address: contact@martialproduction.fr.'] },
    ],
    notice: [
      { label: 'Company or site owner name:', text: 'Martial Production' },
      { label: 'Legal form:', text: 'Sole proprietorship (entreprise individuelle)' },
      { label: 'Postal address:', text: "5 Rue du Ramounat 31230, L'isle en Dodon, France" },
      { label: 'Contact email:', text: 'contact@martialproduction.fr' },
      { label: 'RCS number:', text: '920 083 094 R.C.S Toulouse' },
      { label: 'Publication director:', text: 'Martial Production (site owner)' },
      { label: 'Website host:', text: 'Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, United States. Phone: +1 559 288 7060. Website: vercel.com' },
      { label: 'Use of cookies:', text: 'We use cookies on this website. Cookies are small text files stored on your device to improve your browsing experience. You can choose to accept or refuse cookies by changing your browser settings.' },
      { label: 'External links:', text: 'This website may contain links to external sites over which we have no control. We are not responsible for the content of these external sites.' },
      { label: 'Intellectual property:', text: 'The content of this website, including text, images and videos, is protected by copyright and trademark laws. Any unauthorized use is strictly prohibited.' },
      { label: 'Governing law:', text: 'This website is subject to French law.' },
      { label: 'Last updated:', text: 'This legal notice was last updated on October 17, 2026.' },
      { label: 'Disclaimer:', text: 'The information provided on this website is for informational purposes only. We strive to keep it up to date and accurate, but we do not guarantee its completeness or accuracy. Accordingly, we disclaim all liability for any loss or damage arising from the use of this site or its content.' },
      { label: 'Privacy policy:', text: 'We do not knowingly collect personal information about visitors to our website, unless it is provided voluntarily through contact forms or other means of communication. We are committed to protecting the confidentiality of this information and to not sharing it with third parties without your explicit consent. To learn more about our privacy policy, please contact us at the email address above.' },
      { label: 'Disputes:', text: 'In the event of a dispute concerning this website or its content, the French courts shall have exclusive jurisdiction to resolve it in accordance with French law.', lineBreak: true },
      { label: 'Governing law:', text: 'This website is subject to French law, and any use of this site is governed by the French laws in force.', lineBreak: true },
    ],
    cookies: [
      { title: '1. Introduction', paragraphs: ['1.1. This cookie policy explains how we use cookies and similar technologies on our website martialproduction.fr. By using the Site, you agree to our use of cookies in accordance with this policy.'] },
      { title: '2. What Is a Cookie?', paragraphs: ['2.1. A cookie is a small text file placed on your computer or mobile device when you visit a website. Cookies are widely used to make websites work more efficiently and to improve your experience as a user.'] },
      { title: '3. Types of Cookies Used', paragraphs: ['3.1. We use the following types of cookies on our Site:'], list: [
        { label: 'Strictly Necessary Cookies:', text: 'These cookies are essential for you to browse the Site and use its features. They cannot be disabled.' },
        { label: 'Performance Cookies:', text: "These cookies collect information about how you use our Site, such as the pages you visit most often. This data helps us improve the Site's performance." },
        { label: 'Functionality Cookies:', text: 'These cookies allow the Site to remember your choices (such as your username, language or region) and to provide enhanced, personalised features.' },
        { label: 'Advertising and Targeting Cookies:', text: 'These cookies are used to show you relevant advertising. They are usually placed by third parties, such as advertising networks.' },
      ] },
      { title: '4. Managing Cookies', paragraphs: [
        '4.1. You can usually manage cookies through your browser settings. You can choose to accept, refuse or delete cookies. However, please note that disabling strictly necessary cookies may affect how the Site works.',
        '4.2. You can also set your cookie preferences on your first visit to our Site by accepting or refusing non-essential cookies.',
      ] },
      { title: '5. Third-Party Cookies', paragraphs: ["5.1. Some features of our Site may be provided by third parties, who may also use cookies. We have no control over these third-party cookies, and you should consult those third parties' privacy and cookie policies for more information."] },
      { title: '6. Contact', paragraphs: ['6.1. If you have any questions or concerns about our cookie policy, please contact us at the following email address: contact@martialproduction.fr.'] },
    ],
  },
}

const dictionaries: Record<Lang, Dict> = { fr, en }

/* ─── Contexte ─── */

type LangContextValue = { lang: Lang; setLang: (lang: Lang) => void; t: Dict }

const LangContext = createContext<LangContextValue>({ lang: 'fr', setLang: () => {}, t: fr })

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLang)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (next: Lang) => {
    setLangState(next)
    try { window.localStorage.setItem(STORAGE_KEY, next) } catch { /* stockage bloqué : le choix vaut pour cette visite */ }
  }

  return <LangContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}
