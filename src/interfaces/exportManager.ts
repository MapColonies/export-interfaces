import { FeatureCollection } from "@turf/turf";
import { CreateExportTaskRequest, CreateExportTaskResponse, TaskParameters } from './task';

/* eslint-disable @typescript-eslint/naming-convention */
export interface GetEstimationsRequest {
  ROI?: FeatureCollection;
  additional?: Record<string, unknown>;
}

export interface GetEstimationsResponse {
  estimatedFileSize?: number;
  estimatedTime?: number;
}

export declare type GeometryMetadata = Record<string, unknown>;

export interface IExportManager {
  createExportTask: (data: CreateExportTaskRequest<TaskParameters>) => Promise<CreateExportTaskResponse>;
  getEstimations: (params?: GetEstimationsRequest) => Promise<GetEstimationsResponse>;
}
