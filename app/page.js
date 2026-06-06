import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">

      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      >
        <source src="/vdo.mp4" type="video/mp4" />
      </video>

      {/* Overlay sombre pour lisibilité */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        zIndex: 1,
      }} />

      {/* Contenu */}
      <div className="relative z-10 max-w-2xl">
        <div className="avatar mb-6">
          <div className="relative w-48 h-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <Image
              src="/moi.jpg"
              alt="Photo de profil"
              fill
              className="object-cover rounded-full"
            />
          </div>
        </div>

        <h1 className="text-5xl font-bold mb-4 text-white">
          Salut, je suis <span className="text-primary">Farah</span> 👋
        </h1>

        <p className="text-lg text-white/70 mb-8" style={{ backgroundColor: 'rgba(0,0,0,0.5)' ,borderRadius:'12px'}}>
  Développeuse Full Stack & passionnée de Cybersécurité. Je crée des applications web modernes et performantes.
</p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/projects" className="btn btn-primary px-8">Voir mes projets</Link>
          <Link href="/contact" className="btn btn-outline btn-white px-8 text-white border-white">Me contacter</Link>
        </div>
      </div>

    </main>
  );
}