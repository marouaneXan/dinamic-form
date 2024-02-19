import { Validators } from "@angular/forms";

export interface FormModel {
    type: string;
    label: string;
    validators?: Validators[];
}
