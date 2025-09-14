"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { productsSeed, type Product } from "./product";

const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER ?? "6281515174447"; // edit via env or replace here

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

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Halo Ghani Bakery!")}`}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Chat WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid place-items-center rounded-full shadow-[0_15px_30px_-10px_rgba(16,185,129,0.6)] hover:scale-[1.03] active:scale-95 transition-transform"
      >
        <span className="sr-only">Chat WhatsApp</span>
        <div className="relative">
          {/* WA Icon (inline SVG) */}
          <svg
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            className="h-14 w-14"
            role="img"
            aria-hidden="true"
          >
            <g>
              <path style={{ fill: "#3ea858" }} d="M255.999,512c-25.934,0-51.961-4.332-77.361-12.875c-7.966-2.68-12.251-11.309-9.571-19.274 c2.678-7.966,11.305-12.254,19.274-9.571c22.267,7.49,45.03,11.286,67.659,11.286c124.377,0,225.565-102.089,225.565-227.572 c0.002-123.271-101.637-223.56-226.568-223.56c-123.823,0-224.563,100.289-224.563,223.56c0,43.274,11.989,85.16,34.672,121.139 l5.913,8.87c2.442,3.666,3.179,8.211,2.015,12.46l-16.162,59.025l60.92-15.584c8.144-2.086,16.43,2.829,18.514,10.97 c2.083,8.143-2.829,16.431-10.97,18.514l-86.28,22.072c-5.253,1.344-10.821-0.208-14.622-4.074s-5.259-9.459-3.827-14.687 l21.243-77.585l-2.173-3.259c-0.068-0.103-0.137-0.208-0.204-0.315C13.65,350.655,0,303.091,0,253.994 c0-68.07,26.535-131.939,74.717-179.841C122.813,26.334,186.837,0,254.996,0c68.356,0,132.71,26.173,181.205,73.699 C485.081,121.6,512,185.63,512,253.992c0,68.482-26.824,133.176-75.532,182.162C387.837,485.064,323.745,512,255.999,512z"></path>
              <path style={{ fill: "#b3f4ae" }} d="M399.217,353.076l4.634-15.273c1.482-4.351-0.274-10.09-4.532-12.685l-67.288-38.073 c-4.258-2.593-9.905-1.948-13.609,2.217l-30.747,33.223c-2.407,2.036-5.833,2.867-9.072,1.478 c-11.254-5.064-35.944-16.411-54.297-34.765l0.003-0.003c-0.254-0.25-0.501-0.501-0.753-0.75c-0.25-0.253-0.501-0.499-0.75-0.753 l-0.003,0.003c-19.138-19.138-29.702-43.043-34.765-54.297c-1.389-3.24-0.558-6.665,1.478-9.072l33.223-30.747 c4.165-3.704,4.81-9.352,2.217-13.609l-38.073-67.288c-2.593-4.258-8.334-6.014-12.685-4.532l-15.273,4.634 c-16.384,4.728-31.099,16.026-39.795,32.415c-10.545,21.018-14.054,45.922-2.564,76.283c19.287,51.196,45.82,86.259,66.758,107.196 c20.937,20.937,56,47.469,107.196,66.758c30.361,11.49,55.263,7.981,76.283-2.564C383.19,384.175,394.489,369.46,399.217,353.076z"></path>
              <path style={{ fill: "#3ea858" }} d="M326.998,417.787c-0.002,0-0.003,0-0.005,0c-13.54,0-27.625-2.733-41.862-8.121 c-56.146-21.153-92.209-49.867-112.57-70.229c-20.362-20.36-49.076-56.423-70.237-112.592c-11.749-31.04-10.673-60.813,3.203-88.47 c0.052-0.103,0.105-0.207,0.158-0.309c10.239-19.298,28.062-33.826,48.91-39.873l14.993-4.55c2.503-0.817,5.142-1.231,7.847-1.231 c9.2,0,17.798,4.732,22.439,12.35c0.085,0.14,0.167,0.282,0.25,0.425l37.978,67.12c6.274,10.571,4.141,24.171-5.117,32.519 l-29.022,26.858c5.2,11.338,14.549,30.101,29.36,45.012c0.119,0.114,0.236,0.228,0.35,0.347l1.28,1.28 c0.117,0.114,0.233,0.231,0.347,0.35c14.476,14.369,34.119,24.297,45.021,29.354l26.85-29.013 c5.002-5.548,12.058-8.725,19.388-8.725c4.62,0,9.153,1.246,13.131,3.608l67.12,37.978c0.143,0.081,0.285,0.164,0.425,0.25 c10.031,6.113,14.774,19.082,11.119,30.285l-4.55,14.995c-6.047,20.849-20.575,38.671-39.873,48.91 c-0.102,0.055-0.204,0.107-0.309,0.158C358.659,413.98,342.972,417.787,326.998,417.787z M132.651,152.183 c-9.966,19.968-10.573,40.877-1.853,63.911c20.27,53.803,48.35,86.887,63.286,101.823c14.935,14.935,48.02,43.017,101.801,63.278 c10.804,4.089,21.264,6.158,31.111,6.158h0.003c11.294,0,22.03-2.617,32.818-8.004c12.012-6.426,21.039-17.53,24.779-30.492 c0.02-0.067,0.038-0.134,0.059-0.199l3.717-12.25l-60.938-34.48l-28.59,30.893c-0.421,0.455-0.87,0.884-1.344,1.284 c-4.395,3.714-9.928,5.761-15.584,5.761c-3.209,0-6.342-0.645-9.313-1.919c-0.082-0.035-0.163-0.072-0.245-0.108 c-10.407-4.682-38.053-17.121-58.813-37.883c-0.078-0.078-0.154-0.155-0.228-0.234l-0.457-0.453 c-0.043-0.043-0.087-0.087-0.129-0.129l-0.453-0.457c-0.079-0.075-0.157-0.152-0.234-0.228 c-20.782-20.782-32.152-46.069-37.616-58.222l-0.266-0.592c-0.037-0.082-0.072-0.163-0.108-0.245 c-3.573-8.33-2.1-17.869,3.844-24.898c0.4-0.473,0.829-0.921,1.283-1.342l30.893-28.59l-34.48-60.938l-12.25,3.717 c-0.065,0.02-0.132,0.04-0.199,0.059C150.181,131.144,139.077,140.169,132.651,152.183z"></path>
            </g>
          </svg>
          {/* small pulse dot */}
          <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-white animate-pulse" />
        </div>
      </a>
    </div>
  );
}
