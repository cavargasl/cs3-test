import App from "@/App"
import '@testing-library/jest-dom'
import { render } from "@testing-library/react"

describe("App", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }))
    });
  });
  
  test("Renders the main page", () => {
    render(<App />)
    expect(true).toBeTruthy()
  })
})