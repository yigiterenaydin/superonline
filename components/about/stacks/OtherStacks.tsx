"use client";

export const OtherStacks = () => {
  const references = [
    {
      name: "Thomas Seinige",
      job: "Klassenlehrer",
      email: "thomas.seinige@schulen.zuerich.ch",
      phone: "Nach fragen",
    },
    {
      name: "Cyrill Lam",
      job: "Kung-Fu Lehrer",
      email: "zuerich@skema.ch",
      phone: "044 401 40 42",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {references.map((ref) => (
          <div
            key={ref.email}
            className="bg-amber-100 border-2 border-amber-500 text-amber-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-amber-200"
          >
            <div className="space-y-3">
              <h3 className="font-bold text-xl text-amber-800">
                {ref.name}
              </h3>
              
              <p className="text-amber-700 text-base font-medium">
                {ref.job}
              </p>
              
              <div className="space-y-2 pt-2">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-amber-700">
                    E-Mail:
                  </span>
                  <a 
                    href={`mailto:${ref.email}`}
                    className="text-amber-800 hover:text-amber-600 text-sm break-all transition-colors duration-200"
                  >
                    {ref.email}
                  </a>
                </div>
                
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-amber-700">
                    Telefon:
                  </span>
                  <span className="text-amber-800 text-sm">
                    {ref.phone}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};