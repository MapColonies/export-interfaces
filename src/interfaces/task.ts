import { FeatureCollection } from '@turf/turf';
import { GeoJSON } from 'geojson';
import { Domain } from '../enums/domain';
import { CRS } from '../enums/crs';
import { TaskStatus } from '../enums/taskStatus';
import { Artifact } from './artifact';
import { Webhook } from './webhookEventMessage';

export interface ITask<T> extends ITriggerExportTaskRequest<T> {
  jobId: string;
  status: TaskStatus;
  progress: number;
  atrifacts: Artifact[];
  createdAt: Date;
  totalSize?: number;
  footprint?: GeoJSON;
  estimatedSize?: number;
  expiredAt?: Date;
  finishedAt?: Date;
}

export interface ITriggerExportTaskRequest<T> {
  catalogRecordId: string;
  artifactCRS: CRS;
  ROI?: FeatureCollection;
  webhook: Webhook[];
  parameters?: T;
  description?: string;
}

export interface ITriggerExportTaskResponse {
  jobId: string;
}


export declare type TaskParameters = Record<string, unknown>;
