import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import bgImage from "figma:asset/fb6708f877f8bc8c299fd76b41520642459e556b.png";

export default function LandingPage() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "About Kavish", path: "/meet-kavish" },
    { name: "About Me", path: "/about" },
    { name: "Our Photos", path: "/photo" },
    { name: "Special Dates", path: "/dates" },
    { name: "Our Story", path: "/relationship" },
    { name: "Promises", path: "/promise" },
    { name: "Love Quiz", path: "/quiz" },
    { name: "Love Letter", path: "/love-letter" },
  ];

  return (
    <div
      className="min-h-screen flex flex-col relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />

      {/* Navigation Menu Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed top-16 right-4 z-40 bg-[#8B3A3A] text-white p-3 rounded-full shadow-lg hover:bg-[#A14A4A] transition-colors"
      >
        {menuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </motion.button>

      {/* Navigation Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          className="fixed top-28 right-4 z-40 bg-white rounded-2xl shadow-2xl p-6 w-64"
        >
          <h3 className="text-xl font-bold text-[#8B3A3A] mb-4">
            Navigate To:
          </h3>
          <div className="space-y-2">
            {navigationItems.map((item) => (
              <button
                key={item.path}
                onClick={() => {
                  navigate(item.path);
                  setMenuOpen(false);
                }}
                className="w-full text-left px-4 py-3 rounded-xl hover:bg-[#F5E6E8] text-gray-700 hover:text-[#8B3A3A] transition-all"
              >
                {item.name}
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 pt-16">
        {/* Add Bangers font */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');
        `}</style>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl"
        >
          {/* Animated hearts in background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{
                  y: "100vh",
                  x: Math.random() * window.innerWidth,
                }}
                animate={{
                  y: "-100vh",
                  x: Math.random() * window.innerWidth,
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  ease: "linear",
                  delay: Math.random() * 5,
                }}
              >
                <Heart className="w-6 h-6 text-[#C97B7B] opacity-30 fill-[#C97B7B]" />
              </motion.div>
            ))}
          </div>

          {/* Title */}
          <motion.h1
            className="text-5xl md:text-7xl mb-8 font-bold uppercase"
            style={{
              color: "#FFFFFF",
              fontFamily: "Times New Roman",
            }}
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Happy Birthday Gudduu...💝
          </motion.h1>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl mb-12 border-2 border-[#C97B7B]/50"
          >
            <p className="text-2xl md:text-3xl text-gray-700 mb-6 font-bold">
              Welcome to a website where
            </p>
            <div
              className="space-y-4 text-xl md:text-2xl"
              style={{ fontFamily: "Bangers, cursive" }}
            >
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="text-[#8B3A3A]"
              >
                your wife loves you,
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="text-[#8B3A3A]"
              >
                fights with you,
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 }}
                className="text-[#8B3A3A]"
              >
                complains about you,
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="text-[#8B3A3A] font-semibold"
              >
                and still can't imagine life without you 💖
              </motion.p>
            </div>
          </motion.div>

          {/* Start Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            onClick={() => navigate("/meet-kavish")}
            className="bg-gradient-to-r from-[#8B3A3A] to-[#A14A4A] text-white px-12 py-5 rounded-full text-2xl md:text-3xl hover:shadow-2xl transition-all relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Start Now➡</span>
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
              style={{ opacity: 0.2 }}
            />
          </motion.button>

          {/* Pulsing hearts decoration */}
          <motion.div
            className="flex justify-center gap-4 mt-12"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Heart className="w-6 h-6 text-[#C97B7B] fill-[#C97B7B]" />
            <Heart className="w-8 h-8 text-[#8B3A3A] fill-[#8B3A3A]" />
            <Heart className="w-6 h-6 text-[#C97B7B] fill-[#C97B7B]" />
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}