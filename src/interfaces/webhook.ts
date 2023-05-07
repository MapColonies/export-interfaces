import { TaskEvent } from '../enums/taskEvent';

export interface Webhook {
  event: TaskEvent;
  uri: string;
}
