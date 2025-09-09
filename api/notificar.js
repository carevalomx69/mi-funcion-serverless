//# ===================================================================
//# ARCHIVO 1: api/notificar.js (Para el repositorio de GitHub)
//# ===================================================================
// Este es el código para nuestra función Serverless en Vercel.
// Vercel espera que exportemos una función `handler`.

export default function handler(request, response) {
    console.log("Vercel function invoked!");

    // Vercel automáticamente parsea el JSON del cuerpo.
    const { userId, username } = request.body;

    if (!userId || !username) {
        console.error("Missing userId or username");
        return response.status(400).json({ error: "Missing userId or username" });
    }

    // Esta es la lógica de negocio.
    const logMessage = `📬 [VERCEL] Simulating sending welcome email to user '${username}' (ID: ${userId})`;
    console.log(logMessage);

    // En una aplicación real, aquí iría el código para enviar el correo.

    response.status(200).json({ message: 'Notification processed successfully!' });
}