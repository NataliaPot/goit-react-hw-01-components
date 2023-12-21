import styled from 'styled-components';

export const ProfileContainer = styled.div`
  background-color: #fff;
  margin-left: auto;
  margin-right: auto;
  width: 282px;
  margin-top: 84px;
  padding-top: 32px;
  border-radius: 5px;
  box-shadow: 0px 0px 6px rgb(150, 150, 150);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 96px;
  border-radius: 50%;
  box-shadow: 0px 0px 3px rgb(150, 150, 150);
  margin-bottom: 30px;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: #122236;
  margin-bottom: 20px;
  margin-top: 0;
`;
export const Tag = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #768696;
  margin-bottom: 16px;
  margin-top: 0;
`;
export const Location = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #768696;
  margin-bottom: 32px;
  margin-top: 0;
`;

export const Stats = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
  padding: 0;
  margin: 0;
`;

export const LiItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-top: 24px;
  padding-bottom: 24px;
  background-color: #f3f6f9;
  border: 1px solid #e4e9f0;
  border-bottom: none;
  width: calc(100% / 3);
`;

export const Label = styled.span`
  font-size: 12px;
  font-weight: 500;

  color: #808f9e;
`;

export const Quantity = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #1f3349;
`;
