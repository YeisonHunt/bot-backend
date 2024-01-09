// types
export interface Action {
    id: number;
    title: string;
    duration:number;
}

export interface Bot {
    id: number | string;
    title: string;
    completedActions: Action[];
}
  