import React, { useEffect, useState } from 'react';
import { FiActivity } from 'react-icons/fi'
import { Dropdown, Navbar, useTheme, NextUIProvider, createTheme, getDocumentTheme } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
// import topMenu from './navbar';

const lightTheme = createTheme({
  type: 'light',
})

const darkTheme = createTheme({
  type: 'dark',
})

const Main = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // you can use any storage
    let theme = window.localStorage.getItem('data-theme');
    setIsDark(theme === 'dark');

    const observer = new MutationObserver((mutation) => {
      let newTheme = getDocumentTheme(document?.documentElement);
      setIsDark(newTheme === 'dark');
    });

function App() {
  const [variant, setVariant] = React.useState("default");
  const [activeColor, setActiveColor] = React.useState("primary");
  const isDark = useTheme();

  const variants = [
    "default",
    "highlight",
    "highlight-solid",
    "underline",
    "highlight-rounded",
    "highlight-solid-rounded",
    "underline-rounded",
  ];
  const colors = ["primary", "secondary", "success", "warning", "error"];

  return (
    <div className="App">
      <Navbar isBordered variant="static">
        <Navbar.Brand>
          <FiActivity />
        </Navbar.Brand>
        <Navbar.Content activeColor={activeColor} hideIn={"xs"}>
          <Navbar.Link href="#">Calculate Width</Navbar.Link>
        </Navbar.Content>
      </Navbar>

      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}} className="Options">
        <Dropdown>
          <Dropdown.Button flat>Select Sum</Dropdown.Button>
          <Dropdown.Menu aria-label="Static Actions">
            <Dropdown.Item key="Right">Right Riemann Sum</Dropdown.Item>
            <Dropdown.Item key="Left">Left Riemann Sum</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Button flat>Select Function</Dropdown.Button>
          <Dropdown.Menu aria-label="Static Actions">
            <Dropdown.Item key="Increasing">Increasng Functon</Dropdown.Item>
            <Dropdown.Item key="Decreasing">Decreasing Function</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default App;
