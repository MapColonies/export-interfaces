import { FeatureCollection, MultiPolygon, Polygon } from '@turf/turf';
import { TaskStatus } from '../enums/taskStatus';
import { ExportTaskRequest, ExportTaskResponse, TaskParameters } from './task';

export interface GetEstimatedSizeParams {
  ROI?: FeatureCollection;
  additional?: Record<string, unknown>;
}

export interface GetFileSizeParams {
  filePath: string;
  additional?: Record<string, unknown>;
}

export interface TaskGeometry {
  geometry: MultiPolygon | Polygon;
  metadata?: GeometryMetadata;
}

export declare type GeometryMetadata = Record<string, unknown>;

export interface IExportManager {
  exportTask: (data: ExportTaskRequest<TaskParameters>) => Promise<ExportTaskResponse>;
  getGeometries: (jobId: string) => Promise<TaskGeometry[]>;
  getTaskStatus: (jobId: string) => Promise<TaskStatus>;
  getTaskPercentage: (jobId: string) => Promise<number>;
  getEstimatedSize: (params?: GetEstimatedSizeParams) => Promise<number>;
  getFileSize: (catalogRecordID: string, params: GetFileSizeParams) => Promise<number>;
}
