import { motion } from "motion/react";
import { useNavigate, useLocation } from "react-router";
import { Heart, ArrowLeft } from "lucide-react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { useState, useEffect } from "react";

export default function QuizResultsPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(6);
  const [lastDigit, setLastDigit] = useState(0);

  useEffect(() => {
    if (location.state?.score !== undefined) {
      setScore(location.state.score);
    }
    if (location.state?.totalQuestions !== undefined) {
      setTotalQuestions(location.state.totalQuestions);
    }
  }, [location.state]);

  const rating = ((score / totalQuestions) * 5).toFixed(1);
  const lovePercent = Math.round(
    (score / totalQuestions) * 100,
  );

  useEffect(() => {
    let currentDigit = 0;
    const interval = setInterval(() => {
      if (currentDigit < 6) {
        currentDigit++;
        setLastDigit(currentDigit);
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#F5E6E8] flex flex-col relative">
      <Header />

      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        onClick={() => navigate("/quiz")}
        className="absolute top-8 left-8 z-10 flex items-center gap-2 text-[#8B3A3A] hover:text-[#A14A4A] transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="text-lg">Back to Quiz</span>
      </motion.button>

      <div className="flex-1 flex items-center justify-center px-4 py-20">
        <motion.div className="max-w-5xl w-full">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* ✅ ADDED BLOCK */}
            <div className="bg-[#8B3A3A] text-white rounded-3xl p-8 shadow-xl text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="text-5xl md:text-6xl font-bold mb-3"
              >
                5+
              </motion.div>
              <p className="text-xl">Places Visited Together</p>
            </div>

            {/* Days Together */}
            <div className="bg-[#8B3A3A] text-white rounded-3xl p-8 text-center">
              <div className="text-5xl font-bold mb-3">
                42{lastDigit}+
              </div>
              <p className="text-xl">Days Spent Together</p>
            </div>

            {/* Quiz Rating */}
            <div className="bg-[#8B3A3A] text-white rounded-3xl p-8 text-center">
              <div className="text-5xl font-bold mb-2">
                {rating} <span className="text-3xl">/5.0</span>
              </div>
              <div className="w-full bg-white/30 rounded-full h-2 mt-4">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{
                    width: `${(parseFloat(rating) / 5) * 100}%`,
                  }}
                  transition={{ duration: 1 }}
                  className="bg-white rounded-full h-2"
                />
              </div>
              <p className="text-xl mt-4">Quiz Rating</p>
            </div>
          </div>

          {/* Love Percentage */}
          <div className="bg-white rounded-3xl p-12 shadow-2xl text-center mb-8">
            <div className="text-8xl font-bold text-[#8B3A3A] mb-4">
              {lovePercent}%
            </div>
            <h2 className="text-3xl mb-3">Love Score 💖</h2>

            <div className="flex justify-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Heart
                  key={i}
                  className={`w-8 h-8 ${
                    i < Math.round(parseFloat(rating))
                      ? "fill-[#8B3A3A] text-[#8B3A3A]"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => navigate("/love-letter")}
              className="bg-gradient-to-r from-[#8B3A3A] to-[#A14A4A] text-white px-12 py-5 rounded-full text-2xl hover:shadow-2xl transition-all"
            >
              Continue to Love Letter 💌
            </button>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}