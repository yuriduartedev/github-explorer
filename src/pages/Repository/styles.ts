import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;
    flex: 1;

    img {
      width: 60px;
      min-width: 60px;
      height: 60px;
      border-radius: 50%;
    }

    @media (min-width: 768px) {
      img {
        width: 120px;
        min-width: 120px;
        height: 120px;
        border-radius: 50%;
      }
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 4rem;
        color: #3d3d4d;
      }

      p {
        font-size: 2.3rem;
        color: #737380;
      }
    }
  }

  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    margin-top: 40px;

    @media (min-width: 768px) {
      justify-content: start;
    }

    li {
      background: #fff;
      box-shadow: 0 4px 16px -8px rgba(1, 1, 1, 0.1);
      display: flex;
      padding: 10px;
      border-radius: 5px;
      justify-content: center;
      align-items: center;
      transition: transform 0.3s;

      & + li {
        margin-left: 16px;
      }

      &:hover {
        transform: translateY(-3px);
      }

      strong {
        margin-left: 5px;
        display: block;
        font-size: 20px;

        color: #3d3d4d;
      }

      span {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 3px;
        margin-top: 4px;
        color: #6c6c80;

        &:nth-child(2) {
          display: none;
        }

        @media (min-width: 768px) {
          &:nth-child(2) {
            display: flex;
          }
        }

        &:nth-child(3) {
          font-weight: 500;
          background-color: rgba(27, 31, 35, 0.08);
          color: #444d56;

          padding-left: 5px;
          padding-right: 5px;

          border-radius: 8px;
        }
      }
    }
  }
`;

export const Issues = styled.div`
  box-shadow: 0 4px 16px -8px rgba(1, 1, 1, 0.1);
  margin-top: 80px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
