"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Product = {
  id: string;
  name: string;
  price: number;
  desc: string;
  tags: string[]; // without '#'
  image: string; // public path
};

const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER ?? "6281515174447"; // edit via env or replace here

const productsSeed: Product[] = [
  {
    id: "roti-tawar-gandum",
    name: "Roti Tawar Gandum",
    price: 20000,
    desc: "Roti gandum lembut, tinggi serat, cocok untuk sarapan sehat.",
    tags: ["roti", "sehat", "best_seller"],
    image: "/bakery/images.jpeg",
  },
  {
    id: "croissant-butter",
    name: "Croissant Butter",
    price: 15000,
    desc: "Lapisan renyah dan buttery, dibuat fresh setiap pagi.",
    tags: ["croissant", "mentega"],
    image: "/bakery/croissant.svg",
  },
  {
    id: "donat-cokelat",
    name: "Donat Cokelat",
    price: 12000,
    desc: "Donat empuk dengan glaze cokelat premium favorit semua umur.",
    tags: ["donat", "cokelat", "diskon"],
    image: "/bakery/donut.svg",
  },
  {
    id: "kue-lapis-pandan",
    name: "Kue Lapis Pandan",
    price: 25000,
    desc: "Aroma pandan wangi dengan tekstur legit khas jajanan nusantara.",
    tags: ["kue", "pandan"],
    image: "/bakery/cake.svg",
  },
  {
    id: "cinnamon-roll",
    name: "Cinnamon Roll",
    price: 18000,
    desc: "Gulungan manis kayu manis dengan glaze gula halus.",
    tags: ["roll", "kayu_manis"],
    image: "/bakery/roll.svg",
  },
  {
    id: "cheesecake-slice",
    name: "Cheese Cake Slice",
    price: 30000,
    desc: "Cheesecake creamy dengan dasar biskuit gurih, lumer di mulut.",
    tags: ["cake", "keju"],
    image: "/bakery/cheese-cake.svg",
  },
];

function currency(idr: number) {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(idr);
}

