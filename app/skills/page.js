const skills = [
  { category: 'Frontend', items: ['React', 'HTML', 'CSS', 'JavaScript'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'PHP', 'Java'] },
  { category: 'Base de données', items: ['MongoDB', 'MySQL'] },
  { category: 'Langages', items: ['Python', 'C', 'JavaScript'] },
  { category: 'Design', items: ['Photoshop', 'Illustrator'] },
  { category: 'Cybersécurité', items: ['Kali Linux', 'Réseau', 'VirtualBox'] },
];

export default function Skills() {
  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-16">

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

      {/* Overlay sombre */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        zIndex: 1,
      }} />

      {/* Contenu */}
      <div className="relative z-10 max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-2 text-white">Compétences</h1>
        <p className="text-white/60 mb-10">Technologies et outils que je maîtrise.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((s) => (
            <div key={s.category} className="card bg-base-200 shadow-sm">
              <div className="card-body">
                <h2 className="card-title text-primary text-base">{s.category}</h2>
                <div className="flex flex-wrap gap-2 mt-2">
                  {s.items.map((item) => (
                    <span key={item} className="badge badge-outline">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}