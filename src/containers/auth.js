import { FaRegWindowClose } from "react-icons/fa";
import React, { Component } from "react";
import Button from "../components/button";
import Spinner from "../components/loading";
import Input from "../components/input";
import { Context } from "../context";

class Auth extends Component {
  state = {
    controls: {
      email: {
        label: "Email:",
        elementType: "input",
        elementConfig: {
          type: "email",
          // placeholder: "Enter email",
        },
        value: "",
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      password: {
        label: "Password:",
        elementType: "input",
        elementConfig: {
          type: "password",
          // placeholder: "Enter password",
        },
        value: "",
        validation: {
          required: true,
          minLength: 7,
        },
        valid: false,
        touched: false,
      },
    },
    isSignup: true,
  };

  static contextType = Context;

  checkValidity(value, rules) {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.minLength && isValid;
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  }

  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: this.checkValidity(
          event.target.value,
          this.state.controls[controlName].validation
        ),
        touched: true,
      },
    };

    this.setState({ controls: updatedControls });
  };

  submitHandler = (event) => {
    const { onAuth } = this.context;
    event.preventDefault();
    onAuth(
      this.state.controls.email.value,
      this.state.controls.password.value,
      this.state.isSignup
    );
  };

  switchAuthModeHandler = () => {
    this.setState((prevState) => {
      return { isSignup: !prevState.isSignup };
    });
  };

  render() {
    const { loading, error } = this.context;
    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key],
      });
    }

    let form = formElementsArray.map((formElement) => (
      <Input
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        changed={(event) => this.inputChangedHandler(event, formElement.id)}
        label={formElement.config.label}
      />
    ));

    if (loading) {
      form = <Spinner />;
    }

    let errorMessage = null;
    let errorText = null;

    if (error) {
      if (
        this.state.controls.password.value.length <
        this.state.controls.password.validation.minValue
      ) {
        errorText = `Password is too short. Sorry :(`;
      } else if (error.code === 400) {
        errorText = `This email address is already being used. Sorry :(`;
      }

      errorMessage = (
        <div className="error-message">
          <FaRegWindowClose className="icon-error" />
          {errorText}
        </div>
      );
    }

    return (
      <div className="sign-form">
        {errorMessage}
        <form onSubmit={this.submitHandler}>
          {form}
          <Button
            btnType="success"
            disabled={
              !this.state.controls.email.valid ||
              !this.state.controls.password.valid
            }
          >
            SUBMIT
          </Button>
        </form>
        <Button clicked={this.switchAuthModeHandler} btnType="secondary">
          SWITCH TO {this.state.isSignup ? "SIGNIN" : "SIGNUP"}
        </Button>
      </div>
    );
  }
}

export default Auth;
