import { Toaster } from "react-hot-toast";
export default function Footer() {

  return (
    <footer className="w-full px-0 py-0 mt-8">
      <div className="w-full bg-gradient-to-br 
       from-gray-900 via-gray-800/50 to-gray-900
       px-4 py-8 mx-auto">
        {/* Location Info */}
        <div className="flex flex-col gap-2 md:items-start items-center text-center md:text-left w-full md:w-auto">
          <div className="text-purple-300">&copy; {new Date().getFullYear()} Vizite. Todos os direitos reservados.</div>
          <div className="flex flex-col items-center gap-4 text-gray-400">
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-purple-400">📍</span>
                <span>Rua das Flores, 123, São Paulo, SP</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-purple-400">📞</span>
                <span>+55 11 99999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-purple-400">📧</span>
                <span>oi@vizite.com.br</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[2px] bg-gradient-to-r from-purple-800 via-purple-500 to-purple-800 opacity-40 mt-0" />
      <Toaster position="bottom-right" />
    </footer>
  );
  }