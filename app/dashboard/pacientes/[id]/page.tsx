"use client"
import { getPatientById } from "@/actions/patients";
import { DashboardHeader } from "@/components/dashboard-header";
import { useParams } from "next/navigation";
import React from "react";

export default function PacienteDetallePage() {
  const { id } = useParams()
  const [patient, setPatient] = React.useState<any | null>(null)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const fetchPatient = async () => {
      if (!id) return
      const data = await getPatientById(Number(id))
      setPatient(data)
      setLoading(false)
    }

    fetchPatient()
  }, [id])

  const formatDate = (date?: string | Date) =>
    date ? new Date(date).toLocaleDateString("es-AR") : "No especificada"

  if (loading) return <p className="p-4">Cargando paciente...</p>
  if (!patient) return <p className="p-4 text-red-500">Paciente no encontrado</p>

  return (
    <main className="p-6 space-y-6">
      <DashboardHeader
        title="Detalles del Paciente"
        description={`Información completa de ${patient.firstName} ${patient.lastName}`}
      />

      <section className="bg-white p-6 rounded-lg shadow space-y-2">
        <h2 className="text-lg font-semibold text-gray-700">🧍 Datos personales</h2>
        <p><strong>Nombre:</strong> {patient.firstName} {patient.lastName}</p>
        <p><strong>DNI:</strong> {patient.dni}</p>
        <p><strong>CUIL:</strong> {patient.cuil}</p>
        <p><strong>Teléfono:</strong> {patient.phone}</p>
        <p><strong>Dirección:</strong> {patient.address}</p>
        <p><strong>Fecha de nacimiento:</strong> {formatDate(patient.birthday)}</p>
        <p><strong>Número de afiliado:</strong> {patient.affiliateNumber}</p>
        <p><strong>Actividad profesional:</strong> {patient.professionalActivity ?? "No especificada"}</p>
      </section>

      {patient?.legalGuardian && (
        <section className="bg-white p-6 rounded-lg shadow space-y-2">
          <h2 className="text-lg font-semibold text-gray-700">🧑‍⚖️ Tutor legal</h2>
          <p><strong>Nombre:</strong> {patient.legalGuardian.firstName} {patient.legalGuardian.lastName}</p>
          <p><strong>DNI:</strong> {patient.legalGuardian.dni}</p>
          <p><strong>CUIL:</strong> {patient.legalGuardian.cuil}</p>
          <p><strong>Teléfono:</strong> {patient.legalGuardian.phone}</p>
          <p><strong>Dirección:</strong> {patient.legalGuardian.address}</p>
          <p><strong>Actividad profesional:</strong> {patient.legalGuardian.professionalActivity}</p>
        </section>
      )}

      {patient?.admission && (
        <section className="bg-white p-6 rounded-lg shadow space-y-2">
          <h2 className="text-lg font-semibold text-gray-700">🏥 Datos de admisión</h2>
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

      {patient?.admission?.healthInsuranceAuthorizations?.length > 0 && (
        <section className="bg-white p-6 rounded-lg shadow space-y-3">
          <h2 className="text-lg font-semibold text-gray-700">🏢 Obra social y prestaciones</h2>
          <ul className="space-y-2">
            {patient?.admission?.healthInsuranceAuthorizations.map((auth) => (
              <li key={auth?.id} className="border p-3 rounded bg-gray-50">
                <p><strong>Prestación:</strong> {auth?.service}</p>
                <p><strong>Periodo:</strong> {formatDate(auth?.periodFrom)} - {formatDate(auth.periodTo)}</p>
                <p><strong>Obra social:</strong> {auth?.healthInsuranceProvider?.name}</p>
                <p><strong>CUIT:</strong> {auth?.healthInsuranceProvider?.cuit}</p>
                <p><strong>Recibido el:</strong> {formatDate(auth?.authorizedAt)}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
