"use client";
import { getPatientById } from "@/actions/patients";
import { DashboardHeader } from "@/components/dashboard-header";
import { useParams } from "next/navigation";
import React from "react";
import { Separator } from "@radix-ui/react-separator";

// Íconos de lucide-react
import { User, IdCard, Phone, MapPin, Calendar, Briefcase, Shield, HeartPulse } from "lucide-react";

export default function PacienteDetallePage() {
  const { id } = useParams();
  const [patient, setPatient] = React.useState<any | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchPatient = async () => {
      if (!id) return;
      const data = await getPatientById(Number(id));
      setPatient(data);
      setLoading(false);
    };
    fetchPatient();
  }, [id]);

  const formatDate = (date?: string | Date) =>
    date ? new Date(date).toLocaleDateString("es-AR") : "No especificada";

  if (loading) return <p className="p-4">Cargando paciente...</p>;
  if (!patient) return <p className="p-4 text-red-500">Paciente no encontrado</p>;

  return (
    <main className="p-6 space-y-8">
      <DashboardHeader
        title="Detalles del Paciente"
        description={`Información completa de ${patient.firstName} ${patient.lastName}`}
      />

      {/* Encabezado con nombre */}
      <section className="bg-white p-8 rounded-xl shadow text-center space-y-2">
        <User className="w-12 h-12 mx-auto text-blue-500" />
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          {patient.firstName} {patient.lastName}
        </h1>
        <p className="text-sm text-gray-500 flex items-center justify-center gap-1">
          <IdCard className="w-4 h-4" /> DNI: {patient.dni}
        </p>
      </section>

      <Separator className="bg-gray-200 h-px" />

      {/* Datos personales */}
      <section className="bg-white p-6 rounded-xl shadow space-y-2">
        <h2 className="text-xl font-semibold text-gray-700 flex items-center gap-2">
          <User className="w-5 h-5 text-blue-500" /> Datos personales
        </h2>
        <p><strong>DNI:</strong> {patient.dni}</p>
        <p><strong>CUIL:</strong> {patient.cuil}</p>
        <p className="flex items-center gap-1"><Phone className="w-4 h-4 text-green-600" /> {patient.phone}</p>
        <p className="flex items-center gap-1"><MapPin className="w-4 h-4 text-red-500" /> {patient.address}</p>
        <p><Calendar className="w-4 h-4 inline text-purple-500" /> <strong>Fecha de nacimiento:</strong> {formatDate(patient.birthday)}</p>
        <p><strong>Número de afiliado:</strong> {patient.affiliateNumber}</p>
        <p className="flex items-center gap-1">
          <Briefcase className="w-4 h-4 text-gray-600" /> {patient.professionalActivity ?? "No especificada"}
        </p>
      </section>

      {/* Tutor legal */}
      {patient?.legalGuardian && (
        <section className="bg-white p-6 rounded-xl shadow space-y-2">
          <h2 className="text-xl font-semibold text-gray-700 flex items-center gap-2">
            <Shield className="w-5 h-5 text-orange-500" /> Tutor legal
          </h2>
          <p><strong>Nombre:</strong> {patient.legalGuardian.firstName} {patient.legalGuardian.lastName}</p>
          <p><strong>DNI:</strong> {patient.legalGuardian.dni}</p>
          <p><strong>CUIL:</strong> {patient.legalGuardian.cuil}</p>
          <p><Phone className="w-4 h-4 inline text-green-600" /> {patient.legalGuardian.phone}</p>
          <p><MapPin className="w-4 h-4 inline text-red-500" /> {patient.legalGuardian.address}</p>
          <p><Briefcase className="w-4 h-4 inline text-gray-600" /> {patient.legalGuardian.professionalActivity}</p>
        </section>
      )}

      {/* Datos de admisión */}
      {patient?.admission && (
        <section className="bg-white p-6 rounded-xl shadow space-y-2">
          <h2 className="text-xl font-semibold text-gray-700 flex items-center gap-2">
            <HeartPulse className="w-5 h-5 text-pink-500" /> Datos de admisión
          </h2>
          <p><strong>Fecha de operación:</strong> {formatDate(patient.admission.operationDate)}</p>
          <p><strong>Fecha de ingreso:</strong> {formatDate(patient.admission.admissionDate)}</p>
          <p><strong>Tipo de ingreso:</strong> {patient.admission.admissionType?.name}</p>
          <p><strong>Escolarizado:</strong> {patient.admission.isSchoolEnrolled ? "Sí" : "No"}</p>
          <p><strong>Turno colegio:</strong> {patient.admission.schoolShift ?? "No especificado"}</p>
          <p><strong>Diagnóstico / CUD:</strong> {patient.admission.cud ?? "No especificado"}</p>
          <p><strong>Vencimiento CUD:</strong> {formatDate(patient.admission.cudExpirationDate)}</p>
          <p><strong>Estatus:</strong> {patient.admission.status ?? "No especificado"}</p>
        </section>
      )}

      {/* Obra social */}
      {patient?.admission?.healthInsuranceAuthorizations?.length > 0 && (
        <section className="bg-white p-6 rounded-xl shadow space-y-4">
          <h2 className="text-xl font-semibold text-gray-700 flex items-center gap-2">
            <Shield className="w-5 h-5 text-indigo-500" /> Obra social y prestaciones
          </h2>
          <ul className="space-y-3">
            {patient.admission.healthInsuranceAuthorizations.map((auth) => (
              <li key={auth.id} className="border p-4 rounded-lg bg-gray-50">
                <p><strong>Prestación:</strong> {auth.service}</p>
                <p><strong>Periodo:</strong> {formatDate(auth.periodFrom)} - {formatDate(auth.periodTo)}</p>
                <p><strong>Obra social:</strong> {auth.healthInsuranceProvider?.name}</p>
                <p><strong>CUIT:</strong> {auth.healthInsuranceProvider?.cuit}</p>
                <p><strong>Recibido el:</strong> {formatDate(auth.authorizedAt)}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
