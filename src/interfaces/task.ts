import { FeatureCollection, MultiPolygon, Polygon } from '@turf/turf';
import { Domain, EpsgCode } from '@map-colonies/types';
import { TaskStatus } from '../enums/taskStatus';
import { Webhook } from '../interfaces/webhook';
import { GeometryMetadata } from './exportManager';
import { Artifact } from './artifact';

/* eslint-disable @typescript-eslint/naming-convention */
export interface CreateExportTaskRequest<T> {
  catalogRecordID: string;
  domain: Domain;
  artifactCRS: EpsgCode;
  webhooks: Webhook[];
  ROI: FeatureCollection;
  parameters?: T;
  keywords?: Record<string, unknown>;
  description?: string;
}

export interface CreateExportTaskResponse {
  jobId: string;
  taskGeometries: TaskGeometry[];
  expiredAt?: Date;
  status?: TaskStatus;
  artifacts?: Artifact[];
  progress?: number;
}

export interface TaskGeometry {
  geometry: MultiPolygon | Polygon;
  metadata?: GeometryMetadata;
}

export declare type TaskParameters = Record<string, unknown>;
