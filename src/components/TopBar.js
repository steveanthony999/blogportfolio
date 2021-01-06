import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledTopBar = styled(Link)`
  width: 100%;
  height: 1.75rem;
  background-color: #000880cc;
  color: #fff;
  font-size: 0.95rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TopBar = () => {
  return <StyledTopBar to='/contact'>Schedule an Appointment Today</StyledTopBar>;
};

export default TopBar;
