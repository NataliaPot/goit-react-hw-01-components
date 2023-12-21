import {
  Avatar,
  Description,
  Name,
  ProfileContainer,
  Tag,
  Location,
  Stats,
  LiItem,
  Label,
  Quantity,
} from './Profiled.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileContainer>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <LiItem>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </LiItem>
        <LiItem>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </LiItem>
        <LiItem>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </LiItem>
      </Stats>
    </ProfileContainer>
  );
};
