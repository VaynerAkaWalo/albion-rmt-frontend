import {TextBoxWithLabel} from "../utils/textbox/TextBoxWithLabel.jsx";

export function TaxSelector() {
    return (
        <div className="border-2 columns-3 flex justify-around">
            <TextBoxWithLabel name="Fee"/>
            <TextBoxWithLabel name="RR w/o focus"/>
            <TextBoxWithLabel name="RR w focus"/>
        </div>
    )
}