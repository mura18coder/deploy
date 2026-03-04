import nodemailer from "nodemailer";

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, projectType, message } = body;

        // Validación básica
        if (!name || !email || !message) {
            return new Response(JSON.stringify({ error: "Faltan campos requeridos" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        // Configuración del transportador SMTP (Nodemailer)
        // NOTA: Para Gmail, debes usar una "Contraseña de Aplicación" (App Password)
        // No uses tu contraseña personal regular.
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, // e.g., deploy.coders@gmail.com
                pass: process.env.EMAIL_PASS, // e.g., tu contraseña de aplicación de 16 caracteres
            },
        });

        // Configuración del correo a enviar a deploy.coders@gmail.com
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "deploy.coders@gmail.com",
            replyTo: email,
            subject: `Nueva solicitud de proyecto: ${projectType} - De: ${name}`,
            html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2094f3;">Nuevo Mensaje de Contacto</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Correo (Respuesta):</strong> ${email}</p>
          <p><strong>Tipo de Proyecto:</strong> ${projectType}</p>
          <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;" />
          <h3>Mensaje / Idea del Proyecto:</h3>
          <p style="background: #f4f4f4; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message}</p>
          
          <!-- Footer / Firma -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 40px; background-color: #050c0f; border-radius: 8px; padding: 30px;">
            <tr>
              <td align="center" style="padding-bottom: 15px;">
                <!-- Reemplazar con el tag <img> apuntando a la URL pública de tu logo si prefieres la imagen real -->
                <h1 style="color: #ffffff; font-family: 'Courier New', Courier, monospace; letter-spacing: 2px; margin: 0; font-size: 20px;">
                  <span style="color: #3b82f6;">{</span> D E P L O Y <span style="color: #3b82f6;">}</span>
                </h1>
              </td>
            </tr>
            <tr>
              <td align="center" style="font-family: Arial, sans-serif; color: #94a3b8; font-size: 12px; line-height: 1.6;">
                <p style="margin: 0 0 15px 0; font-style: italic;">Nosotros Construimos, Tú Despliegas</p>
                <p style="margin: 5px 0;">
                  <strong style="color: #3b82f6;"></strong> <a href="https://linktr.ee/deploy.coders" style="color: #2094f3; text-decoration: none;">linktr.ee/deploy.coders</a>
                </p>
                <p style="margin: 5px 0;">
                  <strong style="color: #3b82f6;"></strong> <a href="mailto:deploy.coders@gmail.com" style="color: #2094f3; text-decoration: none;">deploy.coders@gmail.com</a>
                </p>
              </td>
            </tr>
          </table>
        </div>
      `,
        };

        // Enviar el correo
        await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error enviando el correo:", error);
        return new Response(JSON.stringify({ error: "Error interno del servidor al enviar el correo" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
