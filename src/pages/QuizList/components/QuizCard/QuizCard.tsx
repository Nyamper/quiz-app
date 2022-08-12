import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { QuizPartial } from '../../../../types/types';
import { StyledCard } from './styles';

const ActionAreaCard = (props: QuizPartial) => {
  const { category, quiz, id, description } = props;

  return (
    <StyledCard>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://uaspectr.com/wp-content/uploads/2022/05/jsjsjs.png"
          alt={category}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {quiz}
          </Typography>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
};

export default ActionAreaCard;
