import { Injectable } from "@angular/core";

 type ModelMutator<T> = Required<T>;

 export type MutatorServiceModel<T> = new(mutator: ModelMutator<T>) => void;

@Injectable()
export class MutatorService {
  
  array<T>(Mutator: MutatorServiceModel<T>, news: ModelMutator<T>[]): T[] {
    news.map(item => new Mutator(item));
    return news;
  }
}