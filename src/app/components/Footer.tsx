import { Heart, ArrowLeft, Instagram } from "lucide-react";
import { useNavigate } from "react-router";

interface FooterProps {
  showBackButton?: boolean;
  backPath?: string;
  showInstagram?: boolean;
}

export default function Footer({
  showBackButton = false,
  backPath = "/",
  showInstagram = true,
}: FooterProps) {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#8B3A3A] text-white py-6 sm:py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Back Button and Instagram - Above main footer content */}
        {(showBackButton || showInstagram) && (
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-white/20">
            {showBackButton && (
              <button
                onClick={() => navigate(backPath)}
                className="flex items-center gap-2 text-white hover:text-white/80 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-base sm:text-lg">Back</span>
              </button>
            )}
            {!showBackButton && <div className="hidden sm:block"></div>}

            {showInstagram && (
              <a
                href="https://www.instagram.com/vanivishgottrue?igsh=MXJycWt0cWUybnh4Yg=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-white/80 transition-colors"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-base sm:text-lg">
                  Vani'sVishgotTrue
                </span>
              </a>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 text-center sm:text-left">
          {/* Left - About */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 flex items-center justify-center sm:justify-start gap-2">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
              Our Journey
            </h3>
            <p className="text-xs sm:text-sm text-white/90">
              Celebrating 1 year of marriage and endless love
              between Guddu & Duggu.
            </p>
          </div>

          {/* Center - Important Dates */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
              Special Dates
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-white/90">
              <li>💍 Engagement: November 28</li>
              <li>💒 Marriage: April 14</li>
              <li>🎂 Guddu's Birthday: Today!</li>
            </ul>
          </div>

          {/* Right - Stats */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
              Our Story
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-white/90">
              <li>Still choosing you. Every single day."</li>
              <li>— Forever & Always ∞</li>
            </ul>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="border-t border-white/20 pt-4 sm:pt-6 text-center">
          <p className="text-xs sm:text-sm text-white/80">
            Made with{" "}
            <Heart className="w-3 h-3 sm:w-4 sm:h-4 inline fill-white mx-1" />{" "}
            by Duggu for Guddu
          </p>
          <p className="text-[10px] sm:text-xs text-white/60 mt-2">
            © 2026 #GudduDuggu Forever
          </p>
        </div>
      </div>
    </footer>
  );
}