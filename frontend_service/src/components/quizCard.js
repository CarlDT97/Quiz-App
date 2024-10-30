import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function QuizCard({ quiz }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {quiz.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Address: {quiz.adress}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Host: {quiz.host.join(", ")}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Date: {new Date(quiz.date).toLocaleDateString()}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Start Time: {new Date(quiz.startTime).toLocaleTimeString()}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          End Time: {new Date(quiz.endTime).toLocaleTimeString()}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Theme: {quiz.theme}
        </Typography>
      </CardContent>
    </Card>
  );
}
