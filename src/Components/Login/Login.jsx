import { useState } from "react";
import { Sheet, Typography, Input, Button, Link } from "@mui/joy";
import { Link as RouterLink } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="vh-100 flex items-center justify-center" style={{ background: "#454545" }}>
      <Sheet
        variant="outlined"
        sx={{
          width: 320,
          p: 4,
          borderRadius: "lg",
          bgcolor: "rgba(168,168,169,0.1)",
          backdropFilter: "blur(10px)",
          borderColor: "#f5ca5b"
        }}
      >
        <Typography level="h2" sx={{ color: "#f5ca5b", mb: 2, textAlign: "center" }}>
          Login
        </Typography>

        <form onSubmit={handleSubmit} className="flex flex-column gap-2">
          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            sx={{ bgcolor: "#a8a8a9" }}
          />

          <Input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            sx={{ bgcolor: "#a8a8a9" }}
          />

          <Button
            type="submit"
            sx={{
              mt: 1,
              backgroundColor: "#f5ca5b",
              color: "#1b4e9b",
              "&:hover": { backgroundColor: "#e6b94f" }
            }}
          >
            Login
          </Button>
        </form>

        <Typography level="body-sm" sx={{ mt: 2, textAlign: "center", color: "#a8a8a9" }}>
          Don’t have an account?{" "}
          <Link component={RouterLink} to="/register" sx={{ color: "#f5ca5b" }}>
            Sign Up
          </Link>
        </Typography>
      </Sheet>
    </div>
  );
}