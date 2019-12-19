import React from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";

import style from "../../src/style/login.module.scss";

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log(values);
      if (!err) {
        localStorage.setItem("user", values.userName);
        this.props.history.push("/app/index");
      }
    });
  };
  componentDidMount() {
    console.log("login");
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className={style.box}>
        <div className={style.inputBox}>
          <Form.Item>
            {getFieldDecorator("username", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(
              <Input
                style={{ width: "400px", marginTop: "40px" }}
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                style={{ width: "400px" }}
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("remember", {
              valuePropName: "checked",
              initialValue: true
            })(<Checkbox>Remember me</Checkbox>)}
            <Button
              type="primary"
              htmlType="submit"
              className={style.loginFormButton}
            >
              Log in
            </Button>
          </Form.Item>
        </div>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create()(NormalLoginForm);

export default WrappedRegistrationForm;
// export default class Login extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   // login() {
//   //   console.log("12121");
//   // }
//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.form.validateFields((err, values) => {
//       if (!err) {
//         console.log("Received values of form: ", values);
//       }
//     });
//   };
//   render() {
//     const { getFieldDecorator } = this.props.form;

//     return (
//       <div className={style.box}>
//         <div className={style.inputBox}>
//           {/* <Input
//             size="large"
//             placeholder="用户名"
//             style={{ width: "400px", marginTop: "40px" }}
//             prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
//           />
//           <Input.Password
//             size="large"
//             placeholder="密码"
//             style={{ width: "400px", marginTop: "40px" }}
//             prefix={<Icon type="key" style={{ color: "rgba(0,0,0,.25)" }} />}
//           />
//           <div style={{ marginTop: "30px" }}>
//             <Button type="primary" onClick={this.login}>
//               登录
//             </Button>
//           </div> */}
//           <Form onSubmit={this.handleSubmit} className="login-form">
//             <Form.Item>
//               {getFieldDecorator("username", {
//                 rules: [
//                   { required: true, message: "Please input your username!" }
//                 ]
//               })(
//                 <Input
//                   prefix={
//                     <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
//                   }
//                   placeholder="Username"
//                 />
//               )}
//             </Form.Item>
//             <Form.Item>
//               {getFieldDecorator("password", {
//                 rules: [
//                   { required: true, message: "Please input your Password!" }
//                 ]
//               })(
//                 <Input
//                   prefix={
//                     <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
//                   }
//                   type="password"
//                   placeholder="Password"
//                 />
//               )}
//             </Form.Item>
//             <Form.Item>
//               {getFieldDecorator("remember", {
//                 valuePropName: "checked",
//                 initialValue: true
//               })(<Checkbox>Remember me</Checkbox>)}
//               {/* <a className="login-form-forgot" href="">
//                 Forgot password
//               </a> */}
//               <Button
//                 type="primary"
//                 htmlType="submit"
//                 className="login-form-button"
//               >
//                 Log in
//               </Button>
//               {/* Or <a href="">register now!</a> */}
//             </Form.Item>
//           </Form>
//         </div>
//       </div>
//     );
//   }
// }
