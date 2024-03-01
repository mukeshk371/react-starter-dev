import styled, { keyframes } from 'styled-components';

export const CarouselContainer = styled.div`
  position: relative;
  max-width: 1200px; /* Set max-width to 1200px */
  margin: 0 auto;
  overflow: hidden;
`;

const slideAnimation = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const CarouselSlide = styled.div`
  display: flex;
  transition: transform 0.5s ease;
`;

export const SlideImage = styled.img`
  width: 1200px; /* Set image width to 1200px */
  height: auto;
  object-fit: cover;
  animation: ${slideAnimation} 0.5s ease;
`;

export const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  z-index: 1;

  ${(props) => props.direction === 'prev' && 'left: 0;'}
  ${(props) => props.direction === 'next' && 'right: 0;'}

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;
