/** @jsxImportSource @emotion/react */
import { css, type Theme as ThemeType } from '@emotion/react';
import theme from '../../styles/theme';

export const sectionWrapper = css`
  margin-top: ${theme.spacing[10]};
`;

export const tabRow = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${theme.spacing[2]};
  margin-bottom: ${theme.spacing[4]};
`;

export const tabButton = (theme: ThemeType, active: boolean) => css`
  width: 100%;
  padding: ${theme.spacing[3]} 0;
  font-size: ${theme.typography.body2Regular.fontSize};
  font-weight: ${theme.typography.body2Bold.fontWeight};
  color: ${active ? theme.color.blue.blue700 : theme.color.gray.gray700};
  background-color: ${active ? theme.color.blue.blue100 : theme.color.gray.gray100};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing[2]}; 
`;

export const iconStyle = css`
  font-size: 14px;
`;

export const subTabRow = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: #f7f8f9;
  border-radius: 12px;
  padding: ${theme.spacing[2]};
  margin-bottom: ${theme.spacing[6]};
`;

export const subTabButton = (theme: ThemeType, active: boolean) => css`
  background: ${active ? '#fff' : 'transparent'};
  border: none;
  font-size: ${theme.typography.body1Bold.fontSize};
  font-weight: ${theme.typography.body1Bold.fontWeight};
  color: ${active ? theme.color.blue.blue700 : theme.color.gray.gray600};
  border-radius: 10px;
  padding: ${theme.spacing[2]} 0;
  cursor: pointer;
  width: 100%;
`;

export const cardGrid = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing[4]};
`;

export const card = css`
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  text-align: center;
`;

export const rankBadge = (theme: ThemeType, rank: number) => css`
  position: absolute;
  top: ${theme.spacing[2]};
  left: ${theme.spacing[2]};
  background-color: ${rank <= 3 ? theme.color.red.red700 : theme.color.gray.gray600};
  color: #fff;
  border-radius: 50%;
  width: ${theme.spacing[6]};
  height: ${theme.spacing[6]};
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const image = css`
  width: 100%;
  border-radius: 8px;
`;

export const brand = css`
  font-size: 12px;
  margin-top: ${theme.spacing[2]};
  color: #666;
`;

export const name = css`
  font-size: 14px;
  font-weight: 500;
  margin-top: ${theme.spacing[1]};
`;

export const price = css`
  font-size: 14px;
  font-weight: 700;
  margin-top: ${theme.spacing[1]};
`;

export const moreButton = (theme: ThemeType) => css`
  margin-top: ${theme.spacing[6]};
  display: block;
  padding: ${theme.spacing[3]} ${theme.spacing[5]};
  background: ${theme.color.gray.gray100};
  color: ${theme.color.gray.gray900};
  border-radius: 8px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
`;
