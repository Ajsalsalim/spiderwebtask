import * as React from 'react';
import PropTypes from 'prop-types';
import { Select as BaseSelect, selectClasses } from '@mui/base/Select';
import { Option as BaseOption, optionClasses } from '@mui/base/Option';
import { styled } from '@mui/system';
import UnfoldMoreRoundedIcon from '@mui/icons-material/UnfoldMoreRounded';

const Select = React.forwardRef(function Select(props, ref) {
  const slots = {
    root: CustomButton,
    listbox: Listbox,
    popup: Popup,
    ...props.slots,
  };

  return <BaseSelect {...props} ref={ref} slots={slots} />;
});

export default function Select1() {
  return (
    <Select placeholder="Events">

    </Select>
  );
}

const blue = {
  100: '#DAECFF',
  200: '#99CCF3',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  900: '#003A75',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const CustomButton = React.forwardRef(function CustomButton(props, ref) {
  const { ownerState, ...other } = props;
  return (
    <StyledButton type="button" {...other} ref={ref}>
      {other.children}
      <UnfoldMoreRoundedIcon />
    </StyledButton>
  );
});

CustomButton.propTypes = {
  children: PropTypes.node,
  ownerState: PropTypes.object.isRequired,
};

const StyledButton = styled('button', { shouldForwardProp: () => true })(
  ({ theme }) => `
  position: relative;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1rem;
  box-sizing: border-box;
  margin-top:1rem;
  margin-left:1rem;
  width: 14rem;
  padding: 8px 8px;
  border-radius: 8px;
  text-align: left;
  line-height: 1.5;
  background: transparent;
  border: 2px solid ${theme.palette.mode === 'dark' ? blue[700] : "#f27edf"};
  color: ${theme.palette.mode === 'dark' ? grey[300] : "#f27edf"};
  box-shadow: 0px 2px 4px ${
    theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'
  };

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &.${selectClasses.focusVisible} {
    outline: 0;
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[700] : blue[200]};
  }

  & > svg {
    font-size: 1rem;
    position: absolute;
    height: 100%;
    top: 0;
    right: 10px;
  }
  `,
);

const Listbox = styled('ul')(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  padding: 6px;
  margin: 5px 70px;
  width: 15rem;
  border-radius: 8px;
  margin: 5px 70px;
  outline: 0px;
  background: transparent;
  color: ${theme.palette.mode === 'dark' ? grey[300] :"#f27edf"};
  position: absolute;
  z-index: 1;
  position: relative; 
  `,
);

const Option = styled(BaseOption)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  margin: 5px 0;
  border-radius: 8px;
  border: 2px solid ${theme.palette.mode === 'dark' ? blue[700] : "#f27edf"};
  cursor: default;

  &:focus-visible {
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
  }

  

  &.${optionClasses.disabled} {
    color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &:hover:not(.${optionClasses.disabled}) {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] :"#797d7a"};
    color: ${theme.palette.mode === 'dark' ? grey[300] : "white"};
  }
  `,
);

const Popup = styled('div')`
  z-index: 1;
`;
