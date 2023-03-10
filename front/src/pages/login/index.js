import { Formik, Form, Field } from "formik";
import lang from "../../../lang/fr-FR.json";
import LOGIN_MUTATION from "../../../gql/mutations/login.gql";
import { useMutation } from "@apollo/client";
export default function Login() {
  const LogForm = () => {
    const [login, { data, loading, error }] =
      useMutation(LOGIN_MUTATION);

    const onSubmit = async (e) => {
      const res = await login({
        variables: {
          email: "sylla@gmail.com",
          password: "test1234",
        },
      });
      console.log(loading);
      console.log(data);
    };
    return (
      <div className="flex flex-col justify-center items-center w-full">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={onSubmit}
        >
          <Form className="flex flex-col w-2/4 h-auto gap-5">
            <Field
              id="email"
              name="email"
              type="email"
              placeholder={
                lang.login.input.placeholders
                  .email
              }
              className="h-8 bg-slate-100 pl-5 rounded-lg"
            />
            <Field
              id="password"
              name="password"
              type="password"
              placeholder={
                lang.login.input.placeholders
                  .password
              }
              className="h-8 bg-slate-100 pl-5 rounded-lg"
            />
            <button type="submit">
              Valider
            </button>
          </Form>
        </Formik>
      </div>
    );
  };
  return (
    <div className="absolute top-0 left-0 w-full h-screen flex">
      <img
        src="https://source.unsplash.com/random"
        className=" w-2/6 h-full object-cover"
      />
      <LogForm />
    </div>
  );
}
