import { MultiPolygon, Polygon } from '@turf/turf';
import { EPSG } from '@map-colonies/types';
import { Webhook } from '../interfaces/webhook';
import { GeometryMetadata } from './exportManager';

export interface CreateExportTaskRequest<T> {
  catalogRecordId: string;
  artifactCRS: EPSG;
  webhook: Webhook[];
  parameters?: T;
  description?: string;
}

export interface CreateExportTaskResponse {
  jobId: string;
  geometries: TaskGeometry[];
}

export interface TaskGeometry {
  geometry: MultiPolygon | Polygon;
  metadata?: GeometryMetadata;
}

export declare type TaskParameters = Record<string, unknown>;
