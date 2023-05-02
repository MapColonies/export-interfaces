import { EPSG } from '../enums/epsg';
import { Webhook } from '../interfaces/webhook';

export interface ExportTaskRequest<T> {
  catalogRecordId: string;
  artifactCRS: EPSG;
  webhook: Webhook[];
  parameters?: T;
  description?: string;
}

export interface ExportTaskResponse {
  jobId: string;
}

export declare type TaskParameters = Record<string, unknown>;
