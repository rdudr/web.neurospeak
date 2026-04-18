export default function SoftAurora() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Dark background base */}
      <div className="absolute inset-0 bg-[#020617]"></div>

      {/* Aurora Orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#00f3ff] rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-aurora-slide"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#8b5cf6] rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-aurora-spin"></div>
      <div className="absolute top-[20%] right-[20%] w-[40%] h-[40%] bg-[#ff006e] rounded-full mix-blend-screen filter blur-[100px] opacity-10 animate-aurora-slide-reverse"></div>

      <style>{`
        @keyframes aurora-slide {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20%, 30%) scale(1.1); }
        }
        @keyframes aurora-spin {
          0% { transform: rotate(0deg) scale(1) translate(0, 0); }
          50% { transform: rotate(180deg) scale(1.2) translate(-10%, -20%); }
          100% { transform: rotate(360deg) scale(1) translate(0, 0); }
        }
        @keyframes aurora-slide-reverse {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30%, 10%) scale(0.9); }
        }
        
        .animate-aurora-slide {
          animation: aurora-slide 20s ease-in-out infinite alternate;
        }
        .animate-aurora-spin {
          animation: aurora-spin 25s linear infinite;
        }
        .animate-aurora-slide-reverse {
          animation: aurora-slide-reverse 15s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
}
