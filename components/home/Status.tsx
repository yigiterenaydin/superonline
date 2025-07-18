export const Status = () => {
  return (
    <div className="max-w-lg">
      <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2">
        <span className="w-2 h-2 bg-gradient-to-r from-rose-400 to-rose-600 rounded-full"></span>
        Meine Zahlen
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div className="group p-4 sm:p-6 border border-rose-300 bg-gradient-to-br from-rose-50 to-rose-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-rose-500/50">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              9
            </div>
            <div className="flex-1">
              <p className="text-xs sm:text-sm text-gray-700 leading-4 sm:leading-5">
                Schnupperlehren, an denen ich bisher teilnehmen durfte
              </p>
            </div>
          </div>
        </div>
        
        <div className="group p-4 sm:p-6 border border-rose-300 bg-gradient-to-br from-rose-50 to-rose-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-rose-500/50">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              0
            </div>
            <div className="flex-1">
              <p className="text-xs sm:text-sm text-gray-700 leading-4 sm:leading-5">
                Bisher von mir versandte Bewerbungen für Lehrstellen
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
