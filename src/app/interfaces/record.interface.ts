export interface RecordCreate {
  name: string;
  description?: string;
}

export type RecordUpdate = Partial<RecordCreate>;

export interface Record extends RecordCreate {
  id: number;
  createdAt: string;
}
