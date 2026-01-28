import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router";
import {
  Heart,
  MessageCircle,
  Smile,
  ChevronDown,
  ArrowLeft,
} from "lucide-react";

// Import inside joke photo
import insideJokePhoto from "figma:asset/63af4c7bf4e8cb6ebba2adb07662ff122ae40211.png";

const sections = [
  {
    id: 1,
    title: "Serious Moments",
    icon: Heart,
    color: "from-[#C97B7B] to-[#F5E6E8]",
    borderColor: "border-[#C97B7B]",
    content: (
      <div className="space-y-6 text-lg md:text-xl text-gray-700">
        <p className="text-2xl text-gray-800">Guddu,</p>
        <p>
          I know our journey hasn't always been smooth,
          <br />
          but I promise you one thing —
        </p>
        <motion.p
          className="text-3xl text-[#8B3A3A] font-bold text-center py-4"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          👉 Aage ka safar tumhare liye superb hoga.
        </motion.p>
        <p>
          We'll grow, we'll learn,
          <br />
          we'll fight less (maybe 😅),
          <br />
          and we'll love more and more every day.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "A Small Request",
    icon: MessageCircle,
    color: "from-[#8B3A3A] to-[#B95555]",
    borderColor: "border-[#8B3A3A]",
    content: (
      <div className="space-y-6 text-lg md:text-xl text-gray-700">
        <p className="text-2xl text-gray-800">Please…</p>
        <motion.p
          className="text-3xl md:text-4xl text-[#8B3A3A] font-bold text-center py-4"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          just listen to your wife sometimes 🙏😂
        </motion.p>
        <p>
          Bas thoda sa.
          <br />
          That's all I want.
        </p>
        <div className="pt-4 space-y-2">
          <p>Our love to grow more,</p>
          <p>our understanding to grow more,</p>
          <p className="text-[#8B3A3A] font-semibold">
            and our fights to turn into laughter faster 💖
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Inside Jokes",
    icon: Smile,
    color: "from-[#B95555] to-[#C97B7B]",
    borderColor: "border-[#B95555]",
    hasPhoto: true,
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl md:text-3xl text-[#8B3A3A] mb-6">
          Things I Love When You Say 😌
          <br />
          <span className="text-xl text-pink-400">
            (MY FAVORITE 😍)
          </span>
        </h3>

        {/* Photo */}
        <div className="rounded-2xl overflow-hidden shadow-xl mb-6">
          <img
            src={insideJokePhoto}
            alt="Happy couple"
            className="w-full h-auto"
          />
        </div>

        <div className="text-lg md:text-xl text-gray-700 space-y-4">
          <p>I LOVE IT when you say:</p>
          <motion.p
            className="text-3xl text-[#8B3A3A] text-center font-bold py-6 bg-white/50 rounded-2xl"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            "Guddu ab good girl hogyi hain na"🥹❤️
          </motion.p>

          <p className="pt-4">And honestly Guddu…</p>
          <p>I genuinely want this too —</p>

          <motion.p
            className="text-2xl md:text-3xl text-[#8B3A3A] text-center font-bold py-4"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            "Thoda sudhar jao ab…"😌
          </motion.p>

          <p className="text-center pt-4">
            You know na what I mean…
            <br />
            <span className="text-2xl text-[#8B3A3A] font-bold">
              GUDDUUUU 😄💖
            </span>
          </p>
        </div>
      </div>
    ),
  },
];

export default function PromisePage() {
  const navigate = useNavigate();
  const [openSection, setOpenSection] = useState<number | null>(
    null,
  );

  const toggleSection = (sectionId: number) => {
    setOpenSection(
      openSection === sectionId ? null : sectionId,
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5E6E8] via-[#E8D5D8] to-[#F0D5D8] px-4 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          onClick={() => navigate("/relationship")}
          className="mb-8 flex items-center gap-2 text-[#8B3A3A] hover:text-[#A14A4A] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-lg">Back to Love Story</span>
        </motion.button>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl mb-4 text-[#8B3A3A]">
            A Promise from Duggu 💝
          </h1>
        </motion.div>

        {/* Expandable Sections */}
        <div className="space-y-6 mb-12">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            const isOpen = openSection === section.id;

            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.15 }}
                className="overflow-hidden"
              >
                {/* Section Header - Clickable */}
                <motion.button
                  onClick={() => toggleSection(section.id)}
                  className={`w-full bg-gradient-to-r ${section.color} rounded-3xl p-6 md:p-8 shadow-xl border-4 ${section.borderColor} transition-all hover:shadow-2xl`}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="bg-white/80 rounded-full p-3">
                        <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-[#8B3A3A]" />
                      </div>
                      <h2 className="text-2xl md:text-3xl text-white">
                        {section.title}
                      </h2>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </motion.div>
                  </div>
                </motion.button>

                {/* Section Content - Expandable */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-white/90 backdrop-blur-sm rounded-b-3xl p-6 md:p-10 mt-2 shadow-lg">
                        {section.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Hint */}
        {openSection === null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="text-center mb-8"
          >
            <p className="text-lg text-gray-600">
              ✨ Tap each section above to reveal the message ✨
            </p>
          </motion.div>
        )}

        {/* Next Button - Only shows when at least one section has been opened */}
        <AnimatePresence>
          {openSection !== null && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              className="text-center mb-16"
            >
              <button
                onClick={() => navigate("/quiz")}
                className="bg-gradient-to-r from-[#8B3A3A] to-[#A14A4A] text-white px-10 py-5 rounded-full text-xl md:text-2xl hover:shadow-2xl transition-all"
                style={{
                  boxShadow:
                    "0 4px 20px rgba(139, 58, 58, 0.4)",
                }}
              >
                Next: Take the Love Test 💕
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}