const bienvenida = ({ name, date }: { name: string; date: string }) => `
    <html>
    <body>
        <h1>¡Bienvenido, ${name}!</h1>
        <p>Te registraste el día ${date}</p>
    </body>
    </html>
`;

const recordatorio = ({
  name,
  event,
  date,
}: {
  name: string;
  event: string;
  date: string;
}) => `
    <html>
    <body>
        <h1>Hola ${name}</h1>
        <p>Te recordamos que el evento "${event}" será el ${date}.</p>
    </body>
    </html>
`;

export function renderTemplate(
  templateFn: (data: any) => string,
  data: Record<string, any>
) {
  if (typeof templateFn !== "function") {
    throw new Error(`El template proporcionado no es una función`);
  }
  return templateFn(data);
}
