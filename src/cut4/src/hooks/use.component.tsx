import React from "react";
import {FieldComponentsProp} from "../render/fieldImpl/field.components";
import {SimpleFormField} from "../render/simpleImpl/simple.form.field";
import {getRender} from "../render/simpleImpl/simple.renderers";

export const useComponents = <T, >(formData: T, setFormData: (t: T) => void) => {

    /**
     * we don't use here the useState hook because we need to pass the formData and setFormData as params,
     * and we do it from the NameForm or AddressForm or ce altceva mai avem
     */

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

    };

    return {
        Field: (prop: FieldComponentsProp<T>) => {

            const {id, renderer = "text"} = prop
            const fieldInputs = {
                id: id,
                value: formData,
                onChange: handleChange
            }
            return (
                <SimpleFormField<T> fieldInputs={fieldInputs} getRenderer={getRender} renderInput={renderer}/>
            );
        },
    }
}