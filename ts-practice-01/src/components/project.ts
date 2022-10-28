/* We're creating a class called Project that has a constructor that takes in an id, title,
description, people, and isActive. The id, title, description, and people are all strings, and
isActive is an enum */
export enum ProjectIsActive {
  Active,
  Finished,
}
export class Project {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public people: number,
    public isActive: ProjectIsActive
  ) {}
}
