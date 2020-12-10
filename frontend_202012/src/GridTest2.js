import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Gird from "@material-ui/core/Grid";
const styles = (theme) => ({
  root: {
    padding: theme.spacing(3),
    background: "#eeeeee",
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.primary,
  },
});

class GridTest2 extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Gird container spacing={3}>
          <Gird item lg={3} md={4} sm={6} xs={12}>
            <Paper className="{classes.paper}">
              Content 1
              {/* .img_1{
                width: 300px;
                height: 150px;
                overflow: hidden;
              }
              <img
                class="img_1"
                src="https://media.vlpt.us/images/jerrynim_/post/a9845d85-0398-4808-8311-50acc9e0554a/11월.jpg?w=640"
              /> */}
              <img src="https://media.vlpt.us/images/jerrynim_/post/a9845d85-0398-4808-8311-50acc9e0554a/11월.jpg" />
            </Paper>
          </Gird>
          <Gird item lg={3} md={4} sm={6} xs={12}>
            <Paper className="{classes.paper}">Content 2</Paper>
          </Gird>
          <Gird item lg={3} md={4} sm={6} xs={12}>
            <Paper className="{classes.paper}">Content 3</Paper>
          </Gird>
          <Gird item lg={3} md={4} sm={6} xs={12}>
            <Paper className="{classes.paper}">Content 4</Paper>
          </Gird>
          <Gird item lg={3} md={4} sm={6} xs={12}>
            <Paper className="{classes.paper}">Content 5</Paper>
          </Gird>
          <Gird item lg={3} md={4} sm={6} xs={12}>
            <Paper className="{classes.paper}">Content 6</Paper>
          </Gird>
          <Gird item lg={3} md={4} sm={6} xs={12}>
            <Paper className="{classes.paper}">Content 7</Paper>
          </Gird>
          <Gird item lg={3} md={4} sm={6} xs={12}>
            <Paper className="{classes.paper}">Content 8</Paper>
          </Gird>
        </Gird>
      </div>
    );
  }
}
export default withStyles(styles)(GridTest2);
