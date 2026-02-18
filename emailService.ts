import emailjs from '@emailjs/browser';

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

const emailServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '';
const emailTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '';
const emailPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '';

export const sendContactEmail = async (payload: ContactPayload) => {
  if (!emailServiceId || !emailTemplateId || !emailPublicKey) {
    throw new Error('EmailJS config missing');
  }

  await emailjs.send(
    emailServiceId,
    emailTemplateId,
    {
      From_name: payload.name,
      from_name: payload.name,
      name: payload.name,
      email: payload.email,
      from_email: payload.email,
      message: payload.message
    },
    {
      publicKey: emailPublicKey
    }
  );
};
