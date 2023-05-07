import { MultiPolygon, Polygon } from '@turf/turf';
import { EPSG } from '../enums/epsg';
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
