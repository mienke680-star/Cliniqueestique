import { business } from "@/data/business";

export function buildWhatsAppLink(message: string) {
  return `${business.whatsapp.baseUrl}?text=${encodeURIComponent(message)}`;
}

export function enquiryMessage(treatmentName: string) {
  return `Hi Clinique Estique, I'd like to enquire about ${treatmentName}. Could you tell me more about availability?`;
}

export function ritualMessage(goals: string[]) {
  return `Hi Clinique Estique, I completed the Find Your Ritual quiz on your website. I'm interested in: ${goals.join(
    ", "
  )}. Could you recommend the best treatments for me?`;
}

export function bookingMessage(fields: {
  name: string;
  phone: string;
  email: string;
  treatment: string;
  date: string;
  time: string;
  therapist?: string;
  message?: string;
}) {
  const lines = [
    `Hi Clinique Estique, I'd like to book an appointment.`,
    `Name: ${fields.name}`,
    `Phone: ${fields.phone}`,
    `Email: ${fields.email}`,
    `Treatment: ${fields.treatment}`,
    `Preferred date: ${fields.date}`,
    `Preferred time: ${fields.time}`,
  ];
  if (fields.therapist) lines.push(`Preferred therapist: ${fields.therapist}`);
  if (fields.message) lines.push(`Message: ${fields.message}`);
  return lines.join("\n");
}
