import * as Api from './api';
import * as Capture from './capture';
import * as Card from './card';
import * as Code from './code';
import * as Flow from './flow';
import * as If from './if';
import * as Integration from './integration';
import * as Intent from './intent';
import * as Interaction from './interaction';
import * as Prompt from './prompt';
import * as Random from './random';
import * as Set from './set';
import * as Speak from './speak';
import * as Start from './start';

export * from './types';

export type AlexaSteps =
  | Set.Step
  | Capture.Step
  | Flow.Step
  | Start.Step
  | Speak.Step
  | Interaction.Step
  | Code.Step
  | Intent.Step
  | Card.Step
  | Prompt.Step
  | Api.Step
  | Random.Step
  | If.Step;

export type AlexaNodes =
  | Set.Node
  | Capture.Node
  | Flow.Node
  | Start.Node
  | Speak.Node
  | Interaction.Node
  | Code.Node
  | Card.Node
  | Integration.Node
  | Random.Node
  | If.Node;

export type AlexaCommands = Intent.Command;