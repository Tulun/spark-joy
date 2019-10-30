import React from "react";
import styled from "styled-components";
import { Heading } from "./styles";
import { 
  unstable_Form as Form, 
  unstable_FormInput as FormInput,
  unstable_useFormState as UseFormState
} from "reakit/Form";

console.log(FormInput)
const WidgetBuilder = () => {
  const form  = UseFormState({
    values: {
      type_of_joy: ""
    }
  })
  return (
    <Form {...form}>
      <Heading h1>
        Did this {<FormInput name="type_of_joy" {...form} /> }spark joy?
      </Heading>
    </Form>
  )
}

export default WidgetBuilder;
