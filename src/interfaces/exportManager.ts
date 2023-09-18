import { FeatureCollection } from '@turf/turf';
import { CreateExportTaskRequest, CreateExportTaskResponse, TaskParameters } from './task';

export interface GetEstimationsResponse {
  estimatedFileSize?: number;
  estimatedTime?: number;
}

export declare type GeometryMetadata = Record<string, unknown>;

export interface IExportManager {
  createExportTask: (data: CreateExportTaskRequest<TaskParameters>) => Promise<CreateExportTaskResponse>;
  getEstimations: (catalogRecordID: string, ROI: FeatureCollection, additional?: Record<string, unknown>) => Promise<GetEstimationsResponse>;
  getFootprint: (catalogRecordID: string) => Promise<FeatureCollection>;
}
