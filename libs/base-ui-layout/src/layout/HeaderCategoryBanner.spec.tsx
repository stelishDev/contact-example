import { render, screen } from "@testing-library/react";
import { HeaderCategoryBanner } from "./HeaderCategoryBanner";

describe("HeaderCategoryBanner", () => {
    test("renders correctly", () => {
        render(<HeaderCategoryBanner />);
        expect(screen.queryByTestId("signin-button")).toBeInTheDocument();
    });
});