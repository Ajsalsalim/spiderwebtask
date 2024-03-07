import * as React from 'react';
import PropTypes from 'prop-types';
import { Select as BaseSelect, selectClasses } from '@mui/base/Select';
import { Option as BaseOption, optionClasses } from '@mui/base/Option';
import { styled, alpha } from '@mui/material/styles';
import UnfoldMoreRoundedIcon from '@mui/icons-material/UnfoldMoreRounded';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

const Select = React.forwardRef(function Select(props, ref) {
  const slots = {
    root: CustomButton,
    
    popup: Popup,
    ...props.slots,
  };

  return <BaseSelect {...props} ref={ref} slots={slots} />;
});
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    border:" 1px solid white",
    backgroundColor: "transparent",
    color:"white",
    marginLeft: "590px",
    width: '250px',
   
  }));
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'white',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

export default function Select6() {
  return (
    <Search>
    <SearchIconWrapper>
      <SearchIcon sx={{color:"white"}} />
    </SearchIconWrapper>
    <StyledInputBase
      placeholder="Search here"
      inputProps={{ 'aria-label': 'search' }}
    />
  </Search>
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
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1rem;
  box-sizing: border-box;
  margin-left:1rem;
  width: 15rem;
  height: 3rem;
  margin-right:3rem;
  padding: 5px 5px;
  border-radius: 5px;
  text-align: left;
  line-height: 1.5;
  background: transparent;
  border: 2px solid ${theme.palette.mode === 'dark' ? blue[700] : "white"};
  color: ${theme.palette.mode === 'dark' ? grey[300] : "white"};
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


const Popup = styled('div')`
  z-index: 1;
`;