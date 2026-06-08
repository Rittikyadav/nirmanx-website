export default function Logo() {
    return (
        <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg">
                <span className="text-black font-black text-lg">
                    N
                </span>
            </div>

            <div>
                <h1 className="font-black text-xl tracking-tight">
                    NIRMAN X
                </h1>

                <p className="text-[10px] text-slate-500 tracking-widest uppercase">
                    Deep Tech Engineering
                </p>
            </div>

        </div>
    );
}