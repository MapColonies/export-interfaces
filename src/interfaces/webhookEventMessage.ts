import { Domain } from '../enums/domain';
import { TaskStatus } from '../enums/taskStatus';
import { WebhookEvent } from '../enums/webhookEvent';
import { Artifact } from './artifact';

interface WebhookEventMessage {
  event: WebhookEvent;
  domain: Domain;
  jobId: string;
  status: TaskStatus;
  precentage?: number;
}

export interface Webhook {
  event: WebhookEvent;
  uri: string;
}

export interface TaskStartedMessage extends WebhookEventMessage {
  event: WebhookEvent.TASK_STARTED;
  status: TaskStatus.IN_PROGRESS;
}

export interface TaskCompletedMessage extends WebhookEventMessage {
  event: WebhookEvent.TASK_COMPLETED;
  status: TaskStatus.COMPLETED;
  artifacts: Artifact[];
}

export interface TaskFailedMessage extends WebhookEventMessage {
  event: WebhookEvent.TASK_FAILED;
  status: TaskStatus.FAILED;
  reason?: string;
}

export interface TaskAbortedMessage extends WebhookEventMessage {
  event: WebhookEvent.TASK_ABORTED;
  status: TaskStatus.ABORTED;
}

export interface TaskExpiredMessage extends WebhookEventMessage {
  event: WebhookEvent.TASK_EXPIRED;
  status: TaskStatus.ABORTED;
}

export interface TaskCleanedMessage extends WebhookEventMessage {
  event: WebhookEvent.TASK_CLEANED;
  status: TaskStatus.CLEANED;
}

export interface TaskPausedMessage extends WebhookEventMessage {
  event: WebhookEvent.TASK_PAUSED;
  status: TaskStatus.PAUSED;
}

export interface TaskArchivedMessage extends WebhookEventMessage {
  event: WebhookEvent.TASK_ARCHIVED;
  status: TaskStatus.ARCHIVED;
}
