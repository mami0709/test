import { render, screen } from "@testing-library/react"
import Login, {validateEmail} from "../Login"

describe("Test Login Component", () => { //これからテストするよ宣言(Jestのライブラリ)
	test("render form with 1 button", async () => { //testの名前(任意の名前)
		render(<Login />); //Logoinコンポーネントのテストをしますよ
		const buttonList =await screen.findAllByRole("button");
		expect(buttonList).toHaveLength(1); //expect=〜という結果を期待する
	});
	
	
	test("should be failed on email validation", () => {
		const testEmail = "shincode.com";
		expect(validateEmail(testEmail)).not.toBe(true); //shincode.comを入れた時にちゃんと間違えるかのテスト
	});

	test("should be successed on email validation", () => {
		const testEmail = "shincode@gmail.com";
		expect(validateEmail(testEmail)).toBe(true); //反対に成功を期待する
	});

	test("password input should have type password", () => {
		render(<Login />);
		const password = screen.getByPlaceholderText("パスワード入力");
		expect(password).toHaveAttribute("type", "password");
	});

});