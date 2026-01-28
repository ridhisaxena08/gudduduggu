import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { Heart, Sparkles, ArrowLeft } from "lucide-react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import couplePhoto from "figma:asset/a89505e43f949f6b496f01782abf06460d06e19f.png";

export default function PhotoPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5E6E8] via-[#E8D5D8] to-[#F0D5D8] flex flex-col relative">
      <Header />
      
      {/* Back Button - Top Left */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        onClick={() => navigate("/about")}
        className="absolute top-8 left-8 z-10 flex items-center gap-2 text-[#8B3A3A] hover:text-[#A14A4A] transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="text-lg">Back to About</span>
      </motion.button>
      
      <div className="flex-1 flex items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl w-full"
        >
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl mb-8 text-[#8B3A3A] flex items-center justify-center gap-3"
          >
            <Sparkles className="w-10 h-10" />
            <span>Guddu & Duggu</span>
            <Sparkles className="w-10 h-10" />
          </motion.h1>

          {/* Photo with animated border */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative mx-auto mb-12 max-w-2xl"
          >
            {/* Animated glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#8B3A3A] via-[#A14A4A] to-[#8B3A3A] rounded-3xl blur-2xl"
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            {/* Photo container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80">
              <img 
                src={couplePhoto} 
                alt="Guddu & Duggu" 
                className="w-full h-auto" 
              />
            </div>

            {/* Floating hearts around photo */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${10 + (i * 12)}%`,
                  top: i % 2 === 0 ? "-10%" : "110%",
                }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3 + (i * 0.3),
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              >
                <Heart className="w-6 h-6 text-[#C97B7B] fill-[#C97B7B] opacity-60" />
              </motion.div>
            ))}
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-10 max-w-2xl mx-auto shadow-lg"
          >
            <p className="text-xl md:text-2xl text-gray-700 italic">
              "Tom & Jerry ka pyaar 🐱🐭"
            </p>
            <p className="text-lg text-gray-600 mt-2">
              Fighting, loving, and staying together forever 💖
            </p>
          </motion.div>

          {/* Button */}
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            onClick={() => navigate("/dates")}
            className="bg-gradient-to-r from-[#8B3A3A] to-[#A14A4A] text-white px-10 py-5 rounded-full text-xl md:text-2xl hover:shadow-2xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Chalo Guddu, Aage Badho 😎✨
          </motion.button>

          {/* Decorative hearts at bottom */}
          <motion.div
            className="flex justify-center gap-3 mt-10"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Heart className="w-5 h-5 text-[#C97B7B] fill-[#C97B7B]" />
            <Heart className="w-7 h-7 text-[#8B3A3A] fill-[#8B3A3A]" />
            <Heart className="w-5 h-5 text-[#C97B7B] fill-[#C97B7B]" />
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}