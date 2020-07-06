import styled from 'styled-components';

const Button = styled.button`
  display: block;
  margin-top: 1.3em;
  padding: ${(props) => (props.small ? '5px 10px' : '10px')};
  width: 100%;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: #0077cc;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

  :active {
    background-color: #005fa3;
  }
`;

export default Button;
