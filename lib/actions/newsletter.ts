'use server';

export async function subscribeNewsletter(formData: FormData) {
  const email = formData.get('email') as string;

  if (!email || !email.includes('@')) {
    return { success: false, message: 'Email inválido' };
  }

  // TODO: Conectar a Supabase / Mailchimp / Resend
  // Por ahora simulamos un delay de red
  await new Promise((r) => setTimeout(r, 600));

  console.log(`[Newsletter] Nueva suscripción: ${email}`);
  return { success: true, message: '¡Gracias por suscribirte!' };
}