export default function Home() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [detail, setDetail] = useState<Product | null>(null);
  const [logoSrc, setLogoSrc] = useState<string>("/logo-ghani.png");
  const [heroLogo, setHeroLogo] = useState<string>("/logo-ghani.png");

  const products = productsSeed;
  const tags = useMemo(() => {
    const set = new Set<string>();
    products.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return ["semua", ...Array.from(set).sort((a, b) => a.localeCompare(b))];
  }, [products]);

  const filtered = useMemo(() => {
    if (!selectedTag || selectedTag === "semua") return products;
    return products.filter((p) => p.tags.includes(selectedTag));
  }, [products, selectedTag]);

  const handleOrder = (p: Product) => {
    const text = encodeURIComponent(
      `Halo Ghani Bakery! Saya mau pesan ${p.name} (${p.id}). Harga: ${currency(p.price)}. Apakah tersedia hari ini?`
    );
    const link = `https://wa.me/${WA_NUMBER}?text=${text}`;
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-dvh flex flex-col bg-white">
      {/* Navbar */}
      <div className="sticky top-0 z-40 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <img
              src={logoSrc}
              onError={() => setLogoSrc("/logo-ghani.svg")}
              alt="Logo Ghani Bakery"
              width={28}
              height={28}
              className="h-7 w-7 rounded"
            />
            <span className="text-sm font-extrabold tracking-tight">Ghani Bakery</span>
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#menu" className="hover:text-[#0f7a36]">Menu</a>
            <a href="#keunggulan" className="hover:text-[#0f7a36]">Keunggulan</a>
            <a href="#tentang" className="hover:text-[#0f7a36]">Tentang</a>
            <a href="mailto:ghani.bakery@gmail.com" className="hover:text-[#0f7a36]">Email</a>
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-full bg-[#16a34a] text-white px-4 py-2 font-semibold hover:brightness-105"
            >
              Order WA
            </a>
          </nav>
        </div>
        {/* Promo bar */}
        <div className="w-full bg-[#ebc334] text-[#0f7a36] text-xs sm:text-sm">
          <div className="mx-auto max-w-6xl px-6 py-2 flex items-center justify-between">
            <span className="font-semibold">Promo: Donat #diskon hari ini!</span>
            <button
              onClick={() => setSelectedTag("diskon")}
              className="underline underline-offset-2 hover:opacity-90"
            >
              Lihat item #diskon
            </button>
          </div>
        </div>
      </div>

      {/* Hero */}
      <header id="home" className="relative isolate bg-white">
        <div className="absolute -z-10 inset-0 bg-[radial-gradient(1000px_600px_at_10%_-10%,_rgba(22,163,74,0.08),transparent_60%),radial-gradient(900px_500px_at_110%_0%,_rgba(235,195,52,0.12),transparent_60%)]" />

        <div className="mx-auto max-w-6xl px-6 pt-16 pb-12 sm:pt-24 sm:pb-16">
          <div className="grid gap-10 sm:grid-cols-2 items-center">
            <div className="animate-slide-up [animation-delay:60ms]">
              <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium text-[#0f7a36] border-[#16a34a]/20 bg-[#ebc334]/20">
                Fresh Every Morning
                <span className="inline-block h-2 w-2 rounded-full bg-[#16a34a] animate-pulse" />
              </span>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Ghani Bakery
              </h1>
              <p className="mt-3 text-balance text-[15px] sm:text-base text-black/70">
                Roti, kue, dan pastry segar setiap hari. Dibuat dengan bahan
                berkualitas, rasa istimewa untuk momen spesial Anda.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <a
                  href="#menu"
                  className="shimmer inline-flex items-center justify-center rounded-full bg-[#16a34a] px-5 py-3 text-white text-sm font-semibold shadow-[0_10px_25px_-10px_rgba(22,163,74,0.7)] hover:brightness-[1.05] transition"
                >
                  Lihat Menu
                </a>
                <button
                  onClick={() => handleOrder(products[0])}
                  className="inline-flex items-center justify-center rounded-full border border-[#16a34a]/30 px-5 py-3 text-sm font-semibold text-[#0f7a36] hover:bg-[#ebc334]/30 transition"
                >
                  Order Cepat via WA
                </button>
              </div>
            </div>
            <div className="relative flex justify-center animate-fade-in [animation-delay:120ms]">
              <div className="relative h-[240px] w-[240px] sm:h-[320px] sm:w-[320px]">
                <div className="absolute -inset-10 -z-10 rounded-[40px] bg-[#ebc334]/25 blur-3xl" />
                <div className="grid h-full place-items-center rounded-[28px] border border-black/5 bg-white shadow-[0_40px_80px_-30px_rgba(235,195,52,.55),0_12px_30px_-15px_rgba(0,0,0,.2)]">
                  <img
                    src={heroLogo}
                    onError={() => setHeroLogo("/logo-ghani.svg")}
                    alt="Logo Ghani Bakery"
                    className="h-[65%] w-[65%] object-contain drop-shadow-md"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Keunggulan */}
      <section id="keunggulan" className="mx-auto w-full max-w-6xl px-6 pb-10">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border p-4 bg-white">
            <div className="text-2xl">🥐</div>
            <div className="mt-2 font-bold">Fresh Setiap Hari</div>
            <div className="text-sm text-black/70">Dibuat pagi, siap dinikmati kapan saja.</div>
          </div>
          <div className="rounded-2xl border p-4 bg-white">
            <div className="text-2xl">🧑‍🍳</div>
            <div className="mt-2 font-bold">Handmade</div>
            <div className="text-sm text-black/70">Resep rumahan dengan bahan berkualitas.</div>
          </div>
          <div className="rounded-2xl border p-4 bg-white">
            <div className="text-2xl">✅</div>
            <div className="mt-2 font-bold">Halal</div>
            <div className="text-sm text-black/70">Aman dan lezat untuk keluarga.</div>
          </div>
        </div>
      </section>

      {/* Menu + Filters */}
      <main id="menu" className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-bold">Menu Populer</h2>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {tags.map((tag) => {
            const active = selectedTag ? selectedTag === tag : tag === "semua";
            return (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag === "semua" ? null : tag)}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                  active
                    ? "bg-[#16a34a] text-white border-transparent shadow-[0_10px_20px_-12px_rgba(22,163,74,.8)]"
                    : "bg-white text-[#0f7a36] border-[#16a34a]/30 hover:bg-[#ebc334]/20"
                }`}
                aria-pressed={active}
              >
                {tag === "semua" ? "#semua" : `#${tag}`}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <article
              key={p.id}
              className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition hover:shadow-[0_18px_40px_-15px_rgba(0,0,0,.25)] animate-slide-up"
              style={{ animationDelay: `${80 + i * 40}ms` }}
            >
              <div className="relative h-44 w-full overflow-hidden bg-[linear-gradient(160deg,_#ebc334_0%,_#fff_65%)]">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-contain p-6 rounded transition duration-300 group-hover:scale-105"
                />
                {p.tags.includes("best_seller") && (
                  <div className="absolute left-3 top-3 rounded-full bg-[#16a34a] px-2 py-1 text-[11px] font-semibold text-white">
                    Best Seller
                  </div>
                )}
                <div className="absolute right-3 top-3 rounded-full bg-white/80 px-2 py-1 text-[11px] font-semibold text-[#0f7a36]">
                  {currency(p.price)}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold tracking-tight">{p.name}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-black/60">{p.desc}</p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-[#ebc334]/30 px-2 py-0.5 text-[11px] font-medium text-[#0f7a36]">
                      #{t}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => setDetail(p)}
                    className="inline-flex flex-1 items-center justify-center rounded-full border border-[#16a34a]/30 px-3 py-2 text-sm font-semibold text-[#0f7a36] hover:bg-[#ebc334]/30 transition"
                  >
                    Detail
                  </button>
                  <button
                    onClick={() => handleOrder(p)}
                    className="inline-flex flex-1 items-center justify-center rounded-full bg-[#16a34a] px-3 py-2 text-sm font-semibold text-white hover:brightness-[1.05] transition"
                  >
                    Pesan via WA
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Tentang */}
      <section id="tentang" className="bg-white border-t">
        <div className="mx-auto max-w-6xl px-6 py-14 grid gap-8 sm:grid-cols-2 items-center">
          <div>
            <h3 className="text-2xl font-bold">Tentang Ghani Bakery</h3>
            <p className="mt-3 text-black/70 text-sm">
              Kami menghadirkan roti, kue, dan pastry segar yang dibuat dari bahan
              pilihan. Mengutamakan rasa dan kualitas, siap menemani sarapan,
              camilan sore, hingga hantaran spesial.
            </p>
            <div className="mt-5 flex gap-3">
              <a href="#menu" className="rounded-full bg-[#16a34a] text-white px-4 py-2 text-sm font-semibold">Jelajahi Menu</a>
              <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noreferrer noopener" className="rounded-full border border-[#16a34a]/30 text-[#0f7a36] px-4 py-2 text-sm font-semibold">Tanya Ketersediaan</a>
              <a href="mailto:ghani.bakery@gmail.com" className="rounded-full border border-black/10 px-4 py-2 text-sm font-semibold hover:bg-black/[.04]">Email</a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-[#ebc334]/30 blur-2xl" />
            <div className="rounded-3xl border bg-white p-6">
              <div className="text-sm font-semibold text-[#0f7a36]">Jam Operasional</div>
              <div className="mt-1 text-sm text-black/70">Setiap hari 07.00 – 20.00</div>
              <div className="mt-4 text-sm font-semibold text-[#0f7a36]">Lokasi</div>
              <div className="mt-1 text-sm text-black/70">Ghani Bakery, Jl. Margo Mulyo, Karangjarak, Kisik, Kec. Bungah, Kabupaten Gresik, Jawa Timur</div>
              <div className="mt-4 text-sm font-semibold text-[#0f7a36]">Kontak</div>
              <div className="mt-1 text-sm text-black/70 break-all">ghani.bakery@gmail.com</div>
            </div>
          </div>
        </div>
      </section>

      {/* Lokasi (Maps) */}
      <section id="lokasi" className="bg-white border-t">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <h3 className="text-2xl font-bold">Lokasi Kami</h3>
          <p className="mt-2 text-sm text-black/70">Silakan kunjungi toko kami pada peta di bawah ini.</p>
          <div className="mt-4 overflow-hidden rounded-2xl border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.7855681583283!2d112.57501507505638!3d-7.034470892967442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e77fd2b4cb44e5d%3A0x2aea4fd905f8a225!2sJl.%20Margo%20Mulyo%2C%20Karangjarak%2C%20Kisik%2C%20Kec.%20Bungah%2C%20Kabupaten%20Gresik%2C%20Jawa%20Timur%2061152!5e0!3m2!1sen!2sid!4v1757789498203!5m2!1sen!2sid"
              className="w-full h-[360px] md:h-[460px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      {detail && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4 animate-fade-in"
          onClick={() => setDetail(null)}
        >
          <div
            className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-48 w-full bg-[linear-gradient(160deg,_#ebc334_0%,_#fff_65%)]">
              <Image src={detail.image} alt={detail.name} fill className="object-contain p-6" />
              <button
                aria-label="Tutup"
                onClick={() => setDetail(null)}
                className="absolute right-2 top-2 rounded-full bg-white/80 px-2 py-1 text-xs font-semibold text-[#0f7a36] hover:bg-white"
              >
                ✕
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold">{detail.name}</h3>
              <div className="mt-1 text-[#0f7a36] font-semibold">{currency(detail.price)}</div>
              <p className="mt-2 text-sm text-black/70">{detail.desc}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {detail.tags.map((t) => (
                  <span key={t} className="rounded-full bg-[#ebc334]/30 px-2 py-0.5 text-[11px] font-medium text-[#0f7a36]">
                    #{t}
                  </span>
                ))}
              </div>
              <div className="mt-5 grid grid-cols-2 gap-2">
                <button
                  onClick={() => setDetail(null)}
                  className="inline-flex items-center justify-center rounded-full border border-black/10 px-4 py-2 text-sm font-semibold hover:bg-black/[.04]"
                >
                  Tutup
                </button>
                <button
                  onClick={() => handleOrder(detail)}
                  className="shimmer inline-flex items-center justify-center rounded-full bg-[#16a34a] px-4 py-2 text-sm font-semibold text-white hover:brightness-[1.05]"
                >
                  Pesan Sekarang via WA
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-auto border-t bg-white">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-black/70 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>© {new Date().getFullYear()} Ghani Bakery. All rights reserved.</div>
          <div className="flex items-center gap-3">
            <a
              className="text-[#0f7a36] hover:underline"
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              Chat WhatsApp
            </a>
            <span className="hidden sm:inline text-black/20">|</span>
            <a className="hover:underline" href="mailto:ghani.bakery@gmail.com">ghani.bakery@gmail.com</a>
            <span className="hidden sm:inline text-black/20">|</span>
            <a className="hover:underline" href="#menu">Menu</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
