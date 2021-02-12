import { Patient } from '../../models/patient.modele';
import { Praticien } from '../../models/praticien.modele';
export interface RendezVous
{
  id: number,
  dateDebut: string,
  dateFin: string,
  motif: string,
  praticien: Praticien,
  patient: Patient,
}
