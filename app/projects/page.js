const projects = [
  {
    title: 'TaskFlow',
    description: 'Application MERN de gestion de tâches avec authentification JWT. Déployée sur Render & Netlify.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/FarahAllouche123/taskFlow',
    demo: 'https://taskflow-farah.netlify.app',
  },
  {
    title: 'Marchina',
    description: 'Site e-commerce complet avec panier, gestion produits et interface admin.',
    tags: ['PHP', 'MySQL', 'HTML/CSS'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Camel Brand',
    description: 'Site vitrine pour une marque locale avec design responsive.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: '#',
    demo: '#',
  },
  {
    title: "Jeu d'habillage",
    description: 'Jeu interactif de personnalisation de personnage en JavaScript.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    github: '#',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <main className="relative min-h-screen overflow-hidden px-6">

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
      <div className="relative z-10 max-w-4xl mx-auto pt-[50px]">
       <h1 className="text-4xl font-bold mb-2 text-white">Mes projets</h1>
<p className="text-white/60 mb-10">Une sélection de ce que j'ai construit.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="card bg-base-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="card-body">
                <h2 className="card-title">{p.title}</h2>
                <p className="text-sm text-base-content/70">{p.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {p.tags.map((tag) => (
                    <span key={tag} className="badge badge-primary badge-outline text-xs">{tag}</span>
                  ))}
                </div>
                <div className="card-actions justify-end mt-4">
                  <a href={p.github} className="btn btn-sm btn-ghost" target="_blank">GitHub</a>
                  <a href={p.demo} className="btn btn-sm btn-primary" target="_blank">Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}