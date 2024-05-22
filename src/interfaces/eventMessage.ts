import { Domain } from '@map-colonies/types';
import { TaskStatus } from '../enums/taskStatus';
import { TaskEvent } from '../enums/taskEvent';
import { Artifact } from './artifact';

interface EventMessage {
  event: TaskEvent;
  domain: Domain;
  customerName: string;
  jobId: string;
  status: TaskStatus;
  finishedAt?: Date;
  progress?: number;
}

export interface TaskStartedMessage extends EventMessage {
  event: TaskEvent.TASK_STARTED;
  status: TaskStatus.IN_PROGRESS;
}

export interface TaskProgressMessage extends EventMessage {
  event: TaskEvent.TASK_IN_PROGRESS;
  status: TaskStatus.IN_PROGRESS;
  progress: number;
}

export interface TaskCompletedMessage extends EventMessage {
  event: TaskEvent.TASK_COMPLETED;
  status: TaskStatus.COMPLETED;
  artifacts: Artifact[];
}

export interface TaskFailedMessage extends EventMessage {
  event: TaskEvent.TASK_FAILED;
  status: TaskStatus.FAILED;
  reason?: string;
}

export interface TaskAbortedMessage extends EventMessage {
  event: TaskEvent.TASK_ABORTED;
  status: TaskStatus.ABORTED;
}

export interface TaskExpiredMessage extends EventMessage {
  event: TaskEvent.TASK_EXPIRED;
  status: TaskStatus.EXPIRED;
  expiredAt: Date;
}

export interface TaskPausedMessage extends EventMessage {
  event: TaskEvent.TASK_PAUSED;
  status: TaskStatus.PAUSED;
}

export type TaskEventMessage =
  | TaskStartedMessage
  | TaskProgressMessage
  | TaskCompletedMessage
  | TaskFailedMessage
  | TaskAbortedMessage
  | TaskExpiredMessage
  | TaskPausedMessage;
