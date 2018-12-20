import { FormGroup } from "@angular/forms";

export class customvalidators {

    static passwordMatch(constrol: FormGroup) {

        let password = constrol.controls.newPassword.value;
        let confirmPassoword = constrol.controls.confirmPassoword.value;
        if (confirmPassoword == null) {
            return null;
        }

        if (confirmPassoword !== password) {
            return {
                passwordMatch: true
            }
        }

        return null;
    }
}

