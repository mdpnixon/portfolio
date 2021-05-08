import { Component } from 'react';
import './ContactForm.css';
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
    email: "",
    name: "",
    message: ""
  }

  sendEmail = async (e) => {
    e.preventDefault();
    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: this.state.email, name: this.state.name, message: this.state.message })
    }
    await fetch("/api/emails", options)
      .then(response => response.json())
      .then(serverData => {console.log("Success:", serverData)
        this.setState({ email: "", name: "", message: "" })
      })
      .catch(error => {console.error("Error:", error)})
  }
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
              name="name"
              value={this.state.name}
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
              name="email"
              type="email"
              value={this.state.email}
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
              // onClick={this.sendEmail}
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