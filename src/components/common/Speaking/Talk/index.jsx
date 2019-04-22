import React from 'react';
import { navigate } from 'gatsby';

import CalendarIcon from 'Static/icons/calendar.svg';
import VideoIcon from 'Static/icons/video.svg';
import SlidesIcon from 'Static/icons/powerpoint.svg';
import CodeIcon from 'Static/icons/coding.svg';

import {
  Wrapper,
  Card,
  CardHeader,
  CardDescription,
  CardActions,
  CardDate,
  CardLink,
} from './styles';

export const Talk = ({ talks, theme }) => {
  return (
    <Wrapper>
      {talks.map(
        (
          {
            node: {
              title,
              image,
              description,
              date,
              link,
              video,
              slides,
              code,
            },
          },
          i,
          arr
        ) => (
          <Card key={title + i} theme={theme}>
            <CardLink href={link} target="_blank">
              <CardHeader>{title}</CardHeader>
              {image && (
                <img
                  src={image}
                  width="100%"
                  height="120px"
                />
              )}
              <CardDescription>
                {description}
              </CardDescription>
              <CardDate>
                <img
                  src={CalendarIcon}
                  width="36px"
                  alt="Calendar"
                  title="Date"
                />
                {date}
              </CardDate>
            </CardLink>
            <CardActions>
              {code && (
                <a
                  href={code}
                  target="_blank"
                  title="Code"
                >
                  <img
                    src={CodeIcon}
                    width="36px"
                    alt="code"
                  />
                </a>
              )}
              {slides && (
                <a
                  href={slides}
                  target="_blank"
                  title="Slides"
                >
                  <img
                    src={SlidesIcon}
                    width="36px"
                    alt="slides"
                  />
                </a>
              )}
              {video && (
                <a
                  href={video}
                  target="_blank"
                  title="Video"
                >
                  <img
                    src={VideoIcon}
                    width="36px"
                    alt="video"
                  />
                </a>
              )}
            </CardActions>
          </Card>
        )
      )}
    </Wrapper>
  );
};
