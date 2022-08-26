import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { QuizPartial } from '../../../../types/types';
import { StyledCard } from './styles';
import jspic from '../../../../assets/jspic.png';

const ActionAreaCard = (props: QuizPartial) => {
  const { category, quiz } = props;

  return (
    <StyledCard>
      <CardActionArea>
        <CardMedia component="img" height="140" alt={category} image={jspic} />
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
