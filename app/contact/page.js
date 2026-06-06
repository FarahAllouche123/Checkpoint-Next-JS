export default function Contact() {
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
        <source src="/vdo.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        zIndex: 1,
      }} />

      {/* Contenu — inchangé */}
      <div className="relative z-10 max-w-xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Contact</h1>
        <p className="text-base-content/60 mb-10">Envoyez-moi un message, je répondrai rapidement.</p>
        <form className="flex flex-col gap-4">
          <div className="form-control">
            <label className="label"><span className="label-text">Nom</span></label>
            <input type="text" placeholder="Votre nom" className="input input-bordered w-full" />
          </div>
          <div className="form-control">
            <label className="label"><span className="label-text">Email</span></label>
            <input type="email" placeholder="votre@email.com" className="input input-bordered w-full" />
          </div>
          <div className="form-control">
            <label className="label"><span className="label-text">Message</span></label>
            <textarea className="textarea textarea-bordered w-full h-36" placeholder="Votre message..." />
          </div>
          <button type="submit" className="btn btn-primary w-full mt-2">Envoyer</button>
        </form>
        <div className="divider my-10" />
        <div className="flex flex-col gap-3 text-base-content/70">
          <a href="https://linkedin.com/in/farah-allouche2004" target="_blank" className="flex items-center gap-2 hover:text-primary transition-colors">
            <span>🔗</span> linkedin.com/in/farah-allouche2004
          </a>
          <a href="https://github.com/FarahAllouche123" target="_blank" className="flex items-center gap-2 hover:text-primary transition-colors">
            <span>💻</span> github.com/FarahAllouche123
          </a>
        </div>
      </div>

    </main>
  );
}