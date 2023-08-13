import { FeatureCollection, MultiPolygon, Polygon } from '@turf/turf';
import { Domain, EpsgCode } from '@map-colonies/types';
import { Webhook } from '../interfaces/webhook';
import { GeometryMetadata } from './exportManager';

/* eslint-disable @typescript-eslint/naming-convention */
export interface CreateExportTaskRequest<T> {
  catalogRecordID: string;
  domain: Domain;
  artifactCRS: EpsgCode;
  webhook: Webhook[];
  ROI?: FeatureCollection;
  parameters?: T;
  keywords?: Record<string, unknown>;
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
