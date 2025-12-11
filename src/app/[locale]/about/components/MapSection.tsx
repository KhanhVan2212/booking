import React from "react";

const MapSection = () => {
  return (
    <div className="h-80 w-full bg-slate-200">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.380436838385!2d105.84915131540226!3d21.017406793540216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab8a4bf5799f%3A0x6b4f7a770258759!2zNjMgTWFpIEjhuq9jIMSQ4bq_,!5e0!3m2!1svi!2s!4v1629876543210!5m2!1svi!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        className="grayscale transition duration-500 hover:grayscale-0"
      ></iframe>
    </div>
  );
};

export default MapSection;
