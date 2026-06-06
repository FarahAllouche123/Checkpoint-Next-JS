import Image from 'next/image';

export default function About() {
  return (
    <main className="relative min-h-screen px-6 py-16 overflow-hidden">

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
        <source src="/v3.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        zIndex: 1,
      }} />

      {/* Contenu */}
      <div className="relative z-10 max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold mb-8 text-white">À propos</h1>

        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="relative w-48 h-48 flex-shrink-0">
            <Image
              src="/link.png"
              alt="Farah"
              fill
              className="rounded-2xl object-cover shadow-md"
            />
          </div>

          <div style={{ backgroundColor: 'black' }}>
           <p className="text-white/80 text-lg leading-relaxed mb-4">
  Diplômée d'un Baccalauréat en Informatique et d'un cycle préparatoire MPI à l'ISIMS,
  j'ai complété une formation en développement logiciel chez GoMyCode Tunisie et je poursuis actuellement une formation en cybersécurité.
</p>
<p className="text-white/80 text-lg leading-relaxed">
  Passionnée par le développement web, la sécurité informatique et le design,
  je construis des projets concrets pour renforcer mes compétences.
</p>
          </div>
        </div>

        <div className="divider my-10 border-white/20" />

        <h2 className="text-2xl font-semibold mb-4 text-white">Formation</h2>
        <ul className="timeline timeline-vertical">
          <li>
            <div className="timeline-middle"><span className="text-primary">●</span></div>
            <div className="timeline-end mb-6">
              <p className="font-semibold text-white">GoMyCode — Software Dev & Cybersécurité</p>
              <p className="text-sm text-white/60">2025 – présent</p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle"><span className="text-primary">●</span></div>
            <div className="timeline-end mb-6">
              <p className="font-semibold text-white">ISIMS — Cycle Préparatoire MPI</p>
              <p className="text-sm text-white/60">2023 – 2026</p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle"><span className="text-primary">●</span></div>
            <div className="timeline-end">
              <p className="font-semibold text-white">Baccalauréat en Informatique</p>
              <p className="text-sm text-white/60">2023</p>
            </div>
          </li>
        </ul>

      </div>
    </main>
  );
}