import * as React from "react";
import "../components/style.css";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { CardActionArea } from "@material-ui/core";
import getHired from "../assets/gethired.png";
import todo from "../assets/todo.png";

export default function Projects() {
  return (
    <div>
      <h3 className="project_title">Projects</h3>
      <div className="projects">
        <Card sx={{ maxWidth: 200 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height={250}
              image={getHired}
              alt="get hired"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Get Hired
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Website for developers allows you to find vacancies for yourself
                and upload your resume
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 200 }}>
          <CardActionArea>
            <CardMedia component="img" height={250} image={todo} alt="todos" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                To Do List
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Website where you can add tasks, mark them as completed and
                allows you to delete them
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}
