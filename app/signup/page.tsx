
export default function Home() {
    return (
        <div className="flex bg-blue-300 min-h-screen justify-center items-center text-black">
            <div className="bg-white p-10 rounded-lg shadow-lg">
                <h1>SIGNUP</h1>
                <div className="flex flex-col my-4">
                    <label>Username</label>
                    <input type="text" className="border-2 outline-none border-zinc-600 rounded-md px-2 py-1" />
                </div>
                <div className="flex flex-col my-4">
                    <label>Email</label>
                    <input type="email" className="border-2 outline-none border-zinc-600 rounded-md px-2 py-1" />
                </div>
                <div className="flex flex-col my-4">
                    <label>Password</label>
                    <input type="password" className="border-2 outline-none border-zinc-600 rounded-md px-2 py-1" />
                </div>
                <div className="flex flex-col my-4">
                    <label>Confirm Password</label>
                    <input type="password" className="border-2 outline-none border-zinc-600 rounded-md px-2 py-1" />
                </div>
                <button className="bg-red-400 w-full py-1 my-2 rounded-md text-white">Signup</button>

            </div>
        </div>

    );
}
