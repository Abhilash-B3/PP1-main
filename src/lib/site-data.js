export const site = {
  name: "Crystal House Maid Service",
  short: "Crystal House",
  tagline: "Trusted. Trained. Top Quality.",
  years: "4+",
  phones: ["+91 88844 63318", "+91 93531 31149"],
  phonePrimary: "+918884463318",
  whatsapp: "918884463318",
  email: "info@crystalhousemaid.in",
  website: "www.crystalhousemaid.in",
  address:
    "#91, 1st Floor, Devagere, Kumbalagodu Post, Kengeri Hobli, Bengaluru, Karnataka – 560074",
  shortAddress: "Kengeri Hobli, Bengaluru – 560074",
  mapsQuery: "Crystal+House+Maid+Service,+Devagere,+Kumbalagodu,+Kengeri+Hobli,+Bengaluru,+560074",
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/why-choose-us", label: "Why Us" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/faq", label: "FAQ" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

import maid from "@/assets/service-maid.jpg";
import baby from "@/assets/service-baby.jpg";
import japa from "@/assets/service-japa.jpg";
import cook from "@/assets/service-cook.jpg";
import elder from "@/assets/service-elder.jpg";
import office from "@/assets/service-office.jpg";

export const services = [
  {
    slug: "house-maid",
    title: "House Maid Service",
    short: "Cleaning, washing, utensils, dusting & mopping.",
    description:
      "Verified and experienced housemaids for cleaning, washing, utensil cleaning, dusting, mopping and complete household work. Available for part-time, full-time and live-in.",
    image: maid,
  },
  {
    slug: "baby-care",
    title: "Baby Care / Nanny",
    short: "Loving caregivers for newborns, infants & children.",
    description:
      "Professional caregivers for newborns, infants and children — safe, loving and responsible baby care from trained nannies.",
    image: baby,
  },
  {
    slug: "japa-maid",
    title: "Japa Maid Service",
    short: "Specialised post-delivery care for mother & baby.",
    description:
      "Experienced Japa maids offering post-delivery care for both mother and baby with hygiene, nutrition and recovery support.",
    image: japa,
  },
  {
    slug: "cook",
    title: "Cook Service",
    short: "South Indian, North Indian & home-style cooking.",
    description:
      "Skilled home cooks specialising in South Indian, North Indian and customised home-style cooking for families.",
    image: cook,
  },
  {
    slug: "elder-care",
    title: "Patient & Elder Care",
    short: "Personal care, mobility & medication support.",
    description:
      "Compassionate caregivers providing personal care, mobility assistance, medication reminders, companionship and daily support for patients and senior citizens.",
    image: elder,
  },
  {
    slug: "housekeeping",
    title: "Housekeeping & Office Cleaning",
    short: "For offices, hospitals, schools, salons & clinics.",
    description:
      "Professional housekeeping staff for homes, apartments, offices, schools, hospitals, clinics, salons and commercial establishments.",
    image: office,
  },
];

export const whyChoose = [
  {
    title: "4+ Years of Trusted Experience",
    desc: "A proven track record serving Bengaluru households.",
  },
  {
    title: "Background Verified Staff",
    desc: "Every professional is thoroughly verified before placement.",
  },
  { title: "Trained & Experienced", desc: "Skilled in modern home care, hygiene and etiquette." },
  { title: "Quick Replacement Support", desc: "Fast replacement if you are ever unsatisfied." },
  {
    title: "Affordable Pricing",
    desc: "Transparent, family-friendly rates with no hidden charges.",
  },
  { title: "Flexible Engagements", desc: "Part-time, full-time and live-in options." },
  { title: "Fast Customer Support", desc: "Quick response on call, WhatsApp and email." },
  { title: "All Bengaluru Coverage", desc: "Serving every major area across the city." },
];

export const steps = [
  {
    n: "01",
    title: "Share Your Requirement",
    desc: "Call, WhatsApp or fill our enquiry form with what you need.",
  },
  {
    n: "02",
    title: "We Match a Profile",
    desc: "We shortlist verified, trained staff that fit your home.",
  },
  { n: "03", title: "Meet & Interview", desc: "Interact with the candidate before confirming." },
  {
    n: "04",
    title: "Onboard & Begin Service",
    desc: "Simple onboarding and ongoing support from our team.",
  },
];

export const testimonials = [
  {
    name: "Anitha R.",
    area: "JP Nagar",
    quote:
      "Found a wonderful Japa maid through Crystal House within two days of delivery. Truly professional and caring.",
  },
  {
    name: "Vikram S.",
    area: "Whitefield",
    quote:
      "Their cook understands our taste perfectly. Punctual, hygienic and very polite — exactly what we wanted.",
  },
  {
    name: "Priya & Karthik",
    area: "Kengeri",
    quote:
      "Reliable housemaid with quick replacement support when we needed it. Highly recommend Crystal House.",
  },
  {
    name: "Dr. Meera",
    area: "HSR Layout",
    quote:
      "We hired an elder-care attendant for my mother. Compassionate, attentive and trustworthy.",
  },
];

export const faqs = [
  {
    q: "Are your staff background verified?",
    a: "Yes. Every staff member goes through ID, address and reference verification before placement.",
  },
  {
    q: "Do you provide part-time, full-time and live-in services?",
    a: "Yes, we offer all three engagement models across every service category.",
  },
  {
    q: "What if I am not satisfied with the staff?",
    a: "We provide quick replacement support so you always have the right person for your home.",
  },
  {
    q: "Which areas in Bengaluru do you serve?",
    a: "We serve all major areas across Bengaluru including Kengeri, Rajarajeshwari Nagar, Whitefield, Electronic City, JP Nagar, HSR, Indiranagar and more.",
  },
  {
    q: "How quickly can a candidate start?",
    a: "Most placements happen within 24 to 72 hours depending on the role and your requirements.",
  },
  {
    q: "Are charges transparent?",
    a: "Yes. We share clear pricing upfront with no hidden fees.",
  },
];
