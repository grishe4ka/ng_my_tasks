export interface Task {
    id: number,
    title: string,
    description: string,
    createdAt: Date,
    taskStart: Date,
    taskEnd: Date,
    isCompleted: boolean
}