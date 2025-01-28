import { SubmitHandler, useForm } from "react-hook-form"
import styles from "./Home.module.css"
import { log } from "console"

interface IFormState {
	name: string
	email: string
}
function Home() {
	const isSuccess = !true
	const { register, handleSubmit } = useForm<IFormState>()
	const onSubmit: SubmitHandler<IFormState> = (data) => {
		console.log(data)
	}
	return (
		<div className={styles.wrapper}>
			<form onSubmit={handleSubmit(onSubmit)}>
				{isSuccess ? (
					<div className={styles.isSuccess}>Form is sended!</div>
				) : (
					<>
						<h1>GTA 6 - Give a Request</h1>
						<input
							type="name"
							placeholder="Enter your name"
							{...register("name")}
						/>
						<input
							type="email"
							placeholder="Enter E-mail"
							{...register("email")}
						/>
						<button>Get GTA</button>
					</>
				)}
			</form>
		</div>
	)
}

export default Home
