import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import kavishPhoto from "../../assets/5968f2d0d9a09e3da5a6b9c6c9e4caf350300e73.png";
export default function MeetKavishPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F5E6E8] flex flex-col">
      <Header />

      <div className="flex-1 flex items-center justify-center px-4 py-20 relative">
        {/* Back Button - Top Left */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          onClick={() => navigate("/")}
          className="absolute top-8 left-8 flex items-center gap-2 text-[#8B3A3A] hover:text-[#A14A4A] transition-colors z-10"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-lg">Back to Home</span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative h-full min-h-[500px]"
            >
              <img
                src={kavishPhoto}
                alt="Kavish"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>

            {/* Right side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="p-12 md:p-16 flex flex-col justify-center"
            >
              <h2 className="text-4xl md:text-5xl mb-8 text-[#8B3A3A]">
                Meet Kavish
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  He is a person who leads with his heart in everything he does.
                  Caring, thoughtful, and deeply emotional, he has a natural way
                  of making people feel valued and understood. He believes in
                  giving more love than expected and always thinks a little extra
                  when it comes to the people around him.
                </p>
                <p>
                  Kindness is not just a quality in him, it is who he is. He
                  supports others without hesitation, listens without judgment,
                  and helps without expecting anything in return. His compassion
                  and honesty make him someone people trust and admire.
                </p>
                <p>
                  He is someone who believes in relationships, values emotions,
                  and stands firmly by the people he loves. More than anything,
                  he is a person with a beautiful soul—one who spreads happiness,
                  kindness, and love simply by being himself.
                </p>
              </div>

              <motion.button
                onClick={() => navigate("/about")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-10 bg-gradient-to-r from-[#8B3A3A] to-[#A14A4A] text-white px-8 py-4 rounded-full text-xl flex items-center gap-2 self-start hover:shadow-xl transition-all"
              >
                Continue Journey
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <Footer
        showBackButton={false}
        backPath="/"
        showInstagram={true}
      />
    </div>
  );
}