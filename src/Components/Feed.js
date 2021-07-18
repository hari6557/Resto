import {
  Card,
  ButtonGroup,
  Button,
  CardHeader,
  ImageList,
  Typography,
} from "@material-ui/core";
import "./Feed.css";
import React, { useContext } from "react";
// import { GlobalContext } from "./Context";
// import Context from "./Context";

function Feed() {
  //   const { datas, menu } = useContext(GlobalContext);
  //   console.log(datas);
  //   console.log(menu);
  return (
    <div>
      {/* <Context> */}
      <Card className="feed">
        <div className="header">
          <CardHeader className="title" title="Biryani" subheader="SAR 7.95" />
          <ImageList rowHeight={15}>
            <img className="image" alt="image"></img>
          </ImageList>
        </div>
        <div className="para">
          <Typography variant="body1" className="text">
            Biryani is a mixed rice dish originating among the Muslims of the
            Indian subcontinent. It is made with Indian spices, rice, and meat
            (chicken, beef, goat, lamb, prawn, fish), and sometimes, in
            addition, eggs or vegetables such as potatoes in certain regional
            varieties.
          </Typography>
        </div>
        <ButtonGroup
          className="Button"
          variant="contained"
          color="secondary"
          aria-label="contained primary button group"
        >
          <Button>-</Button>
          <Button bool="false"></Button>
          <Button>+</Button>
        </ButtonGroup>
      </Card>
      {/* </Context> */}
    </div>
  );
}

export default Feed;
