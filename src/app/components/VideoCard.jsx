"use client";
import { motion } from "framer-motion";

const VideoCard = ({ title, description, videoId }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gray-900/80 backdrop-blur-lg rounded-2xl shadow-xl 
                 hover:shadow-pink-500/20 transition-all duration-300
                 max-w-[380px] w-full"
    >
      {/* Video */}
      <div className="relative w-full aspect-video rounded-t-2xl overflow-hidden">
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h4 className="text-xl font-bold text-pink-400 mb-2">
          {title}
        </h4>
        <p className="text-gray-300 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default VideoCard;
