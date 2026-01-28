import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart, Mail, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function LoveLetterPage() {
  const navigate = useNavigate();
  const [isMailboxOpen, setIsMailboxOpen] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  const openMailbox = () => {
    setIsMailboxOpen(true);
    setTimeout(() => {
      setShowLetter(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5E6E8] via-[#E8D5D8] to-[#F0D5D8] flex flex-col relative overflow-hidden">
      <Header />
      
      {/* Back Button - Top Left - Always visible */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        onClick={() => navigate("/quiz-results")}
        className="absolute top-8 left-8 z-20 flex items-center gap-2 text-[#8B3A3A] hover:text-[#A14A4A] transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="text-lg">Back to Results</span>
      </motion.button>

      {/* Floating hearts background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              y: "120vh", 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              rotate: Math.random() * 360
            }}
            animate={{ 
              y: "-20vh",
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              rotate: Math.random() * 360 + 360,
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10,
            }}
          >
            <Heart 
              className="text-pink-300 opacity-20 fill-pink-300" 
              style={{ 
                width: Math.random() * 30 + 20,
                height: Math.random() * 30 + 20,
              }}
            />
          </motion.div>
        ))}
      </div>

      <div className="flex-1 px-4 py-12 relative z-10">{/* Changed from absolute positioning to flex layout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto relative z-10"
        >
          {!showLetter ? (
            /* Mailbox Animation */
            <div className="flex flex-col items-center justify-center min-h-[80vh]">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h1 className="text-4xl md:text-6xl text-[#8B3A3A] mb-4">
                  You've Got Mail 💌
                </h1>
                <p className="text-xl md:text-2xl text-gray-700">
                  A special message from Duggu
                </p>
              </motion.div>

              {/* Animated Mailbox */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="relative"
              >
                {/* Mailbox Container */}
                <div className="relative w-64 h-80">
                  {/* Mailbox Body */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-56 bg-gradient-to-b from-[#8B3A3A] to-[#6d3535] rounded-t-3xl shadow-2xl"
                    animate={isMailboxOpen ? {} : { y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {/* Mailbox Flag */}
                    <motion.div
                      className="absolute -right-2 top-12 w-8 h-2 bg-red-500 rounded-r-full"
                      animate={isMailboxOpen ? { rotate: 45 } : { rotate: 0 }}
                      transition={{ duration: 0.5 }}
                    />

                    {/* Mailbox Door */}
                    <motion.div
                      className="absolute top-16 left-4 right-4 h-32 bg-gradient-to-b from-[#C97B7B] to-[#b96868] rounded-2xl border-4 border-white/30 cursor-pointer overflow-hidden"
                      onClick={openMailbox}
                      animate={isMailboxOpen ? { rotateX: 90, y: 60 } : {}}
                      transition={{ duration: 0.6 }}
                      style={{ transformOrigin: "bottom", transformStyle: "preserve-3d" }}
                      whileHover={!isMailboxOpen ? { scale: 1.05 } : {}}
                    >
                      <div className="flex items-center justify-center h-full">
                        <Mail className="w-12 h-12 text-white" />
                      </div>
                    </motion.div>

                    {/* Letter inside mailbox */}
                    <AnimatePresence>
                      {isMailboxOpen && (
                        <motion.div
                          initial={{ y: 0, scale: 0.8, opacity: 0 }}
                          animate={{ y: -100, scale: 1, opacity: 1 }}
                          transition={{ delay: 0.3, duration: 0.8 }}
                          className="absolute top-16 left-1/2 -translate-x-1/2 w-32 h-40 bg-white rounded-lg shadow-xl"
                        >
                          <div className="p-2 flex flex-col items-center justify-center h-full">
                            <Heart className="w-8 h-8 text-[#8B3A3A] fill-[#8B3A3A]" />
                            <p className="text-xs text-center mt-2 text-gray-600">
                              For Guddu
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Mailbox Stand */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-20 bg-gradient-to-b from-[#6d3535] to-[#5a2a2a]" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-3 bg-[#5a2a2a] rounded-full" />
                </div>

                {/* Instruction */}
                {!isMailboxOpen && (
                  <motion.p
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-center mt-8 text-lg text-gray-700"
                  >
                    👆 Click the mailbox to open
                  </motion.p>
                )}
              </motion.div>
            </div>
          ) : (
            /* Love Letter */
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              {/* Letter Header */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center mb-8"
              >
                <h1 className="text-4xl md:text-5xl text-[#8B3A3A] mb-4">
                  To My Guddu ❤️
                </h1>
              </motion.div>

              {/* Letter Content */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-[#C97B7B]"
                style={{
                  backgroundImage: "repeating-linear-gradient(transparent, transparent 35px, rgba(139, 58, 58, 0.1) 35px, rgba(139, 58, 58, 0.1) 36px)",
                }}
              >
                <div className="space-y-6 text-lg md:text-xl text-gray-800 leading-relaxed">
                  <p className="text-2xl">My Guddu,</p>
                  
                  <p>
                    You may not listen to me,<br />
                    you may drive me crazy,<br />
                    and you may pretend you don't care sometimes…
                  </p>
                  
                  <motion.p 
                    className="text-[#8B3A3A] font-semibold py-4"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    But I know one thing for sure —<br />
                    you love me.
                  </motion.p>
                  
                  <p className="text-2xl md:text-3xl text-[#8B3A3A] font-bold text-center py-6">
                    And I love you even more 😌❤️
                  </p>
                  
                  <p>
                    Thank you for being my partner,<br />
                    my Tom,<br />
                    my travel buddy,<br />
                    and my forever headache 😂💖
                  </p>
                  
                  <p>
                    No matter how much we fight,<br />
                    I choose you —
                  </p>
                  
                  <p className="text-2xl text-[#8B3A3A] font-bold text-center py-4">
                    today, tomorrow, and always.
                  </p>
                  
                  <div className="text-center pt-8 border-t-2 border-[#C97B7B]/30">
                    <motion.p
                      className="text-3xl md:text-4xl text-[#8B3A3A] font-bold mb-6"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Happy Birthday, my love.
                    </motion.p>
                    <p className="text-xl md:text-2xl text-gray-700">
                      Forever yours,<br />
                      <span className="text-[#8B3A3A] font-bold text-2xl md:text-3xl">
                        Duggu ❤️
                      </span>
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative hearts */}
              <motion.div
                className="flex justify-center gap-4 mt-8"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="w-8 h-8 text-pink-400 fill-pink-400" />
                <Heart className="w-10 h-10 text-[#8B3A3A] fill-[#8B3A3A]" />
                <Heart className="w-8 h-8 text-pink-400 fill-pink-400" />
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}