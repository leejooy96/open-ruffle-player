/** @jsxImportSource @emotion/react */
import { Helmet } from 'react-helmet-async';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import { css } from '@emotion/react';
import Header from '@/renderer/components/layouts/Header';
import { headerArea } from '@/renderer/utils/styles';
import { useSelector } from 'react-redux';
import { RootState } from '@/renderer/store';

export default function Layout({
  title = 'Flare Player',
  titleTail = ' - Flare Flash Player',
  withTail = true,
  header = true,
  container = true,
  center = false,
  withPadding = true,
  withBackButton = false,
  children,
}) {
  const stateAppScreen = useSelector((state: RootState) => state.appScreen);

  return (
    <div
      css={css`
        display: flex;
        flex-flow: column;
        height: 100vh;
        *::-webkit-scrollbar {
          width: 0.4em;
        }
        *::-webkit-scrollbar-track {
          -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
        }
        *::-webkit-scrollbar-thumb {
          background-color: ${stateAppScreen.isDarkTheme ? '#444444' : '#a7a7a7'};
        }
      `}
    >
      <Helmet>
        <title>
          {title}
          {withTail ? titleTail : ''}
        </title>
        <script src="js/ruffle/ruffle.js" />
      </Helmet>
      {header ? <Header title={title} withBackButton={withBackButton} /> : ''}
      <Grid
        container
        css={css`
          flex-grow: 1;
          background: ${stateAppScreen.isDarkTheme ? '#1a1a1a' : '#eaeaea'};
          user-select: none;
          padding: ${withPadding ? '8px 0' : '0'};
        `}
        alignItems={center ? 'center' : 'start'}
      >
        {container ? (
          <Container>
            <Grid size={12} css={[header ? headerArea : []]}>
              {children}
            </Grid>
          </Container>
        ) : (
          <Grid size={12} css={[header ? headerArea : []]}>
            {children}
          </Grid>
        )}
      </Grid>
    </div>
  );
}
