import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import SubTitleSecondary from '../titles/SubTitleSecondary';
import TextCommon from '../titles/TextCommon';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderRadius: "15px",
  maxWidth: "650px"
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.primary.main}`,
}));

interface Props {
  title: string;
  text: string;
  panel: number;
  expanded: number | false;
  handleChange: (panel: number) => void;
}

const AccordionC: React.FC<Props> = ({title, text, panel, expanded, handleChange}) => {

  return (
    <Accordion expanded={expanded === panel } onChange={() => handleChange(panel)}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <SubTitleSecondary title={title} />
        </AccordionSummary>
        <AccordionDetails>
          <TextCommon text={text} />
        </AccordionDetails>
      </Accordion>     
  );
};

export default AccordionC;
