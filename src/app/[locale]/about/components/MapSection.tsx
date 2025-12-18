import React from "react";
import { motion } from "framer-motion";

const MapSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="h-80 w-full bg-slate-200"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4583.707688816154!2d105.84642308599223!3d20.98574283938459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac6ac093362b%3A0x3f120579bda0c751!2zMyBOZy4gNTEgUC4gTMawxqFuZyBLaMOhbmggVGhp4buHbiwgVMawxqFuZyBNYWksIEhvw6BuZyBNYWksIEjDoCBO4buZaSAxMDAwMDAsIFZp4buHdCBOYW0!5e1!3m2!1svi!2s!4v1766043558053!5m2!1svi!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        className="grayscale transition duration-500 hover:grayscale-0"
      ></iframe>
    </motion.div>
  );
};

export default MapSection;
