import { TouchableOpacity, Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Input from "../components/Input";
import { useDispatch } from "react-redux";
import { signUp, login } from "../features/Auth";
import { colors } from "../styles/Colors";
import { schemaEmail, schemaPassword } from "../utils/ValidateSchemas";
import loginValidationSchema from "../utils/ValidationYup";
import { Formik } from "formik";

const LoginScreen = () => {
  const [registroVista, setRegistroVista] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    if (registroVista) {
      if (values.password === values.confirmPassword) {
        console.log("Se registra!");
        dispatch(signUp({ email: values.email, password: values.password }));
      } else {
        setConfirmPasswordError("Los passwords deben coincidir");
      }
    } else {
      dispatch(login({ email: values.email, password: values.password }));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{registroVista ? "Registro" : "Login"}</Text>
        <Formik
          onSubmit={handleSubmit}
          initialValues={{ email: "", password: "", confirmPassword: "" }}
          validationSchema={loginValidationSchema}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {({ handleChange, errors, handleSubmit, values, handleBlur }) => (
            <>
              <Input
                label="Email"
                password={false}
                onChange={handleChange("email")}
                value={values.email}
                error={errors.email}
                onBlur={handleBlur("email")}
              />
              <Input
                label="Password"
                password={true}
                onChange={handleChange("password")}
                value={values.password}
                error={errors.password}
                onBlur={handleBlur("password")}
              />
              {registroVista && (
                <Input
                  label="Confirm password"
                  password={true}
                  onChange={handleChange("confirmPassword")}
                  value={values.confirmPassword}
                  onBlur={handleBlur("confirmPassword")}
                  error={confirmPasswordError}
                />
              )}
              {registroVista ? (
                <Button title="Signup" onPress={handleSubmit} />
              ) : (
                <Button title="Login" onPress={handleSubmit} />
              )}
              <View style={styles.textContainer}>
                {registroVista ? (
                  <TouchableOpacity onPress={() => setRegistroVista(false)}>
                    <Text>
                      ¿Ya tienes cuenta? <Text style={styles.link}>Login</Text>
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={() => setRegistroVista(true)}>
                    <Text>
                      ¿No tienes cuenta?{" "}
                      <Text style={styles.link}>¡Crea una!</Text>
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.secundario,
  },
  content: {
    backgroundColor: colors.primario,
    padding: 20,
    justifyContent: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  title: {
    fontFamily: "FjallaOneRegular",
    fontSize: 24,
    textAlign: "center",
  },
});
