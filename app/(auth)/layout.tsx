const AuthLayout = ({children}: any) => {
    return (
      <>
        <nav className="text-white bg-slate-200">
          <div className="flex justify-between items-center px-7 py-3 text-f-14">
            <h1 className="text-f-">Homepage</h1>
            <p>Register</p>
          </div>
        </nav>
        <main className="h-screen flex flex-col items-center justify-center">
          {children}
        </main>
      </>
    )
}

export default AuthLayout;