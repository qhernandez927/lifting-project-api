import { RoutineDocument } from 'src/routines/documents/routine.document';

export const FirestoreDatabaseProvider = 'firestoredb';
export const FirestoreOptionsProvider = 'firestoreOptions';
export const FirestoreCollectionProviders: string[] = [
  RoutineDocument.collectionName,
];
