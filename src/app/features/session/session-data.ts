export interface Session {
  id: number;
  sujet: string;
  date: string;
  mode: string;
}

export const SESSIONS: Session[] = [
  { id: 1, sujet: 'Java NIV2', date: '2025-06-04T10:00', mode: 'visio' },
  { id: 2, sujet: 'Réseaux NIV1', date: '2025-06-05T14:30', mode: 'présentiel' }
];
