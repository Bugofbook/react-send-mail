export type MailProps = {
  mailTo: string
  subject?: string
  body?: string
  cc?: string | Array<string>
  bcc?: string | Array<string>
}
