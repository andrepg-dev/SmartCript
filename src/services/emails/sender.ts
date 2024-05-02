import { EMAIL_CONSTANTS } from "@/constants/email-constants";
import { MailgunMessageData } from "@/interfaces/emails";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const mailgun = new Mailgun(FormData);
const mg_client = mailgun.client({ username: "api", key: EMAIL_CONSTANTS.API_KEY });

export async function Sender({ to, text, subject }: MailgunMessageData) {
  try {
    const res = await mg_client.messages.create(EMAIL_CONSTANTS.DOMAIN, {
      from: EMAIL_CONSTANTS.FROM,
      to: to,
      subject: subject,
      text: text,
    })

    console.log({ mailgunres: res });

    return res;
  } catch (error) {
    console.error(error);
  }
}