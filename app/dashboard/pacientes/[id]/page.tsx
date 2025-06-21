// app/dashboard/pacientes/[id]/page.tsx
import { getPatientById } from "@/actions/patients";
import { DashboardHeader } from "@/components/dashboard-header";
import { notFound } from "next/navigation";

type Params = {
  params: {
    id: string;
  };
};

export default async function PacienteDetallePage({ params }: Params) {
  const id = Number(params.id);
  const patient = await getPatientById(id);

  if (!patient) return notFound();

  return (
    <main className="p-6">
      <DashboardHeader
        title="Paciente Detalles"
        description={`Detalles del paciente: ${patient.firstName} ${patient.lastName}`}
      />
      <div className="bg-white p-6 rounded shadow-md space-y-3">
        <p>
          <strong>Nombre:</strong> {patient.firstName} {patient.lastName}
        </p>
        <p>
          <strong>DNI:</strong> {patient.dni}
        </p>
        <p>
          <strong>Celular:</strong> {patient.phone}
        </p>
        <p>
          <strong>Fecha de nacimiento:</strong>{" "}
          {patient?.birthday
            ? new Date(patient.birthday).toLocaleDateString("es-AR")
            : "No especificada"}
        </p>

        {/* Agregá más campos según tu modelo */}
      </div>
    </main>
  );
}
