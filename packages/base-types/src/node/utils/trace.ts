import { BaseEvent } from './event';

export enum TraceType {
  END = 'end',
  TEXT = 'text',
  PATH = 'path',
  FLOW = 'flow',
  GOTO = 'goto',
  SPEAK = 'speak',
  BLOCK = 'block',
  DEBUG = 'debug',
  CHOICE = 'choice',
  STREAM = 'stream',
  VISUAL = 'visual',
  NO_REPLY = 'no-reply',
}

export interface BaseTraceFramePath<Event extends BaseEvent = BaseEvent> {
  label?: string;
  event: Event;
}

export interface BaseTraceFrame<Payload = any, TracePath extends BaseTraceFramePath = BaseTraceFramePath> {
  type: string;
  paths?: TracePath[];
  payload: Payload;
  defaultPath?: number;
}
