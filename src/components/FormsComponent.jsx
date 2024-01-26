import { useEffect, useRef } from "react"
import { useForm } from "../hooks/useForm"

export const FormsComponent = () => {
    const initialForm = {
        username: '',
        email: '',
        password: ''
    }
    const { username, email, password, onInputChange } = useForm(initialForm)

    const focusRef = useRef()

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(username, email, password)

    }

    useEffect(() => {
        focusRef.current.focus()
    }, [])


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        name='username'
                        value={username}
                        onChange={onInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        ref={focusRef}
                        type="email"
                        className="form-control"
                        id="email"
                        name='email'
                        value={email}
                        onChange={onInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name='password'
                        value={password}
                        onChange={onInputChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}
