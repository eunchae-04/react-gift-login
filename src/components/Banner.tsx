/** @jsxImportSource @emotion/react */
import { css, useTheme, type Theme as ThemeType } from '@emotion/react';

const bannerStyle = (theme: ThemeType) => css`
  background-color: ${theme.color.semantic.kakaoYellow};
  color: ${theme.color.semantic.kakaoBrown};
  padding: 12px 16px;
  border-radius: 8px;
  font-size: ${theme.typography.body2Regular.fontSize};
  font-weight: ${theme.typography.body2Regular.fontWeight};
  line-height: ${theme.typography.body2Regular.lineHeight};
`;

const highlight = css`
  display: block;
  font-weight: bold;
  margin-top: 4px;
`;

const Banner = () => {
  const theme = useTheme();

  return (
    <div css={bannerStyle(theme)}>
      FE 11팀 화이팅~ 🎉
      <span css={highlight}>프론트엔드 2단계 과제 화이팅! 💪</span>
    </div>
  );
};

export default Banner;


