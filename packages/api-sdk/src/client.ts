import Fetch from '@/fetch';
import { Diagram, Program, Project, User, Version } from '@/resources';

export type ClientOptions = {
  clientKey: string;
  apiEndpoint: string;
  authorization: string;
};

class Client {
  public user: User;

  public project: Project;

  public version: Version;

  public program: Program;

  public diagram: Diagram;

  constructor({ clientKey, apiEndpoint, authorization }: ClientOptions) {
    const fetch = new Fetch({ clientKey, apiEndpoint, authorization });

    this.user = new User(authorization);
    this.project = new Project(fetch);
    this.version = new Version(fetch);
    this.program = new Program(fetch);
    this.diagram = new Diagram(fetch);
  }
}

export default Client;