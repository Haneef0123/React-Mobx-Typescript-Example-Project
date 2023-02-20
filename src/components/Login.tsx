import { observer } from 'mobx-react'
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore'

function Login() {
  const {rootStore:{loginStore}} = useStore();
  const [username,setUserName] = useState("")
  const [password,setPassword] = useState("")

  const navigate = useNavigate()

   const onLogin = async() =>{
    await loginStore.fetchUserToken(username,password)
    navigate("/products")
  }

  const onChangeUserName = (e : ChangeEvent<HTMLInputElement>) =>{
    setUserName(e.target.value)
  }

  const onChangePassword = (e : ChangeEvent<HTMLInputElement>) =>{
    setPassword(e.target.value)
  }

  return (
    <main className="form-signin w-100 m-auto">
  <form>
    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

    <div className="form-floating">
      <input type="text" className="form-control" id="floatingInput" placeholder="User Name" value={username} onChange={onChangeUserName}/>
      <label htmlFor="floatingInput">User Name</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={onChangePassword}/>
      <label htmlFor="floatingPassword">Password</label>
    </div>
    <button className="w-100 btn btn-lg btn-primary" type="button" onClick={onLogin}>Sign in</button>
  </form>
</main>
  )
}

export default observer(Login)