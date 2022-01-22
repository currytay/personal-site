import './App.css';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { styled, keyframes } from '@stitches/react';

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const StyledContent = styled(TooltipPrimitive.Content, {
  borderRadius: 4,
  padding: '8px 16px',
  fontSize: 12,
  fontWeight: 500,
  lineHeight: 1,
  color: '#FFF',
  backgroundColor: '#171717',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="delayed-open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});

const TooltipContainer = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipContent = StyledContent;

const App = () => {
  return (
    <div className='App'>
      <div className='text-container'>
        <div className='name-container'>
          <h1 className='name-text'>Taylor B. Curry </h1>
          <TooltipContainer delayDuration={0}>
            <TooltipTrigger asChild>
              <p className='name-text emoji'>🇺🇸</p>
            </TooltipTrigger>
            <StyledContent sideOffset={5} align='center' >
              Born in the US 🗽
            </StyledContent>
          </TooltipContainer>
          <TooltipContainer delayDuration={0}>
            <TooltipTrigger asChild>
              <p className='name-text emoji'>🇮🇹</p>
            </TooltipTrigger>
            <StyledContent sideOffset={5} align='center' >
              Grew up in Italy 🍝
            </StyledContent>
          </TooltipContainer>
        </div>

        <p className='info-text'>Melbourne, Australia</p>
      </div>
      <div className='text-container'>
        <p className='body-text'>
          Currently working on big projects at <a href='https://accenture.com/' target='_blank' className='link'>Accenture</a>
          , but I recently shipped a few small ones of my own: <a href='https://herebeforeamillion.com/' target='_blank' className='link'>Here Before A Million</a> and <a href='https://peggy.world/' target='_blank' className='link'>Peggy</a>.
        </p>
      </div>
      <div className='link-container'>
        <ul className='link-list'>
          <li className='link-item'>
            <a href='mailto:currytay@gmail.com?subject=Hellooo' target='_blank' className='link'>Email</a>
          </li>
          <li className='link-item'>
            <a href='https://twitter.com/taylorcurry___' target='_blank' className='link'>Twitter</a>
          </li>
          <li className='link-item'>
            <a href='https://linkedin.com/in/taylor-b-curry/' target='_blank' className='link'>LinkedIn</a>
          </li>
          <li className='link-item'>
            <a href='https://github.com/currytay' target='_blank' className='link'>GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;