import { FeatureCollection } from '@turf/turf';
import { CreateExportTaskRequest, CreateExportTaskResponse, TaskParameters } from './task';

export interface GetEstimationsResponse {
  estimatedFileSize?: number;
  estimatedTime?: number;
}

export interface RasterEstimationsParams {}
export interface DemEstimationsParams {}
export interface EstimationsParams3D {}

export declare type GeometryMetadata = Record<string, unknown>;
export declare type EstimationsParams = RasterEstimationsParams | DemEstimationsParams | EstimationsParams3D;

export interface IExportManager {
  createExportTask: (data: CreateExportTaskRequest<TaskParameters>) => Promise<CreateExportTaskResponse>;
  getEstimations: (catalogRecordID: string, ROI: FeatureCollection, additional?: EstimationsParams) => Promise<GetEstimationsResponse>;
  getFootprint: (catalogRecordID: string) => Promise<FeatureCollection>;
}
