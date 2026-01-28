import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ownerPhoto from "figma:asset/aec7c676646b3350504a53ac45b1dc6c088d7e16.png";
import aboutPhoto from "figma:asset/54668b014380ec334ad2ae348118992d6db3b1b1.png";

export default function AboutPage() {
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
            {/* Left side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="p-12 md:p-16 flex flex-col justify-center"
            >
              <h2 className="text-4xl md:text-5xl mb-8 text-[#8B3A3A]">
                Meet Shivani
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  I find happiness in the smallest things —
                  little gestures, soft words, and simple
                  moments mean everything to me. I do overthink
                  a lot, and sometimes I get stressed or
                  frustrated easily because I feel things
                  deeply.
                </p>
                <p>
                  Handling stress isn't my strongest side, but
                  my heart is always in the right place.
                </p>
                <p>
                  As a wife, I love with all my heart. I care
                  deeply, selflessly, and genuinely. My
                  partner's happiness, comfort, and peace matter
                  to me more than anything else.
                </p>
              </div>

              <motion.button
                onClick={() => navigate("/photo")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-10 bg-gradient-to-r from-[#8B3A3A] to-[#A14A4A] text-white px-8 py-4 rounded-full text-xl flex items-center gap-2 self-start hover:shadow-xl transition-all"
              >
                Continue Journey
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>

            {/* Right side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative h-full min-h-[500px]"
            >
              <img
                src={aboutPhoto}
                alt="Shivani"
                className="absolute inset-0 w-full h-full object-cover"
              />
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