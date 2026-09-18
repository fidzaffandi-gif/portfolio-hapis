"use client";
import Image from "next/image";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Spotlight } from "@/components/ui/spotlight";
import { PinContainer } from "@/components/ui/3d-pin";
import { FlipWords } from "@/components/ui/flip-words";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Tabs } from "@/components/ui/tabs";

export default function Home() {
  const words = ["Web Developer", "IoT Enthusiast", "Network Engineer"];

  const skillTabs = [
    {
      title: "Web",
      value: "web",
      content: (
        <div className="w-full overflow-hidden rounded-2xl border border-white/[0.1] bg-zinc-900 p-8 text-white">
          <h3 className="mb-4 text-xl font-bold">Web Development</h3>
          <ul className="list-disc space-y-2 pl-5 text-slate-300">
            <li>PHP (CodeIgniter 3, vanilla PHP/PDO)</li>
            <li>MySQL / database design</li>
            <li>HTML, CSS, JavaScript</li>
          </ul>
        </div>
      ),
    },
    {
      title: "IoT",
      value: "iot",
      content: (
        <div className="w-full overflow-hidden rounded-2xl border border-white/[0.1] bg-zinc-900 p-8 text-white">
          <h3 className="mb-4 text-xl font-bold">IoT & Embedded</h3>
          <ul className="list-disc space-y-2 pl-5 text-slate-300">
            <li>ESP32, Arduino</li>
            <li>Sensor integration & dashboard monitoring</li>
            <li>Realtime data ke database</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Network",
      value: "network",
      content: (
        <div className="w-full overflow-hidden rounded-2xl border border-white/[0.1] bg-zinc-900 p-8 text-white">
          <h3 className="mb-4 text-xl font-bold">Network</h3>
          <ul className="list-disc space-y-2 pl-5 text-slate-300">
            <li>Dasar keamanan jaringan (materi kuliah)</li>
            <li>Konfigurasi jaringan dasar</li>
          </ul>
        </div>
      ),
    },
  ];

  const projects = [
    {
      title: "Sistem Manajemen Inventaris",
      desc: "Dashboard CRUD inventaris, PHP & PDO, upload foto, laporan & export CSV",
      href: "https://github.com/fidzaffandi-gif",
    },
    {
      title: "Flood Detection Dashboard",
      desc: "Dashboard IoT deteksi banjir, ESP32 + PHP/MySQL, grafik realtime Chart.js",
      href: "https://github.com/fidzaffandi-gif",
    },
    {
      title: "Smart Gate System",
      desc: "Dashboard monitoring hardware gate berbasis ESP32",
     href: "https://github.com/fidzaffandi-gif",
    },
    {
      title: "Store Commerce",
      desc: "E-commerce CodeIgniter 3 dengan integrasi payment Midtrans",
      href: "https://github.com/fidzaffandi-gif",
    },
  ];

  return (
    
    <main className="flex min-h-screen flex-col items-center bg-black px-4">
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
  <Spotlight
    className="-top-40 left-0 md:left-60 md:-top-20"
    fill="white"
  />
       <div className="flex flex-col items-center text-center">
  <Image
    src="/default.jpg"
    alt="Foto Hapis"
    width={160}
    height={160}
    className="mb-6 h-40 w-40 rounded-full border-2 border-cyan-400/50 object-cover"
  />
  <h1 className="text-3xl font-bold text-white md:text-5xl">
    Halo, saya Hapis
  </h1>
  <div className="text-3xl font-bold text-white md:text-5xl">
    Seorang <FlipWords words={words} className="text-cyan-400" />
  </div>
</div>
      </div>

      <div className="w-full max-w-6xl py-20">
        <h2 className="mb-12 text-center text-2xl font-bold text-white">
          Projects
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <PinContainer
              key={project.title}
              title="github.com"
              href={project.href}
            >
                            <div className="flex h-[16rem] w-[16rem] flex-col justify-between p-4 text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.6)]">
  <h3 className="text-lg font-bold">{project.title}</h3>
  <p className="text-sm text-slate-400">{project.desc}</p>
</div>
            </PinContainer>
          ))}
        </div>
      </div>

      <TracingBeam className="max-w-2xl py-10">
  <div className="text-white">
    <h2 className="mb-4 text-2xl font-bold">Tentang Saya</h2>
    <TextGenerateEffect
      words="Saya mahasiswa D3 Teknik Komputer yang suka belajar lewat praktik langsung — dari bikin sistem web pake PHP, sampai proyek IoT pake ESP32. Saya senang eksplorasi hal baru dan nyelesein masalah nyata lewat kode."
      className="text-slate-300"
    />
    <div className="mt-6">
      <TextGenerateEffect
        words="Beberapa area yang saya dalami: pengembangan web (CodeIgniter, PHP/PDO), sistem IoT (ESP32, sensor, dashboard monitoring), dan dasar-dasar keamanan jaringan dari kuliah."
        className="text-slate-300"
      />
    </div>
  </div>
</TracingBeam>

     <div className="relative flex w-full max-w-4xl flex-col items-start justify-start py-20 pb-[26rem] [perspective:1000px] md:pb-[30rem]">
        <h2 className="mb-8 text-2xl font-bold text-white">Skills</h2>
        <Tabs
          tabs={skillTabs}
          containerClassName="relative z-20"
          contentClassName="h-[20rem] md:h-[24rem]"
        />
      </div>

            <h2 className="text-2xl font-bold text-white">Contact</h2>
                  <p className="text-slate-300">
        Terbuka buat kolaborasi, magang, atau sekadar ngobrol soal tech.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        
        <a href="mailto:fidzaffandi@gmail.com"
          className="rounded-full border border-white/20 px-6 py-2 text-white transition hover:border-cyan-400 hover:text-cyan-400"
        >
          Email
        </a>
                
         
        <a href="https://github.com/fidzaffandi-gif"
          target="_blank"
          className="rounded-full border border-white/20 px-6 py-2 text-white transition hover:border-cyan-400 hover:text-cyan-400"
        >
          GitHub
        </a>
      </div>
      
      
    </main>
  );
}