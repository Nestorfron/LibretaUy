import Navbar from "../components/layout/Navbar";
import PageContainer from "../components/layout/PageContainer";

export default function Profile() {
  return (
    <div className="pb-20 md:pb-0">
      <Navbar />

      <PageContainer>
        <section className="py-10">
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
            <h1 className="text-4xl font-black">
              Perfil 👤
            </h1>

            <p className="text-slate-600 mt-3">
              Aquí aparecerán tus estadísticas y progreso.
            </p>
          </div>
        </section>
      </PageContainer>
    </div>
  );
}