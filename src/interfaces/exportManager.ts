import { FeatureCollection } from '@turf/turf';
import { CreateExportTaskRequest, CreateExportTaskResponse, TaskParameters } from './task';

export interface GetEstimationsResponse {
  estimatedFileSize?: number;
  estimatedTime?: number;
}

export interface RasterEstParams {}
export interface DemEstParams {}
export interface EstParams3D {}

export declare type GeometryMetadata = Record<string, unknown>;
export declare type EstimationsParams = RasterEstParams | DemEstParams | EstParams3D;

export interface IExportManager {
  createExportTask: (data: CreateExportTaskRequest<TaskParameters>) => Promise<CreateExportTaskResponse>;
  getEstimations: (catalogRecordID: string, ROI: FeatureCollection, additional?: EstParams3D) => Promise<GetEstimationsResponse>;
  getFootprint: (catalogRecordID: string) => Promise<FeatureCollection>;
}
