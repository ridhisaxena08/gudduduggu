import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router";
import {
  Heart,
  Calendar,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

// Import engagement photos
import engagementPhoto1 from "figma:asset/a433bc942b054e850fcb1f266db20ca6720faa7a.png";
import engagementPhoto5 from "figma:asset/d1eb22e9a40f427e1f4deacfc983cc57b3d21ffc.png";
import engagementPhoto3 from "figma:asset/1cd1ffea97dc7d188536524f7fa8efd6f2f87a4d.png";

// Import wedding photos
import weddingPhoto1 from "figma:asset/c3fdbd946026d1a272c1b30a27a70734a48c658b.png";
import weddingPhoto2 from "figma:asset/4f11950de6d12c664e487ee076a6bbe78ccf9721.png";
import weddingPhoto3 from "figma:asset/9bafd9511737d51a6007569fd560f016d05d82e3.png";
import weddingPhoto4 from "figma:asset/19fb4b999816e33a655c427710608082520bce41.png";
import weddingPhoto5 from "figma:asset/e25810eaca8d5f2fe89c728a34cce6e0a8ab43de.png";
import weddingPhoto6 from "figma:asset/c09ea071b638810641584d08e53ab13c8df4eedf.png";

const datesData = [
  {
    id: 1,
    emoji: "💍",
    title: "28 November",
    subtitle: "Our Engagement Day",
    description:
      'The day we officially said "Okay, let\'s annoy each other forever."',
    color: "from-[#A14A4A] to-[#C97B7B]",
    borderColor: "border-[#8B3A3A]",
    photos: [
      engagementPhoto1,
      engagementPhoto5,
      engagementPhoto3,
    ],
  },
  {
    id: 2,
    emoji: "❤️",
    title: "14 April",
    subtitle: "Our Marriage Day",
    description:
      "The day Tom & Jerry became husband & wife. Lots of love, lots of fights, but one strong US.",
    color: "from-[#A14A4A] to-[#C97B7B]",
    borderColor: "border-[#A14A4A]",
    photos: [
      weddingPhoto1,
      weddingPhoto2,
      weddingPhoto3,
      weddingPhoto4,
      weddingPhoto5,
      weddingPhoto6,
    ],
  },
];

export default function DatesPage() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<
    number | null
  >(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const handleCardClick = (dateId: number) => {
    setSelectedDate(dateId);
    setCurrentPhotoIndex(0);
  };

  const closeGallery = () => {
    setSelectedDate(null);
    setCurrentPhotoIndex(0);
  };

  const nextPhoto = () => {
    const selectedDateData = datesData.find(
      (d) => d.id === selectedDate,
    );
    if (selectedDateData) {
      setCurrentPhotoIndex((prev) =>
        prev === selectedDateData.photos.length - 1
          ? 0
          : prev + 1,
      );
    }
  };

  const prevPhoto = () => {
    const selectedDateData = datesData.find(
      (d) => d.id === selectedDate,
    );
    if (selectedDateData) {
      setCurrentPhotoIndex((prev) =>
        prev === 0
          ? selectedDateData.photos.length - 1
          : prev - 1,
      );
    }
  };

  const selectedDateData = datesData.find(
    (d) => d.id === selectedDate,
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5E6E8] via-[#E8D5D8] to-[#F0D5D8] flex flex-col">
      <Header />
      <div className="flex-1 px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            onClick={() => navigate("/photo")}
            className="mb-8 flex items-center gap-2 text-[#8B3A3A] hover:text-[#A14A4A] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-lg">Back to Photo</span>
          </motion.button>

          {/* Title */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl mb-4 text-[#8B3A3A] flex items-center justify-center gap-3 flex-wrap">
              <Calendar className="w-12 h-12" />
              <span>Dates We Can Never Forget</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700">
              (Especially You 😌)
            </p>
          </motion.div>

          {/* Date Cards */}
          <div className="space-y-8 mb-12">
            {datesData.map((date, index) => (
              <motion.div
                key={date.id}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -50 : 50,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.3 + index * 0.2,
                  duration: 0.6,
                }}
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => handleCardClick(date.id)}
                className={`bg-gradient-to-r ${date.color} rounded-3xl p-8 shadow-2xl border-4 ${date.borderColor} cursor-pointer transition-all hover:shadow-[#a788a3]/50`}
              >
                <div className="flex items-start gap-6">
                  <motion.span
                    className="text-6xl md:text-7xl"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    {date.emoji}
                  </motion.span>
                  <div className="flex-1">
                    <h3 className="text-3xl md:text-4xl text-white mb-2">
                      {date.title}
                    </h3>
                    <p className="text-xl md:text-2xl text-white/90 mb-3">
                      {date.subtitle}
                    </p>
                    <p className="text-lg md:text-xl text-white/80 italic">
                      {date.description}
                    </p>
                    <p className="text-sm text-white/70 mt-4">
                      Click to see memories 📸
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* End Message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl text-center mb-8"
          >
            <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed">
              No matter how much we fight,
              <br />
              these dates remind me that
              <br />
              <span className="text-[#8B3A3A] font-semibold">
                choosing you was still my best decision 💖
              </span>
            </p>
          </motion.div>

          {/* Next Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="text-center"
          >
            <button
              onClick={() => navigate("/relationship")}
              className="bg-gradient-to-r from-[#8B3A3A] to-[#A14A4A] text-white px-10 py-5 rounded-full text-xl md:text-2xl hover:shadow-2xl transition-all"
              style={{
                boxShadow: "0 4px 20px rgba(139, 58, 58, 0.4)",
              }}
            >
              Next: Our Love Story ♥
            </button>
          </motion.div>
        </motion.div>

        {/* Photo Gallery Modal */}
        <AnimatePresence>
          {selectedDate && selectedDateData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeGallery}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
              >
                {/* Close button */}
                <button
                  onClick={closeGallery}
                  className="absolute top-4 right-4 z-10 bg-white/90 rounded-full p-2 hover:bg-white transition-all"
                >
                  <X className="w-6 h-6 text-gray-700" />
                </button>

                {/* Title */}
                <div className="bg-gradient-to-r from- [#8B3A3A] to-[#A14A4A] p-6 text-center">
                  <h3 className="text-2xl md:text-3xl text-white flex items-center justify-center gap-3">
                    <span>{selectedDateData.emoji}</span>
                    <span>{selectedDateData.title}</span>
                  </h3>
                </div>

                {/* Photo viewer */}
                <div className="relative bg-gray-900 max-h-[75vh] overflow-y-auto">
                  <img
                    src={
                      selectedDateData.photos[currentPhotoIndex]
                    }
                    alt={`Memory ${currentPhotoIndex + 1}`}
                    className="w-full max-h-[75vh] object-contain"
                  />

                  {/* Navigation buttons */}
                  <button
                    onClick={prevPhoto}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 transition-all"
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-800" />
                  </button>
                  <button
                    onClick={nextPhoto}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 transition-all"
                  >
                    <ChevronRight className="w-6 h-6 text-gray-800" />
                  </button>

                  {/* Photo counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full">
                    {currentPhotoIndex + 1} /{" "}
                    {selectedDateData.photos.length}
                  </div>
                </div>

                {/* Thumbnails */}
                <div className="flex gap-2 p-4 bg-gray-100 overflow-x-auto">
                  {selectedDateData.photos.map(
                    (photo, index) => (
                      <button
                        key={index}
                        onClick={() =>
                          setCurrentPhotoIndex(index)
                        }
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                          currentPhotoIndex === index
                            ? "border-[#a788a3] scale-110"
                            : "border-transparent opacity-60 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={photo}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ),
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}