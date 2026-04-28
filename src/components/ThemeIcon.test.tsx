import { render, screen } from "@testing-library/react";
import ThemeIcon from "./ThemeIcon";

describe("ThemeIcon", () => {
  test("toggles to theme icon dark and hides theme icon light on dark theme", () => {
    render(<ThemeIcon theme="dark" />);

    const themeIconDark = screen.getByTestId("theme-icon-dark");
    const themeIconLight = screen.queryByTestId("theme-icon-light");

    expect(themeIconDark).toBeInTheDocument();
    expect(themeIconLight).not.toBeInTheDocument();
  });

  test("toggles to theme icon light and hides theme icon dark on light theme", () => {
    render(<ThemeIcon theme="light" />);

    const themeIconLight = screen.getByTestId("theme-icon-light");
    const themeIconDark = screen.queryByTestId("theme-icon-dark");

    expect(themeIconLight).toBeInTheDocument();
    expect(themeIconDark).not.toBeInTheDocument();
  });
});
