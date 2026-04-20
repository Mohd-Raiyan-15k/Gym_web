const Gallery = () => {
  const gallery = [
    { src: "/img1.webp", label: "Strong Moves" },
    { src: "/img2.jpg", label: "Power Training" },
    { src: "/img3.jpg", label: "Dynamic Flow" },
    { src: "/img4.jpg", label: "Group Session" },
    { src: "/img7.jpg", label: "Cardio Blast" },
    { src: "/img8.jpg", label: "Recovery Stretch" },
    { src: "/img5.jpg", label: "Full Body" },
    { src: "/img6.jpg", label: "Core Focus" },
  ];

  return (
    <section className="gallery">
      <div className="gallery-header">
        <p className="gallery-intro">Fitness through motion</p>
        <h1>BETTER BEATS BEST</h1>
      </div>

      <div className="gallery-grid">
        {gallery.map((item, index) => (
          <div key={index} className="gallery-card">
            <img src={item.src} alt={item.label} />
            <div className="gallery-card-overlay">
              <span>{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;