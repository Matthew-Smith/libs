export type IntentInput = {
  text: string;
  slots?: string[];
};

export type IntentSlotDialog = {
  prompt: IntentInput[];
  confirm: IntentInput[];
  utterances: IntentInput[];
  confirmEnabled: boolean;
};

export type IntentSlot = {
  id: string;
  dialog: IntentSlotDialog;
  required: boolean;
};

export type Intent = {
  key: string;
  name: string;
  slots?: IntentSlot[];
  inputs: IntentInput[];
};
