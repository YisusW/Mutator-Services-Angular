import { TopNewsMutator } from './top-news.mutator';

/**
 * @description this @type {ModelMutator} just for documentation of list of mutators classes
 */
type ModelMutator = Required<TopNewsMutator>;

export type MutatorService = new(mutator: ModelMutator) => void;
