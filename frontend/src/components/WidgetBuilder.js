import React from "react";
import styled from "styled-components";
import { Heading, Flex } from "./styles";
import { 
  unstable_Form as Form, 
  unstable_FormInput as FormInput,
  unstable_useFormState as UseFormState
} from "reakit/Form";
import { palette } from "styled-tools";


const RoundButton = styled.button`
  border-radius: 100%;
  font-size: ${palette("headings", 0)};
  line-height: ${palette("headings", 0)};
  height: 2em;
  width: 2em;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`

const Layout = styled.div`
  width: 450px;
`

const WidgetBuilder = () => {
  const form  = UseFormState({
    values: {
      type_of_joy: ""
    }
  })
  return (
    <Layout>
      <Form {...form}>
        <Heading h1>
          Did this 
          {<FormInput name="type_of_joy" {...form} /> }
          spark joy?
          <Flex row>
            <RoundButton>👎</RoundButton>
            <RoundButton>👍</RoundButton>
          </Flex>
        </Heading>
      </Form>
    </Layout>
  )
}

export default WidgetBuilder;
