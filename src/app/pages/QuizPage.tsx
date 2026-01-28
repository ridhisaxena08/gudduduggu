import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router";
import {
  Heart,
  CheckCircle,
  XCircle,
  ArrowLeft,
} from "lucide-react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const quizQuestions = [
  {
    id: 1,
    question: "What I think we do best as a couple:",
    options: [
      "A. Communicate",
      "B. Support each other",
      "C. Laugh together",
      "D. Handle tough times",
    ],
    correctAnswer: "D",
  },
  {
    id: 2,
    question: "My true favorite food is:",
    options: [
      "A. Something spicy",
      "B. Something homemade",
      "C. Something sweet",
      "D. The one I always steal from your plate",
    ],
    correctAnswer: "B",
  },
  {
    id: 3,
    question: 'When I say "I\'m fine," I usually mean:',
    options: [
      "A. I'm actually fine",
      "B. I don't want to talk yet",
      "C. I want comfort, not solutions",
      "D. All of the above",
    ],
    correctAnswer: "C",
  },
  {
    id: 4,
    question: "After a long day, I relax best by:",
    options: [
      "A. Watching a show",
      "B. Talking it out",
      "C. Being left alone",
      "D. Food + comfort + peace",
    ],
    correctAnswer: "D",
  },
  {
    id: 5,
    question: "When we're late, whose fault is it usually?",
    options: [
      "A. Mine",
      "B. Yours",
      "C. Traffic",
      "D. Let's not discuss this",
    ],
    correctAnswer: "A",
  },
  {
    id: 6,
    question: "The fastest way to make me laugh is:",
    options: [
      "A. Jokes",
      "B. Memes",
      "C. Teasing me",
      "D. Teasing someone else",
    ],
    correctAnswer: "C",
  },
];

export default function QuizPage() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState({});

  const handleAnswerSelect = (id, answer) => {
    setSelectedAnswers({ ...selectedAnswers, [id]: answer });
    setShowResults({ ...showResults, [id]: true });
  };

  const calculateScore = () =>
    quizQuestions.filter(
      (q) => selectedAnswers[q.id] === q.correctAnswer,
    ).length;

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate("/quiz-results", {
        state: {
          score: calculateScore(),
          totalQuestions: quizQuestions.length,
        },
      });
    }
  };

  const currentQ = quizQuestions[currentQuestion];
  const hasAnswered = showResults[currentQ.id];

  return (
    <div className="min-h-screen bg-[#F5E6E8] flex flex-col">
      <Header />

      <div className="flex-1 px-4 py-20 max-w-4xl mx-auto">
        <button
          onClick={() => navigate("/promise")}
          className="mb-8 flex items-center gap-2 text-[#8B3A3A]"
        >
          <ArrowLeft /> Back
        </button>

        <h1 className="text-5xl text-center text-[#8B3A3A] mb-10 flex justify-center gap-3">
          A Love Test <Heart />
        </h1>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQ.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            className="bg-white rounded-3xl p-10 shadow-xl"
          >
            <h2 className="text-2xl mb-6">
              {currentQ.question}
            </h2>

            <div className="space-y-4">
              {currentQ.options.map((option) => {
                const letter = option.charAt(0);
                const isSelected =
                  selectedAnswers[currentQ.id] === letter;
                const isCorrect =
                  letter === currentQ.correctAnswer;

                return (
                  <button
                    key={option}
                    disabled={hasAnswered}
                    onClick={() =>
                      handleAnswerSelect(currentQ.id, letter)
                    }
                    className={`w-full p-4 rounded-xl border-2 text-left ${
                      hasAnswered
                        ? isCorrect
                          ? "bg-green-100 border-green-500"
                          : isSelected
                            ? "bg-red-100 border-red-500"
                            : "opacity-40"
                        : "hover:bg-[#f0e3eb]"
                    }`}
                  >
                    {option}
                    {hasAnswered && isCorrect && (
                      <CheckCircle className="inline ml-3 text-green-600" />
                    )}
                    {hasAnswered &&
                      isSelected &&
                      !isCorrect && (
                        <XCircle className="inline ml-3 text-red-600" />
                      )}
                  </button>
                );
              })}
            </div>

            {hasAnswered && (
              <div className="text-center mt-8">
                <button
                  onClick={handleNext}
                  className="bg-[#8B3A3A] text-white px-10 py-4 rounded-full text-xl"
                >
                  {currentQuestion < quizQuestions.length - 1
                    ? "Next →"
                    : "See Results 🎉"}
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
}