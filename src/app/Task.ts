import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

export default interface Task {
    id: string,
    isEvent: boolean
    date: Date
    info: string
}