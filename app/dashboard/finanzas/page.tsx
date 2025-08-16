'use client'

import { useEffect, useState } from 'react'
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { createAppointmentPreference } from '@/actions/appointment'

const patientBilling = [
  { name: 'Juan Pérez', date: '2025-06-01', service: 'Consulta General', amount: 8000 },
  { name: 'Ana Gómez', date: '2025-06-03', service: 'Estudio Laboratorio', amount: 12000 },
  { name: 'Luis Rojas', date: '2025-06-05', service: 'Control Médico', amount: 10000 },
]

const adminExpenses = [
  { category: 'Alquiler', amount: 50000 },
  { category: 'Sueldos', amount: 120000 },
  { category: 'Insumos', amount: 20000 },
]

const incomeVsExpenses = [
  { month: 'Abril', ingresos: 240000, gastos: 170000 },
  { month: 'Mayo', ingresos: 260000, gastos: 180000 },
  { month: 'Junio', ingresos: 220000, gastos: 190000 },
]

const expensePieData = adminExpenses.map((g, index) => ({
  name: g.category,
  value: g.amount,
}))

const COLORS = ['#8884d8', '#82ca9d', '#ffc658']

export default function BillingDashboard() {
  useEffect(() => {
    const createPreference = async () => {
      console.log('Creating appointment preference...');      
      await createAppointmentPreference({})
    }
    createPreference()
  })
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Facturación de pacientes */}
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Facturación de Pacientes</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="w-full text-sm">
            <thead className="border-b font-medium">
              <tr>
                <th className="text-left p-2">Paciente</th>
                <th className="text-left p-2">Fecha</th>
                <th className="text-left p-2">Servicio</th>
                <th className="text-right p-2">Monto</th>
              </tr>
            </thead>
            <tbody>
              {patientBilling.map((bill, index) => (
                <tr key={index} className="border-b hover:bg-muted">
                  <td className="p-2">{bill.name}</td>
                  <td className="p-2">{bill.date}</td>
                  <td className="p-2">{bill.service}</td>
                  <td className="p-2 text-right">${bill.amount.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      {/* Gráfico ingresos vs gastos */}
      <Card>
        <CardHeader>
          <CardTitle>Ingresos vs Gastos (mensual)</CardTitle>
        </CardHeader>
        <CardContent className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={incomeVsExpenses}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="ingresos" fill="#4ade80" />
              <Bar dataKey="gastos" fill="#f87171" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Gráfico categorías de gasto */}
      <Card>
        <CardHeader>
          <CardTitle>Distribución de Gastos</CardTitle>
        </CardHeader>
        <CardContent className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={expensePieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {expensePieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
