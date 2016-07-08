import { Pitch } from "../../Common/DataObjects/pitch";
import { KeyInstruction } from "../VoiceData/Instructions/KeyInstruction";
export interface ITransposeCalculator {
    transposePitch(pitch: Pitch, currentKeyInstruction: KeyInstruction, halftones: number): Pitch;
    transposeKey(keyInstruction: KeyInstruction, transpose: number): void;
    getTransposedKeyString(keyInstruction: KeyInstruction, halftone: number): string;
}
