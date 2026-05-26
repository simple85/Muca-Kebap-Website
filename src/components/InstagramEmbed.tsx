"use client";

import { useRef, useState, useEffect, createContext, useContext, useCallback } from "react";

/* ── Global "only one video at a time" coordinator ── */
type StopFn = () => void;
const PlayerContext = createContext<{
  register: (stop: StopFn) => void;
  notifyPlay: (stop: StopFn) => void;
}>({
  register: () => {},
  notifyPlay: () => {},
});

function PlayerProvider({ children }: { children: React.ReactNode }) {
  const players = useRef<Set<StopFn>>(new Set());

  const register = useCallback((stop: StopFn) => {
    players.current.add(stop);
    return () => players.current.delete(stop);
  }, []);

  const notifyPlay = useCallback((currentStop: StopFn) => {
    players.current.forEach((stop) => {
      if (stop !== currentStop) stop();
    });
  }, []);

  return (
    <PlayerContext.Provider value={{ register, notifyPlay }}>
      {children}
    </PlayerContext.Provider>
  );
}

/* ── Reel data ── */
const REELS = [
  { video: "/videos/reel-3.mp4", id: "DH6IdvUsPDr", poster: "/images/thumb-3.jpg" },
  { video: "/videos/reel-2.mp4", id: "DBG9rL2vZ7k", poster: "/images/thumb-2.jpg" },
  { video: "/videos/reel-1.mp4", id: "DPeNsjejTRr", poster: "/images/thumb-1.jpg" },
  { video: "/videos/reel-4.mp4", id: "DBg3miduKYC", poster: "/images/thumb-4.jpg" },
];

/* ── Individual reel card ── */
function ReelCard({ video, id, poster }: { video: string; id: string; poster: string }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false); // start with sound ON
  const { register, notifyPlay } = useContext(PlayerContext);

  // Create a stable stop function and register it
  const stopRef = useRef<StopFn>(() => {});
  useEffect(() => {
    const stop = () => {
      const v = videoRef.current;
      if (v && !v.paused) {
        v.pause();
        setPlaying(false);
      }
    };
    stopRef.current = stop;
    register(stop);
  }, [register]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      // Stop all other videos first
      notifyPlay(stopRef.current);
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <div className="flex justify-center">
      <div
        style={{ maxWidth: 480, width: "100%" }}
        className="rounded-xl overflow-hidden shadow-md bg-white"
      >
        {/* Header – Instagram style */}
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 p-[2px]">
            <div className="h-full w-full rounded-full bg-white flex items-center justify-center overflow-hidden">
              <img
                src={`${basePath}/images/logo-circle.svg`}
                alt="Muca Kebap"
                className="h-7 w-7"
              />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900 leading-tight">mucakebap.berlin</p>
            <p className="text-xs text-gray-500 leading-tight">Oranienplatz, Berlin</p>
          </div>
          <a
            href={`https://www.instagram.com/reel/${id}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-blue-500 hover:text-blue-700"
          >
            Ansehen
          </a>
        </div>

        {/* Video */}
        <div className="relative aspect-[9/16] bg-black cursor-pointer" onClick={togglePlay}>
          <video
            ref={videoRef}
            src={`${basePath}${video}`}
            poster={`${basePath}${poster}`}
            className="h-full w-full object-cover"
            loop
            muted={muted}
            playsInline
            preload="metadata"
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
          />

          {/* Play overlay */}
          {!playing && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <div className="h-16 w-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                <svg className="h-8 w-8 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}

          {/* Mute/unmute button */}
          {playing && (
            <button
              onClick={toggleMute}
              className="absolute bottom-3 right-3 h-8 w-8 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
              aria-label={muted ? "Ton einschalten" : "Ton ausschalten"}
            >
              {muted ? (
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              ) : (
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072M17.95 6.05a8 8 0 010 11.9M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              )}
            </button>
          )}
        </div>

        {/* Footer – Instagram style */}
        <div className="px-4 py-3">
          <div className="flex items-center gap-4 mb-2">
            {/* Heart */}
            <svg className="h-6 w-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            {/* Comment */}
            <svg className="h-6 w-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
            </svg>
            {/* Share */}
            <svg className="h-6 w-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
            <div className="flex-1" />
            {/* Instagram icon */}
            <a
              href={`https://www.instagram.com/reel/${id}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors"
              aria-label="Auf Instagram ansehen"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
          <p className="text-sm text-gray-900">
            <span className="font-semibold">mucakebap.berlin</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function InstagramEmbed() {
  return (
    <PlayerProvider>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {REELS.map((reel) => (
          <ReelCard key={reel.id} {...reel} />
        ))}
      </div>
    </PlayerProvider>
  );
}
