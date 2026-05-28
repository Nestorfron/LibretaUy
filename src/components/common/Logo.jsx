import L from "../../assets/logo.png";


export default function Logo() {
    return (
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-2xl bg-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20 overflow-hidden">
          <img
            src={L}
            alt="LibretaUY"
            className="w-full h-full object-cover"
          />
        </div>
  
        <div>
          <h1 className="font-black text-lg leading-none">
            LibretaUY
          </h1>
  
          <p className="text-xs text-slate-500">
            Practica y aprueba
          </p>
        </div>
      </div>
    );
  }