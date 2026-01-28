import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router";
import {
  Heart,
  Plane,
  TrendingUp,
  ArrowLeft,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

// Import Kumbhalgarh photos
import kumbhalgarh1 from "figma:asset/2488f38e4a3f2a012d7b21e3f286c06256696692.png";
import kumbhalgarh2 from "figma:asset/e7e7648d71ee1b8e56980e4528696fed769a4940.png";
import kumbhalgarh3 from "figma:asset/1058610ffe30a7920f46e4ed919427f5e9b605d1.png";
import kumbhalgarh4 from "figma:asset/af0b26bedfc3b96047e75799603cbcf78bc3ccb9.png";
import kumbhalgarh5 from "figma:asset/c3054e294c098556a69c19c012e4e36c5ad3a3ae.png";

// Import Singapore photos
import singapore1 from "figma:asset/8362196367281db6fe679a789e0ee39d365de0b9.png";
import singapore2 from "figma:asset/d5fa92582874a713d57560cb691c092f85f3bd03.png";
import singapore3 from "figma:asset/137d993635ca6ecab2fba063473a222de3cf8e37.png";
import singapore4 from "figma:asset/f4b7e2187ff81985e566b3ea1f773469c736c482.png";
import singapore5 from "figma:asset/b39b13922986ac61949b5c2cefefa8f907d8c83a.png";

// Import Ahmedabad photos
import ahmedabad1 from "figma:asset/309bf1e6d5fb081d8f16c5c2074a29eb964d1e0b.png";
import ahmedabad2 from "figma:asset/28c5be664e21f1ea191605f9af17d29580cefe19.png";
import ahmedabad3 from "figma:asset/d82930f167213ee6ab8a2b3ec1d0e7ebaa3573a3.png";
import ahmedabad4 from "figma:asset/63db7d3082b25d20576a2f6d229449f8362fcfac.png";
import ahmedabad5 from "figma:asset/894ae9b1cc3dfe56324edf8ff4ce892b73817063.png";

// Import Udaipur photos
import udaipur1 from "figma:asset/fd00bf00f913dea1b6c4a4570f45816fd45adae2.png";
import udaipur2 from "figma:asset/cfbf79099815df7c64357af869759551d9ba11e8.png";
import udaipur3 from "figma:asset/96d3434923abd0811fb2c8d7de9e8c1946c7f4a6.png";
import udaipur4 from "figma:asset/f48d5ffd40e09f965a42d57961f88c1fb7c8475b.png";
import udaipur5 from "figma:asset/e7c5a9b8ef5d3505bbddc5fb8035ccaad1f69018.png";

// Import Mumbai photos
import mumbai1 from "figma:asset/96cd7647c44dbdd52a43094181d1a42fbefa25c4.png";
import mumbai2 from "figma:asset/811e8ba4d38aaed0341ae1f7971b2808b8f7fc14.png";
import mumbai3 from "figma:asset/e5141bc2e7d6d439c2a6531620d4bcf4551276fb.png";

// Import category card photos
import relationshipStyleImg from "figma:asset/09d26b96257b7556e5cc51eaa7e286c8a97c0f77.png";
import upsDownsImg from "figma:asset/d33509d301132268b3c877f1b7edb162b45bc1a3.png";
import travelMemoriesImg from "figma:asset/3e9fba0415ae16c9f05d1deca3255b81790512f5.png";

const categories = [
  {
    id: 1,
    title: "Our Relationship Style",
    icon: Heart,
    image: relationshipStyleImg,
    color: "from-[#C97B7B] to-[#F5E6E8]",
    content: [
      "You don't listen.",
      "I keep explaining.",
      "You pretend not to hear.",
      "I get angry.",
      "You smile.",
      "And somehow… we are still madly in love 😂💖",
      "Classic Tom & Jerry energy.",
    ],
  },
  {
    id: 2,
    title: "Travel Memories",
    icon: Plane,
    image: travelMemoriesImg,
    color: "from-[#8B3A3A] to-[#B95555]",
    clickable: true,
    content: [
      "We've traveled to so many places together,",
      "made countless memories,",
      "laughed, fought, clicked pictures, and eaten too much food 😋",
      "But let's be honest…",
      "Singapore was MY favorite ❤️",
      "",
      "Something about that trip just felt extra special with you.",
    ],
  },
  {
    id: 3,
    title: "Ups & Downs",
    icon: TrendingUp,
    image: upsDownsImg,
    color: "from-[#B95555] to-[#C97B7B]",
    content: [
      "Yes, we've had ups and downs.",
      "We've had arguments, silence, misunderstandings.",
      "",
      "But Guddu, listen to this part carefully 👀👇",
      "",
      "Even on our worst days,",
      "I never stopped choosing you.",
      "",
    ],
  },
];

const travelDestinations = [
  {
    id: 1,
    name: "Kumbhalgarh",
    description: "Our romantic getaway in the fort city",
    color: "from-[#C97B7B] to-[#F5E6E8]",
    photos: [
      kumbhalgarh1,
      kumbhalgarh2,
      kumbhalgarh3,
      kumbhalgarh4,
      kumbhalgarh5,
    ],
  },
  {
    id: 2,
    name: "Singapore",
    description: "Our favorite trip together",
    color: "from-[#8B3A3A] to-[#B95555]",
    photos: [
      singapore1,
      singapore2,
      singapore3,
      singapore4,
      singapore5,
    ],
  },
  {
    id: 3,
    name: "Ahmedabad",
    description: "Where our journey began",
    color: "from-[#B95555] to-[#C97B7B]",
    photos: [
      ahmedabad1,
      ahmedabad2,
      ahmedabad3,
      ahmedabad4,
      ahmedabad5,
    ],
  },
  {
    id: 4,
    name: "Mumbai",
    description: "City of dreams and memories",
    color: "from-[#A14A4A] to-[#C97B7B]",
    photos: [mumbai1, mumbai2, mumbai3],
  },
  {
    id: 5,
    name: "Udaipur",
    description: "The city of lakes and romance",
    color: "from-[#8B3A3A] to-[#A14A4A]",
    photos: [udaipur1, udaipur2, udaipur3, udaipur4, udaipur5],
  },
];

export default function RelationshipPage() {
  const navigate = useNavigate();
  const [showTravelModal, setShowTravelModal] = useState(false);
  const [selectedDestination, setSelectedDestination] =
    useState<number | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const handleCategoryClick = (categoryId: number) => {
    if (categoryId === 2) {
      // Travel Memories
      setShowTravelModal(true);
    }
  };

  const handleDestinationClick = (destId: number) => {
    setSelectedDestination(destId);
    setCurrentPhotoIndex(0);
  };

  const closeDestinationGallery = () => {
    setSelectedDestination(null);
    setCurrentPhotoIndex(0);
  };

  const closeTravelModal = () => {
    setShowTravelModal(false);
    setSelectedDestination(null);
    setCurrentPhotoIndex(0);
  };

  const nextPhoto = () => {
    const destination = travelDestinations.find(
      (d) => d.id === selectedDestination,
    );
    if (destination) {
      setCurrentPhotoIndex((prev) =>
        prev === destination.photos.length - 1 ? 0 : prev + 1,
      );
    }
  };

  const prevPhoto = () => {
    const destination = travelDestinations.find(
      (d) => d.id === selectedDestination,
    );
    if (destination) {
      setCurrentPhotoIndex((prev) =>
        prev === 0 ? destination.photos.length - 1 : prev - 1,
      );
    }
  };

  const selectedDestinationData = travelDestinations.find(
    (d) => d.id === selectedDestination,
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5E6E8] via-[#E8D5D8] to-[#F0D5D8] px-4 pt-12">
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          onClick={() => navigate("/dates")}
          className="mb-8 flex items-center gap-2 text-[#8B3A3A] hover:text-[#A14A4A] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-lg">Back to Dates</span>
        </motion.button>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl mb-4 text-[#8B3A3A]">
            Guddu&Duggu: Pyaar+Ladayi = Forever
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto shadow-lg"
          >
            <p className="text-xl md:text-2xl text-gray-700">
              We fight a lot.
              <br />
              Like… A LOT.
              <br />
              But if loving each other was a competition,
              <br />
              <span className="text-[#8B3A3A] font-semibold">
                we'd still win ❤️
              </span>
            </p>
          </motion.div>
        </motion.div>

        {/* Category Grid - Souled Store Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2 + index * 0.15,
                  duration: 0.6,
                }}
                whileHover={{ y: -10 }}
                className="group"
                onClick={() => handleCategoryClick(category.id)}
              >
                {/* Card */}
                <div
                  className={`bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ${category.clickable ? "cursor-pointer" : ""}`}
                >
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-40 group-hover:opacity-30 transition-opacity`}
                    />

                    {/* Icon overlay */}
                    <div className="absolute top-4 right-4 bg-white/90 rounded-full p-3">
                      <IconComponent className="w-6 h-6 text-[#8B3A3A]" />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <h3 className="text-2xl md:text-3xl text-[#8B3A3A] mb-4 flex items-center gap-2">
                      <span>📍</span>
                      {category.title}
                    </h3>
                    <div className="text-gray-700 space-y-2">
                      {category.content.map((line, i) => {
                        if (line === "")
                          return (
                            <div key={i} className="h-2" />
                          );

                        const isHighlight =
                          line.includes("madly in love") ||
                          line.includes(
                            "Singapore was MY favorite",
                          ) ||
                          line.includes(
                            "never stopped choosing you",
                          );

                        return (
                          <p
                            key={i}
                            className={`text-base md:text-lg ${
                              isHighlight
                                ? "text-[#8B3A3A] font-semibold"
                                : ""
                            } ${
                              line.includes("Classic Tom") ||
                              line.includes("Something about")
                                ? "italic text-gray-600"
                                : ""
                            }`}
                          >
                            {line}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Travel Modal */}
        <AnimatePresence>
          {showTravelModal && !selectedDestination && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeTravelModal}
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
                  onClick={closeTravelModal}
                  className="absolute top-4 right-4 z-10 bg-white/90 rounded-full p-2 hover:bg-white transition-all"
                >
                  <X className="w-6 h-6 text-gray-700" />
                </button>

                {/* Header */}
                <div className="bg-gradient-to-r from-[#8B3A3A] to-[#A14A4A] p-8 text-center">
                  <h2 className="text-3xl md:text-4xl text-white font-bold">
                    Our Travel Memories ✈️
                  </h2>
                </div>

                {/* Destinations Grid */}
                <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[75vh] overflow-y-auto">
                  {travelDestinations.map((destination) => (
                    <motion.div
                      key={destination.id}
                      whileHover={{ y: -5 }}
                      className="group cursor-pointer"
                      onClick={() =>
                        handleDestinationClick(destination.id)
                      }
                    >
                      <div
                        className={`bg-gradient-to-br ${destination.color} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-white/50`}
                      >
                        <div className="text-center mb-4">
                          <span className="text-6xl">
                            {destination.emoji}
                          </span>
                        </div>
                        <h3 className="text-2xl md:text-3xl text-white font-bold text-center mb-2">
                          {destination.name}
                        </h3>
                        <p className="text-white/90 text-center text-lg mb-4">
                          {destination.description}
                        </p>
                        <div className="text-center">
                          <span className="inline-block bg-white/90 text-[#8B3A3A] px-6 py-2 rounded-full font-semibold group-hover:bg-white transition-all">
                            View Photos 📸
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Destination Gallery */}
        <AnimatePresence>
          {selectedDestination && selectedDestinationData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeDestinationGallery}
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
                  onClick={closeDestinationGallery}
                  className="absolute top-4 right-4 z-10 bg-white/90 rounded-full p-2 hover:bg-white transition-all"
                >
                  <X className="w-6 h-6 text-gray-700" />
                </button>

                {/* Title */}
                <div className="bg-gradient-to-r from-[#8B3A3A] to-[#A14A4A] p-6 text-center">
                  <h3 className="text-2xl md:text-3xl text-white flex items-center justify-center gap-3">
                    <span>{selectedDestinationData.emoji}</span>
                    <span>{selectedDestinationData.name}</span>
                  </h3>
                </div>

                {/* Photo viewer */}
                <div
                  className="relative bg-gray-900 flex items-center justify-center"
                  style={{
                    minHeight: "400px",
                    maxHeight: "70vh",
                  }}
                >
                  <img
                    src={
                      selectedDestinationData.photos[
                        currentPhotoIndex
                      ]
                    }
                    alt={`Memory ${currentPhotoIndex + 1}`}
                    className="w-full max-h-[70vh] object-contain"
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
                    {selectedDestinationData.photos.length}
                  </div>
                </div>

                {/* Thumbnails */}
                <div className="flex gap-2 p-4 bg-gray-100 overflow-x-auto">
                  {selectedDestinationData.photos.map(
                    (photo, index) => (
                      <button
                        key={index}
                        onClick={() =>
                          setCurrentPhotoIndex(index)
                        }
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                          currentPhotoIndex === index
                            ? "border-[#8B3A3A] scale-110"
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

        {/* Next Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mb-20"
        >
          <button
            onClick={() => navigate("/promise")}
            className="bg-gradient-to-r from-[#8B3A3A] to-[#A14A4A] text-white px-10 py-5 rounded-full text-xl md:text-2xl hover:shadow-2xl transition-all"
            style={{
              boxShadow: "0 4px 20px rgba(139, 58, 58, 0.4)",
            }}
          >
            Next: A Promise From Duggu 💖
          </button>
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
}