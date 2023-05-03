import { FeatureCollection, MultiPolygon, Polygon } from '@turf/turf';
import { CreateExportTaskRequest, CreateExportTaskResponse, TaskParameters } from './task';

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
  createExportTask: (data: CreateExportTaskRequest<TaskParameters>) => Promise<CreateExportTaskResponse>;
  getGeometries: (jobId: string) => Promise<TaskGeometry[]>;
  getEstimatedSize: (params?: GetEstimatedSizeParams) => Promise<number>;
  getFileSize: (catalogRecordID: string, params: GetFileSizeParams) => Promise<number>;
}
