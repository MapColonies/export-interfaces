import { AtrifactType } from '../enums/artfiact';

export interface Artifact {
  name: string;
  type: AtrifactType;
  uri: string;
  size: number;
}
