import { EPSG } from '../enums/epsg';
import { Webhook } from '../interfaces/webhook';

export interface CreateExportTaskRequest<T> {
  catalogRecordId: string;
  artifactCRS: EPSG;
  webhook: Webhook[];
  parameters?: T;
  description?: string;
}

export interface CreateExportTaskResponse {
  jobId: string;
}

export declare type TaskParameters = Record<string, unknown>;
