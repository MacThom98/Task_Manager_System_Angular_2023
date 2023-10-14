export interface Project {
    id: number,
    name: string,
    description: string,
    status: number,
    start_date: Date,
    end_date: Date,
    manager_id: number,
    user_ids: Array<number>,
    date_created: Date,
}
