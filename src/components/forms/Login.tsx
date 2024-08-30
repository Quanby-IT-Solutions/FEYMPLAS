import Button from "@/components/ui/Button";

const LoginForm = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold">Login</h1>
            <form className="flex flex-col gap-4">
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <Button> Login </Button>
            </form>
        </div>
    );
};

export default LoginForm;
