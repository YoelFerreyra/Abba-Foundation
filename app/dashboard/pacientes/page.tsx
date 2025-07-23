"use client";

import { useState, useEffect } from "react";
import { DashboardHeader } from "@/components/dashboard-header";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import PatientForm from "./components/user-form";
import HealthInsuranceProviderForm from "./components/HealthInsuranceProviderForm";
import {
  createHealthInsuranceProvider,
  createPatientWithAdmission,
  deletePatientByIdAction,
  getAllPatientsAction,
} from "@/actions/patients";
import { PatientFormData } from "./schemas/patient-schema";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Eye, MoreVertical, Pencil, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { HealthInsuranceProviderFormValues } from "./schemas/healthInsuranceProviderSchema";
import { toast } from "sonner";

export default function PatientsPage() {
  const [patients, setPatients] = useState<PatientFormData[] | undefined>([]);
  const [editingPatient, setEditingPatient] = useState<PatientFormData | null>(
    null
  );
  const [isOpen, setIsOpen] = useState(false);
  const [isProviderFormOpen, setIsProviderFormOpen] = useState(false);
  const router = useRouter();

  const fetchPatients = async () => {
    const data = await getAllPatientsAction();

    // Convertir fechas si vienen como string
    const parsed = data?.map((p: any) => ({
      ...p,
      birthday: new Date(p.birthday),
    }));
    setPatients(parsed);
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const handleSubmitProvider = async (
    values: HealthInsuranceProviderFormValues
  ) => {
    await createHealthInsuranceProvider(values);
    setIsProviderFormOpen(false);
    // Podés hacer fetch de prestadores si los necesitás en un dropdown, etc.
  };

  const handleCreate = () => {
    setEditingPatient(null);
    setIsOpen(true);
  };

  const handleDelete = async (id?: string | number) => {
    await deletePatientByIdAction(id)
    fetchPatients()
    toast.success("Paciente eliminado correctamente")
  };

  const handleEdit = (patient: PatientFormData) => {
    setEditingPatient({
      ...patient,
      birthday: new Date(patient.birthday),
    });
    setIsOpen(true);
  };

  const handleSubmit = async (data: PatientFormData) => {
    if (editingPatient) {
      const updatedData = {
        ...editingPatient,
        ...data,
        birthday: data.birthday.toISOString(),
      };
      //const result = await createPatientAction(updatedData);
    }
    //const result = await createPatientAction(data);
    console.log(data);
    
    const result = await createPatientWithAdmission({
      ...data,
    });
    await fetchPatients();
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col gap-5">
      <DashboardHeader
        title="Gestión de Pacientes"
        description="Administra los pacientes del consultorio"
      />
      <div className="flex justify-end gap-2">
        <Button onClick={handleCreate}>Agregar Paciente</Button>
        <Button variant="outline" onClick={() => setIsProviderFormOpen(true)}>
          Agregar Obra Social
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Teléfono</TableHead>
            <TableHead>Dirección</TableHead>
            <TableHead>Fecha de nacimiento</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {patients?.map((p, i) => (
            <TableRow
              key={`${p.dni}-${i}`}
              className="cursor-pointer hover:bg-muted/50"
            >
              <TableCell>{`${p.firstName} ${p.lastName}`}</TableCell>
              <TableCell>{p.phone}</TableCell>
              <TableCell>{p.address}</TableCell>
              <TableCell>{new Date(p.birthday).toLocaleDateString()}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="border border-muted shadow-lg rounded-md min-w-[180px] p-1 bg-white"
                  >
                    <DropdownMenuItem
                      onClick={() =>
                        router.push(`/dashboard/pacientes/${p.id}`)
                      }
                      className="flex items-center gap-2"
                    >
                      <Eye className="w-4 h-4 text-muted-foreground" />
                      Ver detalles
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleEdit(p)}
                      className="flex items-center gap-2"
                    >
                      <Pencil className="w-4 h-4 text-muted-foreground" />
                      Editar
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleDelete(p?.id)}
                      className="flex items-center gap-2 text-red-600 focus:text-red-600"
                    >
                      <Trash className="w-4 h-4" />
                      Eliminar
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <PatientForm
        defaultValues={editingPatient || undefined}
        onSubmit={handleSubmit}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <HealthInsuranceProviderForm
        defaultValues={undefined} // o algún valor si estás editando
        onSubmit={handleSubmitProvider}
        isOpen={isProviderFormOpen}
        setIsOpen={setIsProviderFormOpen}
      />
    </div>
  );
}
