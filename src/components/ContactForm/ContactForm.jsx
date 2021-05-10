import { Component } from 'react';
import './ContactForm.css';
import emailjs from 'emailjs-com';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  input: {
    backgroundColor: 'white'
  }
});

const theme = createMuiTheme({
  palette: {
      primary: {
          main: '#202020'
      },
      secondary: {
          main: '#19BFB7'
      },
  }
});

class ContactForm extends Component {
  state = {
    user_email: "",
    user_name: "",
    message: ""
  }

  sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_koms8rp', 'contact_form', e.target, 'user_xjEs6vxzVVakspNt893Bp')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      },
      this.setState({ user_email: "", user_name: "", message: "" })
      );
  }
  // nodemailer logan's way
  // sendEmail = async (e) => {
  //   e.preventDefault();
  //   let options = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ email: this.state.email, name: this.state.name, message: this.state.message })
  //   }
  //   await fetch("/api/emails", options)
  //     .then(response => response.json())
  //     .then(serverData => {console.log("Success:", serverData)
  //       this.setState({ email: "", name: "", message: "" })
  //     })
  //     .catch(error => {console.error("Error:", error)})
  // }

  // nodemailer original
  // sendEmail = (e) => {
  //   e.preventDefault();
  //   fetch("http://localhost:3000/api/emails", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ email: this.state.email, name: this.state.name, message: this.state.message })
  //   })
  //   .then(response => response.json())
  //     .then(serverData => {console.log("Success:", serverData)
  //     this.setState({ email: "", name: "", message: "" })
  //     })
  //     .catch(error => {console.error("Error:", error)})
  // }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { classes } = this.props;
    return (
        <div className='contact-form'>
          <ThemeProvider theme={theme}>
          <form className={classes.root} onSubmit={this.sendEmail}>
            <TextField
              className={classes.input}
              id="outlined-helperText"
              label="Name"
              variant="filled"
              color="secondary"
              name="user_name"
              value={this.state.user_name}
              onChange={this.handleChange}
            />
            <br />
            <TextField
              className={classes.input}
              id="outlined-helperText"
              label="Email"
              defaultValue="Default Value"
              variant="filled"
              color="secondary"
              name="user_email"
              type="email"
              value={this.state.user_email}
              onChange={this.handleChange}
            />
            <br />
            <TextField
              className={classes.input}
              id="outlined-helperText"
              label="Message"
              variant="filled"
              color="secondary"
              multiline
              rows={4}
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <Button
              variant="contained"
              color="secondary"
              type="submit"
            >
              Send
            </Button>
          </form>
          </ThemeProvider>
        </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ContactForm);