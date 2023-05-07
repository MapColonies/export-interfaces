import { FeatureCollection } from '@turf/turf';
import { CreateExportTaskRequest, CreateExportTaskResponse, TaskParameters } from './task';

/* eslint-disable @typescript-eslint/naming-convention */
export interface GetEstimatedSizeParams {
  ROI?: FeatureCollection;
  additional?: Record<string, unknown>;
}

export interface GetFileSizeParams {
  filePath: string;
  additional?: Record<string, unknown>;
}

export declare type GeometryMetadata = Record<string, unknown>;

export interface IExportManager {
  createExportTask: (data: CreateExportTaskRequest<TaskParameters>) => Promise<CreateExportTaskResponse>;
  getEstimatedSize: (params?: GetEstimatedSizeParams) => Promise<number>;
  getFileSize: (catalogRecordID: string, params: GetFileSizeParams) => Promise<number>;
}
