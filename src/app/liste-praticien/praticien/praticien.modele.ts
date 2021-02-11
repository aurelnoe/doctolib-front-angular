import { Adresse } from './../../liste-adresse/adresse/adresse.modele';
export interface Praticien
{
  id?: number,
  nom?: string,
  prenom?: string,
  email?: string,
  role?: string,
  dateInscription?: string,
  telephone?: string,
  password?: string,
  specialite?: string,
  adresse?: Adresse,
}
