
export interface AppSettings {
  product: string;
  goal: string;
  content: string;
  tone: string;
  theme: 'light' | 'dark';
}

export interface EmailData {
  subject: string;
  delay: string;
  body: string;
}

export interface SequenceData {
  email_1: EmailData;
  email_2: EmailData;
  email_3: EmailData;
}

export interface GenerationParams {
    product: string;
    goal: string;
    content: string;
    tone: string;
}
