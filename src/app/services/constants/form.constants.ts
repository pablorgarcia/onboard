import { Validators } from "@angular/forms";

const FORM_USER = {
  name: ['', [Validators.required]],
  idNum: ['', [Validators.min(0), Validators.max(99), Validators.required]],
  ytUrl: ['', [Validators.required]]
}
export { FORM_USER }

const FORM_COMMENTATOR = {
  ytUrl: ['', [Validators.required]]
}
export { FORM_COMMENTATOR }
