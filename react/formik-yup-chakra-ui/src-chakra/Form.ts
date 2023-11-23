import { Box, ButtonGroup, Radio } from "@chakra-ui/react";
import { Formik } from "formik";
import {
  CheckboxContainer,
  CheckboxControl,
  CheckboxSingleControl,
  InputControl,
  NumberInputControl,
  PercentComplete,
  RadioGroupControl,
  ResetButton,
  SelectControl,
  SliderControl,
  SubmitButton,
  SwitchControl,
  TextareaControl
} from "formik-chakra-ui";
import * as React from "react";
import * as Yup from "yup";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = (values) => {
  sleep(300).then(() => {
    window.alert(JSON.stringify(values, null, 2));
  });
};

const initialValues = {
  firstName: "",
  lastName: "",
  age: 0,
  employed: false,
  favoriteColor: "",
  toppings: ["tuna"],
  notes: "",
  employedd: false,
  select: "",
  foo: 23,
  bar: "",
  password: ""
};
const validationSchema = Yup.object({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  age: Yup.number().required().min(18),
  employed: Yup.boolean().equals([true]),
  favoriteColor: Yup.string(),
  toppings: Yup.array().min(2),
  notes: Yup.string().required(),
  employedd: Yup.boolean().equals([true]),
  select: Yup.string().required(),
  foo: Yup.number(),
  bar: Yup.string(),
  password: Yup.string()
});

const Form = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, values, errors }) => (
        <Box
          borderWidth="1px"
          rounded="lg"
          shadow="1px 1px 3px rgba(0,0,0,0.3)"
          maxWidth={800}
          p={6}
          m="10px auto"
          as="form"
          onSubmit={handleSubmit as any}
        >
          <InputControl name="firstName" label="First Name" />
          <InputControl name="lastName" label="Last Name" />
          <NumberInputControl name="age" label="Last Name" />
          <CheckboxSingleControl name="employed">
            Employed
          </CheckboxSingleControl>
          <RadioGroupControl name="favoriteColor" label="Favorite Color">
            <Radio value="#ff0000">Red</Radio>
            <Radio value="#00ff00">Green</Radio>
            <Radio value="#0000ff">Blue</Radio>
          </RadioGroupControl>
          <CheckboxContainer name="toppings" label="Toppings">
            <CheckboxControl name="toppings" value="chicken">
              Chicken
            </CheckboxControl>
            <CheckboxControl name="toppings" value="ham">
              Ham
            </CheckboxControl>
            <CheckboxControl name="toppings" value="mushrooms">
              Mushrooms
            </CheckboxControl>
            <CheckboxControl name="toppings" value="cheese">
              Cheese
            </CheckboxControl>
            <CheckboxControl name="toppings" value="tuna">
              Tuna
            </CheckboxControl>
            <CheckboxControl name="toppings" value="pineapple">
              Pineapple
            </CheckboxControl>
          </CheckboxContainer>
          <TextareaControl name="notes" label="Notes" />
          <SwitchControl name="employedd" label="Employed" />
          <SelectControl
            name="select"
            selectProps={{ placeholder: "Select option" }}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </SelectControl>
          <SliderControl name="foo" sliderProps={{ max: 40 }} />
          <InputControl
            name="password"
            inputProps={{ type: "password" }}
            label="Password"
          />

          <PercentComplete />
          <ButtonGroup>
            <SubmitButton>Submit</SubmitButton>
            <ResetButton>Reset</ResetButton>
          </ButtonGroup>

          <Box as="pre" marginY={10}>
            {JSON.stringify(values, null, 2)}
            <br />
            {JSON.stringify(errors, null, 2)}
          </Box>
        </Box>
      )}
    </Formik>
  );
};

export default Form;
