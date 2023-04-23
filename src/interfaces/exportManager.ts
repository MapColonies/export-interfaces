import { FeatureCollection, MultiPolygon, Polygon } from '@turf/turf';
import { Domain } from '../enums/domain';
import { TaskStatus } from '../enums/taskStatus';
import { ITriggerExportTaskRequest, ITriggerExportTaskResponse, TaskParameters } from './task';

export interface IGetEstimatedSizeParams {
  ROI?: FeatureCollection;
  additional?: Record<string, unknown>;
}

export interface IGetFileSizeParams {
  filePath: string;
  additional?: Record<string, unknown>;
}

export interface TaskGeometry {
  geometry: MultiPolygon | Polygon;
  metadata?: GeometryMetadata;
}

export type GeometryMetadata = Record<string, unknown>;

export interface IExportManager {
  triggerExportTask: (data: ITriggerExportTaskRequest<TaskParameters>, domain: Domain) => Promise<ITriggerExportTaskResponse>;
  getGeometries: (jobId: string, domain: Domain) => Promise<TaskGeometry[]>
  getJobStatus: (jobId: string, domain: Domain) => Promise<TaskStatus>;
  getJobPercentage: (jobId: string, domain: Domain) => Promise<number>;
  getEstimatedSize: (domain: Domain, params?: IGetEstimatedSizeParams) => Promise<number>;
  getFileSize: (catalogRecordID: string, domain: Domain, params: IGetFileSizeParams) => Promise<number>;
  getExpiredDateTime: (jobId: string, domain: Domain) => Promise<Date>;
  getFreeDiskSpace: (domain: Domain, additional?: Record<string, unknown>) => Promise<number>;
}
