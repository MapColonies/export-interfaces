import { ArtifactDEMType } from '../enums/artfiact';
import { Domain } from '../enums/domain';
import { TaskStatus } from '../enums/taskStatus';
import { WebhookEvent } from '../enums/webhookEvent';
import { Artifact } from '../interfaces/artifact';
import { IExportManager, IGetEstimatedSizeParams, IGetFileSizeParams, TaskGeometry } from '../interfaces/exportManager';
import { ITriggerExportTaskRequest, TaskParameters, ITriggerExportTaskResponse } from '../interfaces/task';
import { TaskCompletedMessage } from '../interfaces/webhookEventMessage';

export class ExporterManager implements IExportManager {
  getGeometries: (jobId: string, domain: Domain) => Promise<TaskGeometry[]>;
  getJobStatus: (jobId: string, domain: Domain) => Promise<TaskStatus>;
  getJobPercentage: (jobId: string, domain: Domain) => Promise<number>;
  getEstimatedSize: (domain: Domain, params?: IGetEstimatedSizeParams | undefined) => Promise<number>;
  getFileSize: (catalogRecordID: string, domain: Domain, params: IGetFileSizeParams) => Promise<number>;
  getExpiredDateTime: (jobId: string, domain: Domain) => Promise<Date>;
  getFreeDiskSpace: (domain: Domain, additional?: Record<string, unknown> | undefined) => Promise<number>;

  public async triggerExportTask(data: ITriggerExportTaskRequest<TaskParameters>): Promise<ITriggerExportTaskResponse> {
    // this.logger.info({ msg: 'trigger export task' });
    const response: ITriggerExportTaskResponse = { jobId: 'uuid' };
    return await response;
  }

  public async completeJob(): Promise<void> {
    const artifact: Artifact = {
      type: ArtifactDEMType.METADATA,
      name: 'metadata',
      size: 2343,
      uri: 'http://download-service/download/dem/model/metadata.json',
    };

    const taskCompletedMessage: TaskCompletedMessage = {
      domain: Domain.DEM,
      jobId: 'uuid',
      status: TaskStatus.COMPLETED,
      event: WebhookEvent.TASK_COMPLETED,
      precentage: 100,
      artifacts: [artifact],
    };
  }
}
