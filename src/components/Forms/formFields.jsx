import InputText from "./InputText";
import InputMobile from "./InputMobile";
import InputRadio from "./inputRadio";
import InputMultiSelect from "./InputMultiSelect";

const formFields = {
    'text': InputText,
    'email': InputText,
    'mobile': InputMobile,
    'radio': InputRadio,
    'multiSelect': InputMultiSelect,
}

export default formFields;
