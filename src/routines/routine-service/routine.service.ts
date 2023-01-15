import { CollectionReference, Timestamp } from '@google-cloud/firestore';
import { Inject, Injectable } from '@nestjs/common';
import { RoutineDocument } from '../documents/routine.document';

@Injectable()
export class RoutineService {
  constructor(
    @Inject(RoutineDocument.collectionName)
    private routinesCollection: CollectionReference<RoutineDocument>,
  ) {}

  async create({ name }): Promise<RoutineDocument> {
    console.log(name);
    const docRef = this.routinesCollection.doc('name');
    // const dueDateMillis = dayjs(dueDate).valueOf();
    await docRef.set({
      name,
    });
    const todoDoc = await docRef.get();
    const todo = todoDoc.data();
    return todo;
  }

  async findAll(): Promise<RoutineDocument[]> {
    const snapshot = await this.routinesCollection.get();
    const todos: RoutineDocument[] = [];
    snapshot.forEach((doc) => todos.push(doc.data()));
    return todos;
  }
}
