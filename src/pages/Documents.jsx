import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import PageContainer from "../components/layout/PageContainer";

import DocumentCard from "../components/documents/DocumentCard";
import DocumentModal from "../components/documents/DocumentModal";

export default function Documents() {
  const [selectedDoc, setSelectedDoc] = useState(null);

  const documents = [
    {
      id: 1,
      title: "Guía de Autos y Motos",
      description: "Material oficial para el examen teórico",
      file: "pdf/GuiaAutosYMotos.pdf",
      size: "8 MB",
      category: "guias",
    },
    {
        id: 2,
        title: "Guía Profesionales",
        description: "Material oficial para el examen teórico",
        file: "pdf/GuiaProfesional.pdf",
        size: "3 MB",
        category: "guias",
    }
  ];

  return (
    <div className="pb-20 md:pb-0 min-h-screen bg-slate-50">
      <Navbar />

      <PageContainer>
        <section className="py-10">

          {/* HEADER */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-5">
              📄 Material de estudio
            </div>

            <h1 className="text-5xl font-black leading-tight">
              Documentos
            </h1>

            <p className="text-slate-600 text-lg mt-5 leading-relaxed">
              Accede a guías oficiales y material clave para preparar tu examen de conducción.
            </p>
          </div>

          {/* GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {documents.map((doc) => (
              <DocumentCard
                key={doc.id}
                document={doc}
                onSelect={setSelectedDoc}
              />
            ))}
          </div>

        </section>
      </PageContainer>

      {/* MODAL */}
      <DocumentModal
        document={selectedDoc}
        onClose={() => setSelectedDoc(null)}
      />
    </div>
  );
}