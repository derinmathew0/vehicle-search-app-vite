import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --theme: #101357;
    --bg: #f6f7fb;
    --text: #0f1223;
    --muted: #6a6f85;
    --card: #ffffff;
    --border: #e6e8f2;
  }
  * { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  body {
    margin: 0;
    font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
    color: var(--text);
    background: var(--bg);
  }
`;

export const Header = styled.header`
  background: var(--card);
  border-bottom: 1px solid var(--border);
  padding: 16px;
`;

export const Brand = styled.div`
  color: var(--theme);
  font-weight: 900;
  font-size: 20px;
`;

export const Container = styled.main`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 16px;
  padding: 16px;
  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }
`;

export const Sidebar = styled.aside`
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 16px;
  position: sticky;
  top: 12px;
  height: fit-content;
`;

export const Panel = styled.section`
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 16px;
`;

export const Title = styled.h3`
  color: var(--theme);
  margin: 0 0 12px;
  font-size: 22px;
  font-weight: 800;
  letter-spacing: 0.2px;
`;

export const Toolbar = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid var(--border);
  border-radius: 10px;
  outline: none;
  font-size: 14px;
  background: #fff;
  &:focus { border-color: var(--theme); }
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid var(--border);
  border-radius: 10px;
  outline: none;
  font-size: 14px;
  background: #fff;
  &:focus { border-color: var(--theme); }
`;

export const Button = styled.button`
  padding: 10px 14px;
  border-radius: 10px;
  border: 1px solid var(--theme);
  background: var(--theme);
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  &.secondary {
    background: #fff;
    color: var(--theme);
  }
`;

export const Badge = styled.span`
  display: inline-block;
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 999px;
  background: #eef0ff;
  color: var(--theme);
  border: 1px solid #dee1ff;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.article`
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  background: #eaeefe;
`;

export const CardBody = styled.div`
  padding: 12px;
  display: grid;
  gap: 6px;
`;

export const Label = styled.span`
  font-size: 12px;
  color: var(--muted);
`;

export const Value = styled.span`
  font-size: 14px;
  font-weight: 600;
`;

export const ErrorBox = styled.div`
  background: #ffecec;
  color: #9b1c1c;
  border: 1px solid #ffd1d1;
  padding: 10px 12px;
  border-radius: 10px;
`;