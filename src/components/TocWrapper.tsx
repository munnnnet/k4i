import styled from 'utils/styled';

interface ToggleableProps {
  isOpen?: boolean;
}

const TocWrapper = styled<ToggleableProps, 'section'>('section')`
  display: block;
  margin-left: 24px;
  font-size: 13px;
  line-height: 28px;

  @media (min-width: ${props => props.theme.breakpoints.lg}px) {
    flex: 0 0 240px;
    position: sticky;
    top: 48px;
    max-height: calc(100vh - 90px);
    overflow-y: auto;
  }

  @media (max-width: ${props => props.theme.breakpoints.lg - 1}px) {
    display: ${props => (props.isOpen ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    margin-left: 0;
    margin-top: ${props => props.theme.heights.header}px;
    padding: 64px;
    background-color: ${props => props.theme.colors.white};
    z-index: ${props => props.theme.zIndex.drawer - 5};
    overflow-y: auto;
  }

  @media (max-width: ${props => props.theme.breakpoints.md - 1}px) {
    padding: 24px;
  }

  ul {
    padding-left: 16px;
    border-left: 1px solid ${props => props.theme.colors.border};
    list-style-type: none;

    p {
      margin: 0 0 0.5rem;
    }

    ul {
      border-left: none;
    }
  }

  a {
    color: ${props => props.theme.colors.toc.link};
    text-decoration: none;

    &:hover,
    &:focus {
      color: ${props => props.theme.colors.toc.hover};
    }
  }
`;

export default TocWrapper;
