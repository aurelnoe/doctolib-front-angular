import { Patient } from './../../liste-patient/patient/patient.modele';
import { Praticien } from './../../liste-praticien/praticien/praticien.modele';
export interface RendezVous
{
  id: number,
  dateDebut: string,
  dateFin: string,
  motif: string,
  praticien: Praticien,
  patient: Patient,
}
