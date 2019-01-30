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
    /**
     * is number validation
     * @param constrol Object
     */
    static isNumber( constrol :FormGroup ){
        let val = constrol.controls.price.value;
        if (val === null || val === '') return null;
    
        if (!val.toString().match(/^[0-9]+(\.?[0-9]+)?$/)) return  { isNumber  : true } ;
        return null;
      }
    
}

