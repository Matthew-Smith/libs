import { Models } from '@voiceflow/base-types';

import type Fetch from '@/fetch';

import CrudResource from './crud';

const ENDPOINT = 'transcripts';

export const modelIDKey = '_id';
export type ModelIDKey = typeof modelIDKey;

class TranscriptResource extends CrudResource<Models.Transcript, ModelIDKey, TranscriptResource, 'sessionID'> {
  constructor(fetch: Fetch) {
    super({
      fetch,
      clazz: TranscriptResource,
      endpoint: ENDPOINT,
    });
  }

  public async getTranscripts(projectID: Models.ProjectID, queryParams: string) {
    const { data } = await this.fetch.get(`${ENDPOINT}/${projectID}?${queryParams ?? ''}`);
    return data;
  }

  public async getHasUnreadTranscripts(projectID: Models.ProjectID) {
    const { data } = await this.fetch.get(`${ENDPOINT}/${projectID}/hasUnreadTranscripts`);
    return data;
  }

  public async create(body: Omit<Models.Transcript, '_id'>): Promise<Models.Transcript> {
    return super._post<Models.Transcript>(body);
  }

  public async addUtteranceTo(projectID: Models.ProjectID, transcriptID: Models.TranscriptID, body: { turnID: Models.TurnID; intentID: string; utteranceCount: number }) {
    const { data } = await this.fetch.post(`${ENDPOINT}/${projectID}/${transcriptID}/annotation/utteranceAddedTo`, body);
    return data;
  }

  public async update(projectID: Models.ProjectID, transcriptID: Models.TranscriptID, body: Partial<Models.Transcript>): Promise<Models.Transcript> {
    const { data } = await this.fetch.patch<Models.Transcript>(`${ENDPOINT}/${projectID}/${transcriptID}`, body);
    return data;
  }

  public async delete(projectID: Models.ProjectID, transcriptID: Models.TranscriptID): Promise<Models.TranscriptID> {
    const { data } = await this.fetch.delete<Models.TranscriptID>(`${ENDPOINT}/${projectID}/${transcriptID}`);
    return data;
  }

  public async removeReportTag(projectID: Models.ProjectID, transcriptID: Models.TranscriptID, reportTagID: string) {
    return this.fetch.delete<Models.TranscriptID>(`${ENDPOINT}/${projectID}/${transcriptID}/report_tag/${reportTagID}`);
  }

  public async attachReportTag(projectID: Models.ProjectID, transcriptID: Models.TranscriptID, reportTagID: string) {
    return this.fetch.post<Models.TranscriptID>(`${ENDPOINT}/${projectID}/${transcriptID}/report_tag/${reportTagID}`);
  }

  public async getDialog(projectID: Models.ProjectID, transcriptID: Models.TranscriptID) {
    const { data } = await this.fetch.get(`${ENDPOINT}/${projectID}/${transcriptID}`);
    return data;
  }

  public async getExport(projectID: Models.ProjectID, transcriptID: Models.TranscriptID, params: { format: string }) {
    const { data } = await this.fetch.get(`${ENDPOINT}/${projectID}/${transcriptID}/export?${new URLSearchParams(params).toString()}\``);
    return data;
  }
}

export default TranscriptResource;
