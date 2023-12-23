import { afterEach, describe, expect, it } from "vitest";
import "@testing-library/jest-dom/vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { UserInfoContext } from '../../context/userInfo.tsx'

import Home from "./home.tsx";

describe("Home", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders with username", () => {
    const name = 'Agung'
    render(
      <UserInfoContext.Provider value={{
        userInfo: {
          name,
          email: 'manda@mail.com',
          picture: 'https://hello.com',
          given_name: 'Manda'
        }, 
        saveUserInfo: () => {}
      }}>
        <Home />
      </UserInfoContext.Provider>
    );
    const el = screen.getByTestId('welcome-message')
    expect(el.textContent).toBe(`Welcome ${name}`)
  });

  it("renders without username", () => {
    render(
      <UserInfoContext.Provider value={{
        userInfo: {
          name: '',
          email: 'manda@mail.com',
          picture: 'https://hello.com',
          given_name: 'Manda'
        }, 
        saveUserInfo: () => {}
      }}>
        <Home />
      </UserInfoContext.Provider>
    );
    const el = screen.getByTestId('register')
    expect(el.textContent).toBe('Register')
  });
});
