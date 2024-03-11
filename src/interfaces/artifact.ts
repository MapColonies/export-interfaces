import { Artifact3DType, ArtifactDEMType, ArtifactRasterType } from '@map-colonies/types';

declare type AtrifactType = ArtifactDEMType | ArtifactRasterType | Artifact3DType;

export interface Artifact {
  name: string;
  type: AtrifactType;
  url: string;
  size: number;
  sha256?: string;
}
