import { ParticipanteGanhador } from "./ParticipanteGanhador";
import { ParticipantePerdedor } from "./ParticipantePerdedor";

export class Devedores {
    id: number;
    participante_ganhador: ParticipanteGanhador;
    fk_participante_ganhardor: number;
    participante_perdedor: ParticipantePerdedor;
    fk_participante_perdedor: number;
    pago: string;
    etapa?: any;
    fk_etapa_devedores: number;
}