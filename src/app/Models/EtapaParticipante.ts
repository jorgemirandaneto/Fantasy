import { Etapas } from './Etapas';
import { Participante } from './Participantes';

export class EtapaParticipante {
    id: string;
    fk_participante: string;
    nota: string;
    ano: string;
    etapas: Etapas[];
    participante: Participante[];
}
