import { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../Firebase/FirebaseConfig";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const ERROR_MAP = {
  "auth/user-not-found":       "Usuário não encontrado.",
  "auth/wrong-password":       "Senha incorreta.",
  "auth/email-already-in-use": "E-mail já em uso.",
  "auth/weak-password":        "Senha muito curta (mín. 6 caracteres).",
  "auth/invalid-email":        "E-mail inválido.",
  "auth/invalid-credential":   "E-mail ou senha incorretos.",
};

function Login() {
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName]         = useState("");
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); setLoading(true);
    try {
      if (isRegister) {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(user, { displayName: name });
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      navigate("/");
    } catch (err) {
      setError(ERROR_MAP[err.code] || "Algo deu errado. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const switchMode = (mode) => {
    setIsRegister(mode);
    setError(""); setName(""); setEmail(""); setPassword("");
  };

  return (
    <div className="login-page">
      <div className="login-box">

        {/* Voltar */}
        <button className="login-back" onClick={() => navigate(-1)}>
          <i className="fas fa-arrow-left"></i> Voltar
        </button>

        {/* Logo — coloque sua imagem em /public/logo.png */}
        <div className="login-logo-wrapper">
          <img
            src="/logo.png"
            alt="JornadaDEV"
            className="login-logo-img"
            onError={(e) => { e.target.style.display = "none"; }}
          />
          <div className="login-logo">Jornada<span>DEV</span></div>
        </div>

        {/* Título */}
        <h1 className="login-title">
          {isRegister ? "Crie sua conta" : "Bem-vindo de volta"}
        </h1>
        <p className="login-sub">
          {isRegister
            ? "Preencha os dados abaixo para começar."
            : "Entre para continuar sua jornada."}
        </p>

        {/* Abas */}
        <div className="login-tabs">
          <button
            className={`login-tab ${!isRegister ? "active" : ""}`}
            onClick={() => switchMode(false)}
          >
            Entrar
          </button>
          <button
            className={`login-tab ${isRegister ? "active" : ""}`}
            onClick={() => switchMode(true)}
          >
            Criar conta
          </button>
        </div>

        {/* Erro */}
        {error && (
          <div className="login-error">
            <i className="fas fa-circle-exclamation"></i>
            {error}
          </div>
        )}

        {/* Formulário */}
        <form onSubmit={handleSubmit}>
          {isRegister && (
            <div className="login-field">
              <label className="login-label">Nome</label>
              <input
                type="text" className="login-input"
                placeholder="Seu nome completo" value={name}
                onChange={(e) => setName(e.target.value)} required
              />
            </div>
          )}

          <div className="login-field">
            <label className="login-label">E-mail</label>
            <input
              type="email" className="login-input"
              placeholder="seu@email.com" value={email}
              onChange={(e) => setEmail(e.target.value)} required
            />
          </div>

          <div className="login-field">
            <label className="login-label">Senha</label>
            <input
              type="password" className="login-input"
              placeholder="••••••••" value={password}
              onChange={(e) => setPassword(e.target.value)} required
            />
          </div>

          <button type="submit" className="login-btn" disabled={loading}>
            {loading && <span className="spinner" />}
            {loading ? "Aguarde..." : isRegister ? "Criar conta" : "Entrar"}
          </button>
        </form>

        <div className="login-divider">ou</div>

        <p className="login-footer">
          {isRegister ? "Já tem conta? " : "Não tem conta? "}
          <button onClick={() => switchMode(!isRegister)}>
            {isRegister ? "Entrar" : "Criar conta"}
          </button>
        </p>

      </div>
    </div>
  );
}

export default Login;