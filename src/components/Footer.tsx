export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-800 bg-[#111] px-6 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center bg-[#ccff00] font-black text-black">
            F
          </div>

          <span className="font-extrabold tracking-wider">
            FITLOG
          </span>
        </div>

        <p className="text-sm text-gray-500">
          © 2026 FITLOG. All rights reserved.
        </p>

      </div>
    </footer>
  );
}