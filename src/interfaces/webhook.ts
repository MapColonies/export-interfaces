import { TaskEvent } from '../enums/taskEvent';

export interface Webhook {
  events: TaskEvent;
  url: string;
}
